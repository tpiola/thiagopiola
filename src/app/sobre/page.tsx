import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import NewsletterForm from "@/components/NewsletterForm";
import ReiDasVendasBanner from "@/components/ReiDasVendasBanner";
import ContactForm from "@/components/ContactForm";
import {
  Leaf,
  GraduationCap,
  Award,
  Code2,
  HeartHandshake,
  ArrowRight,
  MessageCircle,
  Mail,
  AtSign,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Thiago Piola | Farmacêutico CRF/SP 58.519",
  description:
    "Conheça a história de Thiago B. G. Piola — farmacêutico CRF/SP 58.519 em transição para o desenvolvimento de plataformas digitais de saúde.",
};

const timeline = [
  {
    year: "Formação",
    title: "Farmácia e Bioquímica",
    description:
      "Graduação em Farmácia com foco em farmácia clínica, fitoterapia e saúde integrativa. Registro profissional CRF/SP 58.519.",
    icon: GraduationCap,
    color: "bg-emerald-600",
  },
  {
    year: "Especialização",
    title: "Saúde Integrativa & Clínica",
    description:
      "Aprofundamento em fitoterapia baseada em evidências, farmácia clínica e abordagens integrativas que complementam o tratamento convencional.",
    icon: Award,
    color: "bg-teal-600",
  },
  {
    year: "Transição",
    title: "Tecnologia & Desenvolvimento",
    description:
      "Descoberta do poder da tecnologia para ampliar o impacto na saúde pública. Início da jornada de desenvolvimento de plataformas, sites e aplicativos.",
    icon: Code2,
    color: "bg-blue-600",
  },
  {
    year: "Hoje",
    title: "Rei das Vendas",
    description:
      "Fundação da Rei das Vendas — empresa de soluções digitais especializada em saúde, negócios locais e profissionais liberais que querem crescer no digital.",
    icon: HeartHandshake,
    color: "bg-purple-600",
  },
];

const values = [
  {
    icon: "🔬",
    title: "Evidência científica",
    description: "Nada aqui é especulação. Cada informação tem base na literatura científica e na prática clínica.",
  },
  {
    icon: "♿",
    title: "Acessibilidade",
    description: "Saúde e tecnologia devem ser para todos — crianças, adultos, idosos, de qualquer classe social.",
  },
  {
    icon: "🔗",
    title: "Integração",
    description: "O futuro é integrar: medicina e tecnologia, saúde e negócios, tradição e inovação.",
  },
  {
    icon: "🛡️",
    title: "Responsabilidade",
    description: "Com grande alcance vem grande responsabilidade. Nunca promovemos fake news ou práticas sem evidência.",
  },
  {
    icon: "🌱",
    title: "Crescimento contínuo",
    description: "O conhecimento médico e tecnológico evolui rápido. Me comprometo a estar sempre atualizado.",
  },
  {
    icon: "🤝",
    title: "Parceria",
    description: "Não vendo para clientes — construo parcerias com profissionais que querem crescer junto.",
  },
];

export default function SobrePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO SOBRE */}
        <section className="min-h-[70vh] bg-gradient-to-br from-gray-950 via-emerald-950 to-gray-950 flex items-end pt-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=1600&q=80"
              alt="Thiago Piola"
              fill
              className="object-cover object-top opacity-20"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/40" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-32 grid md:grid-cols-2 gap-12 items-end">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-mono px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
                <Leaf size={12} />
                Farmacêutico · CRF/SP 58.519
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.05]">
                Thiago B. G. Piola
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Farmacêutico em transição. De consultório para teclado — levando saúde,
                tecnologia e resultado para quem acredita no futuro.
              </p>
            </div>

            <div className="flex gap-6 justify-start md:justify-end flex-wrap">
              {[
                { label: "Farmacêutico", value: "CRF/SP 58.519" },
                { label: "Missão", value: "Saúde + Tecnologia" },
                { label: "Foco", value: "Transformação digital" },
              ].map((item) => (
                <div key={item.label} className="text-center bg-white/5 border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-sm">
                  <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-white font-bold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HISTÓRIA */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">
                  A história
                </p>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
                  Da farmácia à plataforma digital.
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    A jornada de Thiago começa como farmacêutico — alguém formado para entender
                    como o corpo humano interage com substâncias, como os medicamentos agem,
                    como as plantas medicinais podem curar e como orientar pacientes a fazerem
                    escolhas mais inteligentes sobre sua saúde.
                  </p>
                  <p>
                    Mas ao longo dos anos, ficou claro que o maior obstáculo para a saúde pública
                    no Brasil não era falta de medicamento — era falta de informação de qualidade,
                    acessível, para todas as pessoas, em todos os contextos.
                  </p>
                  <p>
                    Foi então que a tecnologia entrou em cena. Não como uma fuga da farmácia —
                    mas como a extensão mais poderosa dela. Um site pode alcançar mil pessoas ao
                    mesmo tempo. Um aplicativo pode lembrar mil pacientes de tomar o medicamento
                    certo. Uma automação pode conectar o farmacêutico ao paciente de forma que
                    uma consulta de 15 minutos nunca poderia.
                  </p>
                  <p>
                    Hoje, Thiago está na fronteira entre duas áreas que, juntas, têm o potencial
                    de transformar a saúde do Brasil: a ciência farmacêutica e a tecnologia digital.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {timeline.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-5 items-start">
                      <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center shrink-0`}>
                        <Icon size={22} className="text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                          {item.year}
                        </span>
                        <h3 className="font-bold text-gray-900 mt-0.5 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* VALORES */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              tag="O que me move"
              title="Valores que guiam tudo que faço"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v) => (
                <article key={v.title} className="bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{v.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="py-24 bg-emerald-900 text-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-emerald-300 font-semibold text-sm uppercase tracking-widest mb-3">
                Fale comigo
              </p>
              <h2 className="text-4xl font-extrabold mb-6">
                Vamos conversar sobre o futuro da sua saúde ou negócio?
              </h2>
              <p className="text-emerald-200 leading-relaxed mb-10">
                Seja para tirar uma dúvida sobre saúde, discutir uma parceria ou entender como
                a tecnologia pode transformar seu consultório ou farmácia — estou aqui.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: MessageCircle,
                    label: "WhatsApp",
                    value: "Enviar mensagem",
                    href: "https://wa.me/5511999999999",
                  },
                  {
                    icon: Mail,
                    label: "E-mail",
                    value: "contato@thiagopiola.com.br",
                    href: "mailto:contato@thiagopiola.com.br",
                  },
                  {
                    icon: AtSign,
                    label: "Instagram",
                    value: "@thiago.piola",
                    href: "https://instagram.com/thiago.piola",
                  },
                ].map((c) => {
                  const Icon = c.icon;
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 bg-emerald-800/50 hover:bg-emerald-800 rounded-2xl px-5 py-4 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-emerald-700 rounded-xl flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-emerald-300" />
                      </div>
                      <div>
                        <p className="text-xs text-emerald-400 uppercase tracking-widest">{c.label}</p>
                        <p className="font-semibold text-white">{c.value}</p>
                      </div>
                      <ArrowRight size={16} className="ml-auto text-emerald-500 group-hover:translate-x-1 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* CONTACT FORM */}
            <ContactForm />
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="py-20 bg-gray-950">
          <div className="max-w-3xl mx-auto px-6">
            <NewsletterForm
              title="Acompanhe a jornada"
              subtitle="Saúde, tecnologia, negócios e o futuro. De um farmacêutico que está na fronteira de tudo isso."
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
