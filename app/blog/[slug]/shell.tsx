"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/motion/Reveal";
import { PageShell } from "@/components/motion/PageShell";
import { spring } from "@/lib/motion";
import { useLocale } from "@/lib/i18n";
import { blogPosts, BlogPost } from "@/lib/blog-data";

const CATEGORY_COLORS: Record<string, string> = {
  "Farmácia Clínica": "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400",
  Regulatório: "bg-amber-500/10 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400",
  Tecnologia: "bg-sky-500/10 text-sky-600 dark:bg-sky-500/15 dark:text-sky-400",
  Gestão: "bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400",
  Inovação: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400",
  Indústria: "bg-orange-500/10 text-orange-600 dark:bg-orange-500/15 dark:text-orange-400",
};

function getPost(post: BlogPost, locale: string) {
  const data = locale === "en" ? post.en : post.pt;
  return { title: data.title, summary: data.summary, content: data.content, source: data.source };
}

export default function BlogPostShell({ slug }: { slug: string }) {
  const { locale } = useLocale();
  const reduce = useReducedMotion();
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();
  
  const { title, content } = getPost(post, locale);
  const paragraphs = content.split("\n\n").filter(Boolean);

  return (
    <PageShell>
      <main className="min-h-screen bg-surface text-foreground">
        <Header />
        <section className="border-b border-border pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <Link href="/blog" className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-[var(--brand)]">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {locale === "pt" ? "← Voltar ao blog" : "← Back to blog"}
            </Link>
            <motion.div initial={reduce ? undefined : { opacity: 0, y: 24 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={spring.soft} className="mt-8">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider ${CATEGORY_COLORS[post.category] || "bg-muted/10 text-muted"}`}>
                  <Tag className="h-3 w-3" />{post.category}
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[11px] text-muted"><Calendar className="h-3.5 w-3.5" />{post.date}</span>
                <span className="flex items-center gap-1.5 font-mono text-[11px] text-muted"><Clock className="h-3.5 w-3.5" />{post.readTime}</span>
              </div>
              <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-foreground">{title}</h1>
            </motion.div>
          </div>
        </section>
        <section className="py-16 md:py-20">
          <article className="mx-auto max-w-3xl px-5 md:px-8">
            {paragraphs.map((paragraph, i) => {
              const isSource = paragraph.startsWith("**Fonte:") || paragraph.startsWith("**Source:");
              return (
                <Reveal key={i} variant="up" delay={i * 0.03}>
                  <p className={`mb-5 leading-relaxed ${isSource ? "mt-8 pt-6 border-t border-border text-xs text-muted/70" : "text-muted"}`}>
                    {paragraph.split(/(\*\*[^*]+\*\*)/).map((part, j) => {
                      if (part.startsWith("**") && part.endsWith("**")) {
                        return <strong key={j} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
                      }
                      return <span key={j}>{part}</span>;
                    })}
                  </p>
                </Reveal>
              );
            })}
          </article>
        </section>
        <Footer />
      </main>
    </PageShell>
  );
}
