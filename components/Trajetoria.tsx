"use client";

import { motion, useReducedMotion } from "framer-motion";
import { trajetoria } from "@/lib/content";
import { Reveal } from "./motion/Reveal";
import { Stagger, StaggerItem } from "./motion/Stagger";
import { SectionLabel } from "./SectionLabel";

export function Trajetoria() {
  const reduce = useReducedMotion();

  return (
    <section id="trajetoria" className="relative border-b border-border py-24 md:py-36 overflow-hidden">
      {/* BG top gradient */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, color-mix(in srgb, var(--brand) 20%, transparent), transparent)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mb-16 max-w-2xl" variant="up">
          <SectionLabel index="04">Trajetória</SectionLabel>
          <h2 className="mt-4 text-heading-xl font-semibold tracking-tight text-foreground">
            {trajetoria.title}
          </h2>
          <div className="mt-4 divider-brand w-24" />
          <p className="mt-5 text-base text-muted leading-relaxed">{trajetoria.lead}</p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Experience — Timeline */}
          <Reveal variant="left">
            <div className="border border-border bg-surface-elevated p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-6 rounded flex items-center justify-center" style={{ background: 'color-mix(in srgb, var(--brand) 10%, transparent)' }}>
                  <span className="text-[10px]" style={{ color: 'var(--brand)' }}>⚡</span>
                </div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted">Experiência</h3>
              </div>
              <Stagger className="space-y-0" stagger={0.08}>
                {trajetoria.career.map((job, i) => (
                  <StaggerItem key={job.company}>
                    <div className="timeline-item py-4 last:pb-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                        <span className="text-sm font-bold text-foreground">{job.company}</span>
                        <span className="text-[10px] font-mono text-muted">{job.period}</span>
                      </div>
                      <p className="text-sm font-semibold mb-1" style={{ color: 'var(--brand)' }}>{job.role}</p>
                      <p className="text-sm text-muted leading-relaxed">{job.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>

          {/* Education */}
          <Reveal variant="right" delay={0.1}>
            <div className="border border-border bg-surface-elevated p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-6 rounded flex items-center justify-center" style={{ background: 'color-mix(in srgb, var(--brand) 10%, transparent)' }}>
                  <span className="text-[10px]" style={{ color: 'var(--brand)' }}>🎓</span>
                </div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted">Formação</h3>
              </div>
              <Stagger className="space-y-2" stagger={0.06}>
                {trajetoria.education.map((course, i) => (
                  <StaggerItem key={course}>
                    <motion.div
                      className="group flex items-center justify-between gap-4 border border-border px-4 py-3.5 text-sm transition-all duration-300 hover:border-[var(--brand)]/30 hover:bg-[color-mix(in_srgb,var(--brand)_3%,transparent)] cursor-default"
                      whileHover={reduce ? undefined : { x: 4 }}
                    >
                      <span className="text-foreground leading-snug">{course}</span>
                      <motion.span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-black"
                        style={{ background: 'color-mix(in srgb, var(--brand) 12%, transparent)', color: 'var(--brand)' }}
                      >
                        ✓
                      </motion.span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
