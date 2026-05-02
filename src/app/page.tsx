import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoHero from "@/components/VideoHero";
import NewsletterForm from "@/components/NewsletterForm";
import ReiDasVendasBanner from "@/components/ReiDasVendasBanner";
import { ArrowRight, Leaf, Cpu, BrainCircuit, Users, ShieldCheck, TrendingUp, Star } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    color: "emerald",
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100 text-emerald-600",
    tag: "Conhecimento",
    title: "Saúde Integrativa",
    description:
      "Medicamentos, doenças, tratamentos naturais e farmácia clínica. Informação com base científica para decisões mais inteligentes sobre sua saúde.",
    href: "/saude",
    cta: "Explorar saúde",
  },
  {
    icon: Cpu,
    color: "blue",
    bg: "bg-blue-50",
    iconBg: "bg-blue-100 text-blue-600",
    tag: "Ferramentas",
    title: "Tecnologia para Você",
    description:
      "Aprenda a usar a tecnologia a seu favor: aplicativos de saúde, dispositivos, wearables e ferramentas digitais que fazem diferença no dia a dia.",
    href: "/tecnologia",
    cta: "Explorar tecnologia",
  },
  {
    icon: BrainCircuit,
    color: "purple",
    bg: "bg-purple-50",
    iconBg: "bg-purple-100 text-purple-600",
    tag: "Futuro",
    title: "Inteligência Artificial",
    description:
      "Como usar IA com segurança: fazer as perguntas certas, evitar fake news, entender as limitações e aproveitar o melhor desta revolução.",
    href: "/ia",
    cta: "Explorar IA",
  },
];

const stats = [
  { value: "30M+", label: "Brasileiros sem diagnóstico correto" },
  { value: "73%", label: "Das doenças crônicas são evitáveis" },
  { value: "4.8B", label: "Usuários de internet no mundo" },
  { value: "2030", label: "Ano em que IA transformará a saúde" },
];

const audiences = [
  {
    title: "Para o público geral",
    description:
      "De crianças a idosos, o site foi pensado para que qualquer pessoa entenda saúde, tecnologia e IA de forma simples, segura e confiável.",
    items: ["Linguagem acessível", "Conteúdo verificado", "Sem jargão médico", "Para todas as idades"],
    href: "/saude",
    cta: "Começar por aqui",
    bg: "bg-emerald-600",
  },
  {
    title: "Para profissionais de saúde",
    description:
      "Farmacêuticos, médicos, nutricionistas e gestores de clínicas encontram aqui conteúdo técnico, ferramentas digitais e soluções para modernizar sua prática.",
    items: ["Protocolos clínicos", "Ferramentas digitais", "Gestão moderna", "Expansão de negócios"],
    href: "/profissionais",
    cta: "Área profissional",
    bg: "bg-gray-900",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* VIDEO HERO */}
        <VideoHero
          headline={
            <>
              Saúde, tecnologia e{" "}
              <span className="text-emerald-400">inteligência</span>{" "}
              para todos.
            </>
          }
          subheadline="Um farmacêutico que acredita que o futuro da saúde passa pela tecnologia, pela educação e pelo acesso à informação de qualidade — para todas as idades e gerações."
          ctaPrimary={{ label: "Explorar o site", href: "/saude" }}
          ctaSecondary={{ label: "Quem sou eu", href: "/sobre" }}
        />

        {/* STATS */}
        <section className="bg-gray-950 py-16" id="content">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-extrabold text-emerald-400 mb-2">
                    {s.value}
                  </div>
                  <div className="text-sm text-gray-500 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THREE PILLARS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">
                Os três pilares
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                O que você vai encontrar aqui
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                Conteúdo organizado em três grandes áreas para levar você da informação à transformação.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <article
                    key={p.title}
                    className={`rounded-3xl p-8 ${p.bg} flex flex-col h-full border border-transparent hover:border-gray-200 transition-all group`}
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${p.iconBg}`}>
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                      {p.tag}
                    </span>
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-3">{p.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 flex-1">{p.description}</p>
                    <Link
                      href={p.href}
                      className="inline-flex items-center gap-2 font-bold text-gray-900 hover:text-emerald-600 group-hover:gap-3 transition-all text-sm"
                    >
                      {p.cta}
                      <ArrowRight size={16} />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHO IS IT FOR */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">
                Para quem é este site
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                Feito para você
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {audiences.map((a) => (
                <div
                  key={a.title}
                  className={`rounded-3xl p-10 text-white ${a.bg}`}
                >
                  <h3 className="text-2xl font-extrabold mb-3">{a.title}</h3>
                  <p className="text-white/70 leading-relaxed mb-6">{a.description}</p>
                  <ul className="grid grid-cols-2 gap-2 mb-8">
                    {a.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/80">
                        <span className="text-emerald-400">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={a.href}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-6 py-3 rounded-full transition-all"
                  >
                    {a.cta} <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERT TEASER */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                  <Image
                    src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80"
                    alt="Saúde e natureza — Thiago Piola"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white rounded-2xl p-5 shadow-2xl">
                  <p className="text-xs font-mono uppercase tracking-widest text-emerald-200 mb-1">
                    Farmacêutico
                  </p>
                  <p className="font-extrabold text-lg">CRF/SP 58.519</p>
                </div>
              </div>

              <div>
                <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">
                  Quem está por trás disso
                </p>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                  Thiago B. G. Piola
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                  Farmacêutico que acredita que o futuro da saúde é digital, integrativo e
                  acessível para todos. Com formação sólida em farmácia clínica e saúde
                  integrativa, Thiago trilha uma jornada de transformação: da farmácia para o
                  desenvolvimento de plataformas e soluções digitais que impactam vidas.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Aqui você encontra o olhar de quem vive essa transição — entre a ciência
                  farmacêutica e a tecnologia do amanhã.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/sobre"
                    className="bg-emerald-600 text-white font-bold px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors"
                  >
                    Conhecer a história
                  </Link>
                  <Link
                    href="/profissionais"
                    className="border-2 border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-full hover:border-emerald-500 hover:text-emerald-600 transition-colors"
                  >
                    Sou profissional
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="py-24 bg-gradient-to-br from-emerald-950 to-gray-950">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-10">
              <p className="text-emerald-400 font-semibold text-sm uppercase tracking-widest mb-3">
                Fique por dentro
              </p>
              <h2 className="text-4xl font-extrabold text-white mb-4">
                Conteúdo que transforma
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Saúde, tecnologia, inteligência artificial e inovação — curado por um
                farmacêutico que vive na fronteira entre estas áreas.
              </p>
            </div>
            <NewsletterForm dark />
          </div>
        </section>

        {/* B2B BANNER — subtle */}
        <ReiDasVendasBanner context="negócio ou clínica" />
      </main>

      <Footer />
    </>
  );
}
