"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/motion/Reveal";
import { PageShell } from "@/components/motion/PageShell";
import { spring } from "@/lib/motion";
import { blog } from "@/lib/content";
import { useLocale } from "@/lib/i18n";
import { blogPosts, BlogPost } from "@/lib/blog-data";

/* ─── Cores por categoria ─── */

const CATEGORY_COLORS: Record<string, string> = {
  "Farmácia Clínica": "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400",
  Regulatório: "bg-amber-500/10 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400",
  Tecnologia: "bg-sky-500/10 text-sky-600 dark:bg-sky-500/15 dark:text-sky-400",
  Gestão: "bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400",
  Liderança: "bg-rose-500/10 text-rose-600 dark:bg-rose-500/15 dark:text-rose-400",
  Automação: "bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/15 dark:text-cyan-400",
  Inovação: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400",
  Indústria: "bg-orange-500/10 text-orange-600 dark:bg-orange-500/15 dark:text-orange-400",
};

/* ─── Helper ─── */

function findPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

function getPostTitle(post: BlogPost, locale: string): string {
  return locale === "en" ? post.en.title : post.pt.title;
}

function getPostSummary(post: BlogPost, locale: string): string {
  return locale === "en" ? post.en.summary : post.pt.summary;
}

function getPostContent(post: BlogPost, locale: string): string {
  return locale === "en" ? post.en.content : post.pt.content;
}

/* ─── Newsletter inline ─── */

function NewsletterForm() {
  const { locale } = useLocale();
  return (
    <div className="rounded-2xl border border-border bg-surface-elevated p-8 md:p-10">
      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--brand)]">
        Newsletter
      </p>
      <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
        {locale === "pt" ? "Receba conteúdo exclusivo" : "Get exclusive content"}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {locale === "pt"
          ? "Farmácia clínica, tecnologia, compliance e gestão. Direto ao ponto, sem spam."
          : "Clinical pharmacy, technology, compliance and management. Straight to the point, no spam."}
      </p>
      <form
        className="mt-6 flex flex-col sm:flex-row gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          const input = (e.target as HTMLFormElement).querySelector(
            "input",
          ) as HTMLInputElement;
          if (input?.value) {
            alert(locale === "pt"
              ? "Obrigado por se inscrever! Em breve você receberá nossas novidades."
              : "Thank you for subscribing! You'll receive our updates soon.");
            input.value = "";
          }
        }}
      >
        <input
          type="email"
          placeholder={locale === "pt" ? "Seu melhor e-mail" : "Your best email"}
          required
          className="flex-1 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none transition-colors focus:border-[var(--brand)]"
        />
        <button
          type="submit"
          className="btn-primary group text-sm px-6 py-3"
        >
          {locale === "pt" ? "Inscrever" : "Subscribe"}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </button>
      </form>
    </div>
  );
}

/* ─── Componente principal ─── */

export default function PostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = findPost(slug);
  const reduce = useReducedMotion();
  const { locale } = useLocale();

  if (!post) {
    notFound();
  }

  return (
    <PageShell>
      <main className="min-h-screen bg-surface text-foreground">
        <Header />

        {/* Hero compacto */}
        <section className="relative border-b border-border pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              background: "radial-gradient(ellipse at 50% 30%, var(--brand), transparent 60%)",
            }}
            aria-hidden
          />

          <div className="relative mx-auto max-w-3xl px-5 md:px-8">
            {/* Back link */}
            <Reveal variant="fade">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-[var(--brand)] transition-colors mb-8"
              >
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
                {locale === "pt" ? "Voltar ao blog" : "Back to blog"}
              </Link>
            </Reveal>

            {/* Meta */}
            <Reveal variant="up" delay={0.04}>
              <div className="flex flex-wrap items-center gap-3 mb-4">
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
                <span className="flex items-center gap-1 font-mono text-[10px] text-muted">
                  <Clock className="h-3 w-3" aria-hidden />
                  {post.readTime}
                </span>
              </div>
            </Reveal>

            {/* Título */}
            <Reveal variant="up" delay={0.08}>
              <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
                {post.title}
              </h1>
            </Reveal>

            {/* Summary */}
            <Reveal variant="up" delay={0.12}>
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                {post.summary}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Conteúdo do post */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <div className="space-y-6">
              {post.content.map((paragraph, i) => (
                <Reveal key={i} variant="up" delay={Math.min(i * 0.06, 0.3)}>
                  <motion.p
                    className="text-base leading-[1.75] text-foreground/85 md:text-lg"
                    transition={reduce ? undefined : spring.soft}
                  >
                    {paragraph}
                  </motion.p>
                </Reveal>
              ))}
            </div>

            {/* Divider */}
            <motion.div
              className="my-14 h-px w-full rounded-full"
              style={{
                background: "linear-gradient(90deg, var(--brand), transparent 60%)",
              }}
              initial={reduce ? undefined : { scaleX: 0, opacity: 0 }}
              whileInView={reduce ? undefined : { scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Newsletter */}
            <Reveal variant="up" delay={0.1}>
              <NewsletterForm />
            </Reveal>

            {/* CTA Voltar */}
            <Reveal variant="fade" delay={0.2}>
              <div className="mt-10 text-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] transition-all hover:gap-3"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden />
                  {locale === "pt" ? "Ver todos os artigos" : "View all articles"}
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <Footer />
      </main>
    </PageShell>
  );
}
