"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, TrendingUp, Sparkles, ShieldCheck } from "lucide-react";
import { duration, easeLuxury, spring, easeOutExpo } from "@/lib/motion";
import { hero, heroEn, site, blog } from "@/lib/content";
import { cn } from "@/lib/utils";
import { trackCta } from "@/lib/analytics";
import { HeroAmbience } from "./motion/HeroAmbience";
import { MagneticLink } from "./motion/MagneticLink";
import { Reveal } from "./motion/Reveal";
import { ProfilePortrait } from "./ProfilePortrait";
import { SocialLinks } from "./SocialLinks";
import { LinkedinIcon } from "./SocialIcons";
import { useLocale } from "@/lib/i18n";

interface HeroProps {
  sectionType?: "default" | "unified";
}

/* Palavras que alternam (resultados, não motivação) */
const rotatingWords = [
  "Resultado",
  "Performance",
  "Eficiência",
  "Escala",
  "Inovação",
];

/** Partículas CSS animadas (perfomáticas, sem canvas em mobile) */
function useReduced() {
  return useReducedMotion();
}

export function Hero({ sectionType = "default" }: HeroProps) {
  const { locale } = useLocale();
  const copy = locale === "pt" ? hero : heroEn;
  const reduce = useReduced();
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, 60]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.975]);
  const [wordIndex, setWordIndex] = useState(0);
  const [typewriterText, setTypewriterText] = useState("");
  const [typewriterPhase, setTypewriterPhase] = useState<"typing" | "pause" | "deleting">("typing");

  /* Typewriter effect for rotating words */
  useEffect(() => {
    if (reduce) return;
    const currentWord = rotatingWords[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typewriterPhase === "typing") {
      if (typewriterText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setTypewriterText(currentWord.slice(0, typewriterText.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setTypewriterPhase("pause"), 1200);
      }
    } else if (typewriterPhase === "pause") {
      timeout = setTimeout(() => setTypewriterPhase("deleting"), 200);
    } else if (typewriterPhase === "deleting") {
      if (typewriterText.length > 0) {
        timeout = setTimeout(() => {
          setTypewriterText(typewriterText.slice(0, -1));
        }, 35);
      } else {
        setWordIndex((i) => (i + 1) % rotatingWords.length);
        setTypewriterPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [reduce, wordIndex, typewriterText, typewriterPhase]);

  const ctaSound = useCallback(() => {
    trackCta("cta_whatsapp_click");
  }, []);

  /* Parallax sutil para a foto de perfil */
  const portraitY = useTransform(scrollY, [0, 400], [0, -20]);

  return (
    <section
      className="relative min-h-[100dvh] overflow-hidden border-b border-border"
      aria-label={locale === "pt" ? "Hero principal" : "Main hero"}
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
        className="relative mx-auto grid min-h-[100dvh] max-w-6xl items-center gap-10 px-5 pb-24 pt-16 lg:grid-cols-[1fr_minmax(220px,280px)] lg:gap-12 md:px-8 md:pt-16"
      >
        <div className="flex flex-col justify-center pt-6 sm:pt-0 hero-content hero-gap-mobile">
          {/* Badge de credibilidade */}
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: -12, scale: 0.95 }}
              animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.05, duration: 0.5, ease: easeOutExpo }}
              className="badge w-fit glow-subtle"
            >
              <span className="dot-pulse" />
              <span>{site.credential} &middot; {site.location}</span>
            </motion.div>
          </div>
          <motion.h1
            className="text-[clamp(1.8rem,6vw,3.5rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-foreground"
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.7, ease: easeLuxury }}
          >
            <motion.span
              className="block text-gradient-animated"
              initial={reduce ? false : { opacity: 0, y: 50, filter: "blur(12px)" }}
              animate={reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.15, duration: duration.slow, ease: easeLuxury }}
            >
              Thiago Biasoli Garcia Piola
            </motion.span>
          </motion.h1>

          {/* Subtítulo com selo de autoridade */}
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

          {/* DESCRIÇÃO PRINCIPAL — card vitrine com destaque */}
          <motion.div
            className="relative mt-6 max-w-2xl overflow-hidden rounded-r-xl border-l-2 border-[var(--brand)]/40 bg-[color-mix(in_srgb,var(--brand)_3%,transparent)] pl-5 pr-6 py-4"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.6, ease: easeOutExpo }}
          >
            <Sparkles className="absolute right-3 top-3 h-3.5 w-3.5 text-[var(--brand)]/30" aria-hidden />
            <p className="text-[15px] leading-relaxed text-muted md:text-[16px]">
              {copy.description}
            </p>
          </motion.div>

          {/* PALAVRA ROTATIVA TYPEWRITER — prende atenção */}
          {!reduce && (
            <motion.div
              className="mt-5 flex items-center gap-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                {locale === "pt" ? "Seu próximo passo:" : "Your next step:"}
              </span>
              <span className="inline-flex items-center typewriter-cursor">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand)]">
                  {typewriterText || "\u00A0"}
                </span>
              </span>
            </motion.div>
          )}

          {/* CTAs — LinkedIn (principal) + WhatsApp (ícone) */}
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
            <MagneticLink href={site.whatsapp} target="_blank" rel="noopener noreferrer"
              className="btn-secondary group relative overflow-hidden border-glow"
              onClick={ctaSound}
              aria-label={locale === "pt" ? "Contato via WhatsApp" : "Contact via WhatsApp"}>
              <MessageCircle className="relative h-4 w-4" aria-hidden />
            </MagneticLink>
          </motion.div>

          {/* Micro-cópia persuasiva (escassez + reciprocidade) */}
          <motion.p
            className="mt-3 text-[11px] text-muted/60 font-mono tracking-wider"
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {copy.microCta}
          </motion.p>

          {/* Social Proof */}
          <Reveal delay={0.6} variant="fade">
            <SocialLinks className="mt-8" />
          </Reveal>

          {/* Founder tag */}
          <Reveal delay={0.65} variant="fade">
            <div className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-lg border border-[var(--brand)]/20 bg-[color-mix(in_srgb,var(--brand)_5%,transparent)] px-4 py-2.5">
              <span className="inline-flex items-center gap-2">
                <TrendingUp className="h-3.5 w-3.5 text-[var(--brand)]" aria-hidden />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted">Founder</span>
              </span>
              <span className="h-3 w-px bg-border" />
              <a href={site.reidasvendas} target="_blank" rel="noopener noreferrer"
                className="btn-secondary group font-mono text-[10px] font-bold uppercase tracking-[0.18em]">
                reidasvendas.com.br
              </a>
              <span className="h-3 w-px bg-border" />
              <a href="https://www.saudegpt.com" target="_blank" rel="noopener noreferrer"
                className="btn-secondary group font-mono text-[10px] font-bold uppercase tracking-[0.18em]">
                saudegpt.com
              </a>
              <span className="h-3 w-px bg-border" />
              <a href="https://www.thiagolab.com" target="_blank" rel="noopener noreferrer"
                className="btn-secondary group font-mono text-[10px] font-bold uppercase tracking-[0.18em]">
                thiagolab.com
              </a>
            </div>
          </Reveal>
        </div>

        {/* Portrait com parallax sutil */}
        <motion.div
          className="hidden lg:block"
          style={reduce ? undefined : { y: portraitY }}
        >
          <div className="float-subtle">
            <ProfilePortrait />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:flex flex-col items-center gap-2 lg:left-[40%]"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }} aria-hidden>
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-muted/40">
            {locale === "pt" ? "Role para explorar" : "Scroll to explore"}
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
