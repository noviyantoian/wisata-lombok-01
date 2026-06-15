import Image from "next/image";
import Link from "next/link";
import type { TourPackage } from "@/lib/types";
import { formatRupiah } from "@/lib/packages";
import { ClockIcon, CheckIcon, ArrowRightIcon } from "./icons";

interface PackageCardProps {
  pkg: TourPackage;
  index: number;
}

const TYPE_LABEL: Record<TourPackage["type"], string> = {
  open_trip: "Open Trip",
  private_trip: "Private Trip",
};

export default function PackageCard({ pkg, index }: PackageCardProps) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-night/10 ${
        pkg.badge ? "border-coral/40 ring-1 ring-coral/30" : "border-night/10"
      }`}
    >
      {/* Cover */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={pkg.image}
          alt={`Paket ${pkg.name} Lombok`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading={index < 2 ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/40 to-transparent" />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-full bg-night/70 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
            {TYPE_LABEL[pkg.type]}
          </span>
        </div>
        {pkg.badge && (
          <span className="absolute right-3 top-3 rounded-full bg-coral px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-lg">
            ★ {pkg.badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-bold leading-tight text-night">
          {pkg.name}
        </h3>
        <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-medium text-teal">
          <ClockIcon className="h-4 w-4" />
          {pkg.duration}
        </p>

        <ul className="mt-4 space-y-2">
          {pkg.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-night/75">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-end justify-between border-t border-night/10 pt-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wide text-night/50">
              Mulai dari
            </p>
            <p className="font-display text-2xl font-extrabold text-coral">
              Rp {formatRupiah(pkg.pricePerPerson)}
              <span className="text-sm font-semibold text-night/50">/org</span>
            </p>
          </div>
        </div>

        <Link
          href={`/paket/${pkg.id}`}
          className="mt-4 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-teal px-5 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-teal-light"
        >
          Lihat Detail
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
