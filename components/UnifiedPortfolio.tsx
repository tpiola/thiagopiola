"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Store,
  ShieldCheck,
  Cpu,
  GraduationCap,
  Mail
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Trajetoria } from "@/components/Trajetoria";
import { ProvasEntrega } from "@/components/ProvasEntrega";
import { Projetos } from "@/components/Projetos";
import { PageShell } from "@/components/motion/PageShell";
import { Reveal } from "@/components/motion/Reveal";
import { spring } from "@/lib/motion";
import { projetos, competenciasCards, blog } from "@/lib/content";
import { FloatingCta } from "./FloatingCta";
import { useLocale } from "@/lib/i18n";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { locale } = useLocale();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_MAKE_NEWSLETTER_WEBHOOK;

      if (!webhookUrl) {
        console.error("NEXT_PUBLIC_MAKE_NEWSLETTER_WEBHOOK não configurado");
        setStatus("error");
        return;
      }

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          source: "thiagopiola",
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        console.error("Webhook respondeu com status", response.status);
        setStatus("error");
      }
    } catch (err) {
      console.error("Erro ao enviar email para webhook:", err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={spring.soft}
        className="rounded-2xl border border-[var(--brand)]/20 bg-[var(--brand)]/5 p-8 text-center"
      >
        <Mail className="h-8 w-8 text-[var(--brand)] mx-auto mb-3" />
        <p className="text-base font-medium text-foreground">
          {locale === "pt" ? "Obrigado por assinar! 🎉" : "Thanks for subscribing! 🎉"}
        </p>
        <p className="text-sm text-muted mt-1">
          {locale === "pt" ? "Você receberá os próximos conteúdos no seu email." : "You'll receive upcoming content in your inbox."}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={locale === "pt" ? "seu@email.com" : "your@email.com"}
        required
        disabled={status === "loading"}
        className="flex-1 rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none focus:border-[var(--brand)] focus:ring-1 focus:ring-[var(--brand)]/30 transition-all disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary whitespace-nowrap disabled:opacity-50"
      >
        {status === "loading"
          ? (locale === "pt" ? "Enviando…" : "Sending…")
          : (locale === "pt" ? "Assinar" : "Subscribe")}
      </button>
      {status === "error" && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-full text-sm text-red-500 text-center"
        >
          {locale === "pt"
            ? "Ocorreu um erro ao enviar. Tente novamente mais tarde."
            : "An error occurred. Please try again later."}
        </motion.p>
      )}
    </form>
  );
}

export function UnifiedPortfolio() {
  const { locale } = useLocale();

  return (
    <PageShell>
      <main className="min-h-screen bg-surface text-foreground font-sans selection:bg-[var(--brand)] selection:text-white">
        <Header />
        
        {/* 1. HERO DE ELITE (UNIFICADO) */}
        <Hero sectionType="unified" />

        {/* 2. PROVAS DE ENTREGA (AUTORIDADE RÁPIDA) */}
        <ProvasEntrega />

        {/* 4. TESE DE CAMPO (THE JUDGMENT LAYER) */}
        <section className="py-20 md:py-32 overflow-hidden bg-surface-elevated">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <Reveal variant="fade">
              <div className="relative rounded-3xl border border-[var(--brand)]/10 bg-surface-elevated p-8 md:p-14 text-center shadow-subtle">
                
                <span className="mb-6 block font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--brand)]">
                  {locale === "pt" ? "Manifesto Profissional" : "Professional Manifesto"}
                </span>
                
                <h2 className="text-2xl md:text-3xl font-semibold leading-snug text-foreground balance">
                  &ldquo;{locale === "pt" ? "A tecnologia acelera processos, mas o" : "Technology accelerates processes, but the"} <span className="text-gradient-brand">Judgment Layer</span>{locale === "pt" ? " humano é o que valida o compliance e a conversão no ponto de venda." : " is what validates compliance and conversion at the point of sale."}&rdquo;
                </h2>
                
                <p className="mt-8 text-muted leading-relaxed max-w-2xl mx-auto">
                  {locale === "pt"
                    ? "Minha abordagem une a precisão de dados da Engenharia de IA com a intuição científica de anos em campo. Eu elimino o ponto cego entre a diretriz da diretoria e o resultado no faturamento da filial."
                    : "My approach combines the data precision of AI Engineering with the scientific intuition of years in the field. I eliminate the blind spot between boardroom directives and branch revenue results."}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 5. COMPETÊNCIAS PROFISSIONAIS */}
        <section className="py-20 md:py-32 overflow-hidden bg-surface-elevated border-b border-border">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <Reveal variant="fade">
              <div className="text-center mb-14">
                <span className="inline-block mb-5 rounded-full bg-[var(--brand)]/10 px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--brand)]">
                  {locale === "pt" ? "Atuação Profissional" : "Professional Expertise"}
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold leading-snug text-foreground balance mb-4">
                  {locale === "pt" ? "Competências profissionais" : "Professional Skills"}
                </h2>
                <p className="text-muted leading-relaxed max-w-xl mx-auto">
                  {locale === "pt"
                    ? "Comunicação técnica, vendas consultivas, relacionamento profissional, treinamento e tecnologia."
                    : "Technical communication, consultative sales, professional relationships, training and technology."}
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {competenciasCards.map((card, i) => {
                const icons = [Store, ShieldCheck, Cpu, GraduationCap];
                const Icon = icons[i];
                return (
                  <motion.div
                    key={card.titulo}
                    initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: i * 0.08, ...spring.soft }}
                    className="group rounded-2xl border border-border bg-surface-elevated p-6 md:p-8 hover:border-[var(--brand)]/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)] group-hover:bg-[var(--brand)] group-hover:text-white transition-colors duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {locale === "pt" ? card.titulo : card.tituloEn}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {locale === "pt" ? card.desc : card.descEn}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 6. TRAJETÓRIA EXECUTIVA (STORYTELLING) */}
        <Trajetoria />

        {/* 7. PROJETOS & INOVAÇÃO (COMPETÊNCIA TÉCNICA) */}
        <Projetos />

        {/* 8. NEWSLETTER */}
        <section className="py-20 md:py-24 bg-gradient-to-b from-surface-elevated to-surface-elevated border-t border-border">
          <div className="mx-auto max-w-xl px-5 md:px-8 text-center">
            <Reveal variant="up">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                {locale === "pt" ? "Receba conteúdos sobre saúde, farmácia e tecnologia" : "Receive content about health, pharmacy and technology"}
              </h3>
              <p className="text-muted leading-relaxed mb-8">
                {locale === "pt" ? "Análises, insights e novidades direto na sua caixa de entrada." : "Analyses, insights and news straight to your inbox."}
              </p>
            </Reveal>
            <NewsletterForm />
          </div>
        </section>

        <Footer />
        <FloatingCta />
      </main>
    </PageShell>
  );
}
