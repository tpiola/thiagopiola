"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 35 });

  if (reduce) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[100] h-[2px] w-full origin-left bg-accent"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
