"use client";

import { motion, useReducedMotion } from "framer-motion";
import { trajetoria } from "@/lib/content";
import { AnimateIn } from "./AnimateIn";
import { cn } from "@/lib/utils";

export function Trajetoria() {
  const reduce = useReducedMotion();

  return (
    <section id="trajetoria" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="gap-16 lg:flex">
          {/* Left — sticky */}
          <div className="mb-14 lg:mb-0 lg:w-[300px] lg:shrink-0">
            <div className="lg:sticky lg:top-32">
              <AnimateIn>
                <h2 className="text-3xl font-black leading-tight tracking-tighter text-foreground md:text-4xl">
                  {trajetoria.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">{trajetoria.lead}</p>
              </AnimateIn>

              <AnimateIn delay={0.1} className="mt-10">
                <div className="rounded-2xl border border-border bg-surface-elevated p-6">
                  <p className="text-[11px] uppercase tracking-wider text-muted">Formação</p>
                  <ul className="mt-5 space-y-3">
                    {trajetoria.education.map((course) => (
                      <li key={course} className="flex items-start gap-3 text-sm text-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            </div>
          </div>

          {/* Right — career timeline */}
          <div className="relative flex-1">
            {/* Vertical line (desktop) */}
            <div
              className="absolute left-4 top-3 hidden h-[calc(100%-1.5rem)] w-px bg-border lg:block"
              aria-hidden
            />

            <ol className="space-y-5">
              {trajetoria.career.map((job, i) => (
                <motion.li
                  key={job.company}
                  initial={reduce ? undefined : { opacity: 0, x: -14 }}
                  whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: "easeOut" }}
                  className={cn(
                    "relative rounded-2xl border border-border bg-surface-elevated p-5 transition-colors hover:border-accent/25 md:p-7",
                    "lg:ml-12",
                  )}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-[2.875rem] top-7 hidden h-3 w-3 rounded-full border-2 border-accent bg-surface lg:block"
                    aria-hidden
                  />

                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-accent">
                        {job.period}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold text-foreground">{job.company}</h3>
                      <p className="mt-0.5 text-sm text-muted">{job.role}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-border px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-muted">
                      {i === 0 ? "Atual" : "Concluído"}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{job.desc}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
