import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Pesan Trip — Booking Wisata Lombok via WhatsApp | NusaJelajah",
  description:
    "Pesan paket wisata Lombok dalam 3 langkah singkat lalu kirim ke WhatsApp. Tanpa pembayaran di muka, konfirmasi 1×24 jam.",
};

interface PesanPageProps {
  searchParams: Promise<{ paket?: string | string[] }>;
}

export default async function PesanPage({ searchParams }: PesanPageProps) {
  const sp = await searchParams;
  const paket = Array.isArray(sp.paket) ? sp.paket[0] : sp.paket;

  return (
    <main>
      <PageHeader
        eyebrow="Pesan"
        title="Tiga langkah menuju Lombok."
        subtitle="Isi detail singkat, lalu kirim ke WhatsApp kami. Tim asli (bukan bot) balas dalam 1×24 jam."
      />
      <BookingForm initialPackageId={paket} showIntro={false} />
    </main>
  );
}
