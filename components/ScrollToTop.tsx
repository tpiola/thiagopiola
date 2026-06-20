"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [400, 600], [0, 1]);
  const y = useTransform(scrollY, [400, 600], [20, 0]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <motion.button
      style={reduce ? undefined : { opacity, y }}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className="fixed bottom-20 right-5 z-[65] flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface-elevated text-foreground shadow-md transition-all hover:border-[var(--brand)]/30 hover:text-[var(--brand)] hover:shadow-lg"
    >
      <ArrowUp className="h-4 w-4" />
    </motion.button>
  );
}
