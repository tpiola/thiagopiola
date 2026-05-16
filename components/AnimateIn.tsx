"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type AnimateInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
};

export function AnimateIn({ children, className, delay = 0, direction = "up" }: AnimateInProps) {
  const offset =
    direction === "left"
      ? { x: -16, y: 0 }
      : direction === "right"
        ? { x: 16, y: 0 }
        : { x: 0, y: 40 };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
