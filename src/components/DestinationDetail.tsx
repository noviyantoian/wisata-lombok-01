import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/lib/types";
import { getPackage } from "@/lib/packages";
import PackageCard from "./PackageCard";
import CTABand from "./CTABand";
import { MapPinIcon, ClockIcon, SparkleIcon, ArrowRightIcon } from "./icons";

interface DestinationDetailProps {
  destination: Destination;
}

export default function DestinationDetail({ destination: d }: DestinationDetailProps) {
  const related = d.relatedPackageIds
    .map((id) => getPackage(id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <main>
      {/* Cinematic hero */}
      <header className="relative -mt-[64px] flex min-h-[64vh] items-end overflow-hidden bg-night text-white">
        <Image
          src={d.image}
          alt={`${d.name} — ${d.tagline}`}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/50 to-night/20" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/70">
            <Link href="/" className="transition-colors hover:text-teal-light">
              Beranda
            </Link>
            <span className="mx-2">/</span>
            <Link href="/destinasi" className="transition-colors hover:text-teal-light">
              Destinasi
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/90">{d.name}</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-light">
            {d.tagline}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.2rem,1.3rem+4vw,4.5rem)] font-black leading-[1.02]">
            {d.name}
          </h1>
        </div>
      </header>

      {/* Body */}
      <div className="bg-cream py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
          <div className="min-w-0">
            <h2 className="font-display text-2xl font-extrabold text-night sm:text-3xl">
              Tentang {d.name}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-night/75">
              {d.description}
            </p>

            <h3 className="mt-10 font-display text-xl font-bold text-night">
              Yang bisa kamu lakukan
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {d.activities.map((a) => (
                <span
                  key={a}
                  className="inline-flex items-center gap-1.5 rounded-full border border-teal/25 bg-teal/5 px-4 py-2 text-sm font-semibold text-teal-dark"
                >
                  <SparkleIcon className="h-4 w-4 text-teal" />
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Info card */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-night/10 bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg font-bold text-night">
                Info kunjungan
              </h3>
              <dl className="mt-4 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <dt className="font-semibold text-night">Waktu terbaik</dt>
                    <dd className="text-night/65">{d.bestTime}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <dt className="font-semibold text-night">Jarak tempuh</dt>
                    <dd className="text-night/65">{d.travelTime}</dd>
                  </div>
                </div>
              </dl>
            </div>
          </aside>
        </div>

        {/* Related packages */}
        {related.length > 0 && (
          <div className="mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between">
              <h3 className="font-display text-2xl font-extrabold text-night">
                Paket ke {d.name}
              </h3>
              <Link
                href="/paket"
                className="inline-flex items-center gap-1 text-sm font-semibold text-teal transition-colors hover:text-teal-light"
              >
                Semua paket
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <PackageCard key={p.id} pkg={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>

      <CTABand
        title={`Tertarik ke ${d.name}?`}
        subtitle="Pilih paketnya, pesan via WhatsApp, beres. Tanpa bayar di muka."
      />
    </main>
  );
}
