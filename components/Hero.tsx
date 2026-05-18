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
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: "easeOut" } },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-black">
      {/* ── Video bg ── drop /public/videos/hero-loop.mp4 to activate */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <video
          autoPlay muted loop playsInline
          className="h-full w-full object-cover opacity-[0.18]"
          src="/videos/hero-loop.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black" />
      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 100% 55% at 50% 0%,black 25%,transparent 80%)",
        }}
        aria-hidden
      />

      {/* Blue glow */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 10% 60%,rgba(0,102,204,0.13),transparent)",
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-center px-5 pb-20 pt-28 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          variants={reduce ? undefined : container}
          initial={reduce ? undefined : "hidden"}
          animate={reduce ? undefined : "show"}
        >
          {/* Eyebrow */}
          <motion.p
            variants={reduce ? undefined : fadeUp}
            className="font-mono text-[10px] uppercase tracking-[0.26em] text-white/30 sm:text-[11px]"
          >
            {site.credential}&nbsp;&nbsp;·&nbsp;&nbsp;{site.location}
          </motion.p>

          {/* Headline — the pattern interrupt */}
          <motion.h1
            variants={reduce ? undefined : fadeUp}
            className="mt-5 text-[clamp(3rem,9vw,7rem)] font-black leading-[0.88] tracking-[-0.04em] text-white"
          >
            {hero.headline.split("\n").map((line, i) => (
              <span key={i} className={i === 1 ? "block text-white/30" : "block"}>
                {line}
              </span>
            ))}
          </motion.h1>

          {/* Sub — high contrast with accent */}
          <motion.p
            variants={reduce ? undefined : fadeUp}
            className="mt-6 text-[clamp(1rem,2.5vw,1.25rem)] font-semibold text-[#0066CC]"
          >
            {hero.sub}
          </motion.p>

          {/* Lead — NLP scarcity presupposition */}
          <motion.p
            variants={reduce ? undefined : fadeUp}
            className="mt-4 max-w-md text-[clamp(0.875rem,2vw,1rem)] leading-relaxed text-white/50"
          >
            {hero.lead}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={reduce ? undefined : fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="/curriculo-thiago-piola.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/8 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/28 hover:bg-white/12 active:scale-[0.98]"
            >
              <Download className="h-4 w-4 opacity-60" />
              {hero.ctaPrimary}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0066CC] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#0055BB] active:scale-[0.98]"
            >
              {hero.ctaSecondary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Social + contact bar */}
          <motion.div
            variants={reduce ? undefined : fadeUp}
            className="mt-14 flex flex-wrap items-center gap-6 border-t border-white/8 pt-8"
          >
            {/* Social icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map(({ href, label }) => {
                const Icon = iconMap[label as keyof typeof iconMap];
                return (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="text-white/25 transition-colors hover:text-white/80"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>

            <span className="hidden h-4 w-px bg-white/10 sm:block" aria-hidden />

            <a
              href={site.phoneHref}
              className="text-sm text-white/30 transition-colors hover:text-white/70"
            >
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="hidden text-sm text-white/30 transition-colors hover:text-white/70 md:inline"
            >
              {site.email}
            </a>
          </motion.div>
        </motion.div>

        {/* Photo placeholder — desktop right column */}
        {/* Replace with <Image src="/images/thiago-piola.jpg" fill className="object-cover object-top" /> */}
        <div
          className="pointer-events-none absolute bottom-0 right-0 hidden h-[88%] w-[34%] lg:block"
          aria-hidden
        >
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(to right,black 0%,transparent 40%),linear-gradient(to top,black 0%,transparent 22%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
