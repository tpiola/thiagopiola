"use client";

import { Users, TrendingUp, MessageCircle, ShieldCheck, Zap, Award } from "lucide-react";
import { especialidades } from "@/lib/content";
import { LuxuryCard } from "./motion/LuxuryCard";
import { Reveal } from "./motion/Reveal";
import { Stagger, StaggerItem } from "./motion/Stagger";
import { SectionLabel } from "./SectionLabel";

const ICONS = {
  users: Users,
  "trending-up": TrendingUp,
  "message-circle": MessageCircle,
  "shield-check": ShieldCheck,
  zap: Zap,
  award: Award,
} as const;

export function Especialidades() {
  return (
    <section id="especialidades" className="border-b border-border py-24 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-3xl" variant="left">
          <SectionLabel index="03">Especialidades</SectionLabel>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground text-gradient-brand md:text-5xl">
            O que entrego para a indústria.
          </h2>
          <div className="mt-4 divider-brand w-24" />
          <p className="mt-5 text-base text-muted md:text-lg leading-relaxed max-w-2xl">
            Competências construídas em 15 anos de operação real — na linha de frente onde a indústria quer chegar.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {especialidades.map((item) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];
            return (
              <StaggerItem key={item.title}>
                <LuxuryCard className="flex h-full flex-col p-6 md:p-7">
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: "color-mix(in srgb, var(--brand) 12%, transparent)" }}
                  >
                    <Icon className="h-5 w-5 text-[var(--brand)]" aria-hidden />
                  </div>
                  <h3 className="text-base font-bold leading-snug text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed flex-1">{item.desc}</p>
                </LuxuryCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
