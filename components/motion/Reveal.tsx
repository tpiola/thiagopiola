"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { duration, easeLuxury, viewport } from "@/lib/motion";

export type RevealVariant = "fade" | "up" | "scale" | "left" | "right";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
};

const hiddenByVariant: Record<RevealVariant, Variants["hidden"]> = {
  fade: { opacity: 0 },
  up: { opacity: 0, y: 36, filter: "blur(10px)" },
  scale: { opacity: 0, scale: 0.94, filter: "blur(6px)" },
  left: { opacity: 0, x: -28, filter: "blur(8px)" },
  right: { opacity: 0, x: 28, filter: "blur(8px)" },
};

function buildVariants(variant: RevealVariant): Variants {
  return {
    hidden: hiddenByVariant[variant],
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: duration.base, ease: easeLuxury },
    },
  };
}

export function Reveal({ children, className, delay = 0, variant = "up" }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <motion.div className={className}>{children}</motion.div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={buildVariants(variant)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
