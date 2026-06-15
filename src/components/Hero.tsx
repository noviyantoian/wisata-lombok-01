import Image from "next/image";
import Link from "next/link";
import { buildQuickWaLink } from "@/lib/waMessage";
import { STATS } from "@/lib/packages";
import { ArrowRightIcon, WhatsAppIcon, StarIcon, GoogleIcon } from "./icons";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative -mt-[64px] flex min-h-[100svh] flex-col justify-end overflow-hidden bg-night pt-[64px] text-white"
    >
      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt="Pemandangan Gili dan Gunung Rinjani Lombok saat matahari terbenam"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
      />
      {/* Gradient scrims for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/55 to-night/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-night/70 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pb-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-teal-light" />
            Open Trip & Private Trip · Lombok
          </span>

          <h1
            id="hero-heading"
            className="mt-5 font-display text-[clamp(2.6rem,1.2rem+6vw,5.5rem)] font-black leading-[0.98] tracking-tight"
          >
            Jelajahi Lombok,
            <br />
            <span className="text-teal-light">tanpa drama.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Rinjani, tiga Gili, Pink Beach, sampai Kuta — diatur tuntas oleh
            guide lokal bersertifikat. Harga transparan, pesan langsung via
            WhatsApp, konfirmasi dalam 1×24 jam.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/paket"
              className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-coral px-7 py-4 text-base font-bold text-white shadow-xl shadow-coral/30 transition-all duration-200 hover:bg-coral-dark hover:shadow-coral/50"
            >
              Lihat Paket & Harga
              <ArrowRightIcon className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <a
              href={buildQuickWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/20"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Tanya Dulu
            </a>
          </div>

          {/* Inline social proof */}
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-white/85">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 font-semibold text-night">
              <GoogleIcon className="h-4 w-4" />
              4.9
              <span className="flex text-coral">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-3.5 w-3.5" />
                ))}
              </span>
            </span>
            <span className="font-medium">320+ ulasan · 4.200+ tamu bahagia</span>
          </div>
        </div>
      </div>

      {/* Stat strip */}
      <div className="relative border-t border-white/15 bg-night/40 backdrop-blur-sm">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {STATS.map((s) => (
            <div key={s.label} className="px-2 py-5 text-center md:py-6">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-2xl font-extrabold text-teal-light sm:text-3xl">
                {s.value}
              </dd>
              <p className="mt-1 text-xs text-white/70 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
