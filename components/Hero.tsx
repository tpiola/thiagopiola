"use client";

import { Mail, MessageCircle } from "lucide-react";
import { hero, site } from "@/lib/content";
import { AnimateIn } from "./AnimateIn";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% 0%, color-mix(in srgb, var(--brand) 18%, transparent), transparent)",
        }}
      />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-center px-5 pb-16 pt-24 md:px-8 md:pt-28">
        <AnimateIn>
          <Logo variant="icon" iconClassName="h-16 w-16 md:h-20 md:w-20" className="mb-8" />
        </AnimateIn>

        <AnimateIn delay={0.05}>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            {site.credential} · {site.location}
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <h1 className="mt-3 text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-foreground">
            {hero.title}
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.14}>
          <p className="mt-4 max-w-3xl text-lg font-medium text-[var(--brand)] md:text-xl">
            {hero.subtitle}
          </p>
        </AnimateIn>

        <AnimateIn delay={0.18}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {hero.lead}
          </p>
        </AnimateIn>

        <AnimateIn delay={0.22}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[var(--brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[var(--brand)]/20 transition-all hover:brightness-110 active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              {hero.ctaWhatsapp}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border bg-surface-elevated px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-[var(--brand)]/50"
            >
              <Mail className="h-4 w-4" aria-hidden />
              {hero.ctaEmail}
            </a>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.26}>
          <SocialLinks className="mt-10" />
        </AnimateIn>
      </div>
    </section>
  );
}
