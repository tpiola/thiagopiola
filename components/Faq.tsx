"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "./motion/Reveal";
import { SectionLabel } from "./SectionLabel";

const faqs = [
  {
    q: "Quais são as especialidades do Thiago Piola?",
    a: "Farmacêutico CRF/SP 58.519, especialista em treinamento de equipes de alta performance, automação de processos com n8n e IA aplicada ao setor farmacêutico. Founder da Rei das Vendas.",
  },
  {
    q: "O Thiago Piola atende empresas da indústria farmacêutica?",
    a: "Sim. Thiago tem 15 anos de experiência do hospital ao varejo farmacêutico, com perfil voltado para vendas consultivas técnico-científicas, relacionamento com prescritores e compliance ANVISA. Confira o perfil completo em /industria.",
  },
  {
    q: "Como entrar em contato com o Thiago Piola?",
    a: "Pelo WhatsApp (16) 99233-3344, e-mail contato@thiagopiola.com.br ou LinkedIn. Resposta em até 24 horas.",
  },
  {
    q: "O que é o Rei das Vendas?",
    a: "Plataforma de treinamento comercial para equipes do setor farmacêutico, fundada por Thiago Piola. Metodologia que transforma equipes em máquinas de conversão ética. Acesse reidasvendas.com.br.",
  },
  {
    q: "Qual a formação do Thiago Piola?",
    a: "Farmacêutico pela UNIFRAN, MBA em Gestão Empresarial, MBA em Gestão Estratégica, Google GEAR (IA e Agentes Inteligentes) e Pós-graduação em Engenharia de IA em andamento.",
  },
] as const;

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="border-b border-border py-24 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal className="mb-12" variant="up">
          <SectionLabel index="04">FAQ</SectionLabel>
          <h2 className="mt-4 text-heading-xl font-semibold tracking-tight text-foreground text-gradient-brand">
            Perguntas frequentes
          </h2>
          <div className="mt-4 divider-brand w-24" />
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;

            return (
              <Reveal key={faq.q} variant="up" delay={i * 0.05}>
                <div className="rounded-2xl border border-border bg-surface-elevated overflow-hidden transition-[border-color] duration-300 hover:border-[var(--brand)]/25">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-sm font-semibold text-foreground leading-snug sm:text-base">
                      {faq.q}
                    </span>

                    <motion.span
                      animate={reduce ? undefined : { rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full border border-border text-[var(--brand)]"
                      aria-hidden
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={reduce ? undefined : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className="px-6 pb-5 text-sm text-muted leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
