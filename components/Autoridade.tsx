"use client";

import { motion, useReducedMotion } from "framer-motion";
import { autoridade } from "@/lib/content";
import { Reveal } from "./motion/Reveal";
import { Stagger, StaggerItem } from "./motion/Stagger";
import { SectionLabel } from "./SectionLabel";
import { FarmaciaIndustria } from "./FarmaciaIndustria";

const ICONS = ["⚕️", "⚙️", "🤖", "💻"];

export function Autoridade() {
  const reduce = useReducedMotion();

  return (
    <section
      id="autoridade"
      className="relative border-b border-border bg-surface-elevated py-24 md:py-36 overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, var(--brand), transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        {/* Header */}
        <Reveal className="max-w-2xl" variant="left">
          <SectionLabel index="01">Autoridade</SectionLabel>
          <h2 className="mt-4 text-heading-xl font-semibold tracking-tight text-foreground">
            {autoridade.title}
          </h2>
          <div className="mt-4 divider-brand w-24" />
          <p className="mt-5 text-base text-muted md:text-lg leading-relaxed">{autoridade.lead}</p>
          <FarmaciaIndustria />
        </Reveal>

        {/* Cards grid with number accents */}
        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2" stagger={0.09}>
          {autoridade.pilares.map((p, i) => (
            <StaggerItem key={p.title}>
              <motion.div
                className="group relative overflow-hidden border border-border bg-surface-elevated p-6 md:p-8 transition-all duration-400"
                whileHover={reduce ? undefined : { y: -3 }}
              >
                {/* Number watermark */}
                <span
                  className="absolute -right-2 -top-3 text-[5rem] font-black leading-none tracking-tighter select-none pointer-events-none"
                  style={{ color: "var(--brand)", opacity: 0.04 }}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--brand)] to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                {/* Icon */}
                <span className="mb-4 block text-xl" aria-hidden>
                  {ICONS[i]}
                </span>
                <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Bottom callout */}
        <Reveal delay={0.2} variant="up" className="mt-12">
          <div className="glass-dark rounded-xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div
              className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "color-mix(in srgb, var(--brand) 12%, transparent)" }}
            >
              <span className="text-sm font-bold" style={{ color: "var(--brand)" }}>
                ✦
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Perfil raro para RH e líderes que buscam execução real em{" "}
              <strong className="font-semibold" style={{ color: "var(--foreground)" }}>
                saúde e tecnologia
              </strong>{" "}
              — do registro ao produto publicado.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
