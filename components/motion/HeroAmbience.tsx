"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/** Orbes e grade ambiental premium com parallax suave — versão Black Label */
export function HeroAmbience() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const ySlow = useTransform(scrollY, [0, 600], [0, 80]);
  const yFast = useTransform(scrollY, [0, 600], [0, 150]);
  const yMedium = useTransform(scrollY, [0, 600], [0, 100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.15]);

  if (reduce) {
    return (
      <motion.div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% 0%, color-mix(in srgb, var(--brand) 20%, transparent), transparent)",
        }}
      />
    );
  }

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ opacity }}
      aria-hidden
    >
      {/* Primary orb — large left */}
      <motion.div
        className="absolute -left-[15%] top-[5%] h-[min(600px,75vw)] w-[min(600px,75vw)] rounded-full"
        style={{
          y: ySlow,
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--brand) 40%, transparent) 0%, transparent 70%)",
          filter: "blur(80px)",
          opacity: 0.45,
        }}
        animate={{ scale: [1, 1.06, 1], x: [0, 12, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary orb — right mid */}
      <motion.div
        className="absolute -right-[10%] top-[30%] h-[min(450px,60vw)] w-[min(450px,60vw)] rounded-full"
        style={{
          y: yFast,
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--brand-light) 35%, transparent) 0%, transparent 70%)",
          filter: "blur(90px)",
          opacity: 0.28,
        }}
        animate={{ scale: [1, 1.08, 1], x: [0, -15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Accent orb — bottom center */}
      <motion.div
        className="absolute left-[35%] bottom-[10%] h-[min(280px,40vw)] w-[min(280px,40vw)] rounded-full"
        style={{
          y: yMedium,
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--brand) 30%, transparent) 0%, transparent 70%)",
          filter: "blur(70px)",
          opacity: 0.2,
        }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />

      {/* Top radial fade */}
      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 50% -5%, color-mix(in srgb, var(--brand) 28%, transparent), transparent)",
        }}
      />

      {/* Animated grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 90% 65% at 50% 25%, black, transparent)",
        }}
        animate={{ backgroundPosition: ["0px 0px", "56px 56px"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.15) 100%)",
        }}
      />
    </motion.div>
  );
}
