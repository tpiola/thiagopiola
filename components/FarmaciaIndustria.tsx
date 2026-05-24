"use client";

import { farmaciaIndustria } from "@/lib/content";
import { Reveal } from "./motion/Reveal";

/** Chips de autoridade para indústria farmacêutica global */
export function FarmaciaIndustria() {
  return (
    <Reveal className="mt-10" variant="fade">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        {farmaciaIndustria.title}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {farmaciaIndustria.chips.map((chip) => (
          <li
            key={chip}
            className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-[var(--brand)]/40"
          >
            {chip}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
