"use client";

import { trajetoria } from "@/lib/content";
import { AnimateIn } from "./AnimateIn";
import { SectionLabel } from "./SectionLabel";

export function Trajetoria() {
  return (
    <section id="trajetoria" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <AnimateIn className="mb-14 max-w-2xl">
          <SectionLabel index="04">Trajetória</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {trajetoria.title}
          </h2>
          <p className="mt-4 text-base text-muted">{trajetoria.lead}</p>
        </AnimateIn>

        <div className="grid gap-8 lg:grid-cols-2">
          <AnimateIn>
            <div className="rounded-2xl border border-border bg-surface-elevated p-6 md:p-8">
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-muted">
                Experiência
              </h3>
              <ol className="mt-8 space-y-8">
                {trajetoria.career.map((job) => (
                  <li key={job.company} className="relative border-l border-border pl-6">
                    <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-accent" />
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="font-semibold text-foreground">{job.company}</span>
                      <span className="font-mono text-[10px] text-muted">{job.period}</span>
                    </div>
                    <p className="mt-1 text-sm text-accent">{job.role}</p>
                    <p className="mt-1 text-sm text-muted">{job.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="rounded-2xl border border-border bg-surface-elevated p-6 md:p-8">
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-muted">
                Formação
              </h3>
              <ul className="mt-8 space-y-3">
                {trajetoria.education.map((course) => (
                  <li
                    key={course}
                    className="flex items-center justify-between gap-4 rounded-lg border border-border px-4 py-3 text-sm"
                  >
                    <span className="text-foreground">{course}</span>
                    <span className="shrink-0 font-mono text-[10px] text-muted">OK</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
