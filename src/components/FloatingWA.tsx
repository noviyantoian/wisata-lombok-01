"use client";

import { useEffect, useState } from "react";
import { buildQuickWaLink } from "@/lib/waMessage";
import { WhatsAppIcon } from "./icons";

export default function FloatingWA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={buildQuickWaLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi kami via WhatsApp"
      className={`fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 rounded-full bg-[#25D366] py-3.5 pl-4 pr-5 font-bold text-white shadow-2xl transition-all duration-300 hover:bg-[#1ebe5b] ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span className="relative flex h-7 w-7 items-center justify-center rounded-full motion-safe:animate-[pulse-ring_2.4s_cubic-bezier(0.16,1,0.3,1)_infinite]">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
      <span className="hidden text-sm sm:inline">Chat Sekarang</span>
    </a>
  );
}
