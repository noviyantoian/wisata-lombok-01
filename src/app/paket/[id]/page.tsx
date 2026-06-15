import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PACKAGES, getPackage } from "@/lib/packages";
import PackageDetail from "@/components/PackageDetail";

interface Params {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return PACKAGES.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const pkg = getPackage(id);
  if (!pkg) return { title: "Paket tidak ditemukan | NusaJelajah" };
  return {
    title: `${pkg.name} — Paket Wisata Lombok | NusaJelajah`,
    description: pkg.description.slice(0, 155),
    openGraph: {
      title: `${pkg.name} | NusaJelajah`,
      description: pkg.description.slice(0, 155),
      images: [{ url: pkg.image }],
    },
  };
}

export default async function PaketDetailPage({ params }: Params) {
  const { id } = await params;
  const pkg = getPackage(id);
  if (!pkg) notFound();
  return <PackageDetail pkg={pkg} />;
}
