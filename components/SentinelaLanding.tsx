"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  Droplets,
  Microscope,
  ShieldCheck,
  Sparkles,
  Wind,
} from "lucide-react";
import { sentinela } from "@/lib/content";

const fade = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };

export function SentinelaLanding() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0A1F1A] text-[#F4F7F6] selection:bg-[#D4AF37] selection:text-[#0A1F1A]">
      <header className="fixed inset-x-3 top-3 z-50 rounded-full border border-white/10 bg-[#0A1F1A]/70 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:inset-x-6 lg:inset-x-10">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between gap-4"
          aria-label="Principal Sentinela"
        >
          <a
            href="#topo"
            className="min-h-11 rounded-full px-2 text-sm font-semibold tracking-[0.28em] text-[#D4AF37] uppercase"
          >
            Sentinela
          </a>
          <div className="hidden items-center gap-6 text-sm text-white/70 lg:flex">
            {sentinela.nav.map((item) => (
              <a className="transition hover:text-[#D4AF37]" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <a
            href={sentinela.whatsapp}
            className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-[#D4AF37]/50 px-4 text-sm font-semibold text-[#F4F7F6] transition hover:bg-[#D4AF37] hover:text-[#0A1F1A]"
          >
            WhatsApp <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </a>
        </nav>
      </header>

      <section
        id="topo"
        className="relative grid min-h-screen place-items-center px-4 pt-28 sm:px-6 lg:px-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,201,167,.28),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(212,175,55,.22),transparent_30%)]" />
        <motion.div
          style={{ y: 0 }}
          className="absolute inset-x-4 top-28 h-72 rounded-[3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(244,247,246,.12),rgba(0,201,167,.05))] shadow-2xl shadow-black/30 backdrop-blur-sm sm:h-[34rem] lg:inset-x-16"
        />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.12 }}
            className="space-y-8"
          >
            <motion.p
              variants={fade}
              className="inline-flex rounded-full border border-[#D4AF37]/30 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-[#D4AF37] uppercase backdrop-blur-xl"
            >
              {sentinela.hero.eyebrow}
            </motion.p>
            <motion.h1
              variants={fade}
              className="max-w-5xl text-5xl leading-[0.92] font-semibold tracking-tighter text-balance sm:text-7xl xl:text-8xl"
            >
              {sentinela.hero.title}
            </motion.h1>
            <motion.p
              variants={fade}
              className="max-w-2xl text-lg leading-relaxed text-white/72 sm:text-xl"
            >
              {sentinela.hero.subtitle}
            </motion.p>
            <motion.div variants={fade} className="flex flex-col gap-3 sm:flex-row">
              <a
                href={sentinela.whatsapp}
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-6 font-semibold text-[#0A1F1A] shadow-[0_0_40px_rgba(212,175,55,.28)] transition hover:scale-[1.02]"
              >
                <Microscope className="size-5" /> {sentinela.hero.primaryCta}
              </a>
              <a
                href="#ameaca"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 font-semibold text-white/86 backdrop-blur-xl transition hover:border-[#00C9A7] hover:text-[#00C9A7]"
              >
                {sentinela.hero.secondaryCta}
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[420px] rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur-2xl"
          >
            <div className="absolute inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_50%_25%,rgba(0,201,167,.38),transparent_30%),linear-gradient(160deg,rgba(244,247,246,.18),rgba(10,31,26,.4))]" />
            <div className="relative flex h-full min-h-[390px] flex-col justify-between rounded-[2rem] border border-[#D4AF37]/20 p-6">
              <Sparkles className="size-10 text-[#D4AF37]" />
              <div>
                <p className="text-sm text-white/60">Imagem IA sugerida</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                  Laboratório de alta tecnologia + natureza viva.
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {sentinela.hero.proof.map((item) => (
                  <span
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 p-3 text-sm text-white/75 backdrop-blur-xl"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="ameaca" className="px-4 py-24 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <p className="text-sm font-semibold tracking-[0.24em] text-[#00C9A7] uppercase">
              A ameaça invisível
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              Perigos que você não vê, mas sente.
            </h2>
          </div>
          <div className="grid gap-4">
            {sentinela.threats.map((threat, index) => (
              <motion.article
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={fade}
                transition={{ delay: index * 0.08 }}
                key={threat.title}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl transition hover:border-[#D4AF37]/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold">{threat.title}</h3>
                  <span className="text-4xl font-semibold text-[#D4AF37]">{threat.stat}</span>
                </div>
                <p className="mt-4 text-white/68">{threat.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="sentinelas" className="px-4 py-24 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold tracking-[0.24em] text-[#D4AF37] uppercase">
            Os Sentinelas
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Especialistas humanos, precisão científica e atendimento de concierge.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {sentinela.agents.map((agent) => (
              <article
                key={agent.name}
                className="min-h-72 rounded-[2rem] border border-[#D4AF37]/20 bg-[#F4F7F6]/10 p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl transition hover:-translate-y-2 hover:border-[#D4AF37]/60"
              >
                <div className="mb-8 grid size-16 place-items-center rounded-full bg-[#00C9A7]/15 text-[#00C9A7]">
                  <ShieldCheck />
                </div>
                <h3 className="text-2xl font-semibold">{agent.name}</h3>
                <p className="mt-1 text-sm text-[#D4AF37]">{agent.role}</p>
                <blockquote className="mt-5 text-white/80">“{agent.quote}”</blockquote>
                <p className="mt-4 text-sm text-white/58">{agent.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="transformacao"
        className="bg-[#F4F7F6] px-4 py-24 text-[#0A1F1A] sm:px-6 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold tracking-[0.24em] text-[#008f78] uppercase">
                Galeria da transformação
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
                Do alerta ao alívio em uma rolagem.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#0A1F1A]/70">
                A Sentinela transforma ambientes com diagnóstico, protocolo e prova visual. O
                cérebro percebe o antes; a família vive o depois.
              </p>
            </div>
            <div className="rounded-[2.5rem] border border-[#0A1F1A]/10 bg-white p-3 shadow-2xl">
              <div className="grid overflow-hidden rounded-[2rem] md:grid-cols-2">
                <div className="bg-[#0A1F1A] p-8 text-white">
                  <p className="text-[#D4AF37]">Antes</p>
                  <p className="mt-28 text-2xl font-semibold">
                    Foco oculto, risco invisível, improviso caro.
                  </p>
                </div>
                <div className="relative bg-[linear-gradient(135deg,#EFFFFB,#D5FFF6)] p-8">
                  <p className="text-[#008f78]">Depois</p>
                  <Sparkles className="absolute right-8 top-8 text-[#D4AF37]" />
                  <p className="mt-28 text-2xl font-semibold">
                    Ambiente limpo, plano claro, família tranquila.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sentinela.transformations.map((item) => (
              <span
                key={item}
                className="rounded-2xl border border-[#0A1F1A]/10 bg-white p-4 font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold tracking-[0.24em] text-[#00C9A7] uppercase">
            Selo da confiança
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Autoridade local com documentação e garantia.
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sentinela.trustSeals.map((seal) => (
              <div
                key={seal}
                className="animate-pulse rounded-full border border-white/10 bg-white/[0.06] px-6 py-5 text-lg font-semibold text-white/82 backdrop-blur-xl"
              >
                {seal}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="agendar" className="px-4 py-24 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-[2.5rem] border border-[#D4AF37]/20 bg-white/[0.07] p-6 backdrop-blur-2xl sm:p-10">
            <CalendarCheck className="size-12 text-[#D4AF37]" />
            <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
              {sentinela.finalCta.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">{sentinela.finalCta.text}</p>
            <form className="mt-8 grid gap-4 sm:grid-cols-2">
              <input
                className="min-h-12 border-b border-[#D4AF37]/50 bg-transparent px-2 outline-none placeholder:text-white/40"
                placeholder="Seu nome"
              />
              <input
                className="min-h-12 border-b border-[#D4AF37]/50 bg-transparent px-2 outline-none placeholder:text-white/40"
                placeholder="WhatsApp"
              />
              <select className="min-h-12 border-b border-[#D4AF37]/50 bg-transparent px-2 outline-none sm:col-span-2">
                <option>Ar que respiro</option>
                <option>Água que bebo</option>
                <option>Insetos e pragas</option>
                <option>Tudo</option>
              </select>
              <a
                href={sentinela.whatsapp}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#00C9A7] px-6 font-semibold text-[#0A1F1A] sm:col-span-2"
              >
                Confirmar diagnóstico
              </a>
            </form>
          </div>
          <VanessaCard />
        </div>
      </section>
    </main>
  );
}

function VanessaCard() {
  return (
    <aside className="rounded-[2.5rem] border border-white/10 bg-[#F4F7F6] p-6 text-[#0A1F1A] shadow-2xl sm:p-8">
      <div className="flex items-center gap-4">
        <div className="grid size-16 place-items-center rounded-full border-2 border-[#D4AF37] bg-[#0A1F1A] text-[#00C9A7]">
          <Wind />
        </div>
        <div>
          <h3 className="text-2xl font-semibold">{sentinela.vanessa.title}</h3>
          <p className="text-sm text-[#0A1F1A]/60">online agora · resposta humanizada</p>
        </div>
      </div>
      <p className="mt-6 leading-relaxed text-[#0A1F1A]/75">{sentinela.vanessa.intro}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {sentinela.vanessa.quickReplies.map((reply) => (
          <button
            key={reply}
            className="min-h-11 rounded-full border border-[#0A1F1A]/10 px-4 text-sm font-semibold transition hover:bg-[#0A1F1A] hover:text-white"
          >
            {reply}
          </button>
        ))}
      </div>
      <div className="mt-6 space-y-3">
        {sentinela.vanessa.flows.map((flow) => (
          <details key={flow.intent} className="rounded-2xl bg-[#0A1F1A]/5 p-4">
            <summary className="cursor-pointer font-semibold">Detecta: {flow.intent}</summary>
            <p className="mt-3 text-sm leading-relaxed text-[#0A1F1A]/70">{flow.response}</p>
          </details>
        ))}
      </div>
      <a
        href={sentinela.whatsapp}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0A1F1A] px-5 font-semibold text-white"
      >
        <Droplets className="size-5" /> Chamar Vanessa
      </a>
    </aside>
  );
}
