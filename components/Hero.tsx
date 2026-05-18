"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { hero, site, socialLinks } from "@/lib/content";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XTwitterIcon } from "./SocialIcons";

const iconMap = {
  LinkedIn: LinkedinIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  X: XTwitterIcon,
} as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.78, ease: "easeOut" } },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-black">
      {/* ── Video background ────────────────────────────────────────
          Drop /public/videos/hero-loop.mp4 to activate.
          Without the file the gradient below renders instead.
      ──────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-[0.22]"
          src="/videos/hero-loop.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black" />
      </div>

      {/* ── Grid texture overlay ────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 90% 60% at 50% 0%, black 20%, transparent 75%)",
        }}
        aria-hidden
      />

      {/* ── Accent glow ─────────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 15% 55%, rgba(0,102,204,0.15), transparent)",
        }}
        aria-hidden
      />

      {/* ── Main content ────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-center px-5 pb-20 pt-28 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          variants={reduce ? undefined : container}
          initial={reduce ? undefined : "hidden"}
          animate={reduce ? undefined : "show"}
        >
          {/* Eyebrow */}
          <motion.p
            variants={reduce ? undefined : fadeUp}
            className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/35 sm:text-[11px]"
          >
            {site.credential}&nbsp;&nbsp;·&nbsp;&nbsp;{site.location}
          </motion.p>

          {/* Headline — responsive fluid sizing */}
          <motion.h1
            variants={reduce ? undefined : fadeUp}
            className="mt-5 max-w-[16ch] text-[clamp(2.4rem,8vw,6.2rem)] font-black leading-[0.92] tracking-[-0.03em] text-white"
          >
            O farmacêutico que também engenheira{" "}
            <span className="text-white/35">Inteligência Artificial.</span>
          </motion.h1>

          {/* Lead */}
          <motion.p
            variants={reduce ? undefined : fadeUp}
            className="mt-7 max-w-lg text-[clamp(0.9rem,2.5vw,1.1rem)] leading-relaxed text-white/55"
          >
            {hero.lead}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={reduce ? undefined : fadeUp}
            className="mt-9 flex flex-col gap-3 xs:flex-row xs:items-center sm:flex-row"
          >
            <a
              href="/curriculo-thiago-piola.pdf"
              download
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/8 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/12 active:scale-[0.98]"
            >
              <Download className="h-4 w-4 opacity-70" />
              {hero.ctaPrimary}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0066CC] px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-[#0055BB] active:scale-[0.98]"
            >
              {hero.ctaSecondary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* Bottom bar */}
          <motion.div
            variants={reduce ? undefined : fadeUp}
            className="mt-14 flex flex-wrap items-center gap-5 border-t border-white/8 pt-8"
          >
            <a
              href={site.phoneHref}
              className="text-sm text-white/30 transition-colors hover:text-white/70"
            >
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="hidden text-sm text-white/30 transition-colors hover:text-white/70 sm:inline"
            >
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
                    className="text-white/30 transition-colors hover:text-white/70"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Photo placeholder (right side, desktop only) ─────────
            Replace with <Image> pointing to /public/images/thiago-piola.jpg
        ──────────────────────────────────────────────────────────── */}
        <div
          className="pointer-events-none absolute bottom-0 right-0 hidden h-[90%] w-[36%] lg:block"
          aria-hidden
        >
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(to right, black 0%, transparent 40%), linear-gradient(to top, black 0%, transparent 25%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
