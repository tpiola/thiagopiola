"use client";

import { tecnologia } from "@/lib/content";
import { AnimateIn } from "./AnimateIn";
import { SectionLabel } from "./SectionLabel";

export function Tecnologia() {
  return (
    <section id="tecnologia" className="border-b border-border bg-surface-elevated py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <AnimateIn className="max-w-2xl">
          <SectionLabel index="03">Tecnologia</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {tecnologia.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{tecnologia.lead}</p>
        </AnimateIn>

        <ul className="mt-14 divide-y divide-border rounded-2xl border border-border bg-surface">
          {tecnologia.items.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 0.04}>
              <li className="flex flex-col gap-1 px-6 py-5 transition-colors hover:bg-accent-muted/50 sm:flex-row sm:items-center sm:justify-between md:px-8 md:py-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted sm:max-w-md sm:text-right">{item.desc}</p>
              </li>
            </AnimateIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
