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
      id="metodo"
      className="relative border-b border-border py-24 md:py-36 overflow-hidden"
    >
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_320px] lg:gap-24">
          <div>
            <Reveal variant="left">
              <SectionLabel index="02">Método</SectionLabel>
              <h2 className="mt-4 text-heading-xl font-semibold tracking-tight text-foreground">
                {competencias.title}
              </h2>
              <div className="mt-4 divider-brand w-24" />
              <p className="mt-5 text-base text-muted md:text-lg leading-relaxed max-w-2xl">
                {competencias.lead}
              </p>
            </Reveal>

            <Stagger className="mt-10 grid gap-4 sm:grid-cols-2" stagger={0.08}>
              {competencias.skills.map((skill, i) => (
                <StaggerItem key={i}>
                  <motion.div
                    className="card-elevated rounded-xl p-5"
                    whileHover={reduce ? undefined : { y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[var(--brand)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 h-px bg-border" />
                    </div>
                    <h3 className="font-semibold text-sm text-foreground">{skill.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{skill.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div className="flex flex-col gap-6 lg:pt-28">
            {competencias.metrics.map((metric, i) => (
              <Reveal key={i} delay={i * 0.12} variant="right">
                <div className="stat-block">
                  <div className="stat-value">
                    {/\d/.test(metric.value)
                      ? <CountUp value={metric.value} />
                      : metric.value}
                  </div>
                  <div className="stat-label mt-1">{metric.label}</div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.4} variant="fade">
              <div className="mt-4 rounded-xl border border-[var(--brand)]/20 bg-[color-mix(in_srgb,var(--brand)_5%,transparent)] p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--brand)] mb-2">
                  Stack tecnológico
                </p>
                <p className="text-xs text-muted leading-relaxed">
                  Claude AI · Google Gemini · n8n · Next.js · Vercel · CRM · Google GEAR
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
