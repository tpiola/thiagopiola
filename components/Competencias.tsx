"use client";

import { competencias } from "@/lib/content";
import { AnimateIn } from "./AnimateIn";

export function Competencias() {
  return (
    <section id="competencias" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12 lg:px-16">
        {/* ─── Sticky split layout ─── */}
        <div className="gap-16 lg:flex">
          {/* Left — sticky */}
          <div className="mb-12 lg:mb-0 lg:w-[300px] lg:shrink-0">
            <div className="lg:sticky lg:top-32">
              <AnimateIn>
                <h2 className="text-3xl font-black leading-tight tracking-tighter text-foreground md:text-4xl">
                  {competencias.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {competencias.lead}
                </p>
              </AnimateIn>

              <AnimateIn delay={0.1} className="mt-10">
                <div className="rounded-2xl border border-border bg-surface-elevated p-6">
                  {competencias.metrics.map((m, i) => (
                    <div
                      key={m.label}
                      className={i > 0 ? "mt-6 border-t border-border pt-6" : ""}
                    >
                      <p className="text-3xl font-black tracking-tighter text-foreground">
                        {m.value}
                      </p>
                      <p className="mt-0.5 text-[11px] uppercase tracking-wider text-muted">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimateIn>
            </div>
          </div>

          {/* Right — cards */}
          <div className="flex-1">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {competencias.skills.map((skill, i) => (
                <AnimateIn key={skill.title} delay={i * 0.06}>
                  <div className="flex h-full min-h-[140px] flex-col bg-surface-elevated p-6 md:p-8">
                    <h3 className="text-base font-semibold text-foreground md:text-lg">
                      {skill.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{skill.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
