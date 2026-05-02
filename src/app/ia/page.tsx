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
  BrainCircuit,
  MessageSquare,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Search,
  ShieldAlert,
  HeartPulse,
  ArrowRight,
  Zap,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Inteligência Artificial | Thiago Piola – Como usar IA com segurança",
  description:
    "Aprenda a usar inteligência artificial com segurança: como fazer as perguntas certas, evitar fake news e usar IA para melhorar sua saúde. Para todas as idades.",
};

const whatIsAI = [
  {
    icon: BrainCircuit,
    title: "O que é IA na prática",
    description:
      "Inteligência Artificial é um software que aprende padrões a partir de enormes volumes de dados e usa esse aprendizado para gerar respostas, imagens, textos e análises. Não pensa — processa.",
  },
  {
    icon: MessageSquare,
    title: "Como os chatbots respondem",
    description:
      "ChatGPT, Gemini, Claude e similares preveem qual palavra vem depois da outra com base no que 'leram'. Isso os torna fluentes — mas não necessariamente corretos. Eles podem inventar fatos.",
  },
  {
    icon: AlertTriangle,
    title: "O problema das 'alucinações'",
    description:
      "IAs podem gerar informações falsas com total confiança. Isso é chamado de 'alucinação'. Em saúde, isso é especialmente perigoso. Sempre verifique com fontes humanas especializadas.",
  },
];

const promptExamples = [
  {
    label: "❌ Pergunta ruim",
    query: "Que remédio posso tomar para a dor de cabeça?",
    problem: "Vaga demais. A IA não conhece seu histórico, outros medicamentos que você usa, nem suas alergias.",
    color: "bg-red-50 border-red-200",
    textColor: "text-red-800",
    tagColor: "bg-red-100 text-red-700",
  },
  {
    label: "✅ Pergunta melhor",
    query: "Quais são os tipos mais comuns de dor de cabeça e suas características, para que eu entenda melhor meu sintoma antes de falar com o médico?",
    problem: "Pede informação educativa, não diagnóstico. Mantém o médico como autoridade final.",
    color: "bg-emerald-50 border-emerald-200",
    textColor: "text-emerald-800",
    tagColor: "bg-emerald-100 text-emerald-700",
  },
  {
    label: "❌ Pergunta ruim",
    query: "A IA disse que meu exame está normal. Posso parar o medicamento?",
    problem: "IA não interpreta exames com contexto clínico completo. Nunca interrompa medicação sem orientação médica.",
    color: "bg-red-50 border-red-200",
    textColor: "text-red-800",
    tagColor: "bg-red-100 text-red-700",
  },
  {
    label: "✅ Pergunta melhor",
    query: "Me explique o que significa cada item do meu hemograma para que eu entenda melhor o que perguntar ao meu médico.",
    problem: "Usa IA como ferramenta educacional, preparando você para uma consulta mais produtiva.",
    color: "bg-emerald-50 border-emerald-200",
    textColor: "text-emerald-800",
    tagColor: "bg-emerald-100 text-emerald-700",
  },
];

const fakeNewsGuide = [
  {
    step: "01",
    title: "Identifique a fonte",
    description: "Quem escreveu isso? É um órgão oficial (OMS, Anvisa, CFM), veículo jornalístico com credibilidade, ou uma conta anônima de WhatsApp?",
  },
  {
    step: "02",
    title: "Verifique a data",
    description: "Informações de saúde antigas podem estar desatualizadas. Tratamentos mudam com novas evidências. A data importa tanto quanto o conteúdo.",
  },
  {
    step: "03",
    title: "Busque outras fontes",
    description: "Se apenas um site ou uma IA diz aquilo, desconfie. Informações verdadeiras de saúde aparecem em múltiplas fontes especializadas.",
  },
  {
    step: "04",
    title: "Cheque com especialistas",
    description: "Antes de mudar qualquer conduta em saúde com base em algo que leu, converse com médico, farmacêutico ou nutricionista.",
  },
  {
    step: "05",
    title: "Use sites de checagem",
    description: "Agência Lupa, Aos Fatos e E-farsas verificam rumores. Para saúde, o Saúde em Movimento e o portal da Fiocruz são referências.",
  },
  {
    step: "06",
    title: "Questione o emocional",
    description: "Fake news exploram medo e urgência. Se uma mensagem te faz sentir pânico ou ódio — respire. Essa é uma estratégia de manipulação.",
  },
];

