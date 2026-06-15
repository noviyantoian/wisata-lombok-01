import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import CTABand from "@/components/CTABand";
import { STATS } from "@/lib/packages";

export const metadata: Metadata = {
  title: "Tentang NusaJelajah — Agensi Wisata Lokal Lombok",
  description:
    "Agensi wisata lokal Lombok sejak 2016. 4.200+ tamu, rating 4.9 di Google, guide bersertifikat. Kenapa ribuan traveler memilih kami.",
};

export default function TentangPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Tentang"
        title="Orang Lombok asli, sejak 2016."
        subtitle="Kami bukan reseller. Setiap trip dijalankan langsung oleh tim & guide lokal yang tumbuh di pulau ini."
      >
        <dl className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-5 backdrop-blur-sm"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-2xl font-extrabold text-teal-light sm:text-3xl">
                {s.value}
              </dd>
              <p className="mt-1 text-xs text-white/70 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </dl>
      </PageHeader>
      <WhyUs />
      <Testimonials />
      <CTABand />
    </main>
  );
}
