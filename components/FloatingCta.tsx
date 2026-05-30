"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { site } from "@/lib/content";
import { trackCta } from "@/lib/analytics";

/** CTA flutuante — WhatsApp com texto em desktop, ícone no mobile */
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
        className="group flex items-center gap-2.5 rounded-full bg-[var(--brand)] px-5 py-3 text-white shadow-lg shadow-[var(--brand)]/30 transition-all"
        whileHover={reduce ? undefined : { scale: 1.05, boxShadow: "0 8px 32px var(--brand-glow)" }}
        whileTap={reduce ? undefined : { scale: 0.97 }}
        aria-label="Contato via WhatsApp"
        onClick={() => trackCta("cta_whatsapp_floating")}
      >
        <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
        <span className="hidden font-mono text-[11px] font-bold uppercase tracking-wider sm:block">
          Quero resultado
        </span>
        <ArrowRight className="hidden h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5 sm:block" aria-hidden />
      </motion.a>
    </motion.div>
  );
}
