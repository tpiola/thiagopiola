"use client";

import { ArrowUpRight } from "lucide-react";
import { projetos } from "@/lib/content";
import { LuxuryCard } from "./motion/LuxuryCard";
import { Reveal } from "./motion/Reveal";
import { Stagger, StaggerItem } from "./motion/Stagger";
import { SectionLabel } from "./SectionLabel";

export function Projetos() {
  return (
    <section id="projetos" className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl" variant="left">
          <SectionLabel index="03">Projetos</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {projetos.title}
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">{projetos.lead}</p>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 lg:grid-cols-3" stagger={0.08}>
          {projetos.items.map((item) => (
            <StaggerItem key={item.title}>
              <LuxuryCard className="flex h-full flex-col p-6 md:p-7">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-xs font-mono uppercase tracking-wider text-muted">
                  Problema
                </p>
                <p className="mt-1 text-sm text-muted">{item.problem}</p>
                <p className="mt-4 text-xs font-mono uppercase tracking-wider text-[var(--brand)]">
                  Resultado
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">{item.result}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border px-2 py-0.5 font-mono text-[10px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-[var(--brand)] transition-opacity hover:opacity-80"
                >
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
