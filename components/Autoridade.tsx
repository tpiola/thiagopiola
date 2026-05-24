"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bot, GraduationCap, ShieldCheck, TrendingUp } from "lucide-react";
import { autoridade } from "@/lib/content";
import { Reveal } from "./motion/Reveal";
import { Stagger, StaggerItem } from "./motion/Stagger";
import { SectionLabel } from "./SectionLabel";
import { FarmaciaIndustria } from "./FarmaciaIndustria";

const ICONS = [ShieldCheck, Bot, GraduationCap, TrendingUp];

export function Autoridade() {
  const reduce = useReducedMotion();

  return (
    <section
      id="autoridade"
      className="relative border-b border-border bg-surface-elevated py-24 md:py-36 overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, var(--brand), transparent 70%)" }}
        animate={reduce ? undefined : { scale: [1, 1.08, 1], x: [0, -18, 0], y: [0, 14, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl" variant="left">
          <SectionLabel index="01">Autoridade</SectionLabel>
          <h2 className="mt-4 text-heading-xl font-semibold tracking-tight text-foreground">
            {autoridade.title}
          </h2>
          <div className="mt-4 divider-brand w-24" />
          <p className="mt-5 text-base text-muted md:text-lg leading-relaxed">{autoridade.lead}</p>
          <FarmaciaIndustria />
        </Reveal>

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2" stagger={0.09}>
          {autoridade.pilares.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <StaggerItem key={p.title}>
                <motion.div
                  className="group relative overflow-hidden border border-border bg-surface-elevated p-6 md:p-8 transition-all duration-400"
                  whileHover={reduce ? undefined : { y: -5, scale: 1.01 }}
                >
                  <span
                    className="absolute -right-2 -top-3 text-[5rem] font-black leading-none tracking-tighter select-none pointer-events-none"
                    style={{ color: "var(--brand)", opacity: 0.04 }}
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--brand)] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                  <div
                    className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg transition-transform duration-300 group-hover:-translate-y-0.5"
                    style={{ background: "color-mix(in srgb, var(--brand) 10%, transparent)" }}
                  >
                    <Icon className="h-5 w-5 text-[var(--brand)]" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-[var(--brand)] transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.desc}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal delay={0.2} variant="up" className="mt-12">
          <div className="glass-dark rounded-xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div
              className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "color-mix(in srgb, var(--brand) 12%, transparent)" }}
            >
              <ShieldCheck className="h-4 w-4 text-[var(--brand)]" aria-hidden />
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Autoridade técnica com CRF/SP, visão comercial e domínio de IA aplicada para{ " " }
              <strong className="font-semibold" style={{ color: "var(--foreground)" }}>
                facilitar resultados reais em saúde, tecnologia e treinamento
              </strong>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
