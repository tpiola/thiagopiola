"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Download, ExternalLink, Mail, MessageCircle, Phone, ShieldCheck, TrendingUp } from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";
import { Reveal } from "@/components/motion/Reveal";
import { PageShell } from "@/components/motion/PageShell";
import { site } from "@/lib/content";
import Link from "next/link";

const KEYWORDS = [
  "Vendas Consultivas Técnico-Científicas",
  "Relacionamento com Prescritores",
  "Inteligência Comercial e CRM",
  "Liderança e Desenvolvimento de Equipes",
  "Compliance ANVISA e Regulatório",
  "Gestão de Território e Carteira",
  "Comunicação Científica de Produto",
  "Business Acumen e Visão de Negócios",
  "People Analytics e Decisão por Dados",
  "Inovação e IA Aplicada a Vendas",
  "Negociação e Persuasão Ética",
  "Gestão de Indicadores e Metas",
  "Farmácia Clínica e Hospitalar",
  "ESG e Integridade Corporativa",
  "Inteligência Emocional e Liderança",
];

const EXPERIENCIA = [
  {
    empresa: "Droga Raia / RD Saúde",
    periodo: "Atual — [N] anos",
    cargo: "Farmacêutico Responsável Técnico de Filial",
    local: "Franca, SP",
    resumo: "Liderança de equipe (~13 profissionais), gestão de indicadores comerciais e compliance regulatório em loja referência da maior rede de farmácias do Brasil.",
    resultados: [
      "Lidero equipe de ~13 profissionais em loja referência da rede, respondendo por resultados em vendas, giro, ruptura e margem em [N] categorias.",
      "Desenvolvi método próprio de treinamento da equipe para indicação ativa, elevando conversão em [X%] e ticket médio em [Y%].",
      "Mantenho conformidade CRF/SP e ANVISA — [N] anos sem autuações.",
      "Estruturei dashboards e sistema próprio de CRM para decisão comercial em tempo real.",
    ],
  },
  {
    empresa: "Drogaria Americana",
    periodo: "2013–2014",
    cargo: "Farmacêutico RT",
    local: "Franca, SP",
    resumo: "Gestão de rotina técnica e operacional de farmácia de bairro.",
    resultados: [
      "Gerenciei atendimento a [N] pacientes/dia com foco em adesão ao tratamento e indicação ativa.",
      "Implementei processos que reduziram tempo de espera em [X%] e elevaram produtividade da equipe.",
      "Participei de ações comerciais com indústria, gerando aumento de [X%] nos resultados de [N] linhas.",
    ],
  },
  {
    empresa: "Farma Cruz",
    periodo: "2012–2013",
    cargo: "Farmacêutico RT",
    local: "Franca, SP",
    resumo: "Compliance regulatório e padronização de processos de dispensação.",
    resultados: [
      "Responsável por controle documental e adequação a RDCs e boas práticas de farmácia.",
      "Padronizei processos de dispensação com rastreabilidade total.",
      "Vivenciei o ciclo completo de negociação com a indústria, consolidando experiência em vendas e relacionamento.",
    ],
  },
  {
    empresa: "Hospital Unimed",
    periodo: "2008–2011",
    cargo: "Auxiliar de Farmácia — Farmácia Hospitalar",
    local: "Franca, SP",
    resumo: "Farmácia clínica hospitalar, logística de medicamentos e suporte multidisciplinar.",
    resultados: [
      "Atuei suportando equipe multidisciplinar em ambiente hospitalar de alta complexidade — [N] leitos.",
      "Gerenciei logística de medicamentos controlados e de alto custo com [X%] de disponibilidade.",
      "Participei de comissões de farmácia e terapêutica, consolidando base clínica para abordagem com prescritores.",
    ],
  },
];

const FORMACAO = [
  { curso: "Pós-graduação em Engenharia de IA", status: "Em andamento" },
  { curso: "GEAR/Google — IA e Agentes Inteligentes", status: "Concluído" },
  { curso: "MBA em Gestão Empresarial", status: "Concluído" },
  { curso: "MBA em Gestão Estratégica", status: "Concluído" },
  { curso: "Farmácia — UNIFRAN", status: "Concluído" },
];

