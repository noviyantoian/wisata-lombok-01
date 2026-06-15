import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DESTINATIONS, getDestination } from "@/lib/packages";
import DestinationDetail from "@/components/DestinationDetail";

interface Params {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ id: d.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const d = getDestination(id);
  if (!d) return { title: "Destinasi tidak ditemukan | NusaJelajah" };
  return {
    title: `${d.name} Lombok — ${d.tagline} | NusaJelajah`,
    description: d.description.slice(0, 155),
    openGraph: {
      title: `${d.name} Lombok | NusaJelajah`,
      description: d.description.slice(0, 155),
      images: [{ url: d.image }],
    },
  };
}

export default async function DestinasiDetailPage({ params }: Params) {
  const { id } = await params;
  const d = getDestination(id);
  if (!d) notFound();
  return <DestinationDetail destination={d} />;
}
