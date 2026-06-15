import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://nusajelajah.id";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "NusaJelajah — Open Trip & Private Trip Wisata Lombok Terpercaya",
  description:
    "Jelajahi Rinjani, Gili, Pink Beach & Kuta Lombok bareng guide lokal. Harga transparan mulai Rp 350rb, 4.000+ tamu puas, rating 4.9. Pesan cepat via WhatsApp.",
  keywords: [
    "wisata Lombok",
    "open trip Lombok",
    "private trip Lombok",
    "paket Gili",
    "trekking Rinjani",
    "Pink Beach Lombok",
  ],
  openGraph: {
    title: "NusaJelajah — Wisata Lombok Tanpa Ribet",
    description:
      "Paket open trip & private trip Lombok dengan harga jelas. Pesan via WhatsApp, konfirmasi 1×24 jam.",
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "NusaJelajah",
    images: [{ url: "/images/hero.jpg", width: 1920, height: 1080 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  themeColor: "#0b7a75",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-night">
        <PromoBar />
        <Navbar />
        {children}
        <Footer />
        <FloatingWA />
      </body>
    </html>
  );
}
