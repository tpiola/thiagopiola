"use client";

import { motion, useReducedMotion } from "framer-motion";
import { competencias } from "@/lib/content";
import { CountUp } from "./motion/CountUp";
import { Reveal } from "./motion/Reveal";
import { Stagger, StaggerItem } from "./motion/Stagger";
import { SectionLabel } from "./SectionLabel";

export function Competencias() {
  const reduce = useReducedMotion();

  return (
    <section
      id="competencias"
      className="relative border-b border-border py-24 md:py-36 overflow-hidden"
    >
      {/* BG accent */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(circle, var(--brand-light), transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl" variant="right">
          <SectionLabel index="02">Competências</SectionLabel>
          <h2 className="mt-4 text-heading-xl font-semibold tracking-tight text-foreground">
            {competencias.title}
          </h2>
          <div className="mt-4 divider-brand w-24" />
          <p className="mt-5 text-base text-muted leading-relaxed">{competencias.lead}</p>
        </Reveal>

        {/* Skills Grid */}
        <Stagger className="mt-14 grid gap-3 sm:grid-cols-2" stagger={0.07}>
          {competencias.skills.map((skill, i) => (
            <StaggerItem key={skill.title}>
              <motion.div
                className="group relative overflow-hidden border border-border bg-surface-elevated p-6 md:p-7 transition-all duration-400"
                whileHover={reduce ? undefined : { y: -2 }}
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent, var(--brand), transparent)",
                  }}
                />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-bold text-foreground group-hover:text-[var(--brand)] transition-colors duration-300">
                      {skill.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{skill.desc}</p>
                  </div>
                  <span
                    className="flex-shrink-0 text-xs font-black tabular-nums opacity-15"
                    style={{ color: "var(--brand)" }}
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Metrics */}
        <Reveal delay={0.12} variant="scale">
          <div className="mt-10 overflow-hidden border border-border bg-surface-elevated">
            <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
              {competencias.metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  className="group relative p-7 md:p-8 text-center sm:text-left transition-colors duration-300 hover:bg-[color-mix(in_srgb,var(--brand)_4%,var(--surface-elevated))]"
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
                >
                  <CountUp
                    value={m.value}
                    className="text-[2.5rem] font-bold tracking-tight text-[var(--brand)]"
                  />
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
                    {m.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
