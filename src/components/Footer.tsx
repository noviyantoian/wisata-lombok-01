import Link from "next/link";
import { BRAND } from "@/lib/packages";
import { buildQuickWaLink } from "@/lib/waMessage";
import { LeafIcon, WhatsAppIcon, MapPinIcon } from "./icons";

const NAV = [
  { href: "/paket", label: "Paket Wisata" },
  { href: "/destinasi", label: "Destinasi" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/tentang#ulasan", label: "Ulasan" },
  { href: "/pesan", label: "Pesan Sekarang" },
];

export default function Footer() {
  const year = 2026;
  return (
    <footer id="footer" className="bg-night text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal text-white">
              <LeafIcon className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-extrabold">{BRAND}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
            Agensi wisata lokal Lombok. Open trip, private trip, dan itinerary
            custom — diatur oleh orang Lombok asli sejak 2016.
          </p>
          <a
            href={buildQuickWaLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-teal-light"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat WhatsApp
          </a>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/50">
            Navigasi
          </h3>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-white/75 transition-colors hover:text-teal-light"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/50">
            Kontak
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal-light" />
              <span>Jl. Raya Senggigi, Mataram, Lombok, NTB</span>
            </li>
            <li className="flex items-start gap-2">
              <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal-light" />
              <span>WhatsApp: +62 819-1709-0807</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year} {BRAND}. Semua hak dilindungi.
          </p>
          <p>Harga “mulai dari” — final dikonfirmasi via WhatsApp.</p>
        </div>
      </div>
    </footer>
  );
}
