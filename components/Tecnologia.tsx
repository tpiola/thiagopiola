"use client";

import { tecnologia } from "@/lib/content";
import { AnimateIn } from "./AnimateIn";

export function Tecnologia() {
  return (
    <section id="tecnologia" className="border-b border-border bg-surface-elevated py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12 lg:px-16">
        <AnimateIn className="max-w-2xl">
          <h2 className="text-3xl font-black leading-tight tracking-tighter text-foreground md:text-4xl">
            {tecnologia.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{tecnologia.lead}</p>
        </AnimateIn>

        <ul className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
          {tecnologia.items.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 0.05}>
              <li className="group flex flex-col gap-2 px-5 py-5 transition-colors hover:bg-accent-muted/40 sm:flex-row sm:items-center sm:justify-between md:px-8 md:py-6">
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted sm:max-w-xs sm:text-right md:max-w-sm">
                  {item.desc}
                </p>
              </li>
            </AnimateIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
