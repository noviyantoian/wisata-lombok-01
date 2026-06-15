import Reveal from "./Reveal";
import {
  ShieldIcon,
  TagIcon,
  UsersIcon,
  WhatsAppIcon,
  HeartIcon,
  LeafIcon,
} from "./icons";
import type { JSX } from "react";

interface Reason {
  icon: JSX.Element;
  title: string;
  body: string;
}

const REASONS: Reason[] = [
  {
    icon: <TagIcon className="h-6 w-6" />,
    title: "Harga transparan",
    body: "Semua harga tampil terbuka. Tidak ada biaya kejutan saat hari-H.",
  },
  {
    icon: <UsersIcon className="h-6 w-6" />,
    title: "Guide lokal asli Lombok",
    body: "Bersertifikat, paham spot tersembunyi, dan ramah ke pemula.",
  },
  {
    icon: <ShieldIcon className="h-6 w-6" />,
    title: "Aman & berasuransi",
    body: "Setiap trip dilindungi asuransi perjalanan. Alat dirawat berkala.",
  },
  {
    icon: <WhatsAppIcon className="h-6 w-6" />,
    title: "Respon cepat via WA",
    body: "Pesan kamu dibalas tim asli (bukan bot) dalam 1×24 jam.",
  },
  {
    icon: <HeartIcon className="h-6 w-6" />,
    title: "4.200+ tamu puas",
    body: "Rating 4.9 di Google dari ratusan traveler sejak 2016.",
  },
  {
    icon: <LeafIcon className="h-6 w-6" />,
    title: "Wisata bertanggung jawab",
    body: "Dukung warga & alam lokal — no sampah tertinggal, no eksploitasi.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="kenapa"
      className="grain relative scroll-mt-24 overflow-hidden bg-teal py-20 text-white sm:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-teal-light/90">
            Kenapa NusaJelajah
          </span>
          <h2 className="mt-3 font-display text-[length:var(--text-section)] font-extrabold leading-[1.05]">
            Liburan tenang, bukan tebak-tebakan.
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Kami hilangkan semua keraguan yang biasa bikin orang ragu booking
            trip online.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal
              key={r.title}
              delay={i * 60}
              className="group bg-teal p-7 transition-colors duration-300 hover:bg-teal-dark"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-light/20 text-teal-light transition-transform duration-300 group-hover:-translate-y-1">
                {r.icon}
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {r.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
