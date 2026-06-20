"use client";

import Link from "next/link";
import { Logo } from "@/components/Logo";
import { useLocale } from "@/lib/i18n";

export default function NotFound() {
  const { locale } = useLocale();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-surface px-6 text-center text-foreground">
      {/* Background subtle pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(12,35,64,0.03)_0%,transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="mb-2 opacity-60">
          <Logo variant="icon" height={64} />
        </div>

        {/* Error code */}
        <h1 className="font-mono text-[8rem] font-bold leading-none tracking-tighter text-foreground">
          404
        </h1>

        {/* Message */}
        <p className="max-w-md text-lg text-muted">
          {locale === "pt"
            ? "Página não encontrada. O link pode estar desatualizado ou a página foi movida."
            : "Page not found. The link may be outdated or the page has been moved."}
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-surface transition-all hover:opacity-90"
          >
            {locale === "pt" ? "← Voltar ao início" : "← Back to home"}
          </Link>
          <Link
            href="https://wa.me/5516992333344?text=Oi%2C%20vim%20pelo%20site%20e%20n%C3%A3o%20encontrei%20uma%20p%C3%A1gina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-border/20"
          >
            {locale === "pt" ? "Fale comigo" : "Talk to me"}
          </Link>
        </div>
      </div>
    </main>
  );
}
