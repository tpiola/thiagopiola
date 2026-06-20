"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/motion/Reveal";
import { PageShell } from "@/components/motion/PageShell";
import { spring } from "@/lib/motion";

/* ─── Mock data: posts em português ─── */

type Post = {
  slug: string;
  date: string;
  readTime: string;
  category: string;
  title: string;
  summary: string;
};

const POSTS: Post[] = [
  {
    slug: "farmacia-clinica-na-era-digital",
    date: "15 jun 2026",
    readTime: "8 min",
    category: "Farmácia Clínica",
    title: "Farmácia Clínica na Era Digital",
    summary:
      "Como a transformação digital está redefinindo o papel do farmacêutico clínico — da reconciliação medicamentosa ao uso de prontuários eletrônicos e telefarmácia.",
  },
  {
    slug: "compliance-anvisa-2026",
    date: "02 jun 2026",
    readTime: "6 min",
    category: "Regulatório",
    title: "Compliance ANVISA: O Que Mudou em 2026",
    summary:
      "Atualização completa sobre as novas resoluções da ANVISA para o varejo farmacêutico: RDCs atualizadas, documentação obrigatória e prazos de adequação.",
  },
  {
    slug: "ia-generativa-aplicada-a-saude",
    date: "20 mai 2026",
    readTime: "10 min",
    category: "Tecnologia",
    title: "IA Generativa Aplicada à Saúde",
    summary:
      "Explorando casos de uso reais de inteligência artificial generativa no setor saúde: atendimento, análise de dados clínicos, automação documental e suporte à decisão.",
  },
  {
    slug: "gestao-indicadores-varejo-farmaceutico",
    date: "08 mai 2026",
    readTime: "7 min",
    category: "Gestão",
    title: "Gestão de Indicadores no Varejo Farmacêutico",
    summary:
      "Os KPIs essenciais para gestão de farmácias — giro, ruptura, ticket médio, conversão e margem — e como usá-los para decisões comerciais mais assertivas.",
  },
  {
    slug: "lideranca-desenvolvimento-equipes-farmacia",
    date: "25 abr 2026",
    readTime: "9 min",
    category: "Liderança",
    title: "Liderança e Desenvolvimento de Equipes em Farmácia",
    summary:
      "Estratégias práticas para formar, treinar e reter talentos no varejo farmacêutico, com foco em comunicação clara, feedback estruturado e cultura de resultados.",
  },
  {
    slug: "automacao-processos-n8n-farmacia",
    date: "10 abr 2026",
    readTime: "7 min",
    category: "Automação",
    title: "Automação de Processos com n8n na Farmácia",
    summary:
      "Guia prático de como utilizar o n8n para automatizar fluxos de trabalho na farmácia: notificações, CRM, relatórios de indicadores e integração entre sistemas.",
  },
];

/* ─── Componentes auxiliares ─── */

const CATEGORY_COLORS: Record<string, string> = {
  "Farmácia Clínica": "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400",
  "Regulatório": "bg-amber-500/10 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400",
  "Tecnologia": "bg-sky-500/10 text-sky-600 dark:bg-sky-500/15 dark:text-sky-400",
  "Gestão": "bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400",
  "Liderança": "bg-rose-500/10 text-rose-600 dark:bg-rose-500/15 dark:text-rose-400",
  "Automação": "bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/15 dark:text-cyan-400",
};

