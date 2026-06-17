"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, TrendingUp, ShieldCheck, Zap, BarChart3 } from "lucide-react";
import { jornadaHero } from "@/lib/content";
import { Reveal } from "./motion/Reveal";

const icons = [Zap, ShieldCheck, TrendingUp, BarChart3];
const labels = ["01", "02", "03", "04"];

export function JornadaHero() {
  const reduce = useReducedMotion();
  const steps = Object.values(jornadaHero);

  return (
    <section className="relative border-b border-border bg-surface py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-[600px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--brand)]/20 to-transparent" aria-hidden />
      
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal variant="fade">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--brand)] text-center mb-12">
            Jornada do Herói
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={step.title}
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute -right-2 top-6 hidden lg:block">
                    <ArrowRight className="h-4 w-4 text-[var(--brand)]/30" />
                  </div>
                )}

                <div className="h-full rounded-2xl border border-border bg-surface-elevated p-6 transition-all duration-300 hover:border-[var(--brand)]/30 hover:shadow-lg hover:shadow-[var(--brand)]/5">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--brand)_10%,transparent)]">
                      <Icon className="h-5 w-5 text-[var(--brand)]" />
                    </div>
                    <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-muted/40">{labels[i]}</span>
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-xs leading-relaxed text-muted">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
