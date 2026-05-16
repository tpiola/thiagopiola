"use client";

import { competencias } from "@/lib/content";
import { AnimateIn } from "./AnimateIn";
import { SectionLabel } from "./SectionLabel";

export function Competencias() {
  return (
    <section id="competencias" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <AnimateIn className="max-w-2xl">
          <SectionLabel index="02">Competências</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {competencias.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{competencias.lead}</p>
        </AnimateIn>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {competencias.skills.map((skill, i) => (
            <AnimateIn key={skill.title} delay={i * 0.05}>
              <div className="flex h-full flex-col bg-surface-elevated p-6 md:p-8">
                <span className="font-mono text-[10px] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{skill.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{skill.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn className="mt-12">
          <div className="grid gap-8 rounded-2xl border border-border bg-surface-elevated p-8 md:grid-cols-3 md:p-10">
            {competencias.metrics.map((m) => (
              <div key={m.label}>
                <p className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  {m.value}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
