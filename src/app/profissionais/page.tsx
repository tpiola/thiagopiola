import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import NewsletterForm from "@/components/NewsletterForm";
import {
  Stethoscope,
  FlaskConical,
  Building2,
  TrendingUp,
  Globe,
  Smartphone,
  Layers,
  Zap,
  CheckCircle2,
  ArrowRight,
  Star,
  Users,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Para Profissionais de Saúde | Thiago Piola – Soluções Digitais",
  description:
    "Farmacêuticos, médicos e gestores de clínicas: descubra como digitalizar sua prática com sites, apps e automações que geram resultados reais.",
};

const profiles = [
  {
    icon: FlaskConical,
    title: "Farmacêuticos",
    items: [
      "Site profissional com agenda online",
      "Cardápio de serviços de farmácia clínica",
      "Captação de pacientes via SEO local",
      "Automação de lembretes de medicamento",
    ],
  },
  {
    icon: Stethoscope,
    title: "Médicos & Especialistas",
    items: [
      "Presença digital que transmite autoridade",
      "Sistema de agendamento integrado",
      "Gestão de avaliações e reputação online",
      "Telemedicina integrada ao site",
    ],
  },
  {
    icon: Building2,
    title: "Clínicas & Farmácias",
    items: [
      "Site institucional de alta conversão",
      "App próprio para fidelização de pacientes",
      "CRM automatizado com N8N",
      "Integração com Supabase para dados seguros",
    ],
  },
  {
    icon: Users,
    title: "Outros Profissionais de Saúde",
    items: [
      "Nutricionistas, fisioterapeutas, psicólogos",
      "Portfólio digital de serviços",
      "Blog com conteúdo para captar clientes",
      "Integração com WhatsApp Business",
    ],
  },
];

const digitalTransformation = [
  {
    icon: Globe,
    title: "Presença Digital de Autoridade",
    description:
      "Um site moderno não é cartão de visita — é sua maior ferramenta de captação de pacientes. 78% dos pacientes pesquisam online antes de escolher um profissional de saúde.",
    metric: "78%",
    metricLabel: "pesquisam online antes da consulta",
  },
  {
    icon: Smartphone,
    title: "Aplicativo Próprio",
    description:
      "Imagine seus pacientes com seu app no celular: lembretes de medicamentos, histórico, agenda e conteúdo educativo. Fidelização e recorrência garantidas.",
    metric: "3x",
    metricLabel: "mais retenção com app próprio",
  },
  {
    icon: Layers,
    title: "Automação Inteligente",
    description:
      "Com N8N e integrações personalizadas, automatize: confirmação de consultas, follow-up pós-atendimento, cobrança recorrente e campanhas de reativação.",
    metric: "40h",
    metricLabel: "economizadas por mês com automação",
  },
  {
    icon: BarChart3,
    title: "Dados com Segurança (Supabase)",
    description:
      "Os dados dos seus pacientes merecem a melhor proteção. Com Supabase, garanta conformidade com a LGPD, backups automáticos e acesso controlado.",
    metric: "100%",
    metricLabel: "conformidade LGPD",
  },
];

const solutions = [
  {
    name: "Site Builder Profissional",
    icon: "🌐",
    description: "Sites modernos, rápidos e otimizados para SEO local. Desenvolvidos para converter visitantes em pacientes.",
    features: ["Design responsivo", "SEO otimizado", "Agendamento integrado", "Blog com CMS"],
    highlight: false,
  },
  {
    name: "App Mobile",
    icon: "📱",
    description: "Aplicativo personalizado com sua marca para fidelizar pacientes e criar um canal direto de comunicação.",
    features: ["iOS e Android", "Notificações push", "Agenda e histórico", "Conteúdo exclusivo"],
    highlight: true,
  },
  {
    name: "Extensão & Automação",
    icon: "⚡",
    description: "Extensões Chrome e automações N8N que integram todas as ferramentas que você já usa — sem complicação.",
    features: ["Integração WhatsApp", "CRM automático", "E-mail marketing", "Relatórios"],
    highlight: false,
  },
];

const journey = [
  { step: "1", title: "Diagnóstico digital gratuito", desc: "Análise da sua presença online atual e identificação de oportunidades." },
  { step: "2", title: "Proposta personalizada", desc: "Solução desenhada especificamente para o seu perfil e objetivos." },
  { step: "3", title: "Desenvolvimento ágil", desc: "Entrega em sprints com você acompanhando cada etapa." },
  { step: "4", title: "Lançamento e treinamento", desc: "Você e sua equipe dominando as ferramentas com suporte dedicado." },
  { step: "5", title: "Crescimento contínuo", desc: "Otimizações mensais baseadas em dados reais do seu negócio." },
];

