import Link from "next/link";
import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
}: PageHeaderProps) {
  return (
    <header className="grain relative -mt-[64px] overflow-hidden bg-night pb-14 pt-28 text-white sm:pb-16 sm:pt-32">
      <div className="absolute inset-0 bg-gradient-to-br from-teal/30 via-transparent to-coral/10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-5 text-sm text-white/55">
          <Link href="/" className="transition-colors hover:text-teal-light">
            Beranda
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white/80">{eyebrow}</span>
        </nav>
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-light">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.2rem,1.3rem+4vw,4rem)] font-black leading-[1.02]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-white/75">{subtitle}</p>
        )}
        {children}
      </div>
    </header>
  );
}
