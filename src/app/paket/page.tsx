import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PackageGrid from "@/components/PackageGrid";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Paket Wisata Lombok — Open Trip & Private Trip | NusaJelajah",
  description:
    "Daftar lengkap paket wisata Lombok: snorkeling Gili, trekking Rinjani, Pink Beach, dan Sasak heritage. Harga transparan mulai Rp 350rb.",
};

export default function PaketPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Paket"
        title="Semua paket, harga terbuka."
        subtitle="Open trip & private trip pilihan dengan rincian include dan durasi yang jelas. Tidak ada biaya tersembunyi."
      />
      <PackageGrid hideIntro />
      <CTABand title="Belum nemu yang pas?" subtitle="Kami bisa rancang itinerary custom sesuai budget dan tanggalmu." />
    </main>
  );
}
