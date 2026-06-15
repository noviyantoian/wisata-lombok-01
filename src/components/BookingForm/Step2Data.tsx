"use client";

import type { BookingData } from "@/lib/types";
import { REFERRAL_OPTIONS } from "@/lib/packages";

interface StepProps {
  data: BookingData;
  errors: Record<string, string>;
  update: (patch: Partial<BookingData>) => void;
}

const inputBase =
  "mt-2 w-full rounded-xl border-2 bg-white px-4 py-3 text-sm font-medium text-night outline-none transition-colors focus:border-teal placeholder:text-night/35";

export default function Step2Data({ data, errors, update }: StepProps) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-bold text-night">
            Nama lengkap <span className="text-coral">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={data.name}
            onChange={(e) => update({ name: e.target.value })}
            placeholder="cth. Dinda Pramesti"
            className={`${inputBase} ${errors.name ? "border-coral" : "border-night/15"}`}
          />
          {errors.name && <p className="mt-1 text-sm text-coral">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="whatsapp" className="text-sm font-bold text-night">
            No. WhatsApp <span className="text-coral">*</span>
          </label>
          <input
            id="whatsapp"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            value={data.whatsapp}
            onChange={(e) => update({ whatsapp: e.target.value })}
            placeholder="08xxxxxxxxxx"
            className={`${inputBase} ${errors.whatsapp ? "border-coral" : "border-night/15"}`}
          />
          {errors.whatsapp && (
            <p className="mt-1 text-sm text-coral">{errors.whatsapp}</p>
          )}
        </div>

        <div>
          <label htmlFor="city" className="text-sm font-bold text-night">
            Kota asal <span className="text-coral">*</span>
          </label>
          <input
            id="city"
            type="text"
            autoComplete="address-level2"
            value={data.city}
            onChange={(e) => update({ city: e.target.value })}
            placeholder="cth. Jakarta"
            className={`${inputBase} ${errors.city ? "border-coral" : "border-night/15"}`}
          />
          {errors.city && <p className="mt-1 text-sm text-coral">{errors.city}</p>}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-bold text-night">
            Email <span className="font-normal text-night/45">(opsional)</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={data.email ?? ""}
            onChange={(e) => update({ email: e.target.value })}
            placeholder="nama@email.com"
            className={`${inputBase} border-night/15`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="text-sm font-bold text-night">
          Permintaan khusus / catatan{" "}
          <span className="font-normal text-night/45">(opsional)</span>
        </label>
        <textarea
          id="notes"
          rows={3}
          value={data.notes ?? ""}
          onChange={(e) => update({ notes: e.target.value })}
          placeholder="Alergi makanan, request hotel, jam jemput, dll."
          className={`${inputBase} resize-none border-night/15`}
        />
      </div>

      <div>
        <label htmlFor="referral" className="text-sm font-bold text-night">
          Tahu kami dari mana?{" "}
          <span className="font-normal text-night/45">(opsional)</span>
        </label>
        <select
          id="referral"
          value={data.referralSource ?? ""}
          onChange={(e) => update({ referralSource: e.target.value })}
          className={`${inputBase} cursor-pointer border-night/15`}
        >
          <option value="">Pilih…</option>
          {REFERRAL_OPTIONS.map((o) => (
            <option key={o.value} value={o.label}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