function PostCard({ post, index }: { post: Post; index: number }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? undefined : { opacity: 0, y: 30 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={reduce ? undefined : { delay: index * 0.08, ...spring.soft }}
      className="group relative flex flex-col rounded-2xl border border-border bg-surface-elevated p-6 transition-all duration-300 hover:shadow-[var(--shadow-medium)] hover:border-[var(--brand)]/20 hover:-translate-y-0.5"
    >
      {/* Meta row */}
      <div className="flex items-center gap-3 mb-3">
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider ${CATEGORY_COLORS[post.category] || "bg-[color-mix(in_srgb,var(--brand)_8%,transparent)] text-[var(--brand)]"}`}
        >
          <Tag className="h-2.5 w-2.5" aria-hidden />
          {post.category}
        </span>
        <span className="flex items-center gap-1 font-mono text-[10px] text-muted">
          <Calendar className="h-3 w-3" aria-hidden />
          {post.date}
        </span>
        <span className="flex items-center gap-1 font-mono text-[10px] text-muted ml-auto">
          <Clock className="h-3 w-3" aria-hidden />
          {post.readTime}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold leading-snug tracking-tight text-foreground group-hover:text-[var(--brand)] transition-colors duration-200">
        {post.title}
      </h3>

      {/* Summary */}
      <p className="mt-2 text-sm leading-relaxed text-muted flex-1">
        {post.summary}
      </p>

      {/* Read more */}
      <Link
        href={`/blog/${post.slug}`}
        className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--brand)] transition-all group-hover:gap-2.5"
      >
        Ler artigo
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </Link>

      {/* Accent line on hover */}
      <span
        className="absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100"
        style={{ background: "linear-gradient(90deg, var(--brand), transparent)" }}
        aria-hidden
      />
    </motion.article>
  );
}

/* ─── Página principal ─── */

export default function BlogPage() {
  const reduce = useReducedMotion();

  return (
    <PageShell>
      <main className="min-h-screen bg-surface text-foreground">
        <Header />

        {/* HERO */}
        <section className="relative border-b border-border pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
          {/* Ambient bg */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{ background: "radial-gradient(ellipse at 50% 30%, var(--brand), transparent 60%)" }}
            aria-hidden
          />

          <div className="relative mx-auto max-w-4xl px-5 md:px-8 text-center">
            <Reveal variant="fade">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand)]/20 bg-[color-mix(in_srgb,var(--brand)_6%,transparent)] px-4 py-1.5 mb-6">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--brand)]">
                  Conteúdo profissional
                </span>
              </div>
            </Reveal>

            <Reveal variant="up" delay={0.06}>
              <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
                Blog
                <span className="block text-gradient-brand">— Thiago Piola</span>
              </h1>
            </Reveal>

            <Reveal variant="up" delay={0.12}>
              <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed text-muted md:text-lg">
                Farmácia clínica, tecnologia aplicada à saúde, gestão farmacêutica,
                compliance regulatório e automação de processos. Conteúdo direto,
                baseado em experiência real de mais de uma década na operação.
              </p>
            </Reveal>
          </div>
        </section>

        {/* GRID DE POSTS */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal variant="left">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--brand)]">
                Artigos
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl text-foreground">
                Últimas publicações
              </h2>
              <div
                className="mt-3 h-px w-16 rounded-full"
                style={{ background: "linear-gradient(90deg, var(--brand), transparent)" }}
              />
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {POSTS.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </div>

            {/* Footer note */}
            <Reveal variant="fade" delay={0.3}>
              <div className="mt-16 text-center">
                <p className="text-sm text-muted">
                  Mais artigos em breve. Acompanhe para conteúdo sobre farmácia, tecnologia e gestão.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="border-t border-border py-20 md:py-24">
          <div className="mx-auto max-w-2xl px-5 md:px-8 text-center">
            <Reveal variant="up">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--brand)] mb-3">
                Acompanhe
              </p>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-gradient-brand">
                Receba os próximos artigos
              </h2>
              <p className="mt-4 text-base text-muted leading-relaxed max-w-lg mx-auto">
                Conteúdo sobre farmácia clínica, compliance, IA aplicada à saúde e automação.
                Direto ao ponto, sem spam.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://www.linkedin.com/in/thiago-piolaoficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group text-base px-8 py-4"
                >
                  Seguir no LinkedIn
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </a>
              </div>
              <p className="mt-6 text-xs text-muted">
                <Link href="/" className="underline underline-offset-2 hover:text-[var(--brand)]">
                  ← Voltar à página inicial
                </Link>
              </p>
            </Reveal>
          </div>
        </section>

        <Footer />
      </main>
    </PageShell>
  );
}