const aiForHealth = [
  {
    icon: "🔍",
    title: "Pesquisar sintomas com contexto",
    use: "Certo",
    detail: "Use IA para entender melhor seus sintomas antes da consulta — nunca para substituir o diagnóstico médico.",
  },
  {
    icon: "💬",
    title: "Preparar perguntas para o médico",
    use: "Excelente",
    detail: "IA pode ajudar a formular as perguntas certas para aproveitar melhor o tempo na consulta.",
  },
  {
    icon: "📚",
    title: "Entender a bula do medicamento",
    use: "Certo",
    detail: "Peça para IA explicar em linguagem simples o que diz a bula. Mas confirme com farmacêutico.",
  },
  {
    icon: "🥗",
    title: "Plano alimentar básico",
    use: "Com cautela",
    detail: "IA pode sugerir orientações gerais, mas um nutricionista considera seu metabolismo específico.",
  },
  {
    icon: "🏥",
    title: "Diagnóstico médico",
    use: "Nunca",
    detail: "IA não tem acesso ao seu histórico completo, não te examina, não faz exames. Diagnóstico é ato médico.",
  },
  {
    icon: "💊",
    title: "Prescrição de medicamentos",
    use: "Nunca",
    detail: "Prescrever é ato médico ou farmacêutico habilitado. IA não conhece suas interações e condições.",
  },
];

const ageGuides = [
  {
    icon: Users,
    group: "Crianças (6–12)",
    tips: [
      "Ensine que IA é como um livro muito grande — útil, mas pode ter erros",
      "Ajude a formular perguntas de curiosidade (não peça respostas prontas de tarefa)",
      "Mostre que o professor ainda é necessário para verificar o que a IA diz",
    ],
    color: "bg-blue-50",
    accent: "text-blue-600",
  },
  {
    icon: Users,
    group: "Adolescentes (13–17)",
    tips: [
      "Explique o viés dos algoritmos — IAs amplificam o que você já acredita",
      "Use IA para revisar textos próprios, nunca para gerá-los inteiros",
      "Fake news em saúde são perigosas — ensine a verificar antes de compartilhar",
    ],
    color: "bg-purple-50",
    accent: "text-purple-600",
  },
  {
    icon: Users,
    group: "Adultos (18–59)",
    tips: [
      "IA é uma ferramenta, não uma autoridade — pense criticamente nas respostas",
      "Para questões de saúde, use IA para se informar, não para decidir",
      "Explore IAs para produtividade: resumos, e-mails, pesquisa — com verificação",
    ],
    color: "bg-emerald-50",
    accent: "text-emerald-600",
  },
  {
    icon: Users,
    group: "Idosos (60+)",
    tips: [
      "IA no WhatsApp: desconfie de mensagens que 'uma IA confirmou'",
      "Áudios e vídeos falsos (deepfakes) existem — não acredite em tudo que vê",
      "Use IA de voz (Alexa, Google) com cautela e sem dar dados pessoais",
    ],
    color: "bg-amber-50",
    accent: "text-amber-600",
  },
];

