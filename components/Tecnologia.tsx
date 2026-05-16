"use client";

import { motion } from "framer-motion";
import { Bot, CodeXml, HeartPulse, Layers, Target, Workflow, Zap } from "lucide-react";
import { AnimateIn } from "./AnimateIn";

const items = [
  {
    icon: Bot,
    title: "Assistentes de IA",
    desc: "Atendimento inteligente e qualificação automatizada",
  },
  {
    icon: Workflow,
    title: "Automações n8n",
    desc: "Fluxos que eliminam trabalho manual",
  },
  {
    icon: Layers,
    title: "Sistemas Integrados",
    desc: "CRM, dashboards e controle total",
  },
  {
    icon: CodeXml,
    title: "Sites & Aplicativos",
    desc: "Presença digital que converte",
  },
  {
    icon: HeartPulse,
    title: "IA na Saúde",
    desc: "Tecnologia aplicada ao cuidado",
  },
  {
    icon: Target,
    title: "Analytics Avançado",
    desc: "Dados que orientam decisões",
  },
];

export function Tecnologia() {
  return (
    <section id="tecnologia" className="relative overflow-hidden bg-gray-50 py-24 md:py-36">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <AnimateIn className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-blue-700">
            <Zap className="h-3 w-3" aria-hidden />
            Tecnologia
          </span>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Habilidade com <span className="text-blue-600">IA aplicada.</span>
          </h2>
        </AnimateIn>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <motion.div
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/8"
                whileHover={{ y: -4 }}
              >
                <motion.div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-500/25"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                >
                  <item.icon className="h-[18px] w-[18px]" aria-hidden />
                </motion.div>
                <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-500">{item.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
