"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { site } from "@/lib/content";
import { duration, easeLuxury } from "@/lib/motion";

type LogoProps = {
  className?: string;
  iconClassName?: string;
  variant?: "icon" | "full";
  showCredential?: boolean;
  height?: number;
};

/**
 * Logo oficial — Thiago Piola
 * Símbolo caduceu farmacêutico de altíssima autoridade.
 * Usa PNG com tratamento visual premium para adaptar ao tema claro/escuro.
 * Anima entrada com fade-up sutil para manter a elegância.
 */
export function Logo({
  className,
  iconClassName,
  variant = "icon",
  showCredential = false,
  height = 220,
}: LogoProps) {
  const prefersReduced = useReducedMotion();

  const fadeUp = prefersReduced
    ? { initial: {}, animate: {} }
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
      };

  const logoImage = (
    <motion.div
      className="relative flex items-center justify-center"
      {...fadeUp}
      transition={{ duration: duration.base, ease: easeLuxury }}
    >
      <img
        src="/logo.png"
        alt={`${site.shortName} — ${site.credential}`}
        className={cn(
          "h-auto w-auto object-contain transition-all duration-500 ease-out",
          iconClassName
        )}
        style={{
          height: `${height}px`,
          maxWidth: "clamp(280px, 55vw, 700px)",
        }}
      />
    </motion.div>
  );

  if (variant === "icon") {
    return (
      <span className={cn("inline-flex shrink-0 items-center", className)}>
        {logoImage}
      </span>
    );
  }

  return (
    <motion.span
      className={cn("inline-flex items-center gap-1.5", className)}
      {...fadeUp}
      transition={{ duration: duration.base, ease: easeLuxury, delay: 0.05 }}
    >
      {logoImage}
      {showCredential && (
        <motion.span
          className="flex min-w-0 flex-col leading-tight"
          {...(prefersReduced ? {} : { initial: { opacity: 0, x: -6 }, animate: { opacity: 1, x: 0 } })}
          transition={{ duration: duration.fast, ease: easeLuxury, delay: 0.12 }}
        >
          <span className="whitespace-nowrap overflow-hidden text-ellipsis text-[16px] font-bold tracking-[0.12em] text-foreground uppercase">
            {site.shortName}
          </span>
          <span className="text-[12px] text-muted tracking-wider font-mono">
            {site.credential}
          </span>
        </motion.span>
      )}
    </motion.span>
  );
}
