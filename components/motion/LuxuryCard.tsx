"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type LuxuryCardProps = {
  children: ReactNode;
  className?: string;
};

/** Cartão com elevação e brilho sutil no hover */
export function LuxuryCard({ children, className }: LuxuryCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border border-border bg-surface transition-[border-color,box-shadow]",
        "hover:border-[color-mix(in_srgb,var(--brand)_40%,var(--border))]",
        className,
      )}
      whileHover={
        reduce
          ? undefined
          : {
              y: -4,
              boxShadow: "0 24px 48px -16px color-mix(in srgb, var(--brand) 18%, transparent)",
            }
      }
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
        style={{
          background:
            "linear-gradient(135deg, color-mix(in srgb, var(--brand) 8%, transparent) 0%, transparent 55%)",
        }}
      />
      <motion.div className="relative">{children}</motion.div>
    </motion.div>
  );
}
