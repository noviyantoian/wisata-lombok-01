"use client";

import type { BookingData } from "@/lib/types";
import { formatRupiah } from "@/lib/packages";
import { ShieldIcon, ClockIcon } from "../icons";

interface StepProps {
  data: BookingData;
}

interface Row {
  label: string;
  value: string;
}

export default function Step3Confirm({ data }: StepProps) {
  const rows: Row[] = [
    { label: "Paket", value: data.packageName },
    { label: "Durasi", value: data.duration || "-" },
    { label: "Peserta", value: data.pax },
    { label: "Tanggal", value: formatDate(data.departureDate) },
    { label: "Nama", value: data.name },
    { label: "WhatsApp", value: data.whatsapp },
    { label: "Kota asal", value: data.city },
  ];
  if (data.email) rows.push({ label: "Email", value: data.email });
  if (data.notes) rows.push({ label: "Catatan", value: data.notes });

  const totalText =
    data.packagePrice === "custom" || !data.estimatedTotal
      ? "Dihitung tim kami"
      : `Rp ${formatRupiah(data.estimatedTotal)}`;

  return (
    <div className="space-y-5">
      {/* Summary */}
      <div className="overflow-hidden rounded-2xl border-2 border-night/10">
        <div className="bg-night px-5 py-3">
          <h3 className="font-display text-lg font-bold text-white">
            Ringkasan Pesanan
          </h3>
        </div>
        <dl className="divide-y divide-night/8">
          {rows.map((r) => (
            <div
              key={r.label}
              className="grid grid-cols-[110px_1fr] gap-3 px-5 py-2.5 text-sm"
            >
              <dt className="font-medium text-night/55">{r.label}</dt>
              <dd className="font-semibold text-night">{r.value}</dd>
            </div>
          ))}
        </dl>
        <div className="flex items-center justify-between bg-teal/8 px-5 py-4">
          <span className="text-sm font-bold text-night">Estimasi total</span>
          <span className="font-display text-xl font-extrabold text-teal">
            {totalText}
            {data.packagePrice !== "custom" && (
              <span className="text-sm font-semibold text-night/50">/grup</span>
            )}
          </span>
        </div>
      </div>

      {/* Reassurance */}
      <div className="space-y-2.5 rounded-2xl bg-sand p-4">
        <p className="flex items-start gap-2.5 text-sm text-night/80">
          <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
          Tim kami konfirmasi ketersediaan & detail pembayaran via WhatsApp
          dalam <span className="font-semibold">1×24 jam</span>.
        </p>
        <p className="flex items-start gap-2.5 text-sm text-night/80">
          <ShieldIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
          Belum ada pembayaran sekarang — kamu hanya mengirim permintaan booking.
        </p>
      </div>
    </div>
  );
}

function formatDate(iso: string): string {
  if (!iso) return "-";
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
