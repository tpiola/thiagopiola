"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef, useCallback } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type LuxuryCardProps = {
  children: ReactNode;
  className?: string;
};

/** Cartão com elevação, brilho sutil no hover e 3D tilt */
export function LuxuryCard({ children, className }: LuxuryCardProps) {
  const reduce = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduce || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -10; // -10deg a 10deg
      const rotateY = ((x - centerX) / centerX) * 10;  // -10deg a 10deg
      cardRef.current.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    },
    [reduce],
  );

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg)";
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border border-border bg-surface transition-[border-color,box-shadow] backdrop-blur-[2px]",
        "hover:border-[color-mix(in_srgb,var(--brand)_40%,var(--border))]",
        className,
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
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
      <motion.div className="relative" style={{ transformStyle: "preserve-3d" }}>
        {children}
      </motion.div>
    </motion.div>
  );
}