export default function IAPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          tag="Inteligência Artificial para Todos"
          title={
            <>
              Use IA com{" "}
              <span className="text-purple-400">inteligência</span> — e segurança.
            </>
          }
          description="Um guia completo para todas as idades: como funciona a IA, como fazer as perguntas certas, como evitar fake news e como usar esta tecnologia para melhorar sua saúde — sem cair em armadilhas."
          imageSrc="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1600&q=80"
          imageAlt="Inteligência Artificial"
          color="purple"
        />

        {/* O QUE É IA */}
        <section className="py-24 bg-white" id="content">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              tag="Entenda de verdade"
              title="O que é Inteligência Artificial?"
              description="Antes de usar, é preciso entender. A IA não é mágica — é matemática. E conhecer seus limites é o que transforma um usuário ingênuo em um usuário poderoso."
            />

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {whatIsAI.map((w) => {
                const Icon = w.icon;
                return (
                  <article key={w.title} className="bg-gray-50 rounded-3xl p-8">
                    <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-5">
                      <Icon size={24} className="text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{w.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{w.description}</p>
                  </article>
                );
              })}
            </div>

            <div className="bg-purple-50 border border-purple-100 rounded-3xl p-8 flex gap-4">
              <Lightbulb className="text-purple-600 shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-purple-900 mb-2">A regra de ouro</h4>
                <p className="text-purple-800 leading-relaxed">
                  Use IA como um{" "}
                  <strong>assistente informado, não como um médico</strong>. Ela pode te ajudar
                  a entender informações, organizar perguntas e pesquisar — mas a decisão final
                  sobre sua saúde sempre deve passar por um profissional habilitado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COMO PERGUNTAR */}
        <section className="py-24 bg-gray-950 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              tag="Guia prático"
              title="Como fazer as perguntas certas"
              description="A qualidade da resposta da IA depende diretamente da qualidade da sua pergunta. Veja exemplos reais de saúde."
              light
            />

            <div className="grid md:grid-cols-2 gap-6">
              {promptExamples.map((ex, i) => (
                <article
                  key={i}
                  className={`rounded-3xl p-6 border ${ex.color}`}
                >
                  <span className={`text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block ${ex.tagColor}`}>
                    {ex.label}
                  </span>
                  <blockquote className={`font-mono text-sm p-4 rounded-2xl bg-white/50 mb-4 italic ${ex.textColor}`}>
                    "{ex.query}"
                  </blockquote>
                  <p className={`text-sm leading-relaxed ${ex.textColor}`}>{ex.problem}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* IMAGEM */}
        <section className="relative h-64 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1600&q=80"
            alt="Pessoa estudando tecnologia"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-purple-950/75 flex items-center justify-center">
            <div className="text-center px-6 max-w-3xl">
              <p className="text-white text-2xl md:text-4xl font-extrabold leading-tight">
                A IA não erra menos com o tempo — você usa melhor com o tempo.
              </p>
            </div>
          </div>
        </section>

        {/* FAKE NEWS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              tag="Fake news em saúde"
              title="6 passos para não cair em desinformação"
              description="No Brasil, 62% das pessoas acreditam em pelo menos uma informação falsa sobre saúde. Você pode sair desta estatística."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fakeNewsGuide.map((step) => (
                <article key={step.step} className="border border-gray-100 rounded-3xl p-6 hover:shadow-md transition-shadow">
                  <span className="text-5xl font-extrabold text-gray-100 block mb-3 leading-none">
                    {step.step}
                  </span>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* IA NA SAÚDE */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              tag="IA aplicada à saúde"
              title="O que fazer — e o que nunca fazer"
              description="Uma linha clara sobre os usos seguros e os usos perigosos de IAs quando o assunto é saúde."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiForHealth.map((item) => (
                <article
                  key={item.title}
                  className={`rounded-3xl p-6 border ${
                    item.use === "Nunca"
                      ? "bg-red-50 border-red-100"
                      : item.use === "Com cautela"
                      ? "bg-amber-50 border-amber-100"
                      : "bg-emerald-50 border-emerald-100"
                  }`}
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 ${
                      item.use === "Nunca"
                        ? "bg-red-100 text-red-700"
                        : item.use === "Com cautela"
                        ? "bg-amber-100 text-amber-700"
                        : item.use === "Excelente"
                        ? "bg-emerald-200 text-emerald-800"
                        : "bg-emerald-100 text-emerald-700"
                    }`}>
                      {item.use}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GUIA POR IDADE */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              tag="Por faixa etária"
              title="IA para cada geração"
              description="Cada geração precisa de uma abordagem diferente para usar IA com segurança."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ageGuides.map((g) => (
                <article key={g.group} className={`rounded-3xl p-6 ${g.color}`}>
                  <h3 className={`font-bold text-gray-900 mb-4 text-lg`}>{g.group}</h3>
                  <ul className="space-y-3">
                    {g.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className={`${g.accent} shrink-0 mt-0.5`}>→</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6 text-lg max-w-xl mx-auto">
                Quer explorar como a tecnologia está revolucionando a saúde e os negócios?
              </p>
              <Link
                href="/profissionais"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold px-8 py-4 rounded-full transition-colors"
              >
                Ver área profissional <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="py-20 bg-purple-950">
          <div className="max-w-3xl mx-auto px-6">
            <NewsletterForm
              title="IA para saúde — sem complicar"
              subtitle="Dicas práticas de como usar IA, evitar fake news e navegar com segurança no mundo digital. Para toda a família."
              dark
            />
          </div>
        </section>

        <ReiDasVendasBanner context="negócio, clínica ou farmácia" />
      </main>

      <Footer />
    </>
  );
}
