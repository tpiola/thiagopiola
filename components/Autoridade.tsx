"use client";

import { autoridade } from "@/lib/content";
import { LuxuryCard } from "./motion/LuxuryCard";
import { Reveal } from "./motion/Reveal";
import { Stagger, StaggerItem } from "./motion/Stagger";
import { SectionLabel } from "./SectionLabel";

export function Autoridade() {
  return (
    <section id="autoridade" className="border-b border-border bg-surface-elevated py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl" variant="left">
          <SectionLabel index="01">Autoridade</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {autoridade.title}
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">{autoridade.lead}</p>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2" stagger={0.1}>
          {autoridade.pilares.map((p) => (
            <StaggerItem key={p.title}>
              <LuxuryCard className="p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.desc}</p>
              </LuxuryCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
