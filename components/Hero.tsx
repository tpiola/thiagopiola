"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Mail, MessageCircle, ArrowRight, TrendingUp } from "lucide-react";
import { duration, easeLuxury } from "@/lib/motion";
import { hero, heroEn, site } from "@/lib/content";
import { cn } from "@/lib/utils";
import { trackCta } from "@/lib/analytics";
import { HeroAmbience } from "./motion/HeroAmbience";
import { MagneticLink } from "./motion/MagneticLink";
import { Reveal } from "./motion/Reveal";
import { ProfilePortrait } from "./ProfilePortrait";
import { SocialLinks } from "./SocialLinks";
import { LinkedinIcon } from "./SocialIcons";
import Link from "next/link";

/** Typewriter effect — digita o texto caractere por caractere após um delay */
function TypewriterText({ text, className }: { text: string; className?: string }) {
  const [displayed, setDisplayed] = useState("");
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setDisplayed(text);
      return;
    }

    // Espera a animação de entrada do Reveal (delay 0.22 + animação ~0.5s)
    const startTimeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, 40);
    }, 720); // 0.22s * 1000 + ~500ms de animação

    return () => clearTimeout(startTimeout);
  }, [text, reduce]);

  return (
    <p className={className}>
      {displayed}
      {!reduce && displayed.length < text.length && (
        <span className="typewriter-cursor" />
      )}
    </p>
  );
}

export function Hero() {
  const [locale, setLocale] = useState<"pt" | "en">("pt");
  const copy = locale === "pt" ? hero : heroEn;
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, 60]);

  return (
    <section className="relative min-h-[100dvh] overflow-hidden border-b border-border">
      <HeroAmbience />
      <motion.div
        style={reduce ? undefined : { opacity: heroOpacity, y: heroY }}
        className="relative mx-auto grid min-h-[100dvh] max-w-6xl items-center gap-10 px-5 pb-20 pt-24 lg:grid-cols-[1fr_minmax(220px,280px)] lg:gap-12 md:px-8 md:pt-28"
      >
        <div className="flex flex-col justify-center">
          <Reveal delay={0.04} variant="fade">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <div className="badge w-fit">
                <span className="dot-pulse" />
                <span>{site.credential} · {site.location}</span>
              </div>
              <div className="inline-flex rounded-lg border border-border p-0.5">
                {(["pt", "en"] as const).map((code) => (
                  <button key={code} type="button"
                    className={cn("rounded-md px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors",
                      locale === code ? "bg-[var(--brand)] text-white" : "text-muted hover:text-foreground")}
                    onClick={() => setLocale(code)} aria-pressed={locale === code}>{code}</button>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} variant="up">
            <h1 className="text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-foreground">
              <motion.span className="block"
                initial={reduce ? false : { opacity: 0, y: 40 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: duration.slow, ease: easeLuxury }}>
                {copy.titleLine1}
              </motion.span>
              <motion.span className="block text-gradient-brand"
                initial={reduce ? false : { opacity: 0, y: 40 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: duration.slow, ease: easeLuxury }}>
                {copy.titleLine2}
              </motion.span>
            </h1>
          </Reveal>

          <Reveal delay={0.22} variant="up">
            <TypewriterText
              text={copy.subtitle}
              className="mt-6 max-w-xl text-lg font-semibold leading-snug text-foreground md:text-xl"
            />
          </Reveal>

          <Reveal delay={0.28} variant="up">
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-[17px]">
              {copy.lead}
            </p>
          </Reveal>

          <Reveal delay={0.33} variant="fade">
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-[var(--brand)]/20 bg-[color-mix(in_srgb,var(--brand)_5%,transparent)] px-4 py-2.5">
              <TrendingUp className="h-3.5 w-3.5 text-[var(--brand)]" aria-hidden />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted">Founder</span>
              <span className="h-3 w-px bg-border" />
              <a href={site.reidasvendas} target="_blank" rel="noopener noreferrer"
                className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--brand)] underline-offset-2 hover:underline">
                reidasvendas.com.br
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.38} variant="scale">
            <motion.div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: duration.base, ease: easeLuxury }}>
              <MagneticLink href={site.whatsapp} target="_blank" rel="noopener noreferrer"
                className="btn-primary group" onClick={() => trackCta("cta_whatsapp_click")}>
                <MessageCircle className="h-4 w-4" aria-hidden />
                {hero.ctaWhatsapp}
                <ArrowRight className="h-3.5 w-3.5 opacity-60 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-1" aria-hidden />
              </MagneticLink>
              <MagneticLink href={site.linkedin} target="_blank" rel="noopener noreferrer"
                className="btn-secondary group" onClick={() => trackCta("cta_linkedin_click")}>
                <LinkedinIcon className="h-4 w-4" aria-hidden />
                {hero.ctaLinkedin}
              </MagneticLink>
              <MagneticLink href={`mailto:${site.email}`} className="btn-secondary" onClick={() => trackCta("cta_email_click")}>
                <Mail className="h-4 w-4" aria-hidden />
                {hero.ctaEmail}
              </MagneticLink>
              <Link href={site.industriaUrl}
                className="btn-secondary group font-semibold">
                {hero.ctaIndustria}
              </Link>
            </motion.div>
          </Reveal>

          <Reveal delay={0.42} variant="fade">
            <SocialLinks className="mt-10" />
          </Reveal>
        </div>

        <div className="hidden lg:block"><ProfilePortrait /></div>

        <motion.div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:flex flex-col items-center gap-2 lg:left-[40%]"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }} aria-hidden>
          <motion.div className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1.5"
            animate={{ y: [0, 7, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}>
            <span className="h-1.5 w-0.5 rounded-full bg-muted" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
