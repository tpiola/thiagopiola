"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  Bot,
  BrainCircuit,
  Briefcase,
  ChevronRight,
  Code2,
  GraduationCap,
  HeartPulse,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  Target,
  Users,
  Workflow,
  X,
  Instagram,
  Facebook,
  Zap,
  Layers,
  TrendingUp,
  Award,
  Rocket,
  BarChart3,
  Handshake,
  CheckCircle2,
} from "lucide-react";

const profile = {
  name: "THIAGO BIASOLI G. PIOLA",
  shortName: "THIAGO PIOLA",
  city: "Franca, SP",
  phone: "(16) 99233-3344",
  phoneClean: "5516992333344",
  email: "contato@thiagopiola.com.br",
  crf: "CRF-SP 58.519",
  whatsapp: "https://wa.me/5516992333344",
  qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https%3A%2F%2Fwa.me%2F5516992333344&color=1e40af&bgcolor=ffffff",
  socials: [
    { label: "LinkedIn", profile: "/thiago-piola", url: "https://www.linkedin.com/in/thiago-piola/", icon: Linkedin },
    { label: "Instagram", profile: "@thiagopiolaoficial", url: "https://www.instagram.com/thiagopiolaoficial/", icon: Instagram },
    { label: "Facebook", profile: "/thiagopiolaoficial", url: "https://www.facebook.com/thiagopiolaoficial/", icon: Facebook },
    { label: "X", profile: "@ThiagoPiola07", url: "https://x.com/ThiagoPiola07", icon: X },
  ],
};

const skills = [
  { icon: TrendingUp, title: "Vendas Consultivas", desc: "Conversão com relacionamento" },
  { icon: Users, title: "Treinamento", desc: "Equipes de alta performance" },
  { icon: BarChart3, title: "Gestão de Projetos", desc: "Planejamento e execução" },
  { icon: Rocket, title: "Crescimento", desc: "Estratégias que escalam" },
  { icon: BrainCircuit, title: "Engenharia de IA", desc: "Agentes e automações" },
  { icon: Workflow, title: "Automação", desc: "Fluxos digitais inteligentes" },
];

const results = [
  "Automações que eliminam tarefas manuais",
  "IA que acelera decisões",
  "Treinamentos que elevam times",
  "Vendas com ética e resultado",
  "Sistemas que organizam",
  "Tecnologia aplicada ao real",
];

const experience = [
  { company: "Droga Raia", role: "Farmacêutico RT", period: "Atual", result: "RT, vendas, treinamento, gestão" },
  { company: "Drogaria Americana", role: "Farmacêutico RT", period: "2013-2014", result: "Atendimento e processos" },
  { company: "Farma Cruz", role: "Farmacêutico RT", period: "2012-2013", result: "Rotina farmacêutica" },
  { company: "Hospital Unimed", role: "Aux. Farmácia", period: "2008-2011", result: "Vivência hospitalar" },
];

const education = [
  { title: "Pós em Engenharia de IA", status: "Concluído" },
  { title: "GEAR/Google - IA e Agentes", status: "Concluído" },
  { title: "MBA Gestão Empresarial", status: "Concluído" },
  { title: "MBA Gestão Estratégica", status: "Concluído" },
  { title: "Farmácia - UNIFRAN", status: "Concluído" },
];

const solutions = [
  { icon: Bot, title: "Assistentes IA", desc: "Atendimento inteligente" },
  { icon: Workflow, title: "Automações n8n", desc: "Fluxos autônomos" },
  { icon: Layers, title: "Sistemas", desc: "CRM e dashboards" },
  { icon: Code2, title: "Sites & Apps", desc: "Presença digital" },
  { icon: HeartPulse, title: "IA na Saúde", desc: "Tecnologia no cuidado" },
  { icon: Target, title: "Analytics", desc: "Dados que decidem" },
];

// Simbolo da Farmacia - Taca de Higia com serpente
function PharmacyLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <path d="M50 5C48 5 46.5 6.5 46.5 8.5V12C46.5 12 30 15 30 30C30 42 38 48 46.5 50V88C46.5 91 48.5 93 50 93C51.5 93 53.5 91 53.5 88V50C62 48 70 42 70 30C70 15 53.5 12 53.5 12V8.5C53.5 6.5 52 5 50 5ZM50 16C50 16 64 18 64 30C64 40 56 44 50 46C44 44 36 40 36 30C36 18 50 16 50 16Z"/>
      <path d="M35 25C33 28 32 32 33 37C34 41 36 44 39 46L38 48C34 46 31 42 30 37C29 31 31 26 34 22L35 25Z" opacity="0.7"/>
      <path d="M42 20C40 22 38 26 38 31C38 36 40 40 43 43L41 46C37 42 35 37 35 31C35 24 38 19 42 16L42 20Z" opacity="0.5"/>
      <ellipse cx="50" cy="30" rx="8" ry="10" opacity="0.15"/>
    </svg>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[100] h-[3px] w-full origin-left bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800"
    />
  );
}

