"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/** Indicador fino de progresso — discreto, sem barra azul intrusiva */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 top-0 z-[90] h-[2px] origin-left bg-gradient-to-r from-[var(--brand)] via-[var(--brand-light)] to-transparent"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
