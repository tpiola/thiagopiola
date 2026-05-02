import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import NewsletterForm from "@/components/NewsletterForm";
import ReiDasVendasBanner from "@/components/ReiDasVendasBanner";
import {
  Smartphone,
  Watch,
  Wifi,
  ShieldCheck,
  Users,
  Eye,
  GraduationCap,
  Globe,
  AlertOctagon,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tecnologia para Saúde | Thiago Piola – Farmacêutico",
  description:
    "Aprenda a usar a tecnologia a seu favor na saúde. Aplicativos, wearables, internet segura e alfabetização digital para todas as idades.",
};

const digitalLiteracy = [
  {
    icon: GraduationCap,
    title: "Para crianças e jovens",
    age: "6–17 anos",
    description:
      "A geração Z e Alpha nasceu digital, mas isso não significa que sabem usar a tecnologia com responsabilidade. Educação digital é tão importante quanto educação alimentar.",
    tips: [
      "Tempo de tela com propósito, não por vício",
      "Verificar fontes antes de compartilhar",
      "Não dar dados pessoais em sites desconhecidos",
      "Diferença entre entretenimento e aprendizado digital",
    ],
    bg: "bg-blue-50",
    accent: "text-blue-600",
    border: "border-blue-100",
  },
  {
    icon: Users,
    title: "Para adultos",
    age: "18–59 anos",
    description:
      "A maioria dos adultos usa tecnologia, mas poucos a usam estrategicamente. A diferença entre quem domina e quem é dominado pela tecnologia está na intencionalidade.",
    tips: [
      "Usar apps de saúde com critério (nem todo dado importa)",
      "Identificar desinformação em grupos de mensagens",
      "Proteger dados bancários e de saúde online",
      "Ferramentas de produtividade e bem-estar",
    ],
    bg: "bg-emerald-50",
    accent: "text-emerald-600",
    border: "border-emerald-100",
  },
  {
    icon: Eye,
    title: "Para idosos",
    age: "60+ anos",
    description:
      "Idosos são frequentemente alvos de golpes digitais e fake news. Inclusão digital responsável é inclusão social — e pode literalmente salvar vidas.",
    tips: [
      "Reconhecer mensagens falsas de saúde no WhatsApp",
      "Televidência e consultas médicas online",
      "Segurança bancária digital",
      "Conectar-se com família com segurança",
    ],
    bg: "bg-amber-50",
    accent: "text-amber-600",
    border: "border-amber-100",
  },
];

const healthApps = [
  {
    category: "Monitoramento",
    icon: "💓",
    examples: ["Apple Health / Google Fit", "Withings Health Mate", "Cardiogram"],
    benefit: "Rastreamento contínuo de sinais vitais, sono e atividade física",
    caution: "Não substituem diagnóstico médico. Use como suporte, não como diagnóstico.",
  },
  {
    category: "Nutrição",
    icon: "🥗",
    examples: ["MyFitnessPal", "Cronometer", "Minha Dieta SP"],
    benefit: "Controle de calorias, macronutrientes e micronutrientes",
    caution: "Evite restrições extremas sem orientação de nutricionista.",
  },
  {
    category: "Saúde Mental",
    icon: "🧠",
    examples: ["Headspace", "Calm", "Meditopia"],
    benefit: "Meditação guiada, técnicas de respiração e monitoramento de humor",
    caution: "Complementam, não substituem psicoterapia ou psiquiatria.",
  },
  {
    category: "Medicamentos",
    icon: "💊",
    examples: ["Medisafe", "Lembrete de Remédio", "Minha Farmácia"],
    benefit: "Lembretes de horários, estoque e interações básicas",
    caution: "Para interações complexas, sempre consulte um farmacêutico.",
  },
  {
    category: "Teleconsulta",
    icon: "👨‍⚕️",
    examples: ["Doctoralia", "Consulta de Bolso", "iClinic"],
    benefit: "Acesso a médicos e especialistas sem sair de casa",
    caution: "Emergências sempre requerem atendimento presencial.",
  },
  {
    category: "Exames & Prontuário",
    icon: "📋",
    examples: ["Meu Resultado de Exame", "Prontmed", "Soulphar"],
    benefit: "Centralizar resultados e histórico de saúde",
    caution: "Verifique a política de privacidade dos dados de saúde.",
  },
];

