"use client";

import { quemsou } from "@/lib/content";
import { Reveal } from "./motion/Reveal";
import { SectionLabel } from "./SectionLabel";

export function QuemSou() {
  return (
    <section
      id="quemsou"
      className="relative border-b border-border bg-surface-elevated py-24 md:py-36 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute top-0 left-1/2 w-[800px] h-[600px] -translate-x-1/2 rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(circle, var(--brand), transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-5 md:px-8">
        <Reveal variant="left">
          <SectionLabel index="02">Quem Sou</SectionLabel>
        </Reveal>

        <div className="mt-10 space-y-6">
          {quemsou.paragraphs.map((p, i) => (
            <Reveal key={i} variant="up" delay={i * 0.08}>
              <p className="text-base md:text-lg leading-relaxed text-foreground">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Selo de Credibilidade */}
        <Reveal variant="fade" delay={0.4}>
          <div className="mt-14 grid gap-3 sm:grid-cols-2">
            <CredentialItem label="CRF/SP 58.519" value="Registro ativo e verificável" />
            <CredentialItem label="15 anos de campo" value="Hospital · clínica · balcão · gestão" />
            <CredentialItem label="Comissão de Ética — CRF" value="Integridade institucional comprovada" />
            <CredentialItem label="Liderança comprovada" value="Equipes treinadas, metas batidas" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CredentialItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-[rgba(var(--brand-rgb,214,168,79),0.12)] bg-[color-mix(in_srgb,var(--brand)_4%,transparent)] p-5">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--brand)]/20 bg-[color-mix(in_srgb,var(--brand)_8%,transparent)]">
        <span className="h-2 w-2 rounded-full bg-[var(--brand)]" />
      </div>
      <div>
        <p className="text-sm font-bold text-foreground">{label}</p>
        <p className="mt-0.5 text-xs text-muted">{value}</p>
      </div>
    </div>
  );
}
