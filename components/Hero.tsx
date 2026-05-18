"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { hero, site, socialLinks } from "@/lib/content";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XTwitterIcon } from "./SocialIcons";

const iconMap = {
  LinkedIn: LinkedinIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  X: XTwitterIcon,
} as const;

import type { Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-black">
      {/* ─── Video background ─────────────────────────────── */}
      {/* Drop hero-loop.mp4 into /public/videos/ to activate */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-25"
          src="/videos/hero-loop.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
      </div>

      {/* ─── Grid texture ─────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 90% 60% at 50% 0%, black 30%, transparent 80%)",
        }}
        aria-hidden
      />

      {/* ─── Accent glow ──────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 20% 50%, rgba(0,102,204,0.18), transparent)",
        }}
        aria-hidden
      />

      {/* ─── Content ──────────────────────────────────────── */}
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-center px-6 pb-24 pt-32 md:px-12 lg:px-16">
        <motion.div
          variants={reduce ? undefined : container}
          initial={reduce ? undefined : "hidden"}
          animate={reduce ? undefined : "show"}
        >
          {/* Eyebrow */}
          <motion.p
            variants={reduce ? undefined : item}
            className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/35"
          >
            {site.credential}&nbsp;·&nbsp;{site.location}
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={reduce ? undefined : item}
            className="mt-5 max-w-5xl text-[clamp(2.6rem,7vw,6rem)] font-black leading-[0.93] tracking-tighter text-white"
          >
            Farmácia e Engenharia de IA
            <span className="block text-white/35">
              combinadas para acelerar resultados.
            </span>
          </motion.h1>

          {/* Lead */}
          <motion.p
            variants={reduce ? undefined : item}
            className="mt-8 max-w-xl text-base leading-relaxed text-white/55 md:text-[17px]"
          >
            {hero.lead}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={reduce ? undefined : item}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="/curriculo-thiago-piola.pdf"
              download
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/8 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/12"
            >
              <Download className="h-4 w-4 opacity-70" />
              {hero.ctaPrimary}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0066CC] px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-[#0055BB]"
            >
              {hero.ctaSecondary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* Bottom bar */}
          <motion.div
            variants={reduce ? undefined : item}
            className="mt-14 flex flex-wrap items-center gap-6 border-t border-white/8 pt-8 text-sm text-white/30"
          >
            <a href={site.phoneHref} className="transition-colors hover:text-white/70">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-white/70">
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
                    aria-label={label}
                    className="transition-colors hover:text-white/70"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* ─── Photo placeholder ────────────────────────────── */}
        {/* Replace this div with <Image> pointing to /public/images/thiago-piola.jpg */}
        <div
          className="pointer-events-none absolute bottom-0 right-0 hidden h-[88%] w-[38%] lg:block"
          aria-hidden
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, black 0%, transparent 35%), linear-gradient(to top, black 0%, transparent 30%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
