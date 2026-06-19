"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { site } from "@/lib/content";
import { trackCta } from "@/lib/analytics";

/** CTA flutuante — WhatsApp apenas ícone, sem texto */
export function FloatingCta() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [200, 400], [0, 1]);
  const y = useTransform(scrollY, [200, 400], [20, 0]);

  return (
    <motion.div
      style={reduce ? undefined : { opacity, y }}
      className="fixed bottom-5 right-5 z-[70]"
    >
      <motion.a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="pulse-glow group relative flex items-center justify-center overflow-hidden rounded-full bg-[var(--brand)] p-3 text-white shadow-lg shadow-[var(--brand)]/30 transition-all"
        whileHover={reduce ? undefined : { scale: 1.05, boxShadow: "0 8px 32px var(--brand-glow)" }}
        whileTap={reduce ? undefined : { scale: 0.97 }}
        aria-label="Contato via WhatsApp — Fale com Thiago Piola"
        onClick={() => trackCta("cta_whatsapp_floating")}
      >
        <span className="gradient-shift pointer-events-none absolute inset-0 opacity-30" aria-hidden />
        <MessageCircle className="relative h-5 w-5" aria-hidden />
      </motion.a>
    </motion.div>
  );
}
