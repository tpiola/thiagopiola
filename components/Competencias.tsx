"use client";

import { competencias } from "@/lib/content";
import { CountUp } from "./motion/CountUp";
import { Reveal } from "./motion/Reveal";
import { Stagger, StaggerItem } from "./motion/Stagger";
import { SectionLabel } from "./SectionLabel";

export function Competencias() {
  return (
    <section id="competencias" className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl" variant="right">
          <SectionLabel index="02">Competências</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {competencias.title}
          </h2>
          <p className="mt-4 text-base text-muted">{competencias.lead}</p>
        </Reveal>

        <Stagger
          className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2"
          stagger={0.07}
        >
          {competencias.skills.map((skill) => (
            <StaggerItem key={skill.title}>
              <div className="group h-full bg-surface-elevated p-6 transition-colors duration-500 hover:bg-[color-mix(in_srgb,var(--brand)_5%,var(--surface-elevated))] md:p-8">
                <h3 className="text-lg font-semibold text-foreground transition-transform duration-500 group-hover:translate-x-0.5">
                  {skill.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{skill.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} variant="scale">
          <div className="mt-10 grid gap-6 rounded-2xl border border-border bg-surface-elevated p-8 sm:grid-cols-3">
            {competencias.metrics.map((m) => (
              <div key={m.label} className="text-center sm:text-left">
                <CountUp
                  value={m.value}
                  className="text-3xl font-semibold tracking-tight text-[var(--brand)]"
                />
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
