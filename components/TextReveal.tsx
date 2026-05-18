"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <motion.span style={{ opacity }} className="inline">
      {children}{" "}
    </motion.span>
  );
}

interface TextRevealProps {
  text: string;
  className?: string;
}

export function TextReveal({ text, className }: TextRevealProps) {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.4"],
  });

  const words = text.split(" ");

  if (reduce) {
    return <p className={className}>{text}</p>;
  }

  return (
    <p ref={containerRef} className={cn("leading-relaxed", className)}>
      {words.map((word, i) => (
        <Word
          key={i}
          progress={scrollYProgress}
          range={[i / words.length, Math.min((i + 2) / words.length, 1)]}
        >
          {word}
        </Word>
      ))}
    </p>
  );
}
