"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { duration, easeLuxury } from "@/lib/motion";
import { hero, site } from "@/lib/content";
import { HeroAmbience } from "./motion/HeroAmbience";
import { MagneticLink } from "./motion/MagneticLink";
import { Reveal } from "./motion/Reveal";
import { TextReveal } from "./motion/TextReveal";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] overflow-hidden border-b border-border">
      <HeroAmbience />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-center px-5 pb-20 pt-24 md:px-8 md:pt-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.88, filter: "blur(12px)" }}
          animate={reduce ? undefined : { opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: duration.slow, ease: easeLuxury }}
        >
          <Logo variant="icon" iconClassName="h-16 w-16 md:h-20 md:w-20" className="mb-8" />
        </motion.div>

        <Reveal delay={0.05} variant="fade">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            {site.credential} · {site.location}
          </p>
        </Reveal>

        <TextReveal
          as="h1"
          text={hero.title}
          className="mt-3 text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-foreground"
        />

        <Reveal delay={0.2} variant="up">
          <p className="mt-4 max-w-3xl text-lg font-medium text-[var(--brand)] md:text-xl">
            {hero.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.28} variant="up">
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {hero.lead}
          </p>
        </Reveal>

        <Reveal delay={0.34} variant="scale">
          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: duration.base, ease: easeLuxury }}
          >
            <MagneticLink
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[var(--brand)]/25 transition-[box-shadow,filter] hover:shadow-xl hover:shadow-[var(--brand)]/30 hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              {hero.ctaWhatsapp}
            </MagneticLink>
            <MagneticLink
              href={`mailto:${site.email}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-surface-elevated/80 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-[var(--brand)]/50 hover:bg-surface-elevated"
            >
              <Mail className="h-4 w-4" aria-hidden />
              {hero.ctaEmail}
            </MagneticLink>
          </motion.div>
        </Reveal>

        <Reveal delay={0.4} variant="fade">
          <SocialLinks className="mt-10" />
        </Reveal>

        <motion.div
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          aria-hidden
        >
          <motion.div
            className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1.5"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="h-1.5 w-0.5 rounded-full bg-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
