"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowUp, Bot, BrainCircuit, Briefcase, Code2,
  GraduationCap, HeartPulse, Linkedin, Mail, MapPin, Menu,
  MessageCircle, Phone, Sparkles, Target, Users, Workflow, X,
  Instagram, Facebook, Zap, Layers, TrendingUp, Award, Rocket,
  BarChart3, CheckCircle2, Play, ChevronDown,
} from "lucide-react";

/* ─── BRAND DATA ─── */
const profile = {
  name: "THIAGO BIASOLI G. PIOLA",
  shortName: "THIAGO PIOLA",
  city: "Franca, SP",
  phone: "(16) 99233-3344",
  phoneClean: "5516992333344",
  email: "contato@thiagopiola.com.br",
  crf: "CRF-SP 58.519",
  whatsapp: "https://wa.me/5516992333344",
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/thiago-piola/", icon: Linkedin },
    { label: "Instagram", url: "https://www.instagram.com/thiagopiolaoficial/", icon: Instagram },
    { label: "Facebook", url: "https://www.facebook.com/thiagopiolaoficial/", icon: Facebook },
    { label: "X", url: "https://x.com/ThiagoPiola07", icon: X },
  ],
};

const skills = [
  { icon: TrendingUp, title: "Vendas Consultivas", desc: "Conversão com relacionamento estratégico e ética" },
  { icon: Users, title: "Treinamento", desc: "Equipes de alta performance com método comprovado" },
  { icon: BarChart3, title: "Gestão de Projetos", desc: "Planejamento, execução e entrega com precisão" },
  { icon: Rocket, title: "Crescimento", desc: "Estratégias que escalam o negócio com consistência" },
  { icon: BrainCircuit, title: "Engenharia de IA", desc: "Agentes, automações e sistemas inteligentes" },
  { icon: Workflow, title: "Automação", desc: "Fluxos digitais que trabalham por você 24/7" },
];

const experience = [
  { company: "Droga Raia", role: "Farmacêutico RT", period: "Atual", result: "Responsabilidade técnica, vendas, treinamento e gestão de equipe" },
  { company: "Drogaria Americana", role: "Farmacêutico RT", period: "2013–2014", result: "Atendimento farmacêutico e processos operacionais" },
  { company: "Farma Cruz", role: "Farmacêutico RT", period: "2012–2013", result: "Rotina farmacêutica e compliance" },
  { company: "Hospital Unimed", role: "Aux. de Farmácia", period: "2008–2011", result: "Farmácia hospitalar e vivência clínica" },
];

const education = [
  { title: "Pós-graduação em Engenharia de IA", status: "Concluído" },
  { title: "GEAR/Google — IA e Agentes Inteligentes", status: "Concluído" },
  { title: "MBA em Gestão Empresarial", status: "Concluído" },
  { title: "MBA em Gestão Estratégica", status: "Concluído" },
  { title: "Farmácia — UNIFRAN", status: "Concluído" },
];

const solutions = [
  { icon: Bot, title: "Assistentes de IA", desc: "Atendimento inteligente e qualificação automatizada" },
  { icon: Workflow, title: "Automações n8n", desc: "Fluxos que eliminam trabalho manual" },
  { icon: Layers, title: "Sistemas Integrados", desc: "CRM, dashboards e controle total" },
  { icon: Code2, title: "Sites & Aplicativos", desc: "Presença digital que converte" },
  { icon: HeartPulse, title: "IA na Saúde", desc: "Tecnologia aplicada ao cuidado" },
  { icon: Target, title: "Analytics Avançado", desc: "Dados que orientam decisões" },
];

const SPRING = { type: "spring" as const, stiffness: 90, damping: 22 };

/* ─── PHARMACY SYMBOL ─── */
function PharmacyLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <path d="M50 5C48 5 46.5 6.5 46.5 8.5V12C46.5 12 30 15 30 30C30 42 38 48 46.5 50V88C46.5 91 48.5 93 50 93C51.5 93 53.5 91 53.5 88V50C62 48 70 42 70 30C70 15 53.5 12 53.5 12V8.5C53.5 6.5 52 5 50 5ZM50 16C50 16 64 18 64 30C64 40 56 44 50 46C44 44 36 40 36 30C36 18 50 16 50 16Z"/>
    </svg>
  );
}

