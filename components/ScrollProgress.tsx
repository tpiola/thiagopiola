"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[100] h-[2px] w-full origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #1d4ed8, #3b82f6, #60a5fa)",
      }}
    />
  );
}
