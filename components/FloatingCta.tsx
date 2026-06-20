"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { site } from "@/lib/content";
import { trackCta } from "@/lib/analytics";
import { useLocale } from "@/lib/i18n";

/** CTA flutuante — WhatsApp apenas ícone, sem texto */
export function FloatingCta() {
  const reduce = useReducedMotion();
  const { locale } = useLocale();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [200, 400], [0, 1]);
  const y = useTransform(scrollY, [200, 400], [20, 0]);

  return (
    <motion.div
      style={reduce ? undefined : { opacity, y }}
      className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-[max(1.25rem,env(safe-area-inset-right,0px))] z-[70]"
    >
      <motion.a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="pulse-glow group relative flex items-center justify-center overflow-hidden rounded-full bg-[var(--brand)] p-4 text-white shadow-lg shadow-[var(--brand)]/30 transition-all min-h-[52px] min-w-[52px]"
        whileHover={reduce ? undefined : { scale: 1.05, boxShadow: "0 8px 32px var(--brand-glow)" }}
        whileTap={reduce ? undefined : { scale: 0.97 }}
        aria-label={
          locale === "pt"
            ? "Fale com Thiago Piola via WhatsApp"
            : "Talk to Thiago Piola via WhatsApp"
        }
        onClick={() => trackCta("cta_whatsapp_floating")}
      >
        <MessageCircle className="h-5 w-5" aria-hidden />
      </motion.a>
    </motion.div>
  );
}
