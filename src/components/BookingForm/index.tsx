"use client";

import { useState } from "react";
import type { BookingData } from "@/lib/types";
import { PACKAGES, PAX_REPRESENTATIVE } from "@/lib/packages";
import { buildWaLink } from "@/lib/waMessage";
import StepIndicator from "./StepIndicator";
import Step1Package from "./Step1Package";
import Step2Data from "./Step2Data";
import Step3Confirm from "./Step3Confirm";
import {
  ArrowRightIcon,
  WhatsAppIcon,
  CheckIcon,
  ShieldIcon,
  ClockIcon,
  TagIcon,
} from "../icons";

const LABELS = ["Pilih Paket", "Data Diri", "Konfirmasi"];

const EMPTY: BookingData = {
  packageId: "",
  packageName: "",
  packagePrice: 0,
  duration: "",
  pax: "",
  departureDate: "",
  name: "",
  whatsapp: "",
  email: "",
  city: "",
  notes: "",
  referralSource: "",
};

function todayISO(): string {
  const now = new Date();
  const tz = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - tz).toISOString().slice(0, 10);
}

function estimateTotal(data: BookingData): number | undefined {
  if (data.packagePrice === "custom" || typeof data.packagePrice !== "number") {
    return undefined;
  }
  const count = PAX_REPRESENTATIVE[data.pax];
  if (!count) return undefined;
  return data.packagePrice * count;
}

function validWhatsApp(raw: string): boolean {
  const cleaned = raw.replace(/[\s-]/g, "");
  return /^(\+?62|0)8\d{7,13}$/.test(cleaned);
}

function initData(initialPackageId?: string): BookingData {
  if (!initialPackageId) return EMPTY;
  const pkg = PACKAGES.find((p) => p.id === initialPackageId);
  if (!pkg) {
    if (initialPackageId === "custom") {
      return {
        ...EMPTY,
        packageId: "custom",
        packageName: "Custom / Itinerary Pilihan Sendiri",
        packagePrice: "custom",
        duration: "Fleksibel",
      };
    }
    return EMPTY;
  }
  return {
    ...EMPTY,
    packageId: pkg.id,
    packageName: pkg.name,
    packagePrice: pkg.pricePerPerson,
    duration: pkg.duration,
  };
}

interface BookingFormProps {
  initialPackageId?: string;
  showIntro?: boolean;
}

export default function BookingForm({
  initialPackageId,
  showIntro = true,
}: BookingFormProps) {
  const [today] = useState(todayISO);
  const [step, setStep] = useState(1);
  const [data, setData] = useState<BookingData>(() => initData(initialPackageId));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function update(patch: Partial<BookingData>) {
    setData((d) => ({ ...d, ...patch }));
    setErrors((prev) => {
      const next = { ...prev };
      for (const k of Object.keys(patch)) delete next[k];
      return next;
    });
  }

  function validateStep1(): boolean {
    const e: Record<string, string> = {};
    if (!data.packageId) e.packageId = "Pilih salah satu paket dulu ya.";
    if (!data.pax) e.pax = "Jumlah peserta wajib dipilih.";
    if (!data.departureDate) e.departureDate = "Tanggal keberangkatan wajib diisi.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function validateStep2(): boolean {
    const e: Record<string, string> = {};
    if (!data.name.trim()) e.name = "Nama lengkap wajib diisi.";
    if (!data.whatsapp.trim()) {
      e.whatsapp = "Nomor WhatsApp wajib diisi.";
    } else if (!validWhatsApp(data.whatsapp)) {
      e.whatsapp = "Format WA salah. Mulai 08 / +62, min. 10 digit.";
    }
    if (!data.city.trim()) e.city = "Kota asal wajib diisi.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    if (step === 2) update({ estimatedTotal: estimateTotal(data) });
    setStep((s) => Math.min(3, s + 1));
  }

  function back() {
    setStep((s) => Math.max(1, s - 1));
  }

  function send() {
    const finalData: BookingData = {
      ...data,
      estimatedTotal: estimateTotal(data),
    };
    window.open(buildWaLink(finalData), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section id="pesan" className="scroll-mt-24 bg-night py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        {/* Persuasion panel */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          {showIntro ? (
            <>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-teal-light">
                <WhatsAppIcon className="h-4 w-4" />
                Pesan dalam 3 langkah
              </span>
              <h2 className="mt-4 font-display text-[length:var(--text-section)] font-extrabold leading-[1.05] text-white">
                Amankan slot trip-mu sekarang.
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Isi 3 langkah singkat, lalu kirim ke WhatsApp kami. Tanpa
                pembayaran di muka — cukup kirim permintaan.
              </p>
            </>
          ) : (
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-light">
              Kenapa pesan di sini
            </p>
          )}
          <ul className="mt-7 space-y-3">
            {[
              { icon: <TagIcon className="h-5 w-5" />, t: "Harga jelas, tanpa biaya tersembunyi" },
              { icon: <ClockIcon className="h-5 w-5" />, t: "Dibalas tim asli dalam 1×24 jam" },
              { icon: <ShieldIcon className="h-5 w-5" />, t: "Aman, berasuransi, guide bersertifikat" },
            ].map((b) => (
              <li key={b.t} className="flex items-center gap-3 text-white/85">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal text-white">
                  {b.icon}
                </span>
                <span className="text-sm font-medium">{b.t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Form card */}
        <div className="rounded-3xl bg-white p-5 shadow-2xl sm:p-8">
          {sent ? (
            <div className="flex flex-col items-center py-8 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-teal/15 text-teal">
                <CheckIcon className="h-9 w-9" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-extrabold text-night">
                WhatsApp terbuka!
              </h3>
              <p className="mt-2 max-w-sm text-night/65">
                Pesananmu sudah disiapkan di WhatsApp. Tinggal tekan kirim, tim
                kami akan balas dalam 1×24 jam. Tab tidak terbuka?
              </p>
              <button
                type="button"
                onClick={send}
                className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#1ebe5b]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Buka WhatsApp Lagi
              </button>
              <button
                type="button"
                onClick={() => {
                  setSent(false);
                  setStep(1);
                  setData(EMPTY);
                }}
                className="mt-3 cursor-pointer text-sm font-semibold text-night/50 underline-offset-4 hover:underline"
              >
                Buat pesanan baru
              </button>
            </div>
          ) : (
            <>
              <StepIndicator current={step} labels={LABELS} />

              <div className="mt-8">
                {step === 1 && (
                  <Step1Package
                    data={data}
                    errors={errors}
                    update={update}
                    today={today}
                  />
                )}
                {step === 2 && (
                  <Step2Data data={data} errors={errors} update={update} />
                )}
                {step === 3 && <Step3Confirm data={data} />}
              </div>

              {/* Nav */}
              <div className="mt-8 flex items-center gap-3">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={back}
                    className="cursor-pointer rounded-full border-2 border-night/15 px-6 py-3 text-sm font-bold text-night transition-colors hover:border-night/30"
                  >
                    Kembali
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={next}
                    className="group ml-auto inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-coral px-7 py-3 text-sm font-bold text-white shadow-lg shadow-coral/25 transition-all hover:bg-coral-dark"
                  >
                    Lanjut
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={send}
                    className="ml-auto inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-[#25D366]/30 transition-colors hover:bg-[#1ebe5b] sm:flex-none"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Kirim via WhatsApp
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
