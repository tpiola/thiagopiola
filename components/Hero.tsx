"use client";

import { useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import { duration, easeLuxury } from "@/lib/motion";
import { hero, heroEn, site } from "@/lib/content";
import { cn } from "@/lib/utils";
import { trackCta } from "@/lib/analytics";
import { HeroAmbience } from "./motion/HeroAmbience";
import { MagneticLink } from "./motion/MagneticLink";
import { Reveal } from "./motion/Reveal";
import { TextReveal } from "./motion/TextReveal";
import { Logo } from "./Logo";
import { ProfilePortrait } from "./ProfilePortrait";
import { SocialLinks } from "./SocialLinks";
import { LinkedinIcon } from "./SocialIcons";

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
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.85, filter: "blur(16px)" }}
            animate={reduce ? undefined : { opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: duration.slow, ease: easeLuxury }}
          >
            <Logo
              variant="icon"
              iconClassName="h-14 w-14 md:h-16 md:w-16"
              className="mb-6 lg:hidden"
            />
          </motion.div>

          <Reveal delay={0.04} variant="fade">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <div className="badge w-fit">
                <span className="dot-pulse" />
                <span>
                  {site.credential} · {site.location}
                </span>
              </div>
              <div className="inline-flex rounded-lg border border-border p-0.5">
                {(["pt", "en"] as const).map((code) => (
                  <button
                    key={code}
                    type="button"
                    className={cn(
                      "rounded-md px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors",
                      locale === code
                        ? "bg-[var(--brand)] text-white"
                        : "text-muted hover:text-foreground",
                    )}
                    onClick={() => setLocale(code)}
                    aria-pressed={locale === code}
                  >
                    {code}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <TextReveal
            key={locale}
            as="h1"
            text={copy.title}
            className="text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-foreground"
          />

          <Reveal delay={0.18} variant="up">
            <p className="mt-5 max-w-3xl text-lg font-semibold text-gradient-brand md:text-xl">
              {copy.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.25} variant="up">
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-[17px]">
              {copy.lead}
            </p>
          </Reveal>

          <Reveal delay={0.32} variant="scale">
            <motion.div
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: duration.base, ease: easeLuxury }}
            >
              <MagneticLink
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
                onClick={() => trackCta("cta_linkedin_click")}
              >
                <LinkedinIcon className="h-4 w-4" aria-hidden />
                {hero.ctaLinkedin}
                <ArrowRight
                  className="h-3.5 w-3.5 opacity-60 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-1"
                  aria-hidden
                />
              </MagneticLink>
              <MagneticLink
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary group"
                onClick={() => trackCta("cta_whatsapp_click")}
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                {hero.ctaWhatsapp}
              </MagneticLink>
              <MagneticLink
                href={`mailto:${site.email}`}
                className="btn-secondary"
                onClick={() => trackCta("cta_email_click")}
              >
                <Mail className="h-4 w-4" aria-hidden />
                {hero.ctaEmail}
              </MagneticLink>
            </motion.div>
          </Reveal>

          <Reveal delay={0.38} variant="fade">
            <SocialLinks className="mt-10" />
          </Reveal>
        </div>

        <div className="hidden lg:block">
          <ProfilePortrait />
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:flex flex-col items-center gap-2 lg:left-[40%]"
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
        </motion.div>
      </motion.div>
    </section>
  );
}
