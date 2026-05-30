"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projetos } from "@/lib/content";
import { LuxuryCard } from "./motion/LuxuryCard";
import { Reveal } from "./motion/Reveal";
import { Stagger, StaggerItem } from "./motion/Stagger";
import { SectionLabel } from "./SectionLabel";

export function Projetos() {
  return (
    <section id="resultados" className="border-b border-border py-24 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-3xl" variant="left">
          <SectionLabel index="03">Resultados</SectionLabel>
          <h2 className="mt-4 text-heading-xl font-semibold tracking-tight text-foreground">
            {projetos.title}
          </h2>
          <div className="mt-4 divider-brand w-24" />
          <p className="mt-5 text-base text-muted md:text-lg leading-relaxed max-w-2xl">{projetos.lead}</p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 lg:grid-cols-3" stagger={0.08}>
          {projetos.items.map((item, idx) => (
            <StaggerItem key={item.title}>
              <LuxuryCard className="flex h-full flex-col p-6 md:p-7 group">
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[var(--brand)] opacity-60">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <a href={item.href} target="_blank" rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    aria-label={`Ver projeto: ${item.title}`}>
                    <ArrowUpRight className="h-4 w-4 text-muted" />
                  </a>
                </div>

                <h3 className="text-base font-bold leading-snug text-foreground">{item.title}</h3>

                <div className="mt-4 space-y-3 flex-1">
                  <div>
                    <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted mb-1">
                      Desafio
                    </p>
                    <p className="text-sm text-muted leading-relaxed">{item.problem}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--brand)] mb-1">
                      Resultado
                    </p>
                    <p className="text-sm font-medium text-foreground leading-relaxed flex items-start gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[var(--brand)] mt-0.5 shrink-0" aria-hidden />
                      {item.result}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {item.stack.map((tag) => (
                    <span key={tag}
                      className="rounded-lg border border-border bg-[color-mix(in_srgb,var(--brand)_4%,transparent)] px-2 py-0.5 font-mono text-[10px] text-[var(--brand)]">
                      {tag}
                    </span>
                  ))}
                </div>

                <a href={item.href} target="_blank" rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] transition-all hover:gap-2.5 duration-200">
                  Ver projeto
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </LuxuryCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
