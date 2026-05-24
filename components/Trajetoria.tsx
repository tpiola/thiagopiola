"use client";

import { motion, useReducedMotion } from "framer-motion";
import { trajetoria } from "@/lib/content";
import { Reveal } from "./motion/Reveal";
import { Stagger, StaggerItem } from "./motion/Stagger";
import { SectionLabel } from "./SectionLabel";

export function Trajetoria() {
  const reduce = useReducedMotion();

  return (
    <section
      id="trajetoria"
      className="relative overflow-hidden border-b border-border py-24 md:py-36"
    >
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[2px] w-[800px] -translate-x-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in srgb, var(--brand) 20%, transparent), transparent)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mb-16 max-w-2xl" variant="up">
          <SectionLabel index="05">Trajetória</SectionLabel>
          <h2 className="text-heading-xl mt-4 font-semibold tracking-tight text-foreground">
            {trajetoria.title}
          </h2>
          <div className="divider-brand mt-4 w-24" />
          <p className="mt-5 text-base leading-relaxed text-muted">{trajetoria.lead}</p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal variant="left">
            <div className="h-full border border-border bg-surface-elevated p-6 md:p-8">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted">
                Experiência
              </h3>
              <Stagger className="mt-8 space-y-0" stagger={0.08}>
                {trajetoria.career.map((job) => (
                  <StaggerItem key={job.company}>
                    <div className="timeline-item relative border-l border-border py-4 pl-6 last:pb-0">
                      <span
                        className="absolute -left-[5px] top-5 h-2 w-2 rounded-full bg-accent"
                        aria-hidden
                      />
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <span className="text-sm font-bold text-foreground">{job.company}</span>
                        <span className="font-mono text-[10px] text-muted">{job.period}</span>
                      </div>
                      <p className="mt-1 text-sm font-semibold text-[var(--brand)]">{job.role}</p>
                      <p className="mt-1 text-sm text-muted">{job.desc}</p>
                      <ul className="mt-3 space-y-1.5">
                        {job.impacts.map((impact) => (
                          <li
                            key={impact}
                            className="flex gap-2 text-xs leading-relaxed text-muted"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--brand)]" />
                            {impact}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>

          <Reveal variant="right" delay={0.1}>
            <div className="h-full border border-border bg-surface-elevated p-6 md:p-8">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted">
                Formação
              </h3>
              <Stagger className="mt-8 space-y-2" stagger={0.06}>
                {trajetoria.education.map((item) => (
                  <StaggerItem key={item.course}>
                    <motion.div
                      className="group flex items-center justify-between gap-4 border border-border px-4 py-3.5 text-sm transition-all duration-300 hover:border-[var(--brand)]/30 hover:bg-[color-mix(in_srgb,var(--brand)_3%,transparent)]"
                      whileHover={reduce ? undefined : { x: 4 }}
                    >
                      <span className="leading-snug text-foreground">{item.course}</span>
                      <span className="shrink-0 font-mono text-[9px] uppercase tracking-wider text-[var(--brand)]">
                        {item.status}
                      </span>
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
