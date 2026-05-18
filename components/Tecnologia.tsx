"use client";

import { motion } from "framer-motion";
import { tecnologia } from "@/lib/content";
import { Reveal } from "./motion/Reveal";
import { Stagger, StaggerItem } from "./motion/Stagger";
import { SectionLabel } from "./SectionLabel";

export function Tecnologia() {
  return (
    <section id="tecnologia" className="border-b border-border bg-surface-elevated py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl" variant="left">
          <SectionLabel index="03">Tecnologia</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {tecnologia.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{tecnologia.lead}</p>
        </Reveal>

        <Stagger
          className="mt-14 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface"
          stagger={0.06}
        >
          {tecnologia.items.map((item, i) => (
            <StaggerItem key={item.title}>
              <motion.div
                className="group flex flex-col gap-1 px-6 py-5 transition-colors duration-500 hover:bg-[color-mix(in_srgb,var(--brand)_6%,transparent)] sm:flex-row sm:items-center sm:justify-between md:px-8 md:py-6"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] text-muted transition-colors group-hover:text-[var(--brand)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted sm:max-w-md sm:text-right">{item.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
