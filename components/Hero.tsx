"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import { duration, easeLuxury } from "@/lib/motion";
import { hero, site } from "@/lib/content";
import { HeroAmbience } from "./motion/HeroAmbience";
import { MagneticLink } from "./motion/MagneticLink";
import { Reveal } from "./motion/Reveal";
import { TextReveal } from "./motion/TextReveal";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";

/* ─── Scroll Progress Bar ─── */
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[100]"
      style={{
        scaleX: scrollYProgress,
        background: 'linear-gradient(90deg, var(--brand), var(--brand-light))',
      }}
    />
  );
}

/* ─── Floating particles ─── */
function FloatingParticles() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  const particles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: [15, 25, 35, 85, 75, 65][i],
    y: [20, 70, 45, 30, 75, 55][i],
    size: [3, 2, 4, 2, 3, 2][i],
    delay: i * 1.5,
    duration: 8 + i * 2,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: 'var(--brand-light)',
            opacity: 0.25,
          }}
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Stats block ─── */
function StatItem({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      className="stat-block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: duration.base, ease: easeLuxury }}
    >
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </motion.div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, 60]);

  return (
    <>
      <ScrollProgressBar />
      <section className="relative min-h-[100dvh] overflow-hidden border-b border-border">
        <HeroAmbience />
        <FloatingParticles />

        {/* Grid lines */}
        <div
          className="pointer-events-none absolute inset-0 grid-lines opacity-[0.025]"
          aria-hidden
        />

        <motion.div
          style={reduce ? undefined : { opacity: heroOpacity, y: heroY }}
          className="relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-center px-5 pb-20 pt-24 md:px-8 md:pt-28"
        >
          {/* Logo with entrance */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.85, filter: "blur(16px)" }}
            animate={reduce ? undefined : { opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: duration.slow, ease: easeLuxury }}
          >
            <Logo variant="icon" iconClassName="h-16 w-16 md:h-20 md:w-20" className="mb-8" />
          </motion.div>

          {/* Badge */}
          <Reveal delay={0.04} variant="fade">
            <div className="badge mb-4 w-fit">
              <span className="dot-pulse" />
              <span>{site.credential} · {site.location}</span>
            </div>
          </Reveal>

          {/* Headline with word reveal */}
          <TextReveal
            as="h1"
            text={hero.title}
            className="mt-3 text-[clamp(3rem,9vw,6rem)] font-semibold leading-[1.0] tracking-[-0.04em] text-foreground"
          />

          {/* Subtitle */}
          <Reveal delay={0.18} variant="up">
            <p className="mt-5 max-w-3xl text-lg font-semibold text-gradient-brand md:text-xl">
              {hero.subtitle}
            </p>
          </Reveal>

          {/* Lead text */}
          <Reveal delay={0.25} variant="up">
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-[17px]">
              {hero.lead}
            </p>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delay={0.32} variant="scale">
            <motion.div
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: duration.base, ease: easeLuxury }}
            >
              <MagneticLink
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                {hero.ctaWhatsapp}
                <ArrowRight className="h-3.5 w-3.5 opacity-60 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" aria-hidden />
              </MagneticLink>
              <MagneticLink
                href={`mailto:${site.email}`}
                className="btn-secondary"
              >
                <Mail className="h-4 w-4" aria-hidden />
                {hero.ctaEmail}
              </MagneticLink>
            </motion.div>
          </Reveal>

          {/* Social links */}
          <Reveal delay={0.38} variant="fade">
            <SocialLinks className="mt-10" />
          </Reveal>

          {/* Stats row */}
          <motion.div
            className="mt-14 flex flex-wrap gap-x-8 gap-y-4"
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.8 }}
          >
            <StatItem value="CRF/SP" label="Registro ativo" delay={0.7} />
            <div className="hidden sm:block w-px bg-border" />
            <StatItem value="Saúde + Tech" label="Dupla atuação" delay={0.78} />
            <div className="hidden sm:block w-px bg-border" />
            <StatItem value="n8n · AI" label="Stack principal" delay={0.86} />
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            aria-hidden
          >
            <motion.div
              className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1.5"
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="h-1.5 w-0.5 rounded-full bg-muted" />
            </motion.div>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted/50">scroll</span>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