/* ─── SCROLL PROGRESS BAR ─── */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[100] h-[2px] w-full origin-left"
      style={{ scaleX, background: "linear-gradient(90deg, #1d4ed8, #3b82f6, #60a5fa)" }}
    />
  );
}

/* ─── FLOATING WHATSAPP ─── */
function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 1000); return () => clearTimeout(t); }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={profile.whatsapp}
          target="_blank"
          rel="noreferrer"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0 }}
          whileHover={{ scale: 1.1, y: -4 }}
          className="fixed bottom-6 right-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-2xl shadow-emerald-500/40"
          aria-label="WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
          <motion.span
            animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-emerald-400"
          />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

/* ─── ANIMATED SECTION ─── */
function Reveal({ children, className = "", delay = 0, y = 40 }: { children: React.ReactNode; className?: string; delay?: number; y?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...SPRING, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── VIDEO SECTION ─── */
function InlineVideo({ src, caption }: { src: string; caption?: string }) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-gray-950 shadow-2xl shadow-black/40" style={{ aspectRatio: "16/9" }}>
      <video autoPlay muted loop playsInline preload="metadata" className="h-full w-full object-cover opacity-90">
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      {caption && (
        <div className="absolute bottom-4 left-5 right-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">{caption}</p>
        </div>
      )}
    </div>
  );
}

