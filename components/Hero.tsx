"use client";

import { ArrowRight } from "lucide-react";
import { hero, site, socialLinks } from "@/lib/content";
import { AnimateIn } from "./AnimateIn";
import { Logo } from "./Logo";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XTwitterIcon } from "./SocialIcons";

const iconMap = {
  LinkedIn: LinkedinIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  X: XTwitterIcon,
} as const;

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden border-b border-border">
      {/* Fundo técnico — sem vídeo stock */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-60"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, var(--accent-muted), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, var(--accent-muted), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-center px-5 pb-20 pt-28 md:px-8 md:pt-32">
        <AnimateIn>
          <Logo variant="icon" iconClassName="h-14 w-14 md:h-16 md:w-16" className="mb-10" />
        </AnimateIn>

        <AnimateIn delay={0.05}>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            {site.credential} · {site.location}
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            {hero.headline}
            <span className="block text-muted">{hero.subheadline}</span>
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {hero.lead}
          </p>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-foreground px-6 py-3.5 text-sm font-medium text-[var(--surface)] transition-opacity hover:opacity-90"
            >
              {hero.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#proposta"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-surface-elevated px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-accent/40"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.25}>
          <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-border pt-8 text-sm text-muted">
            <a href={site.phoneHref} className="hover:text-foreground">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-foreground">
              {site.email}
            </a>
            <div className="flex gap-3">
              {socialLinks.map(({ href, label }) => {
                const Icon = iconMap[label as keyof typeof iconMap];
                return (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted transition-colors hover:text-accent"
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
