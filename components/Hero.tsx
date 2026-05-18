"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { hero, site, socialLinks } from "@/lib/content";
import { FloatingIcons } from "./FloatingIcons";
import { FacebookIcon, InstagramIcon, LinkedinIcon, WhatsAppIcon, XTwitterIcon } from "./SocialIcons";

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
  const bgY = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 110]);
  const contentY = useTransform(scrollY, [0, 500], [0, reduce ? 0 : -55]);
  const contentOpacity = useTransform(scrollY, [0, 380], [1, reduce ? 1 : 0]);

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] overflow-hidden bg-[#07090f]">
      {/* ── Parallax video / gradient background ──────────────── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }} aria-hidden>
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

      {/* ── Accent glow ─────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: "radial-gradient(ellipse 60% 50% at 5% 65%,rgba(0,102,204,0.12),transparent)" }}
        aria-hidden
      />

      <FloatingIcons />

      {/* ── Main content ────────────────────────────────────── */}
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

          {/* Full name */}
          <motion.p
            variants={reduce ? undefined : fadeUp}
            className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 sm:text-xs"
          >
            Thiago Biasoli Garcia Piola
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={reduce ? undefined : fadeUp}
            className="mt-4 text-[clamp(3rem,9.5vw,7.5rem)] font-black leading-[0.88] tracking-[-0.04em] text-white"
          >
            {hero.headline.split("\n").map((line, i) => (
              <span key={i} className={i === 1 ? "block text-white/28" : "block"}>
                {line}
              </span>
            ))}
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={reduce ? undefined : fadeUp}
            className="mt-6 text-[clamp(0.95rem,2.2vw,1.2rem)] font-semibold text-[#0066CC]"
          >
            {hero.sub}
          </motion.p>

          {/* Lead */}
          <motion.p
            variants={reduce ? undefined : fadeUp}
            className="mt-3 max-w-[44ch] text-[clamp(0.875rem,1.8vw,1rem)] leading-relaxed text-white/45"
          >
            {hero.lead}
          </motion.p>

          {/* Founder badge */}
          <motion.div variants={reduce ? undefined : fadeUp} className="mt-4">
            <a
              href={site.reidasVendas}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 font-mono text-[10px] uppercase tracking-wider text-white/40 transition-all hover:border-white/22 hover:text-white/70"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#0066CC]" />
              Founder · Rei das Vendas
            </a>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={reduce ? undefined : fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={site.whatsappWithMessage}
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
            <div className="flex items-center gap-5">
              {socialLinks.map(({ href, label }) => {
                const Icon = iconMap[label as keyof typeof iconMap];
                return (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="text-white/50 transition-colors hover:text-white/90"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>
            <span className="hidden h-3.5 w-px bg-white/10 sm:block" aria-hidden />
            <a
              href={site.whatsappWithMessage}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-white/38 transition-colors hover:text-white/75"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="hidden items-center gap-2 text-sm text-white/38 transition-colors hover:text-white/75 md:flex"
            >
              <Mail className="h-4 w-4 text-white/40" />
              {site.email}
            </a>
          </motion.div>
        </motion.div>

        {/* Photo placeholder — desktop right column */}
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
