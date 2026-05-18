"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/** Orbes e grade ambiental com parallax suave no hero */
export function HeroAmbience() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const ySlow = useTransform(scrollY, [0, 600], [0, 120]);
  const yFast = useTransform(scrollY, [0, 600], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.2]);

  if (reduce) {
    return (
      <motion.div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% 0%, color-mix(in srgb, var(--brand) 18%, transparent), transparent)",
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
      <motion.div
        className="absolute -left-[20%] top-[10%] h-[min(520px,70vw)] w-[min(520px,70vw)] rounded-full opacity-40 blur-3xl"
        style={{
          y: ySlow,
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--brand) 35%, transparent), transparent 70%)",
        }}
      />
      <motion.div
        className="absolute -right-[15%] top-[25%] h-[min(400px,55vw)] w-[min(400px,55vw)] rounded-full opacity-30 blur-3xl"
        style={{
          y: yFast,
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--brand-light) 40%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, color-mix(in srgb, var(--brand) 22%, transparent), transparent)",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)",
        }}
        animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
}
