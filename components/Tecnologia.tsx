"use client";

import { motion, useReducedMotion } from "framer-motion";
import { tecnologia } from "@/lib/content";
import { Reveal } from "./motion/Reveal";
import { Stagger, StaggerItem } from "./motion/Stagger";
import { SectionLabel } from "./SectionLabel";

export function Tecnologia() {
  const reduce = useReducedMotion();

  return (
    <section id="tecnologia" className="relative border-b border-border bg-surface-elevated py-24 md:py-36 overflow-hidden">
      {/* BG accent diagonal */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.03]"
        style={{ background: 'radial-gradient(circle at top right, var(--brand), transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl" variant="left">
          <SectionLabel index="03">Tecnologia</SectionLabel>
          <h2 className="mt-4 text-heading-xl font-semibold tracking-tight text-foreground">
            {tecnologia.title}
          </h2>
          <div className="mt-4 divider-brand w-24" />
          <p className="mt-5 text-base leading-relaxed text-muted">{tecnologia.lead}</p>
        </Reveal>

        <Stagger
          className="mt-14 overflow-hidden border border-border bg-surface"
          stagger={0.06}
        >
          {tecnologia.items.map((item, i) => (
            <StaggerItem key={item.title}>
              <motion.div
                className="group relative flex flex-col gap-1.5 border-b border-border px-6 py-5 last:border-b-0 transition-all duration-400 hover:bg-[color-mix(in_srgb,var(--brand)_5%,var(--surface))] sm:flex-row sm:items-center sm:justify-between md:px-8 md:py-6"
                whileHover={reduce ? undefined : { x: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                {/* Left accent on hover */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: 'linear-gradient(to bottom, transparent, var(--brand), transparent)' }}
                />
                <div className="flex items-center gap-5">
                  <span
                    className="font-mono text-[10px] font-bold tracking-[0.2em] transition-colors duration-300 group-hover:text-[var(--brand)] flex-shrink-0"
                    style={{ color: 'var(--muted)' }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-foreground group-hover:text-[var(--brand)] transition-colors duration-300">{item.title}</h3>
                  </div>
                </div>
                <div className="flex items-center gap-4 sm:max-w-md sm:text-right justify-start sm:justify-end">
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                  <motion.span
                    className="hidden sm:block flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: 'var(--brand)' }}
                  >
                    →
                  </motion.span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Footer note */}
        <Reveal delay={0.15} variant="up" className="mt-8">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, var(--brand), transparent)' }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted/60">Stack em produção real</span>
            <div className="h-px flex-1" style={{ background: 'linear-gradient(270deg, var(--brand), transparent)' }} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
