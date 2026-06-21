"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { BlogThumbnail } from "@/components/BlogThumbnail";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/motion/Reveal";
import { PageShell } from "@/components/motion/PageShell";
import { spring } from "@/lib/motion";
import { blog } from "@/lib/content";
import { useLocale } from "@/lib/i18n";
import { blogPosts } from "@/lib/blog-data";

/* ─── Mapeia blogPosts para o formato usado na UI (apenas PT) ─── */

type Post = {
  slug: string;
  date: string;
  readTime: string;
  category: string;
  title: string;
  summary: string;
  image: string;
};

const POSTS: Post[] = blogPosts.map((p) => ({
  slug: p.slug,
  date: p.date,
  readTime: p.readTime,
  category: p.category,
  title: p.pt.title,
  summary: p.pt.summary,
  image: p.image,
}));

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
  const { locale } = useLocale();

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

      {/* Thumbnail */}
      <BlogThumbnail category={post.category as any} title={post.title} />

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
        {locale === "pt" ? blog.readMore : blog.readMoreEn}
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
  const { locale } = useLocale();

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
                  {locale === "pt" ? blog.tag : blog.tagEn}
                </span>
              </div>
            </Reveal>

            <Reveal variant="up" delay={0.06}>
              <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
                {locale === "pt" ? blog.pageTitle : blog.pageTitleEn}
                <span className="block text-gradient-brand">— Thiago Piola</span>
              </h1>
            </Reveal>

            <Reveal variant="up" delay={0.12}>
              <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed text-muted md:text-lg">
                {locale === "pt" ? blog.subtitle : blog.subtitleEn}
              </p>
            </Reveal>
          </div>
        </section>

        {/* GRID DE POSTS */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal variant="left">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--brand)]">
                {locale === "pt" ? blog.articlesLabel : blog.articlesLabelEn}
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl text-foreground">
                {locale === "pt" ? blog.articlesTitle : blog.articlesTitleEn}
              </h2>
              <div
                className="mt-3 h-px w-16 rounded-full"
                style={{ background: "linear-gradient(90deg, var(--brand), transparent)" }}
              />
            </Reveal>

            <div className="mt-10 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {POSTS.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </div>

            {/* Footer note */}
            <Reveal variant="fade" delay={0.3}>
              <div className="mt-16 text-center">
                <p className="text-sm text-muted">
                  {locale === "pt" ? blog.footerNote : blog.footerNoteEn}
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
                {locale === "pt" ? blog.newsletterSectionLabel : blog.newsletterSectionLabelEn}
              </p>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-gradient-brand">
                {locale === "pt" ? blog.ctaTitle : blog.ctaTitleEn}
              </h2>
              <p className="mt-4 text-base text-muted leading-relaxed max-w-lg mx-auto">
                {locale === "pt" ? blog.ctaDesc : blog.ctaDescEn}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://www.linkedin.com/in/thiago-piolaoficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group text-base px-8 py-4"
                >
                  {locale === "pt" ? blog.ctaButton : blog.ctaButtonEn}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </a>
              </div>
              <p className="mt-6 text-xs text-muted">
                <Link href="/" className="underline underline-offset-2 hover:text-[var(--brand)]">
                  {locale === "pt" ? blog.backLink : blog.backLinkEn}
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
