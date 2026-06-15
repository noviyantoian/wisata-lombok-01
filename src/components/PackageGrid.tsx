import Link from "next/link";
import { PACKAGES } from "@/lib/packages";
import PackageCard from "./PackageCard";
import Reveal from "./Reveal";
import { TagIcon } from "./icons";

interface PackageGridProps {
  hideIntro?: boolean;
}

export default function PackageGrid({ hideIntro = false }: PackageGridProps) {
  return (
    <section id="paket" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!hideIntro && (
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-1.5 text-sm font-semibold text-teal">
            <TagIcon className="h-4 w-4" />
            Paket Unggulan
          </span>
          <h2 className="mt-4 font-display text-[length:var(--text-section)] font-extrabold leading-[1.05] text-night">
            Pilih petualangan, harga sudah di depan mata.
          </h2>
          <p className="mt-4 text-lg text-night/70">
            Semua harga <span className="font-semibold text-night">“mulai dari”</span> per
            orang. Tidak ada biaya tersembunyi — detail final dikonfirmasi via
            WhatsApp.
          </p>
        </Reveal>
        )}

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 80} className="h-full [&>*]:h-full">
              <PackageCard pkg={pkg} index={i} />
            </Reveal>
          ))}
        </div>

        {/* Custom trip nudge */}
        <Reveal className="mt-8">
          <div className="flex flex-col items-center justify-between gap-4 rounded-3xl bg-night px-6 py-7 text-white sm:flex-row sm:px-9">
            <div>
              <h3 className="font-display text-xl font-bold sm:text-2xl">
                Mau itinerary custom?
              </h3>
              <p className="mt-1 text-sm text-white/70">
                Honeymoon, gathering kantor, atau rute pilihanmu sendiri — kami
                rancangkan.
              </p>
            </div>
            <Link
              href="/pesan?paket=custom"
              className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full bg-teal-light px-6 py-3 text-sm font-bold text-night transition-colors hover:bg-white"
            >
              Rancang Trip Custom
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
