"use client";

import { motion } from "framer-motion";
import { trajetoria } from "@/lib/content";
import { LuxuryCard } from "./motion/LuxuryCard";
import { Reveal } from "./motion/Reveal";
import { Stagger, StaggerItem } from "./motion/Stagger";
import { SectionLabel } from "./SectionLabel";

export function Trajetoria() {
  return (
    <section id="trajetoria" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mb-14 max-w-2xl" variant="up">
          <SectionLabel index="04">Trajetória</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {trajetoria.title}
          </h2>
          <p className="mt-4 text-base text-muted">{trajetoria.lead}</p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal variant="left">
            <LuxuryCard className="p-6 md:p-8">
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-muted">
                Experiência
              </h3>
              <Stagger className="mt-8 space-y-8" stagger={0.1}>
                {trajetoria.career.map((job) => (
                  <StaggerItem key={job.company}>
                    <motion.li className="relative list-none border-l border-border pl-6">
                      <motion.span
                        className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-accent"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      />
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <span className="font-semibold text-foreground">{job.company}</span>
                        <span className="font-mono text-[10px] text-muted">{job.period}</span>
                      </div>
                      <p className="mt-1 text-sm text-accent">{job.role}</p>
                      <p className="mt-1 text-sm text-muted">{job.desc}</p>
                    </motion.li>
                  </StaggerItem>
                ))}
              </Stagger>
            </LuxuryCard>
          </Reveal>

          <Reveal variant="right" delay={0.08}>
            <LuxuryCard className="p-6 md:p-8">
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-muted">
                Formação
              </h3>
              <Stagger className="mt-8 space-y-3" stagger={0.06}>
                {trajetoria.education.map((course) => (
                  <StaggerItem key={course}>
                    <motion.div
                      className="flex items-center justify-between gap-4 rounded-lg border border-border px-4 py-3 text-sm transition-colors duration-500 hover:border-[var(--brand)]/30 hover:bg-[color-mix(in_srgb,var(--brand)_4%,transparent)]"
                      whileHover={{ x: 3 }}
                    >
                      <span className="text-foreground">{course}</span>
                      <span className="shrink-0 font-mono text-[10px] text-muted">OK</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </Stagger>
            </LuxuryCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
