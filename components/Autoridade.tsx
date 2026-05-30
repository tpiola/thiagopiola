"use client";

import { motion, useReducedMotion } from "framer-motion";
import { autoridade } from "@/lib/content";
import { Reveal } from "./motion/Reveal";
import { Stagger, StaggerItem } from "./motion/Stagger";
import { SectionLabel } from "./SectionLabel";

export function Autoridade() {
  const reduce = useReducedMotion();

  return (
    <section
      id="impacto"
      className="relative border-b border-border bg-surface-elevated py-24 md:py-36 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, var(--brand), transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-3xl" variant="left">
          <SectionLabel index="01">Impacto</SectionLabel>
          <h2 className="mt-4 text-heading-xl font-semibold tracking-tight text-foreground">
            {autoridade.title}
          </h2>
          <div className="mt-4 divider-brand w-24" />
          <p className="mt-5 text-base text-muted md:text-lg leading-relaxed max-w-2xl">
            {autoridade.lead}
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.08}>
          {autoridade.pilares.map((pilar, i) => (
            <StaggerItem key={i}>
              <motion.div
                className="card-elevated flex flex-col gap-4 rounded-2xl p-6 h-full"
                whileHover={reduce ? undefined : { y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--brand)_10%,transparent)] text-lg">
                    {pilar.emoji}
                  </span>
                  <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-muted/50">
                    {pilar.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold leading-snug text-foreground">
                    {pilar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {pilar.desc}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.3} variant="up">
          <div className="mt-14 rounded-2xl border border-[var(--brand)]/15 bg-[color-mix(in_srgb,var(--brand)_4%,transparent)] px-8 py-6">
            <p className="text-sm font-semibold text-foreground md:text-base">
              ✦ Perfil raro para líderes que precisam de resultado real em saúde e tecnologia — do registro ao produto publicado.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
