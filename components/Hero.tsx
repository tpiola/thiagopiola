"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { hero, site, socialLinks } from "@/lib/content";
import { FloatingIcons } from "./FloatingIcons";
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
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  /* Parallax: bg slides down, content fades up on scroll */
  const bgY = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 110]);
  const contentY = useTransform(scrollY, [0, 500], [0, reduce ? 0 : -55]);
  const contentOpacity = useTransform(scrollY, [0, 380], [1, reduce ? 1 : 0]);

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] overflow-hidden bg-[#07090f]">
      {/* ── Parallax video / gradient background ──────────────── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
        aria-hidden
      >
        {/* Drop /public/videos/hero-loop.mp4 to activate */}
        <video
          autoPlay muted loop playsInline
          className="h-full w-full object-cover opacity-[0.16]"
          src="/videos/hero-loop.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090f]/90 via-[#07090f]/55 to-[#07090f]" />
      </motion.div>

      {/* ── Grid texture ─────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 100% 60% at 50% 0%,black 20%,transparent 78%)",
        }}
        aria-hidden
      />

      {/* ── Accent glow (bottom-left) ─────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 5% 65%,rgba(0,102,204,0.12),transparent)",
        }}
        aria-hidden
      />

      {/* ── Floating 3D icons ─────────────────────────────────── */}
      <FloatingIcons />

      {/* ── Main content (parallax scroll) ────────────────────── */}
      <motion.div
        className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-center px-5 pb-20 pt-28 sm:px-8 md:px-12 lg:px-16"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          variants={reduce ? undefined : container}
          initial={reduce ? undefined : "hidden"}
          animate={reduce ? undefined : "show"}
        >
          {/* Eyebrow */}
          <motion.p
            variants={reduce ? undefined : fadeUp}
            className="font-mono text-[10px] uppercase tracking-[0.26em] text-white/28 sm:text-[11px]"
          >
            {site.credential}&nbsp;&nbsp;·&nbsp;&nbsp;{site.location}
          </motion.p>

          {/* Headline — pattern interrupt */}
          <motion.h1
            variants={reduce ? undefined : fadeUp}
            className="mt-5 text-[clamp(3rem,9.5vw,7.5rem)] font-black leading-[0.88] tracking-[-0.04em] text-white"
          >
            {hero.headline.split("\n").map((line, i) => (
              <span key={i} className={i === 1 ? "block text-white/28" : "block"}>
                {line}
              </span>
            ))}
          </motion.h1>

          {/* Sub — accent blue, short and specific */}
          <motion.p
            variants={reduce ? undefined : fadeUp}
            className="mt-6 text-[clamp(0.95rem,2.2vw,1.2rem)] font-semibold text-[#0066CC]"
          >
            {hero.sub}
          </motion.p>

          {/* Lead — presupposition + scarcity */}
          <motion.p
            variants={reduce ? undefined : fadeUp}
            className="mt-3 max-w-[44ch] text-[clamp(0.875rem,1.8vw,1rem)] leading-relaxed text-white/45"
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
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/14 bg-white/7 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/26 hover:bg-white/11 active:scale-[0.97]"
            >
              <Download className="h-4 w-4 opacity-55" />
              {hero.ctaPrimary}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0066CC] px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-[#0055BB] active:scale-[0.97]"
            >
              {hero.ctaSecondary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* Social + contact strip */}
          <motion.div
            variants={reduce ? undefined : fadeUp}
            className="mt-14 flex flex-wrap items-center gap-6 border-t border-white/7 pt-8"
          >
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
                    className="text-white/22 transition-colors hover:text-white/75"
                  >
                    <Icon className="h-[17px] w-[17px]" />
                  </a>
                );
              })}
            </div>
            <span className="hidden h-3.5 w-px bg-white/10 sm:block" aria-hidden />
            <a href={site.phoneHref} className="text-sm text-white/28 hover:text-white/65 transition-colors">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="hidden text-sm text-white/28 hover:text-white/65 transition-colors md:inline">
              {site.email}
            </a>
          </motion.div>
        </motion.div>

        {/* Photo placeholder — desktop right column */}
        {/* Replace with <Image src="/images/thiago-piola.jpg" fill priority quality={95} className="object-cover object-top" /> */}
        <div
          className="pointer-events-none absolute bottom-0 right-0 hidden h-[90%] w-[34%] lg:block"
          aria-hidden
        >
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(to right,#07090f 0%,transparent 42%),linear-gradient(to top,#07090f 0%,transparent 22%)",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
