"use client";

import { motion } from "framer-motion";
import { Bot, HeartPulse, Pill, Workflow } from "lucide-react";
import { AnimateIn } from "./AnimateIn";
import { Logo } from "./Logo";

const pilares = [
  {
    icon: Pill,
    title: "Farmácia clínica e varejo",
    desc: "Atendimento responsável, orientação segura e gestão técnica alinhada às normas do CRF/SP.",
  },
  {
    icon: Bot,
    title: "Inteligência artificial",
    desc: "Agentes e assistentes que apoiam decisões, qualificam demandas e elevam a experiência do paciente.",
  },
  {
    icon: Workflow,
    title: "Automação de processos",
    desc: "Fluxos digitais que reduzem retrabalho e liberam tempo para o que importa: o cuidado humano.",
  },
  {
    icon: HeartPulse,
    title: "Saúde com método",
    desc: "Integração entre prática farmacêutica, vendas éticas e tecnologia aplicada ao dia a dia.",
  },
];

export function FarmaciaComunicacao() {
  return (
    <section
      id="farmacia"
      className="relative overflow-hidden border-y border-blue-100/80 bg-gradient-to-b from-slate-50 to-white py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
          <AnimateIn>
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <Logo iconClassName="h-16 w-16" variant="icon" className="mb-6" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-blue-600">
                Farmácia &amp; tecnologia
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                A farmácia no centro.
                <span className="text-blue-600"> A IA como aliada.</span>
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-600">
                Mais de uma década de atuação em ambiente farmacêutico — do balcão à
                responsabilidade técnica — combinada com engenharia de IA e automação. O objetivo é
                simples: cuidar melhor, operar com precisão e usar tecnologia com critério
                profissional.
              </p>
              <p className="mt-4 text-sm font-medium text-emerald-700">
                Farmacêutico CRF/SP 58.519
              </p>
            </div>
          </AnimateIn>

          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {pilares.map((item) => (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md hover:shadow-blue-500/5"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <item.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
