import Link from "next/link";
import { buildQuickWaLink } from "@/lib/waMessage";
import { ArrowRightIcon, WhatsAppIcon } from "./icons";
import Reveal from "./Reveal";

interface CTABandProps {
  title?: string;
  subtitle?: string;
}

export default function CTABand({
  title = "Siap menjelajah Lombok?",
  subtitle = "Pilih paket, isi 3 langkah, kirim ke WhatsApp. Tanpa bayar di muka.",
}: CTABandProps) {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[2rem] bg-teal px-6 py-12 text-center text-white sm:px-12 sm:py-16">
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-[clamp(1.9rem,1.2rem+2.6vw,3rem)] font-extrabold leading-tight">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-md text-base text-white/85 sm:text-lg">
                {subtitle}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/pesan"
                  className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-coral px-7 py-4 text-base font-bold text-white shadow-xl shadow-night/20 transition-all duration-200 hover:bg-coral-dark sm:w-auto"
                >
                  Pesan Sekarang
                  <ArrowRightIcon className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <a
                  href={buildQuickWaLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/20 sm:w-auto"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Tanya Dulu
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
