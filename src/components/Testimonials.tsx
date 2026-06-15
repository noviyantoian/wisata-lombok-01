import Image from "next/image";
import { TESTIMONIALS } from "@/lib/packages";
import Reveal from "./Reveal";
import { StarIcon, GoogleIcon } from "./icons";

export default function Testimonials() {
  return (
    <section id="ulasan" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-night px-4 py-1.5 text-sm font-semibold text-white">
            <GoogleIcon className="h-4 w-4" />
            4.9 / 5 · 320+ ulasan
          </span>
          <h2 className="mt-4 font-display text-[length:var(--text-section)] font-extrabold leading-[1.05] text-night">
            Cerita dari yang sudah berangkat.
          </h2>
          <p className="mt-4 text-lg text-night/70">
            Bukan kami yang bilang — mereka yang sudah merasakan trip-nya.
          </p>
        </Reveal>

        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 80}>
              <figure className="rounded-3xl border border-night/10 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-night/5">
                <div className="flex gap-0.5 text-coral">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <StarIcon key={s} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-4 text-[15px] leading-relaxed text-night/80">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-night/10 pt-4">
                  <Image
                    src={t.avatar}
                    alt={`Foto ${t.name}`}
                    width={44}
                    height={44}
                    loading="lazy"
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold text-night">{t.name}</p>
                    <p className="text-xs text-night/55">
                      {t.origin} · {t.trip}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
