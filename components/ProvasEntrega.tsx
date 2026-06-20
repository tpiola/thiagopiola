"use client";

import { motion, useReducedMotion } from "framer-motion";
import { provasEntrega } from "@/lib/content";
import { Reveal } from "./motion/Reveal";
import { CountUp } from "./motion/CountUp";

export function ProvasEntrega() {
  const reduce = useReducedMotion();

  return (
    <section className="relative border-b border-border bg-surface-elevated py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]" style={{ background: "radial-gradient(ellipse at 50% 0%, var(--brand), transparent 60%)" }} aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal variant="fade">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--brand)] text-center mb-14">
            Provas de Entrega
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {provasEntrega.map((prova, i) => (
            <motion.div
              key={prova.label}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="card-hover-premium h-full rounded-2xl border border-border bg-surface p-6 md:p-7 text-center">
                <p className="text-[clamp(2.2rem,5vw,3.2rem)] font-bold leading-none tracking-tight text-foreground mb-3 count-glint">
                  <CountUp value={prova.value} />
                </p>
                <p className="text-sm font-bold text-foreground leading-snug mb-1.5">
                  {prova.label}
                </p>
                <p className="text-xs text-muted leading-relaxed">
                  {prova.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
