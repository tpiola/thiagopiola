"use client";

import { motion, useReducedMotion } from "framer-motion";
import { duration, easeLuxury } from "@/lib/motion";

type TextRevealProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p";
};

/** Revelação palavra a palavra — tipografia premium */
export function TextReveal({ text, className, as = "h1" }: TextRevealProps) {
  const reduce = useReducedMotion();
  const Tag = as;
  const words = text.split(" ");

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className} aria-label={text}>
      <span className="sr-only">{text}</span>
      <motion.span
        className="inline-flex flex-wrap gap-x-[0.28em]"
        aria-hidden
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
        }}
      >
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden"
            variants={{
              hidden: {},
              visible: {},
            }}
          >
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "110%", opacity: 0, filter: "blur(8px)" },
                visible: {
                  y: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: { duration: duration.slow, ease: easeLuxury },
                },
              }}
            >
              {word}
            </motion.span>
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