/* ─── HEADER ─── */
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { label: "Competências", href: "#competencias" },
    { label: "Tecnologia", href: "#tecnologia" },
    { label: "Trajetória", href: "#trajetoria" },
  ];
  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ${scrolled ? "bg-white/96 shadow-sm shadow-gray-900/5 backdrop-blur-2xl" : "bg-transparent"}`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
          <a href="#" className="flex items-center gap-2.5" aria-label="Thiago Piola">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-500/30">
              <PharmacyLogo className="h-5 w-5" />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`text-xs font-black tracking-[0.1em] transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}>{profile.shortName}</span>
              <span className="text-[10px] font-semibold text-blue-500">{profile.crf}</span>
            </div>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className={`rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] transition-all hover:bg-blue-50 hover:text-blue-700 ${scrolled ? "text-gray-600" : "text-white/80 hover:bg-white/10 hover:text-white"}`}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5 hover:bg-blue-700 md:inline-flex">
              <MessageCircle className="h-3.5 w-3.5" /> Contato
            </a>
            <button onClick={() => setMenuOpen(true)} className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors hover:bg-black/10 md:hidden ${scrolled ? "text-gray-700" : "text-white"}`} aria-label="Menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm md:hidden" onClick={() => setMenuOpen(false)}>
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 28, stiffness: 220 }} onClick={(e) => e.stopPropagation()} className="absolute right-0 top-0 h-full w-72 bg-white p-6 shadow-2xl">
              <button onClick={() => setMenuOpen(false)} className="mb-6 flex h-9 w-9 items-center justify-center rounded-xl text-gray-500 hover:bg-gray-100" aria-label="Fechar">
                <X className="h-5 w-5" />
              </button>
              <nav className="space-y-1">
                {links.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700">{link.label}</a>
                ))}
              </nav>
              <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 text-sm font-bold text-white shadow-lg">
                <MessageCircle className="h-4 w-4" /> Contato
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
/* ─── HERO SECTION ─── */
function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 0.6], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-gray-950">
      {/* Parallax BG Video */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <video autoPlay muted loop playsInline preload="metadata" className="h-full w-full object-cover opacity-30">
          <source src="https://cdn.coverr.co/videos/coverr-working-at-night-5178/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/50 to-gray-950" />
      </motion.div>

      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity }} className="absolute left-[5%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        <motion.div animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.35, 0.2] }} transition={{ duration: 10, repeat: Infinity }} className="absolute right-[5%] top-[30%] h-[400px] w-[400px] rounded-full bg-blue-400/10 blur-[100px]" />
      </div>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content */}
      <motion.div style={{ y: textY, opacity }} className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 pb-24 pt-32 text-center md:px-8">
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 backdrop-blur">
            <PharmacyLogo className="h-3.5 w-3.5" />
            {profile.crf} · Franca, SP
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="text-4xl font-black leading-[1.0] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <span style={{ background: "linear-gradient(135deg, #ffffff 0%, #93c5fd 40%, #3b82f6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Thiago Biasoli G. Piola
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/55 md:text-xl">
            Farmacêutico · Engenheiro de IA · Vendas · Treinamento · Automação
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/40">
            <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-blue-400" />{profile.city}</span>
            <a href={`tel:${profile.phoneClean}`} className="flex items-center gap-1.5 transition-colors hover:text-white/70"><Phone className="h-3.5 w-3.5 text-blue-400" />{profile.phone}</a>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 transition-colors hover:text-white/70"><Mail className="h-3.5 w-3.5 text-blue-400" />{profile.email}</a>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2.5 rounded-full bg-blue-600 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.15em] text-white shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/50">
              <MessageCircle className="h-4 w-4" /> Entrar em Contato <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#competencias" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.15em] text-white/80 backdrop-blur transition-all hover:border-white/30 hover:bg-white/10 hover:text-white">
              Conhecer mais
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.3} className="mt-8">
          <div className="flex justify-center gap-2">
            {profile.socials.map((s) => { const Icon = s.icon; return (
              <motion.a key={s.label} href={s.url} target="_blank" rel="noreferrer" whileHover={{ y: -3, scale: 1.1 }} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/50 backdrop-blur transition-all hover:border-blue-400/50 hover:text-blue-400" aria-label={s.label}>
                <Icon className="h-4 w-4" />
              </motion.a>
            ); })}
          </div>
        </Reveal>

        {/* Scroll indicator */}
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <ChevronDown className="h-6 w-6 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── SKILLS SECTION (WHITE) ─── */
function Skills() {
  return (
    <section id="competencias" className="relative overflow-hidden bg-white py-24 md:py-36">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.025)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-blue-700">
            <Sparkles className="h-3 w-3" /> Competências
          </span>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Resultado <span className="text-blue-600">acima da média.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-500 leading-relaxed">
            Décadas de prática clínica encontrando engenharia de ponta. Uma combinação rara.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <Reveal key={skill.title} delay={i * 0.07}>
                <motion.div whileHover={{ y: -6, scale: 1.01 }} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/8">
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-50 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-500/25 transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{skill.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{skill.desc}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* Manifesto dark block */}
        <Reveal delay={0.35} className="mt-16">
          <div className="relative overflow-hidden rounded-3xl bg-gray-950 p-8 md:p-12">
            <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">Missão</span>
                <h3 className="mt-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                  Saúde + IA.<br />
                  <span style={{ background: "linear-gradient(135deg, #93c5fd, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Humano + Digital.
                  </span>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/50 md:text-base">
                  Mais de uma década unindo farmácia, gestão e engenharia de IA. O resultado é uma visão única: tecnologia que serve o cuidado humano.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Automações que eliminam tarefas manuais",
                  "IA que acelera decisões estratégicas",
                  "Treinamentos que elevam times",
                  "Vendas com ética e resultado",
                  "Sistemas que organizam o caos",
                  "Tecnologia aplicada ao real",
                ].map((item, i) => (
                  <motion.div key={item} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="flex items-start gap-2.5 rounded-xl border border-white/8 bg-white/4 p-3.5 text-sm text-white/65">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-blue-400" /> {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── VIDEO INTERLUDE ─── */
function VideoInterlude() {
  return (
    <section className="relative overflow-hidden bg-gray-950 py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <Reveal>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Tecnologia</span>
            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              A Farmácia do<br />
              <span style={{ background: "linear-gradient(135deg, #ffffff, #93c5fd, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Futuro é Hoje.
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/45">
              Inteligência artificial, automação e análise de dados transformando o cuidado à saúde. Não no amanhã — agora.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-blue-500/60" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-400/70">CRF-SP 58.519</span>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <InlineVideo
              src="https://cdn.coverr.co/videos/coverr-a-pharmacist-working-in-a-pharmacy-6770/1080p.mp4"
              caption="Farmácia · Tecnologia · Cuidado"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── TECHNOLOGY SECTION (WHITE) ─── */
function Solutions() {
  return (
    <section id="tecnologia" className="relative overflow-hidden bg-gray-50 py-24 md:py-36">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-blue-700">
            <Zap className="h-3 w-3" /> Tecnologia
          </span>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Habilidade com <span className="text-blue-600">IA aplicada.</span>
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 0.07}>
                <motion.div whileHover={{ y: -5 }} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/8">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-500/25 transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900">{s.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-gray-500">{s.desc}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── EXPERIENCE SECTION (DARK) ─── */
function Experience() {
  return (
    <section id="trajetoria" className="relative overflow-hidden bg-gray-950 py-24 md:py-36">
      <div className="pointer-events-none absolute left-[10%] top-[20%] h-[300px] w-[300px] rounded-full bg-blue-600/8 blur-[100px]" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
            <Briefcase className="h-3 w-3" /> Trajetória
          </span>
          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Uma trajetória <span style={{ background: "linear-gradient(135deg, #93c5fd, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>sólida.</span>
          </h2>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-white/6 bg-white/[0.03] p-7 backdrop-blur">
              <h3 className="mb-7 flex items-center gap-2 text-lg font-bold text-white">
                <Award className="h-5 w-5 text-blue-400" /> Carreira Profissional
              </h3>
              <div className="space-y-6">
                {experience.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative border-l border-blue-500/20 pl-5 transition-colors hover:border-blue-500/50">
                    <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-blue-500/60" />
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <h4 className="text-sm font-bold text-white">{item.company}</h4>
                      <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 text-[10px] font-semibold text-blue-400">{item.period}</span>
                    </div>
                    <p className="text-xs font-semibold text-blue-400/80">{item.role}</p>
                    <p className="mt-1 text-xs leading-relaxed text-white/40">{item.result}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="rounded-2xl border border-white/6 bg-white/[0.03] p-7 backdrop-blur">
              <h3 className="mb-7 flex items-center gap-2 text-lg font-bold text-white">
                <GraduationCap className="h-5 w-5 text-blue-400" /> Formação Acadêmica
              </h3>
              <div className="space-y-3">
                {education.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-center justify-between rounded-xl border border-white/6 bg-white/[0.03] px-4 py-3.5 transition-colors hover:border-blue-500/20 hover:bg-blue-500/5">
                    <span className="text-sm text-white/70">{item.title}</span>
                    <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400">{item.status}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER (WHITE) ─── */
function Footer() {
  return (
    <footer id="contato" className="relative overflow-hidden border-t border-gray-100 bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-500/25">
                <PharmacyLogo className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-black tracking-[0.1em] text-gray-900">{profile.shortName}</p>
                <p className="text-[10px] font-semibold text-blue-600">{profile.crf}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Farmacêutico com formação em Engenharia de IA. Conectando saúde, vendas e tecnologia para gerar resultados reais.
            </p>
            <div className="mt-5 flex gap-2">
              {profile.socials.map((s) => { const Icon = s.icon; return (
                <motion.a key={s.label} href={s.url} target="_blank" rel="noreferrer" whileHover={{ y: -3, scale: 1.05 }} className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition-all hover:border-blue-500 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/20" aria-label={s.label}>
                  <Icon className="h-4 w-4" />
                </motion.a>
              ); })}
            </div>
          </div>
          <div className="lg:col-span-2 grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-900 mb-4">Contato</h4>
              <div className="space-y-3 text-sm text-gray-500">
                <a href={`tel:${profile.phoneClean}`} className="flex items-center gap-2 transition-colors hover:text-blue-600"><Phone className="h-4 w-4 text-blue-500" />{profile.phone}</a>
                <a href={`mailto:${profile.email}`} className="flex items-center gap-2 transition-colors hover:text-blue-600"><Mail className="h-4 w-4 text-blue-500" />{profile.email}</a>
                <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-blue-600"><MessageCircle className="h-4 w-4 text-blue-500" />WhatsApp</a>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-500" />{profile.city}</div>
              </div>
            </div>
            <div className="flex flex-col items-start sm:items-end">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-900 mb-4">Escanear</h4>
              <motion.a href={profile.whatsapp} target="_blank" rel="noreferrer" whileHover={{ scale: 1.04 }} className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition-all hover:shadow-md">
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(profile.whatsapp)}&color=1d4ed8&bgcolor=ffffff`} alt="QR Code WhatsApp" className="h-24 w-24 rounded-lg" />
              </motion.a>
              <p className="mt-2 text-[10px] text-gray-400">Aponte a câmera para o WhatsApp</p>
            </div>
          </div>
        </div>
        <div className="mt-14 border-t border-gray-100 pt-7">
          <p className="text-center text-[11px] text-gray-400">
            © {new Date().getFullYear()} {profile.name} · {profile.crf}
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── ROOT ─── */
export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-950">
      <ScrollProgress />
      <FloatingWhatsApp />
      <Header />
      <Hero />
      <Skills />
      <VideoInterlude />
      <Solutions />
      <Experience />
      <Footer />
    </main>
  );
}
