"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap } from "lucide-react";
import { AnimateIn } from "./AnimateIn";

const career = [
  {
    company: "Droga Raia",
    period: "Atual",
    role: "Farmacêutico RT",
    desc: "Responsabilidade técnica, vendas, treinamento e gestão de equipe",
  },
  {
    company: "Drogaria Americana",
    period: "2013–2014",
    role: "Farmacêutico RT",
    desc: "Atendimento farmacêutico e processos operacionais",
  },
  {
    company: "Farma Cruz",
    period: "2012–2013",
    role: "Farmacêutico RT",
    desc: "Rotina farmacêutica e compliance",
  },
  {
    company: "Hospital Unimed",
    period: "2008–2011",
    role: "Aux. de Farmácia",
    desc: "Farmácia hospitalar e vivência clínica",
  },
];

const education = [
  "Pós-graduação em Engenharia de IA",
  "GEAR/Google — IA e Agentes Inteligentes",
  "MBA em Gestão Empresarial",
  "MBA em Gestão Estratégica",
  "Farmácia — UNIFRAN",
];

export function Trajetoria() {
  return (
    <section id="trajetoria" className="relative overflow-hidden bg-gray-950 py-24 md:py-36">
      <div className="pointer-events-none absolute left-[10%] top-[20%] h-[300px] w-[300px] rounded-full bg-blue-600/8 blur-[100px]" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <AnimateIn className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
            <Briefcase className="h-3 w-3" aria-hidden />
            Trajetória
          </span>
          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Uma trajetória{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #93c5fd, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              sólida.
            </span>
          </h2>
        </AnimateIn>

        <div className="grid gap-6 lg:grid-cols-2">
          <AnimateIn>
            <div className="rounded-2xl border border-white/6 bg-white/[0.03] p-7 backdrop-blur">
              <h3 className="mb-7 flex items-center gap-2 text-lg font-bold text-white">
                <Award className="h-5 w-5 text-blue-400" aria-hidden />
                Carreira Profissional
              </h3>
              <div className="space-y-6">
                {career.map((job, i) => (
                  <motion.div
                    key={job.company}
                    className="relative border-l border-blue-500/20 pl-5 transition-colors hover:border-blue-500/50"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-blue-500/60" />
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <h4 className="text-sm font-bold text-white">{job.company}</h4>
                      <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 text-[10px] font-semibold text-blue-400">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-blue-400/80">{job.role}</p>
                    <p className="mt-1 text-xs leading-relaxed text-white/40">{job.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div className="rounded-2xl border border-white/6 bg-white/[0.03] p-7 backdrop-blur">
              <h3 className="mb-7 flex items-center gap-2 text-lg font-bold text-white">
                <GraduationCap className="h-5 w-5 text-blue-400" aria-hidden />
                Formação Acadêmica
              </h3>
              <div className="space-y-3">
                {education.map((course, i) => (
                  <motion.div
                    key={course}
                    className="flex items-center justify-between rounded-xl border border-white/6 bg-white/[0.03] px-4 py-3.5 transition-colors hover:border-blue-500/20 hover:bg-blue-500/5"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <span className="text-sm text-white/70">{course}</span>
                    <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400">
                      Concluído
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
