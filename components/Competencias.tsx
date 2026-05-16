"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  ChartColumn,
  CircleCheck,
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import { AnimateIn } from "./AnimateIn";

const skills = [
  {
    icon: TrendingUp,
    title: "Vendas Consultivas",
    desc: "Conversão com relacionamento estratégico e ética",
  },
  {
    icon: Users,
    title: "Treinamento",
    desc: "Equipes de alta performance com método comprovado",
  },
  {
    icon: ChartColumn,
    title: "Gestão de Projetos",
    desc: "Planejamento, execução e entrega com precisão",
  },
  {
    icon: Rocket,
    title: "Crescimento",
    desc: "Estratégias que escalam o negócio com consistência",
  },
  {
    icon: BrainCircuit,
    title: "Engenharia de IA",
    desc: "Agentes, automações e sistemas inteligentes",
  },
  {
    icon: Workflow,
    title: "Automação",
    desc: "Fluxos digitais que trabalham por você 24/7",
  },
];

const missionItems = [
  "Automações que eliminam tarefas manuais",
  "IA que acelera decisões estratégicas",
  "Treinamentos que elevam times",
  "Vendas com ética e resultado",
  "Sistemas que organizam o caos",
  "Tecnologia aplicada ao real",
];

export function Competencias() {
  return (
    <section id="competencias" className="relative overflow-hidden bg-white py-24 md:py-36">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.025)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <motion.div
        className="relative mx-auto max-w-6xl px-5 md:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <AnimateIn className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-blue-700">
            <Sparkles className="h-3 w-3" aria-hidden />
            Competências
          </span>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Resultado <span className="text-blue-600">acima da média.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-500">
            Décadas de prática clínica encontrando engenharia de ponta. Uma combinação rara.
          </p>
        </AnimateIn>

        <motion.div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <AnimateIn key={skill.title} delay={i * 0.08}>
              <motion.div
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/8"
                whileHover={{ y: -4 }}
              >
                <motion.div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-50 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-500/25 transition-transform group-hover:scale-110">
                  <skill.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-base font-bold text-gray-900">{skill.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{skill.desc}</p>
              </motion.div>
            </AnimateIn>
          ))}
        </motion.div>

        <AnimateIn className="mt-16">
          <div className="relative overflow-hidden rounded-3xl bg-gray-950 p-8 md:p-12">
            <motion.div
              className="pointer-events-none absolute right-0 top-0 h-80 w-80 -translate-y-1/2 translate-x-1/2 rounded-full bg-blue-600/10 blur-[80px]"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
                  Missão
                </span>
                <h3 className="mt-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                  Saúde + IA.
                  <br />
                  <span
                    style={{
                      background: "linear-gradient(135deg, #93c5fd, #3b82f6)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Humano + Digital.
                  </span>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/50 md:text-base">
                  Mais de uma década unindo farmácia, gestão e engenharia de IA. O resultado é uma
                  visão única: tecnologia que serve o cuidado humano.
                </p>
              </motion.div>
              <motion.div
                className="grid gap-3 sm:grid-cols-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 } },
                }}
              >
                {missionItems.map((item) => (
                  <motion.div
                    key={item}
                    variants={{
                      hidden: { opacity: 0, x: 16 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="flex items-start gap-2.5 rounded-xl border border-white/8 bg-white/4 p-3.5 text-sm text-white/65"
                    whileHover={{ x: 4, borderColor: "rgba(59,130,246,0.3)" }}
                  >
                    <CircleCheck className="mt-0.5 h-4 w-4 flex-none text-blue-400" aria-hidden />
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </AnimateIn>
      </motion.div>
    </section>
  );
}
