"use client";

import Image from "next/image";
import { useReducedMotion, motion } from "framer-motion";
import { duration, easeLuxury } from "@/lib/motion";
import { site } from "@/lib/content";
import { useLocale } from "@/lib/i18n";

const PROFILE_SRC = "/images/profile.jpg";

type ProfilePortraitProps = {
  className?: string;
};

/** Retrato profissional — substitua profile.webp por foto real quando disponível */
export function ProfilePortrait({ className }: ProfilePortraitProps) {
  const reduce = useReducedMotion();
  const { locale } = useLocale();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, scale: 0.92, filter: "blur(12px)" }}
      animate={reduce ? undefined : { opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: duration.slow, ease: easeLuxury, delay: 0.15 }}
    >
      <div className="relative mx-auto w-full max-w-[280px] overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-xl shadow-[var(--brand)]/10">
        <div className="relative aspect-[4/5]">
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(180deg, transparent 60%, color-mix(in srgb, var(--brand) 25%, transparent))",
            }}
            aria-hidden
          />
          <Image
            src={PROFILE_SRC}
            alt={`${site.shortName} — ${locale === "pt" ? "farmacêutico e engenheiro de IA" : "pharmacist and AI engineer"}`}
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 70vw, 280px"
          />
        </div>
      </div>
    </motion.div>
  );
}