export default function ProfissionaisPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          tag="Para Profissionais de Saúde"
          title={
            <>
              Sua prática merece{" "}
              <span className="text-blue-400">tecnologia de nível enterprise.</span>
            </>
          }
          description="Farmacêuticos, médicos, gestores de clínicas e farmácias: chegou a hora de digitalizar sua prática com a mesma seriedade com que você cuida dos seus pacientes."
          imageSrc="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80"
          imageAlt="Profissional de saúde trabalhando com tecnologia"
          color="blue"
        />

        {/* PARA QUEM */}
        <section className="py-24 bg-white" id="content">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              tag="Especializado em saúde"
              title="Para cada tipo de profissional"
              description="Soluções digitais desenvolvidas por quem entende de saúde — porque a tecnologia precisa falar a linguagem do seu dia a dia."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {profiles.map((p) => {
                const Icon = p.icon;
                return (
                  <article key={p.title} className="bg-gray-50 rounded-3xl p-6 hover:bg-blue-50 transition-colors group">
                    <div className="w-11 h-11 bg-blue-100 group-hover:bg-blue-200 rounded-2xl flex items-center justify-center mb-4 transition-colors">
                      <Icon size={22} className="text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-4">{p.title}</h3>
                    <ul className="space-y-2">
                      {p.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* TRANSFORMAÇÃO DIGITAL */}
        <section className="py-24 bg-gray-950 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              tag="Por que digitalizar agora"
              title="O paciente mudou. Sua prática precisa mudar também."
              description="O futuro da saúde é digital, conectado e personalizado. Os profissionais que entenderem isso hoje terão vantagem competitiva por décadas."
              light
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {digitalTransformation.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="bg-gray-900 rounded-3xl p-6 border border-gray-800 hover:border-blue-500/50 transition-colors">
                    <div className="w-11 h-11 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4">
                      <Icon size={22} className="text-blue-400" />
                    </div>
                    <div className="mb-3">
                      <span className="text-3xl font-extrabold text-blue-400">{item.metric}</span>
                      <span className="block text-xs text-gray-500 mt-1">{item.metricLabel}</span>
                    </div>
                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* IMAGE BREAK */}
        <section className="relative h-72 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1600&q=80"
            alt="Tecnologia do futuro"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 to-blue-950/60 flex items-center">
            <div className="max-w-7xl mx-auto px-6">
              <p className="text-emerald-400 font-mono text-sm uppercase tracking-widest mb-3">
                A transição de Thiago Piola
              </p>
              <p className="text-white text-3xl md:text-4xl font-extrabold max-w-2xl leading-tight">
                De farmacêutico a desenvolvedor de plataformas digitais para saúde.
              </p>
            </div>
          </div>
        </section>

        {/* SOLUÇÕES */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              tag="Rei das Vendas"
              title="As soluções que vão transformar seu negócio"
              description="Site moderno, aplicativo e automação — um ecossistema digital completo para profissionais de saúde que querem crescer."
            />

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {solutions.map((s) => (
                <article
                  key={s.name}
                  className={`rounded-3xl p-8 border-2 relative ${
                    s.highlight
                      ? "border-emerald-500 bg-emerald-950 text-white"
                      : "border-gray-100 bg-gray-50"
                  }`}
                >
                  {s.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      Mais popular
                    </div>
                  )}
                  <div className="text-4xl mb-5">{s.icon}</div>
                  <h3 className={`text-xl font-extrabold mb-3 ${s.highlight ? "text-white" : "text-gray-900"}`}>
                    {s.name}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 ${s.highlight ? "text-emerald-200" : "text-gray-600"}`}>
                    {s.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {s.features.map((f) => (
                      <li key={f} className={`flex items-center gap-2 text-sm ${s.highlight ? "text-emerald-300" : "text-gray-700"}`}>
                        <CheckCircle2 size={14} className={s.highlight ? "text-emerald-400" : "text-emerald-500"} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            {/* CTA para Rei das Vendas */}
            <div className="bg-gradient-to-br from-gray-950 to-emerald-950 rounded-[40px] p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.1)_0%,_transparent_60%)]" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
                  <Zap size={12} />
                  Rei das Vendas — Soluções Digitais
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  Pronto para crescer no digital?
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                  Junte-se aos profissionais de saúde que já transformaram sua prática com
                  tecnologia de alta performance. Sites, apps e automações que geram resultados reais.
                </p>
                <a
                  href="https://reidasvendas.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_50px_rgba(16,185,129,0.3)]"
                >
                  Conhecer a Rei das Vendas
                  <ArrowRight size={20} />
                </a>
                <p className="text-gray-600 text-sm mt-4">
                  Diagnóstico digital gratuito • Sem compromisso
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* JORNADA */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeader
              tag="Como funciona"
              title="Sua jornada de transformação digital"
              description="Do diagnóstico ao crescimento — um processo claro e transparente."
            />

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200" />
              <div className="space-y-8">
                {journey.map((j) => (
                  <div key={j.step} className="flex gap-8 items-start relative">
                    <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-extrabold text-xl shrink-0 relative z-10">
                      {j.step}
                    </div>
                    <div className="pt-3">
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{j.title}</h3>
                      <p className="text-gray-600">{j.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NEWSLETTER PROFISSIONAL */}
        <section className="py-20 bg-blue-950">
          <div className="max-w-3xl mx-auto px-6">
            <NewsletterForm
              title="Conteúdo para profissionais de saúde"
              subtitle="Tendências em saúde digital, casos de uso de IA em clínicas e estratégias de crescimento. Direto para quem trabalha com saúde."
              dark
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
