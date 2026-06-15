import Image from "next/image";
import Link from "next/link";
import { DESTINATIONS } from "@/lib/packages";
import Reveal from "./Reveal";
import { MapPinIcon, ArrowRightIcon } from "./icons";

const SPAN: Record<string, string> = {
  tall: "sm:row-span-2",
  wide: "sm:col-span-2",
};

interface DestinationsProps {
  hideIntro?: boolean;
}

export default function Destinations({ hideIntro = false }: DestinationsProps) {
  return (
    <section id="destinasi" className="scroll-mt-24 bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!hideIntro && (
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-coral/10 px-4 py-1.5 text-sm font-semibold text-coral">
              <MapPinIcon className="h-4 w-4" />
              Destinasi
            </span>
            <h2 className="mt-4 font-display text-[length:var(--text-section)] font-extrabold leading-[1.05] text-night">
              Lima alasan kamu bakal balik lagi.
            </h2>
          </div>
          <p className="max-w-sm text-night/70">
            Dari puncak vulkanik sampai pasir merah muda — semua dalam satu
            pulau, satu agensi.
          </p>
        </Reveal>
        )}

        <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[200px] lg:auto-rows-[220px]">
          {DESTINATIONS.map((d, i) => (
            <Reveal
              key={d.id}
              as="article"
              delay={i * 70}
              className={`group relative h-full overflow-hidden rounded-3xl ${
                d.span ? SPAN[d.span] : ""
              }`}
            >
              <Image
                src={d.image}
                alt={`${d.name} — ${d.tagline}`}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <h3 className="font-display text-lg font-bold text-white sm:text-2xl">
                  {d.name}
                </h3>
                <p className="mt-0.5 text-sm text-white/80">{d.tagline}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-teal-light opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Lihat detail
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </span>
              </div>
              <Link
                href={`/destinasi/${d.id}`}
                className="absolute inset-0 z-10 cursor-pointer rounded-3xl ring-coral/0 transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-coral/60"
              >
                <span className="sr-only">Lihat detail {d.name}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
