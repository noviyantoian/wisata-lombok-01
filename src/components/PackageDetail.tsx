import Image from "next/image";
import Link from "next/link";
import type { TourPackage } from "@/lib/types";
import { formatRupiah } from "@/lib/packages";
import { buildQuickWaLink } from "@/lib/waMessage";
import CTABand from "./CTABand";
import {
  ClockIcon,
  CheckIcon,
  CloseIcon,
  MapPinIcon,
  WhatsAppIcon,
  ArrowRightIcon,
  ShieldIcon,
  TagIcon,
} from "./icons";

interface PackageDetailProps {
  pkg: TourPackage;
}

const TYPE_LABEL: Record<TourPackage["type"], string> = {
  open_trip: "Open Trip",
  private_trip: "Private Trip",
};

export default function PackageDetail({ pkg }: PackageDetailProps) {
  return (
    <main>
      {/* Cinematic hero */}
      <header className="relative -mt-[64px] flex min-h-[68vh] items-end overflow-hidden bg-night text-white">
        <Image
          src={pkg.image}
          alt={`Paket ${pkg.name} Lombok`}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/55 to-night/25" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/70">
            <Link href="/" className="transition-colors hover:text-teal-light">
              Beranda
            </Link>
            <span className="mx-2">/</span>
            <Link href="/paket" className="transition-colors hover:text-teal-light">
              Paket
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/90">{pkg.name}</span>
          </nav>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              {TYPE_LABEL[pkg.type]}
            </span>
            {pkg.badge && (
              <span className="rounded-full bg-coral px-3 py-1 text-xs font-bold uppercase tracking-wide">
                ★ {pkg.badge}
              </span>
            )}
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,1.3rem+4vw,4.5rem)] font-black leading-[1.02]">
            {pkg.name}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-white/85">
            <span className="inline-flex items-center gap-1.5 text-sm font-medium">
              <ClockIcon className="h-4 w-4" /> {pkg.duration}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium">
              <MapPinIcon className="h-4 w-4" /> {pkg.meetingPoint}
            </span>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="bg-cream py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          {/* Left content */}
          <div className="min-w-0">
            <section>
              <h2 className="font-display text-2xl font-extrabold text-night sm:text-3xl">
                Tentang trip ini
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-night/75">
                {pkg.description}
              </p>
            </section>

            <section className="mt-10">
              <h3 className="font-display text-xl font-bold text-night">Highlights</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {pkg.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-start gap-2.5 rounded-2xl border border-night/10 bg-white p-4"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/12 text-teal">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-night/85">{h}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary timeline */}
            <section className="mt-10">
              <h3 className="font-display text-xl font-bold text-night">Itinerary</h3>
              <ol className="mt-5 space-y-0">
                {pkg.itinerary.map((step, i) => (
                  <li key={step.title} className="relative flex gap-4 pb-7 last:pb-0">
                    {i < pkg.itinerary.length - 1 && (
                      <span className="absolute left-[15px] top-8 h-full w-0.5 bg-teal/25" />
                    )}
                    <span className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div className="pt-1">
                      <p className="font-bold text-night">{step.title}</p>
                      <p className="mt-1 text-sm text-night/70">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* Includes / Excludes */}
            <section className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-teal/20 bg-teal/5 p-5">
                <h3 className="font-display text-lg font-bold text-teal-dark">
                  Sudah termasuk
                </h3>
                <ul className="mt-3 space-y-2">
                  {pkg.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2 text-sm text-night/80">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-night/10 bg-white p-5">
                <h3 className="font-display text-lg font-bold text-night/70">
                  Belum termasuk
                </h3>
                <ul className="mt-3 space-y-2">
                  {pkg.excludes.map((exc) => (
                    <li key={exc} className="flex items-start gap-2 text-sm text-night/65">
                      <CloseIcon className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                      {exc}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Sticky booking card */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-3xl border border-night/10 bg-white shadow-xl">
              <div className="border-b border-night/10 p-6">
                <p className="text-xs font-medium uppercase tracking-wide text-night/50">
                  Mulai dari
                </p>
                <p className="font-display text-3xl font-extrabold text-coral">
                  Rp {formatRupiah(pkg.pricePerPerson)}
                  <span className="text-base font-semibold text-night/50">/org</span>
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 rounded-full bg-sand px-3 py-1 font-semibold text-night/70">
                    <ClockIcon className="h-3.5 w-3.5" /> {pkg.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-sand px-3 py-1 font-semibold text-night/70">
                    <TagIcon className="h-3.5 w-3.5" /> {TYPE_LABEL[pkg.type]}
                  </span>
                </div>
              </div>
              <div className="space-y-3 p-6">
                <Link
                  href={`/pesan?paket=${pkg.id}`}
                  className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-coral px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-coral/25 transition-all hover:bg-coral-dark"
                >
                  Pesan Sekarang
                  <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={buildQuickWaLink(
                    `Halo NusaJelajah! 👋 Saya tertarik paket *${pkg.name}*. Boleh info lebih lanjut?`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-teal/30 px-6 py-3 text-sm font-bold text-teal transition-colors hover:bg-teal/5"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Tanya Dulu
                </a>
                <ul className="space-y-2 pt-2 text-xs text-night/65">
                  <li className="flex items-center gap-2">
                    <ShieldIcon className="h-4 w-4 shrink-0 text-teal" />
                    Tanpa pembayaran di muka
                  </li>
                  <li className="flex items-center gap-2">
                    <ClockIcon className="h-4 w-4 shrink-0 text-teal" />
                    Konfirmasi via WA dalam 1×24 jam
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <CTABand title={`Siap ikut ${pkg.name}?`} subtitle="Amankan slotmu sekarang — isi 3 langkah dan kirim ke WhatsApp." />
    </main>
  );
}
