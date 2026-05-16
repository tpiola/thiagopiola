"use client";

import { proposta } from "@/lib/content";
import { AnimateIn } from "./AnimateIn";
import { SectionLabel } from "./SectionLabel";

export function Proposta() {
  return (
    <section id="proposta" className="border-b border-border bg-surface-elevated py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <AnimateIn className="max-w-2xl">
          <SectionLabel index="01">Proposta</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {proposta.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{proposta.lead}</p>
        </AnimateIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {proposta.mercados.map((bloco, i) => (
            <AnimateIn key={bloco.title} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-accent/30">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  {bloco.tag}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-foreground">{bloco.title}</h3>
                <ul className="mt-6 flex flex-1 flex-col gap-3 border-t border-border pt-6">
                  {bloco.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
