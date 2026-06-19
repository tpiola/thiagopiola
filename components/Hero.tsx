"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useReducedMotion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { MessageCircle, TrendingUp, Sparkles, ShieldCheck } from "lucide-react";
import { duration, easeLuxury, spring, easeOutExpo } from "@/lib/motion";
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

interface HeroProps {
  sectionType?: "default" | "unified";
}

/* ─── Palavras que alternam (tipo máquina de escrever hipnótica) ─── */
const rotatingWords = [
  "Crescer",
  "Vender Mais",
  "Reduzir Perdas",
  "Escalar Resultados",
  "Superar Metas",
];

/** Partículas CSS animadas (perfomáticas, sem canvas em mobile) */
function useReduced() {
  return useReducedMotion();
}

export function Hero({ sectionType = "default" }: HeroProps) {
  const [locale, setLocale] = useState<"pt" | "en">("pt");
  const copy = locale === "pt" ? hero : heroEn;
  const reduce = useReduced();
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, 60]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.975]);
  const [wordIndex, setWordIndex] = useState(0);

  /* Rotação de palavras */
  useEffect(() => {
    if (reduce) return;
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [reduce]);

  const ctaSound = useCallback(() => {
    trackCta("cta_whatsapp_click");
  }, []);

  return (
    <section
      className="relative min-h-[100dvh] overflow-hidden border-b border-border"
      aria-label="Hero principal"
    >
      <HeroAmbience />

      {/* Gradiente de luz no topo */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[60vh] opacity-30 dark:opacity-20"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, color-mix(in srgb, var(--brand) 35%, transparent), transparent)",
        }}
        aria-hidden
      />

      <motion.div
        style={reduce ? undefined : { opacity: heroOpacity, y: heroY, scale: heroScale }}
        className="relative mx-auto grid min-h-[100dvh] max-w-6xl items-center gap-10 px-5 pb-24 pt-28 lg:grid-cols-[1fr_minmax(220px,280px)] lg:gap-12 md:px-8 md:pt-28"
      >
        <div className="flex flex-col justify-center pt-6 sm:pt-0">
          {/* ─── Badge de credibilidade + locale ─── */}
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: -12, scale: 0.95 }}
              animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.05, duration: 0.5, ease: easeOutExpo }}
              className="badge w-fit"
            >
              <span className="dot-pulse" />
              <span>{site.credential} · {site.location}</span>
            </motion.div>
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.9 }}
              animate={reduce ? undefined : { opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex rounded-lg border border-border p-0.5"
            >
              {(["pt", "en"] as const).map((code) => (
                <button key={code} type="button"
                  className={cn("rounded-md px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors",
                    locale === code ? "bg-[var(--brand)] text-white" : "text-muted hover:text-foreground")}
                  onClick={() => setLocale(code)} aria-pressed={locale === code}>{code}</button>
              ))}
            </motion.div>
          </div>

          {/* ─── TÍTULO PRINCIPAL — TAGLINE DO PDF ─── */}
          <motion.h1
            className="text-[clamp(2.5rem,9vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-foreground"
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.7, ease: easeLuxury }}
          >
            <motion.span
              className="block"
              initial={reduce ? false : { opacity: 0, y: 50, filter: "blur(12px)" }}
              animate={reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.15, duration: duration.slow, ease: easeLuxury }}
            >
              Farmácia, campo e tecnologia
            </motion.span>
            <motion.span
              className="block text-gradient-brand"
              initial={reduce ? false : { opacity: 0, y: 50, filter: "blur(12px)" }}
              animate={reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.25, duration: duration.slow, ease: easeLuxury }}
            >
              aplicados à evolução da saúde.
            </motion.span>
          </motion.h1>

          {/* ─── Subtítulo com selo de autoridade ─── */}
          <motion.div
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6, ease: easeOutExpo }}
          >
            <span className="inline-flex items-center gap-2 text-base font-bold tracking-tight text-foreground md:text-lg">
              <ShieldCheck className="h-4 w-4 text-[var(--brand)]" aria-hidden />
              {copy.subtitleBefore}
            </span>
            <span className="hidden h-4 w-px bg-border sm:block" aria-hidden />
            <span className="inline-flex items-center gap-2 text-base font-bold tracking-tight text-foreground md:text-lg">
              <TrendingUp className="h-4 w-4 text-[var(--brand)]" aria-hidden />
              {copy.subtitleAfter}
            </span>
          </motion.div>

          {/* ─── DESCRIÇÃO PRINCIPAL (PDF Prompt Gabaritado) ─── */}
          <motion.p
            className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted md:text-[16px]"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.6, ease: easeOutExpo }}
          >
            {copy.description}
          </motion.p>

          {/* ─── PALAVRA ROTATIVA HIPNÓTICA ─── */}
          {!reduce && (
            <motion.div
              className="mt-5 flex items-center gap-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Sparkles className="h-3.5 w-3.5 text-[var(--brand)] shrink-0" aria-hidden />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                Seu próximo passo:
              </span>
              <span className="relative inline-block h-[1.2em] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    className="block font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand)]"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.div>
          )}

          {/* ─── CTAs — LinkedIn (principal) + Trajetória (secundário) + WhatsApp (ícone) ─── */}
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6, ease: easeOutExpo }}
          >
            <MagneticLink href={site.linkedin} target="_blank" rel="noopener noreferrer"
              className="btn-primary group relative overflow-hidden" onClick={() => trackCta("cta_linkedin_click")}>
              <span className="gradient-shift pointer-events-none absolute inset-0 opacity-20" aria-hidden />
              <LinkedinIcon className="relative h-4 w-4" aria-hidden />
              <span className="relative">{copy.ctaPrincipal}</span>
            </MagneticLink>
            <a href="#trajetoria"
              className="btn-secondary group">
              <span className="relative">{copy.ctaSecundario}</span>
            </a>
            <MagneticLink href={site.whatsapp} target="_blank" rel="noopener noreferrer"
              className="btn-secondary group relative overflow-hidden"
              onClick={ctaSound}
              aria-label="Contato via WhatsApp">
              <MessageCircle className="relative h-4 w-4" aria-hidden />
            </MagneticLink>
            <Link href={site.industriaUrl}
              className="btn-secondary group font-semibold">
              {copy.ctaIndustria}
            </Link>
          </motion.div>

          {/* ─── Micro-cópia persuasiva (escassez + reciprocidade) ─── */}
          <motion.p
            className="mt-3 text-[11px] text-muted/60 font-mono tracking-wider"
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {copy.microCta}
          </motion.p>

          {/* ─── Social Proof ─── */}
          <Reveal delay={0.6} variant="fade">
            <SocialLinks className="mt-8" />
          </Reveal>

          {/* ─── Founder tag ─── */}
          <Reveal delay={0.65} variant="fade">
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
        </div>

        {/* ─── Portrait ─── */}
        <div className="hidden lg:block">
          <ProfilePortrait />
        </div>

        {/* ─── Scroll indicator ─── */}
        <motion.div
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:flex flex-col items-center gap-2 lg:left-[40%]"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }} aria-hidden>
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-muted/40">
            Role para explorar
          </span>
          <motion.div className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1.5"
            animate={{ y: [0, 7, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}>
            <span className="h-1.5 w-0.5 rounded-full bg-muted" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
