"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/content";
import { Reveal } from "./motion/Reveal";
import { SectionLabel } from "./SectionLabel";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="border-b border-border py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal variant="left">
          <SectionLabel index="07">Perguntas frequentes</SectionLabel>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-gradient-brand md:text-5xl">
            Tudo que você precisa saber.
          </h2>
          <div className="mt-4 divider-brand w-24" />
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqItems.map((item, i) => (
            <Reveal key={i} variant="fade" delay={i * 0.05}>
              <div className="rounded-xl border border-border overflow-hidden transition-colors hover:border-[var(--brand)]/30">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="text-sm font-semibold text-foreground md:text-base">{item.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-[var(--brand)] transition-transform duration-300",
                      open === i && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={reduce ? undefined : { height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
