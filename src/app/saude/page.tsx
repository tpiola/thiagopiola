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
  Pill,
  HeartPulse,
  Leaf,
  FlaskConical,
  Stethoscope,
  Apple,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Clock,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Saúde Integrativa | Thiago Piola – Farmacêutico CRF/SP 58.519",
  description:
    "Entenda como funcionam os medicamentos, conheça as doenças mais comuns e aprenda tratamentos naturais com base científica. Informação responsável por Thiago Piola.",
};

const medications = [
  {
    icon: Pill,
    title: "Como os medicamentos funcionam",
    description:
      "Todo medicamento age em receptores específicos do seu corpo. Entender esse mecanismo ajuda você a usar com mais consciência e a perceber efeitos colaterais com antecedência.",
    tip: "Sempre leia a bula completa antes de iniciar qualquer medicamento.",
  },
  {
    icon: Clock,
    title: "Horários e adesão ao tratamento",
    description:
      "Tomar o medicamento no horário certo não é burocracia — é ciência. A farmacocinética determina que níveis irregulares no sangue podem anular o efeito terapêutico.",
    tip: "Use alarmes no celular ou aplicativos de lembrete de medicamentos.",
  },
  {
    icon: AlertTriangle,
    title: "Interações medicamentosas",
    description:
      "Medicamentos, alimentos e plantas medicinais podem interagir entre si — às vezes de forma perigosa. O farmacêutico é o profissional especializado nessas interações.",
    tip: "Mostre todos os seus medicamentos ao farmacêutico, incluindo vitaminas e fitoterápicos.",
  },
  {
    icon: ShieldCheck,
    title: "Uso racional de antibióticos",
    description:
      "A resistência bacteriana é uma das maiores ameaças à saúde global. Antibióticos só devem ser usados com prescrição e pelo tempo exato indicado pelo médico.",
    tip: "Nunca interrompa o antibiótico ao sentir melhora. Complete o ciclo completo.",
  },
];

const diseases = [
  {
    name: "Hipertensão Arterial",
    prevalence: "36% dos adultos brasileiros",
    description:
      "Conhecida como 'assassina silenciosa', a hipertensão raramente causa sintomas até causar danos graves. Estilo de vida e, quando necessário, medicação controlam a condição.",
    lifestyle: ["Reduzir o sódio", "Exercitar-se 150min/semana", "Gerenciar o estresse", "Dormir bem"],
    color: "bg-rose-50 border-rose-100",
    tagColor: "bg-rose-100 text-rose-600",
  },
  {
    name: "Diabetes Tipo 2",
    prevalence: "16,8 milhões de brasileiros",
    description:
      "Na maioria dos casos, o diabetes tipo 2 pode ser prevenido e controlado com mudanças no estilo de vida. A alimentação é o medicamento mais poderoso nesta condição.",
    lifestyle: ["Controle de carboidratos", "Atividade física regular", "Monitoramento da glicemia", "Perda de peso"],
    color: "bg-amber-50 border-amber-100",
    tagColor: "bg-amber-100 text-amber-600",
  },
  {
    name: "Ansiedade e Depressão",
    prevalence: "Afetam 1 em cada 3 brasileiros",
    description:
      "A saúde mental é saúde. Tratamentos integrando psicoterapia, hábitos de vida saudáveis e, quando indicado, medicação têm os melhores resultados clínicos.",
    lifestyle: ["Exercício físico", "Sono de qualidade", "Conexões sociais", "Mindfulness"],
    color: "bg-purple-50 border-purple-100",
    tagColor: "bg-purple-100 text-purple-600",
  },
  {
    name: "Doenças Cardiovasculares",
    prevalence: "Principal causa de morte no Brasil",
    description:
      "Coração saudável é resultado de escolhas cotidianas: alimentação, movimento, não fumar e gerenciar o estresse são mais poderosos do que qualquer medicamento preventivo.",
    lifestyle: ["Dieta anti-inflamatória", "Não fumar", "Colesterol controlado", "Exames anuais"],
    color: "bg-red-50 border-red-100",
    tagColor: "bg-red-100 text-red-600",
  },
];

const naturalTreatments = [
  {
    name: "Valeriana (Valeriana officinalis)",
    use: "Ansiedade leve e insônia",
    evidence: "Alta",
    icon: "🌿",
    note: "Forma padronizada: 300–600mg do extrato. Evitar com álcool e benzodiazepínicos.",
  },
  {
    name: "Espinheira-santa (Maytenus ilicifolia)",
    use: "Úlceras e gastrite",
    evidence: "Alta",
    icon: "🌱",
    note: "Registrada na Anvisa como fitoterápico. Posologia: conforme bula do produto.",
  },
  {
    name: "Garra-do-diabo (Harpagophytum)",
    use: "Dor articular e inflamação",
    evidence: "Moderada",
    icon: "🌾",
    note: "Dose eficaz: 50–100mg de harpagosídeo por dia. Cuidado com anticoagulantes.",
  },
  {
    name: "Maracujá (Passiflora incarnata)",
    use: "Ansiedade e tensão nervosa",
    evidence: "Moderada",
    icon: "🍃",
    note: "Chá ou tintura padronizada. Não usar em gravidez sem orientação médica.",
  },
  {
    name: "Cúrcuma (Curcuma longa)",
    use: "Anti-inflamatório natural",
    evidence: "Alta",
    icon: "🟡",
    note: "Biodisponibilidade aumenta com piperina (pimenta-preta). Dose: 500–2000mg/dia.",
  },
  {
    name: "Camomila (Matricaria chamomilla)",
    use: "Digestão e cólicas leves",
    evidence: "Moderada",
    icon: "🌼",
    note: "Chá preparado com água quente (não fervente). Segura para todas as idades.",
  },
];

