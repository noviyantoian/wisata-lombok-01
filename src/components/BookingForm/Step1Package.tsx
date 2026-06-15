"use client";

import type { BookingData } from "@/lib/types";
import { PACKAGES, PAX_OPTIONS, formatRupiah } from "@/lib/packages";
import { CheckIcon } from "../icons";

interface StepProps {
  data: BookingData;
  errors: Record<string, string>;
  update: (patch: Partial<BookingData>) => void;
  today: string;
}

export default function Step1Package({ data, errors, update, today }: StepProps) {
  function pickPackage(id: string) {
    if (id === "custom") {
      update({
        packageId: "custom",
        packageName: "Custom / Itinerary Pilihan Sendiri",
        packagePrice: "custom",
        duration: "Fleksibel",
      });
      return;
    }
    const pkg = PACKAGES.find((p) => p.id === id);
    if (!pkg) return;
    update({
      packageId: pkg.id,
      packageName: pkg.name,
      packagePrice: pkg.pricePerPerson,
      duration: pkg.duration,
    });
  }

  return (
    <div className="space-y-6">
      <fieldset>
        <legend className="text-sm font-bold text-night">
          Pilih paket <span className="text-coral">*</span>
        </legend>
        {errors.packageId && (
          <p className="mt-1 text-sm text-coral">{errors.packageId}</p>
        )}
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {PACKAGES.map((p) => {
            const selected = data.packageId === p.id;
            return (
              <label
                key={p.id}
                className={`flex cursor-pointer items-start gap-3 rounded-2xl border-2 p-4 transition-all duration-200 ${
                  selected
                    ? "border-teal bg-teal/5 shadow-sm"
                    : "border-night/10 hover:border-teal/40"
                }`}
              >
                <input
                  type="radio"
                  name="package"
                  value={p.id}
                  checked={selected}
                  onChange={() => pickPackage(p.id)}
                  className="sr-only"
                />
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                    selected ? "border-teal bg-teal text-white" : "border-night/25"
                  }`}
                >
                  {selected && <CheckIcon className="h-3 w-3" />}
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-bold text-night">
                    {p.name}
                  </span>
                  <span className="block text-xs text-night/55">{p.duration}</span>
                  <span className="mt-1 block text-sm font-bold text-coral">
                    Mulai Rp {formatRupiah(p.pricePerPerson)}/org
                  </span>
                </span>
              </label>
            );
          })}

          {/* Custom */}
          <label
            className={`flex cursor-pointer items-start gap-3 rounded-2xl border-2 border-dashed p-4 transition-all duration-200 sm:col-span-2 ${
              data.packageId === "custom"
                ? "border-teal bg-teal/5"
                : "border-night/20 hover:border-teal/40"
            }`}
          >
            <input
              type="radio"
              name="package"
              value="custom"
              checked={data.packageId === "custom"}
              onChange={() => pickPackage("custom")}
              className="sr-only"
            />
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                data.packageId === "custom"
                  ? "border-teal bg-teal text-white"
                  : "border-night/25"
              }`}
            >
              {data.packageId === "custom" && <CheckIcon className="h-3 w-3" />}
            </span>
            <span>
              <span className="block text-sm font-bold text-night">
                Custom / Itinerary sendiri
              </span>
              <span className="block text-xs text-night/55">
                Honeymoon, gathering, atau rute pilihanmu — kami bantu hitung.
              </span>
            </span>
          </label>
        </div>
      </fieldset>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="pax" className="text-sm font-bold text-night">
            Jumlah peserta <span className="text-coral">*</span>
          </label>
          <select
            id="pax"
            value={data.pax}
            onChange={(e) => update({ pax: e.target.value })}
            className={`mt-2 w-full cursor-pointer rounded-xl border-2 bg-white px-4 py-3 text-sm font-medium text-night outline-none transition-colors focus:border-teal ${
              errors.pax ? "border-coral" : "border-night/15"
            }`}
          >
            <option value="">Pilih jumlah…</option>
            {PAX_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {errors.pax && <p className="mt-1 text-sm text-coral">{errors.pax}</p>}
        </div>

        <div>
          <label htmlFor="date" className="text-sm font-bold text-night">
            Tanggal keberangkatan <span className="text-coral">*</span>
          </label>
          <input
            id="date"
            type="date"
            min={today}
            value={data.departureDate}
            onChange={(e) => update({ departureDate: e.target.value })}
            className={`mt-2 w-full cursor-pointer rounded-xl border-2 bg-white px-4 py-3 text-sm font-medium text-night outline-none transition-colors focus:border-teal ${
              errors.departureDate ? "border-coral" : "border-night/15"
            }`}
          />
          {errors.departureDate && (
            <p className="mt-1 text-sm text-coral">{errors.departureDate}</p>
          )}
        </div>
      </div>
    </div>
  );
}