const onlineSafety = [
  {
    icon: ShieldCheck,
    title: "Proteja seus dados de saúde",
    items: [
      "Use senhas únicas e fortes em apps de saúde",
      "Ative autenticação em dois fatores",
      "Verifique quais apps têm acesso à sua câmera e microfone",
      "Leia a política de privacidade antes de cadastrar exames",
    ],
  },
  {
    icon: AlertOctagon,
    title: "Reconheça golpes digitais de saúde",
    items: [
      "Desconfie de 'curas milagrosas' em anúncios online",
      "Nunca pague por exames ou consultas em sites desconhecidos",
      "Farmácias online devem ter o selo Farmácia Notificada da Anvisa",
      "Não instale apps de saúde de fontes fora das lojas oficiais",
    ],
  },
  {
    icon: Globe,
    title: "Informação de saúde confiável",
    items: [
      "Prefira sites gov.br, Anvisa, CFM, CFF para informações oficiais",
      "Desconfie de manchetes alarmistas sem citação de fontes",
      "Busque o autor e suas credenciais antes de acreditar",
      "Um estudo único raramente é suficiente para mudar conduta",
    ],
  },
];

export default function TecnologiaPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          tag="Tecnologia & Saúde Digital"
          title={
            <>
              A tecnologia a serviço{" "}
              <span className="text-blue-400">da sua saúde.</span>
            </>
          }
          description="Aprenda a usar aplicativos, wearables e ferramentas digitais com inteligência. Inclusão digital para todas as idades, com foco em segurança e bem-estar."
          imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80"
          imageAlt="Tecnologia e saúde"
          color="blue"
        />

        {/* ALFABETIZAÇÃO DIGITAL */}
        <section className="py-24 bg-white" id="content">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              tag="Para cada geração"
              title="Alfabetização digital por faixa etária"
              description="Cada geração tem uma relação diferente com a tecnologia. Entender esse contexto é o primeiro passo para usar o digital com mais sabedoria."
            />

            <div className="grid md:grid-cols-3 gap-8">
              {digitalLiteracy.map((d) => {
                const Icon = d.icon;
                return (
                  <article
                    key={d.title}
                    className={`rounded-3xl p-8 border ${d.bg} ${d.border}`}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white shadow-sm`}>
                        <Icon size={20} className={d.accent} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{d.title}</h3>
                        <span className={`text-xs font-mono ${d.accent}`}>{d.age}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{d.description}</p>
                    <ul className="space-y-2">
                      {d.tips.map((tip) => (
                        <li key={tip} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 size={14} className={`${d.accent} mt-0.5 shrink-0`} />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* IMAGE BREAK */}
        <section className="relative h-64 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1600&q=80"
            alt="Idosa usando tablet"
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-blue-950/70 flex items-center justify-center">
            <blockquote className="text-center px-6 max-w-3xl">
              <p className="text-white text-2xl md:text-4xl font-extrabold leading-tight mb-3">
                "Tecnologia não tem idade. Tem propósito."
              </p>
              <cite className="text-blue-300 text-sm not-italic">
                — Thiago B. G. Piola, Farmacêutico
              </cite>
            </blockquote>
          </div>
        </section>

        {/* APPS DE SAÚDE */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              tag="Ferramentas digitais"
              title="Aplicativos que fazem diferença"
              description="Um guia prático dos melhores apps de saúde disponíveis no Brasil — com orientação sobre o que cada um faz bem e onde você deve ter cautela."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {healthApps.map((app) => (
                <article
                  key={app.category}
                  className="bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-4">{app.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{app.category}</h3>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {app.examples.map((e) => (
                      <span key={e} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {e}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-emerald-700 font-medium mb-2 flex items-start gap-1.5">
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0" />
                    {app.benefit}
                  </p>
                  <p className="text-xs text-amber-700 bg-amber-50 rounded-xl px-3 py-2 leading-relaxed">
                    ⚠️ {app.caution}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SEGURANÇA ONLINE */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              tag="Segurança digital"
              title="Proteja você e sua família online"
              description="Dados de saúde são sensíveis. Aprenda a navegar com segurança e a identificar riscos."
              light
            />

            <div className="grid md:grid-cols-3 gap-8">
              {onlineSafety.map((s) => {
                const Icon = s.icon;
                return (
                  <article key={s.title} className="bg-gray-800 rounded-3xl p-8">
                    <div className="w-11 h-11 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-5">
                      <Icon size={22} className="text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-5">{s.title}</h3>
                    <ul className="space-y-3">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                          <span className="text-blue-400 mt-0.5 shrink-0">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-500 mb-6 text-lg">
                Quer aprender a usar Inteligência Artificial com segurança?
              </p>
              <Link
                href="/ia"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full transition-colors"
              >
                Guia de IA para Todos <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="py-20 bg-blue-950">
          <div className="max-w-3xl mx-auto px-6">
            <NewsletterForm
              title="Tecnologia que você entende"
              subtitle="Novidades em saúde digital, apps e segurança online. Linguagem simples para você e sua família."
              dark
            />
          </div>
        </section>

        <ReiDasVendasBanner context="negócio ou consultório" />
      </main>

      <Footer />
    </>
  );
}