function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={profile.whatsapp}
          target="_blank"
          rel="noreferrer"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          whileHover={{ scale: 1.12, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-5 right-5 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-2xl shadow-emerald-500/40 md:h-16 md:w-16"
          aria-label="WhatsApp"
        >
          <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
          <motion.span
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-emerald-400"
          />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-22 z-[90] flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-lg backdrop-blur-xl md:h-12 md:w-12"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
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
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-0 right-0 top-0 z-[80] transition-all duration-300 ${
          scrolled ? "bg-white/95 shadow-lg shadow-slate-900/5 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 8, scale: 1.05 }}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-500/30"
            >
              <PharmacyLogo className="h-5 w-5" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xs font-black tracking-[0.12em] text-slate-900">{profile.shortName}</span>
              <span className="text-[10px] font-semibold tracking-wide text-blue-600">{profile.crf}</span>
            </div>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition-all hover:bg-blue-50 hover:text-blue-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl md:inline-flex"
            >
              <MessageCircle className="h-4 w-4" /> Contato
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
              aria-label="Menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/50 backdrop-blur-sm md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 h-full w-72 bg-white p-6 shadow-2xl"
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="mb-6 flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>
              <nav className="space-y-1">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 py-3 text-sm font-bold text-white shadow-lg"
              >
                <MessageCircle className="h-4 w-4" /> Contato
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function GradientOrb({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none absolute rounded-full blur-[100px] ${className}`}
    />
  );
}

function GridPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
    </div>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.4], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.95]);

  return (
    <section className="relative min-h-[85vh] overflow-hidden pt-20 md:min-h-screen md:pt-24">
      <GridPattern />
      <GradientOrb className="left-[-15%] top-[-5%] h-[500px] w-[500px] bg-blue-500/20" />
      <GradientOrb className="right-[-10%] top-[30%] h-[400px] w-[400px] bg-sky-400/15" />

      <motion.div style={{ y, opacity, scale }} className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 md:pb-24 md:pt-20 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-1.5 text-sm font-bold text-blue-700 shadow-sm backdrop-blur"
          >
            <PharmacyLogo className="h-4 w-4" /> {profile.crf}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl"
          >
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-blue-600 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl text-sm font-medium text-slate-600 sm:text-base md:text-lg"
          >
            Farmacêutico | Engenheiro de IA | Vendas | Treinamento | Automação
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 sm:gap-6 sm:text-sm"
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-blue-600" /> {profile.city}
            </span>
            <a href={`tel:${profile.phoneClean}`} className="flex items-center gap-1.5 transition-colors hover:text-blue-600">
              <Phone className="h-3.5 w-3.5 text-blue-600" /> {profile.phone}
            </a>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 transition-colors hover:text-blue-600">
              <Mail className="h-3.5 w-3.5 text-blue-600" /> {profile.email}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-blue-500/25 transition-all hover:-translate-y-1 hover:shadow-2xl sm:px-7 sm:py-3.5"
            >
              <MessageCircle className="h-4 w-4" /> Contato
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#competencias"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg sm:px-7 sm:py-3.5"
            >
              Ver mais
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex justify-center gap-2"
          >
            {profile.socials.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:border-blue-400 hover:text-blue-600 hover:shadow-md"
                  aria-label={social.label}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex justify-center md:mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="flex flex-col items-center gap-1.5 text-slate-400"
          >
            <span className="text-[10px] font-semibold uppercase tracking-widest">Scroll</span>
            <div className="h-8 w-[2px] bg-gradient-to-b from-blue-500 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Skills() {
  return (
    <section id="competencias" className="relative overflow-hidden py-16 md:py-24">
      <GradientOrb className="right-[-10%] top-[10%] h-[350px] w-[350px] bg-blue-400/10" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-700">
            <Sparkles className="h-3 w-3" /> Competências
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Resultado <span className="text-blue-600">real</span>
          </h2>
        </AnimatedSection>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <AnimatedSection key={skill.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-blue-50 to-transparent transition-all group-hover:scale-150" />
                  <div className="relative">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25 transition-transform group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{skill.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-500">{skill.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.3} className="mt-12 md:mt-16">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-6 sm:rounded-3xl sm:p-8 md:p-10">
            <div className="relative">
              <GradientOrb className="-right-16 -top-16 h-48 w-48 bg-blue-500/20" />
              <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Competências</span>
                  <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl md:text-3xl">
                    Engenharia com Gestão
                  </h3>
                  <p className="mt-3 text-sm text-slate-400 sm:text-base">
                    Experiência real em operação e gestão. Domínio em IA e automação. Resultado que une os dois mundos.
                  </p>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {results.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      whileHover={{ x: 4 }}
                      className="flex items-start gap-2 rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-slate-300 backdrop-blur sm:text-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-none text-blue-400" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="tecnologia" className="relative overflow-hidden border-y border-slate-200/50 bg-slate-50/50 py-16 md:py-24">
      <GridPattern />
      <GradientOrb className="left-[-10%] top-[50%] h-[350px] w-[350px] bg-blue-300/10" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-700">
            <Zap className="h-3 w-3" /> Tecnologia
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Habilidade com <span className="text-blue-600">Tecnologia aplicada</span>
          </h2>
        </AnimatedSection>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
          {solutions.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <AnimatedSection key={solution.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/20 transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{solution.title}</h3>
                  <p className="mt-1 text-xs text-slate-500">{solution.desc}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="trajetoria" className="relative overflow-hidden py-16 md:py-24">
      <GradientOrb className="right-[10%] top-[20%] h-[300px] w-[300px] bg-blue-400/10" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-700">
            <Briefcase className="h-3 w-3" /> Trajetoria
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Experiencia <span className="text-blue-600">pratica</span>
          </h2>
        </AnimatedSection>

        <div className="mt-10 grid gap-6 md:mt-12 lg:grid-cols-2">
          <AnimatedSection>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="mb-5 flex items-center gap-2 text-base font-bold text-slate-900 sm:text-lg">
                <Award className="h-4 w-4 text-blue-600" /> Carreira
              </h3>
              <div className="space-y-4">
                {experience.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative border-l-2 border-blue-100 pl-4 transition-colors hover:border-blue-500"
                  >
                    <div className="absolute -left-[7px] top-0.5 h-3 w-3 rounded-full border-2 border-white bg-gradient-to-br from-blue-500 to-blue-700 shadow" />
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <h4 className="text-sm font-bold text-slate-900">{item.company}</h4>
                      <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-600">{item.period}</span>
                    </div>
                    <p className="text-xs font-medium text-blue-600">{item.role}</p>
                    <p className="mt-1 text-xs text-slate-500">{item.result}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="mb-5 flex items-center gap-2 text-base font-bold text-slate-900 sm:text-lg">
                <GraduationCap className="h-4 w-4 text-blue-600" /> Formacao
              </h3>
              <div className="space-y-2">
                {education.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-3 transition-colors hover:border-blue-200 hover:bg-blue-50/50"
                  >
                    <span className="text-xs font-medium text-slate-700 sm:text-sm">{item.title}</span>
                    <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-emerald-600 shadow-sm">{item.status}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="relative overflow-hidden border-t border-slate-200 bg-white">
      <GridPattern />
      <GradientOrb className="left-[30%] top-[-20%] h-[350px] w-[350px] bg-blue-300/10" />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-500/25">
                <PharmacyLogo className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black tracking-[0.1em] text-slate-900">{profile.shortName}</span>
                <span className="text-[10px] font-semibold text-blue-600">{profile.crf}</span>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-slate-500 sm:text-sm">
              Farmacêutico com formação em Engenharia de IA. Conectando saúde, vendas, treinamento e tecnologia para gerar resultado.
            </p>
            <div className="mt-5 flex gap-2">
              {profile.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -2, scale: 1.08 }}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all hover:border-blue-500 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/25"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">Contato</h4>
            <div className="mt-4 space-y-3 text-xs text-slate-500 sm:text-sm">
              <a href={`tel:${profile.phoneClean}`} className="flex items-center gap-2 transition-colors hover:text-blue-600">
                <Phone className="h-3.5 w-3.5 text-blue-600" /> {profile.phone}
              </a>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 transition-colors hover:text-blue-600">
                <Mail className="h-3.5 w-3.5 text-blue-600" /> {profile.email}
              </a>
              <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-blue-600">
                <MessageCircle className="h-3.5 w-3.5 text-blue-600" /> WhatsApp
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-blue-600" /> {profile.city}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">WhatsApp</h4>
            <motion.a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              className="mt-4 rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-all hover:shadow-lg"
            >
              <img src={profile.qrCode} alt="QR Code WhatsApp" className="h-24 w-24 rounded-lg sm:h-28 sm:w-28" />
            </motion.a>
            <p className="mt-2 text-center text-[10px] text-slate-400">Escaneie para conversar</p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 sm:mt-12 sm:pt-8">
          <p className="text-center text-[10px] text-slate-400 sm:text-xs">
            {profile.name} | {profile.crf} | {profile.city}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      <ScrollProgress />
      <FloatingWhatsApp />
      <BackToTop />
      <Header />
      <Hero />
      <Skills />
      <Solutions />
      <Experience />
      <Footer />
    </main>
  );
}
