import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Destinations from "@/components/Destinations";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Destinasi Lombok — Rinjani, Gili, Pink Beach, Kuta | NusaJelajah",
  description:
    "Jelajahi destinasi terbaik Lombok: Gunung Rinjani, tiga Gili, Pink Beach, Senggigi, dan Kuta. Inspirasi untuk trip berikutnya.",
};

export default function DestinasiPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Destinasi"
        title="Satu pulau, lima dunia."
        subtitle="Dari puncak vulkanik 3.726 mdpl sampai pasir merah muda — inilah Lombok yang akan kamu jelajahi."
      />
      <Destinations hideIntro />
      <CTABand />
    </main>
  );
}
