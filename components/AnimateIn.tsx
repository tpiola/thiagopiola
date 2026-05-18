"use client";

import type { ReactNode } from "react";
import { Reveal, type RevealVariant } from "./motion/Reveal";

type AnimateInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
};

/** Alias legado — delega para Reveal premium */
export function AnimateIn({ children, className, delay = 0, variant = "up" }: AnimateInProps) {
  return (
    <Reveal className={className} delay={delay} variant={variant}>
      {children}
    </Reveal>
  );
}
