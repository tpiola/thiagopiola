"use client";

import { ArrowRight, Heart, MessageCircle } from "lucide-react";
import { missao, site } from "@/lib/content";
import { Reveal } from "./motion/Reveal";
import { SectionLabel } from "./SectionLabel";
import { MagneticLink } from "./motion/MagneticLink";
import { trackCta } from "@/lib/analytics";

export function Missao() {
  return (
    <section id="missao" className="relative border-b border-border py-24 md:py-36 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{ background: "radial-gradient(ellipse at 50% 100%, var(--brand), transparent 60%)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl px-5 md:px-8">
        <Reveal variant="up">
          <SectionLabel index="06">Missão de vida</SectionLabel>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-gradient-brand md:text-5xl">
            {missao.title}
          </h2>
          <p className="mt-2 text-base text-muted md:text-lg font-semibold">{missao.lead}</p>
          <div className="mt-4 divider-brand w-24" />
        </Reveal>

        <Reveal variant="fade" delay={0.1}>
          <div className="mt-8 rounded-2xl border border-[var(--brand)]/20 bg-[color-mix(in_srgb,var(--brand)_4%,transparent)] p-8 md:p-10">
            <div className="flex gap-4">
              <div
                className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                style={{ background: "color-mix(in srgb, var(--brand) 15%, transparent)" }}
              >
                <Heart className="h-5 w-5 text-[var(--brand)]" aria-hidden />
              </div>
              <div>
                <p className="text-base leading-relaxed text-foreground md:text-lg">
                  {missao.texto}
                </p>
                <p className="mt-4 text-sm font-semibold text-[var(--brand)]">
                  {missao.detalhe}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal variant="scale" delay={0.2}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <MagneticLink
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group w-full justify-center sm:w-auto"
              onClick={() => trackCta("cta_whatsapp_missao")}
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              {missao.cta}
              <ArrowRight className="h-3.5 w-3.5 opacity-60 transition-all group-hover:translate-x-0.5" aria-hidden />
            </MagneticLink>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group w-full justify-center sm:w-auto"
              onClick={() => trackCta("cta_linkedin_missao")}
            >
              Ver perfil no LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