export function IndustriaDossier() {
  const reduce = useReducedMotion();

  return (
    <PageShell>
      <main className="min-h-screen bg-surface text-foreground">
        <Header />

        {/* HERO */}
        <section className="relative border-b border-border pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ background: "radial-gradient(ellipse at 30% 40%, var(--brand), transparent 60%)" }} aria-hidden />
          <div className="relative mx-auto max-w-4xl px-5 md:px-8 text-center">
            <Reveal variant="fade">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand)]/20 bg-[color-mix(in_srgb,var(--brand)_6%,transparent)] px-4 py-1.5 mb-6">
                <ShieldCheck className="h-3.5 w-3.5 text-[var(--brand)]" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--brand)]">
                  Perfil Profissional — Indústria Farmacêutica
                </span>
              </div>
            </Reveal>

            <Reveal variant="up" delay={0.06}>
              <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
                <span className="block">Thiago Biasoli</span>
                <span className="block text-gradient-brand">Garcia Piola</span>
              </h1>
            </Reveal>

            <Reveal variant="up" delay={0.12}>
              <p className="mt-4 text-xl font-semibold text-muted md:text-2xl">
                Farmacêutico CRF/SP 58.519 · <span className="text-foreground">Vendas Consultivas · Liderança · Compliance</span>
              </p>
            </Reveal>

            <Reveal variant="fade" delay={0.18}>
              <p className="mt-6 max-w-2xl mx-auto text-base leading-relaxed text-muted md:text-lg">
                <span className="text-foreground font-semibold">15 anos de experiência em saúde — do hospital ao balcão.</span>{" "}
                Conhecimento técnico-científico, relacionamento com prescritores, liderança de equipes e conformidade regulatória impecável. 
                Fluência digital, inteligência comercial e IA aplicada a vendas. Uma trajetória que combina o que a indústria farmacêutica mais valoriza em 2026.
              </p>
            </Reveal>

            <Reveal variant="scale" delay={0.24}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary group">
                  <MessageCircle className="h-4 w-4" />
                  Vamos conversar
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-all group-hover:translate-x-0.5" aria-hidden />
                </a>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary group">
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
                <a href={site.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary group">
                  <Download className="h-4 w-4" />
                  Currículo
                </a>
              </div>
            </Reveal>

            <Reveal variant="fade" delay={0.3}>
              <div className="mt-10 flex flex-wrap justify-center gap-2">
                {KEYWORDS.map((kw, i) => (
                  <span key={kw}
                    className="rounded-full border border-border bg-surface-elevated px-3 py-1.5 text-[10px] font-mono font-medium text-muted transition-colors hover:border-[var(--brand)]/30 hover:text-[var(--brand)]"
                    style={{ transitionDelay: `${i * 20}ms` }}
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* TESE */}
        <section className="border-b border-border bg-surface-elevated py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <Reveal variant="fade">
              <div className="rounded-2xl border border-[var(--brand)]/20 bg-[color-mix(in_srgb,var(--brand)_5%,transparent)] p-8 md:p-10 text-center">
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[var(--brand)] mb-3">
                  Diferencial
                </p>
                <blockquote className="text-lg md:text-xl font-semibold leading-relaxed text-foreground">
                  &ldquo;A indústria investe em treinar profissionais para entender a farmácia e influenciar quem está no balcão. 
                  Eu não preciso entender — eu <span className="text-[var(--brand)]">vivo</span> essa realidade todos os dias. 
                  Conheço o cliente, a operação e o produto por dentro.&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted">
                  <TrendingUp className="h-4 w-4 text-[var(--brand)]" />
                  <span>Esse é o valor que entrego.</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* EXPERIÊNCIA */}
        <section className="border-b border-border py-20 md:py-28" id="experiencia">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <Reveal variant="left">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--brand)]">
                Experiência
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl text-gradient-brand">
                Trajetória profissional
              </h2>
              <div className="mt-3 divider-brand w-20" />
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
                Cada posição com verbo de ação, resultado mensurável e escopo definido.
              </p>
            </Reveal>

            <div className="mt-12 space-y-10">
              {EXPERIENCIA.map((exp, idx) => (
                <motion.div
                  key={exp.empresa}
                  initial={reduce ? undefined : { opacity: 0, y: 30 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative border-l-2 border-[var(--brand)]/30 pl-6 md:pl-8"
                >
                  <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-[var(--brand)] bg-surface" aria-hidden />
                  
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-lg font-bold text-foreground">{exp.empresa}</h3>
                    <span className="font-mono text-[10px] text-muted">{exp.periodo}</span>
                  </div>
                  
                  <p className="text-sm font-semibold text-[var(--brand)]">{exp.cargo}</p>
                  <p className="text-xs text-muted/70 mt-0.5 mb-3">{exp.local}</p>
                  <p className="text-sm text-muted leading-relaxed mb-4">{exp.resumo}</p>
                  
                  <ul className="space-y-2.5">
                    {exp.resultados.map((r) => (
                      <li key={r} className="flex gap-2 text-sm leading-relaxed text-foreground">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-[var(--brand)]" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FORMAÇÃO + CREDENCIAIS */}
        <section className="border-b border-border bg-surface-elevated py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <div className="grid gap-12 md:grid-cols-2">
              {/* Formação */}
              <Reveal variant="left">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--brand)]">
                  Formação
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl text-gradient-brand">
                  Acadêmica
                </h2>
                <div className="mt-3 divider-brand w-16" />
                <div className="mt-8 space-y-3">
                  {FORMACAO.map((item, i) => (
                    <motion.div
                      key={item.curso}
                      initial={reduce ? undefined : { opacity: 0, x: -15 }}
                      whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      className="group flex items-center justify-between gap-4 border border-border rounded-lg px-4 py-3.5 text-sm transition-all hover:border-[var(--brand)]/30 hover:bg-[color-mix(in_srgb,var(--brand)_3%,transparent)]"
                    >
                      <span className="leading-snug text-foreground">{item.curso}</span>
                      <span className="shrink-0 font-mono text-[9px] uppercase tracking-wider text-[var(--brand)]">
                        {item.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </Reveal>

              {/* Credenciais */}
              <Reveal variant="right" delay={0.1}>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--brand)]">
                  Credenciais
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl text-gradient-brand">
                  Verificáveis
                </h2>
                <div className="mt-3 divider-brand w-16" />
                
                <div className="mt-8 space-y-4">
                  <CredentialCard
                    icon={<ShieldCheck className="h-4 w-4" />}
                    label="CRF/SP 58.519"
                    desc="Registro profissional ativo e verificável"
                    href="https://www.crfsp.org.br"
                  />
                  <CredentialCard
                    icon={<LinkedinIcon className="h-4 w-4" />}
                    label="LinkedIn"
                    desc="Perfil profissional completo"
                    href={site.linkedin}
                  />
                  <CredentialCard
                    icon={<TrendingUp className="h-4 w-4" />}
                    label="Google GEAR — IA e Agentes"
                    desc="Formação Google em inteligência artificial aplicada"
                    href="https://me.developers.google.com/u/105476544026751993130"
                  />
                  <CredentialCard
                    icon={<Download className="h-4 w-4" />}
                    label="Currículo completo"
                    desc="PDF com detalhamento de cada posição"
                    href={site.cvUrl}
                  />
                </div>

                <div className="mt-8 p-4 border border-border rounded-xl bg-surface">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted mb-2">
                    Localização
                  </p>
                  <p className="text-sm text-foreground">{site.location}</p>
                  <p className="text-xs text-muted mt-1">Disponibilidade para viagens e deslocamentos.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-2xl px-5 md:px-8 text-center">
            <Reveal variant="up">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--brand)] mb-3">
                Próximos passos
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-gradient-brand">
                Vamos conversar?
              </h2>
              <p className="mt-4 text-base text-muted leading-relaxed max-w-lg mx-auto">
                Se você busca um profissional que combina conhecimento técnico, experiência de gestão, 
                resultados comerciais comprovados e visão estratégica — esse é o perfil. Franca/SP, Ribeirão Preto e região.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary group text-base px-8 py-4">
                  <MessageCircle className="h-5 w-5" />
                  Vamos conversar
                </a>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary group text-base px-8 py-4">
                  <LinkedinIcon className="h-5 w-5" />
                  LinkedIn
                </a>
                <a href={`mailto:${site.email}`} className="btn-secondary group text-base px-8 py-4">
                  <Mail className="h-5 w-5" />
                  E-mail
                </a>
              </div>
              <p className="mt-6 text-xs text-muted">
                <Link href="/" className="underline underline-offset-2 hover:text-[var(--brand)]">← Voltar à página inicial</Link>
              </p>
            </Reveal>
          </div>
        </section>

        <Footer />
        <FloatingCta />
      </main>
    </PageShell>
  );
}

function CredentialCard({
  icon,
  label,
  desc,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  desc: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-3 rounded-xl border border-border bg-surface p-4 transition-all hover:border-[var(--brand)]/35"
    >
      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: "color-mix(in srgb, var(--brand) 12%, transparent)" }}>
        <span className="text-[var(--brand)]">{icon}</span>
      </div>
      <div className="min-w-0">
        <p className="flex items-center gap-1 text-sm font-semibold text-foreground">
          {label}
          <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-70" aria-hidden />
        </p>
        <p className="mt-0.5 text-xs text-muted">{desc}</p>
      </div>
    </a>
  );
}
