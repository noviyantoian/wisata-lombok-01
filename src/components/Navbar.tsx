"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND } from "@/lib/packages";
import { buildQuickWaLink } from "@/lib/waMessage";
import { MenuIcon, CloseIcon, WhatsAppIcon, LeafIcon } from "./icons";

const LINKS = [
  { href: "/paket", label: "Paket" },
  { href: "/destinasi", label: "Destinasi" },
  { href: "/tentang", label: "Tentang" },
  { href: "/tentang#ulasan", label: "Ulasan" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Top of page sits over dark imagery/header → white text; once scrolled → dark on cream.
  const onLight = scrolled;
  const brandColor = onLight ? "text-night" : "text-white";

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "bg-cream/90 shadow-[0_1px_0_rgba(15,28,30,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        <Link href="/" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal text-white transition-transform duration-200 group-hover:-rotate-6">
            <LeafIcon className="h-5 w-5" />
          </span>
          <span className={`font-display text-xl font-extrabold tracking-tight ${brandColor}`}>
            {BRAND}
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => {
            const active = pathname === l.href.split("#")[0] && l.href !== "/tentang#ulasan";
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative text-sm font-semibold transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-coral after:transition-all ${
                  active ? "after:w-full" : "after:w-0 hover:after:w-full"
                } ${
                  onLight
                    ? "text-night/75 hover:text-teal"
                    : "text-white/85 hover:text-white"
                } ${active ? (onLight ? "text-teal" : "text-white") : ""}`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/pesan"
            className="hidden cursor-pointer rounded-full bg-coral px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-coral/25 transition-all duration-200 hover:bg-coral-dark hover:shadow-coral/40 sm:inline-flex"
          >
            Pesan Sekarang
          </Link>
          <a
            href={buildQuickWaLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat WhatsApp"
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-teal text-white transition-colors hover:bg-teal-light sm:hidden"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            className={`inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors md:hidden ${
              onLight ? "text-night hover:bg-night/5" : "text-white hover:bg-white/10"
            }`}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-night/10 bg-cream md:hidden">
          <div className="flex flex-col gap-1 px-4 py-3">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-semibold text-night transition-colors hover:bg-teal/10 hover:text-teal"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/pesan"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-coral px-4 py-3 text-base font-bold text-white"
            >
              Pesan Sekarang
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