export default function SaudePage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          tag="Farmácia Clínica & Saúde Integrativa"
          title={
            <>
              Entenda sua saúde.{" "}
              <span className="text-emerald-400">Decida melhor.</span>
            </>
          }
          description="Medicamentos, doenças, tratamentos naturais e farmácia clínica explicados com clareza e responsabilidade científica — para que você tome decisões mais inteligentes sobre a sua saúde."
          imageSrc="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1600&q=80"
          imageAlt="Medicamentos e saúde"
          color="emerald"
        />

        {/* MEDICAMENTOS */}
        <section className="py-24 bg-white" id="content">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              tag="Uso racional de medicamentos"
              title="O que todo paciente precisa saber"
              description="Informação farmacêutica acessível para que você use medicamentos com mais segurança, eficácia e consciência."
            />

            <div className="grid md:grid-cols-2 gap-8">
              {medications.map((med) => {
                const Icon = med.icon;
                return (
                  <article
                    key={med.title}
                    className="bg-gray-50 rounded-3xl p-8 hover:bg-emerald-50 transition-colors group"
                  >
                    <div className="w-11 h-11 bg-emerald-100 group-hover:bg-emerald-200 rounded-2xl flex items-center justify-center mb-5 transition-colors">
                      <Icon size={22} className="text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{med.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{med.description}</p>
                    <div className="flex items-start gap-2 bg-emerald-100 rounded-2xl px-4 py-3 text-sm text-emerald-800">
                      <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                      <span>{med.tip}</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* IMAGE BREAK */}
        <section className="relative h-72 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80"
            alt="Profissional de saúde"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 to-transparent flex items-center">
            <div className="max-w-7xl mx-auto px-6">
              <p className="text-white/60 text-sm font-mono uppercase tracking-widest mb-2">
                Dado da OMS
              </p>
              <p className="text-white text-3xl md:text-5xl font-extrabold max-w-xl leading-tight">
                50% dos medicamentos são usados de forma incorreta.
              </p>
            </div>
          </div>
        </section>

        {/* DOENÇAS */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              tag="Doenças crônicas"
              title="As condições mais comuns no Brasil"
              description="Entenda como prevenir, controlar e conviver melhor com as doenças que mais afetam os brasileiros."
            />

            <div className="grid md:grid-cols-2 gap-8">
              {diseases.map((d) => (
                <article
                  key={d.name}
                  className={`rounded-3xl p-8 border ${d.color}`}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{d.name}</h3>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full shrink-0 ${d.tagColor}`}>
                      {d.prevalence}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-5">{d.description}</p>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                      Estilo de vida
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {d.lifestyle.map((l) => (
                        <span
                          key={l}
                          className="text-xs bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-full"
                        >
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TRATAMENTOS NATURAIS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              tag="Fitoterapia com evidência"
              title={
                <>
                  Plantas medicinais que{" "}
                  <span className="text-emerald-600">funcionam</span>
                </>
              }
              description="A fitoterapia brasileira tem séculos de tradição e, hoje, validação científica. Conheça as plantas medicinais com maior evidência clínica."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {naturalTreatments.map((t) => (
                <article
                  key={t.name}
                  className="border border-gray-100 rounded-3xl p-6 hover:shadow-lg transition-shadow bg-white"
                >
                  <div className="text-4xl mb-4">{t.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-1">{t.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-gray-500">Uso principal:</span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      {t.use}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-gray-500">Evidência:</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      t.evidence === "Alta"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-amber-100 text-amber-700"
                    }`}>
                      {t.evidence}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed border-t border-gray-100 pt-3 mt-3">
                    {t.note}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 bg-amber-50 border border-amber-200 rounded-3xl p-6 flex gap-4 items-start">
              <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={22} />
              <div>
                <p className="font-bold text-amber-900 mb-1">Importante</p>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Mesmo plantas medicinais têm contraindicações e interações. Antes de iniciar
                  qualquer fitoterápico, consulte um farmacêutico ou médico. Prefira produtos
                  registrados na Anvisa com padronização de princípios ativos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="py-20 bg-emerald-950">
          <div className="max-w-3xl mx-auto px-6">
            <NewsletterForm
              title="Receba artigos de farmácia clínica"
              subtitle="Dicas práticas de saúde, novidades em fitoterapia e orientações farmacêuticas. Conteúdo verificado, uma vez por semana."
              dark
            />
          </div>
        </section>

        <ReiDasVendasBanner context="clínica ou farmácia" />
      </main>

      <Footer />
    </>
  );
}
