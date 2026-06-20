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
import { Trajetoria } from "@/components/Trajetoria";
import { ProvasEntrega } from "@/components/ProvasEntrega";
import { Projetos } from "@/components/Projetos";
import { PageShell } from "@/components/motion/PageShell";
import { Reveal } from "@/components/motion/Reveal";
import { spring } from "@/lib/motion";
import { projetos, competenciasCards, blog } from "@/lib/content";
import { FloatingCta } from "./FloatingCta";
import { ScrollToTop } from "./ScrollToTop";
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

        {/* 3. ATUAÇÃO NO SETOR FARMACÊUTICO */}
        <section className="relative overflow-hidden border-b border-border bg-surface py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0 opacity-[0.015]" style={{ background: "radial-gradient(ellipse at 50% 0%, var(--brand), transparent 60%)" }} aria-hidden />
          <div className="relative mx-auto max-w-5xl px-5 md:px-8">
            <Reveal variant="fade">
              <div className="text-center mb-14">
                <span className="inline-block mb-5 rounded-full bg-[var(--brand)]/10 px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--brand)]">
                  {locale === "pt" ? "Indústria Farmacêutica" : "Pharmaceutical Industry"}
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold leading-snug text-foreground balance mb-4">
                  {locale === "pt" ? "Atuação no Setor Farmacêutico" : "Pharmaceutical Sector Expertise"}
                </h2>
                <p className="text-muted leading-relaxed max-w-2xl mx-auto">
                  {locale === "pt"
                    ? "Experiência prática em operação farmacêutica de alto padrão — treinamento de equipes com foco em compliance regulatório, vendas consultivas e eficiência operacional em ambiente de grande rede."
                    : "Hands-on experience in high-standard pharmaceutical operations — team training focused on regulatory compliance, consultative sales and operational efficiency in a major retail chain environment."}
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
              {[
                { icon: "ShieldCheck", title: locale === "pt" ? "Compliance Regulatório" : "Regulatory Compliance", desc: locale === "pt" ? "Gestão de conformidade ANVISA, documentação técnica, controle de medicamentos controlados e processos de auditoria interna — garantia de operação dentro das exigências legais." : "ANVISA compliance management, technical documentation, controlled substance control and internal audit processes — ensuring operations within legal requirements." },
                { icon: "GraduationCap", title: locale === "pt" ? "Treinamento & Desenvolvimento" : "Training & Development", desc: locale === "pt" ? "Metodologia proprietária de treinamento comercial e técnico para equipes farmacêuticas — comunicação clara, protocolos de atendimento, indicadores de performance e conversão." : "Proprietary commercial and technical training methodology for pharmaceutical teams — clear communication, service protocols, performance indicators and conversion." },
                { icon: "Store", title: locale === "pt" ? "Operação & Execução Comercial" : "Operations & Commercial Execution", desc: locale === "pt" ? "Gestão de rotina de drogaria, indicadores operacionais, vendas consultivas, relacionamento com pacientes e médicos, e liderança de equipe em ambiente de alta demanda." : "Drugstore routine management, operational KPIs, consultative sales, patient and physician relationships, and team leadership in high-demand environments." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.08, ...spring.soft }}
                  className="group rounded-2xl border border-border bg-surface-elevated p-6 md:p-8 hover:border-[var(--brand)]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)] group-hover:bg-[var(--brand)] group-hover:text-white transition-colors duration-300">
                    {i === 0 && <ShieldCheck className="h-5 w-5" />}
                    {i === 1 && <GraduationCap className="h-5 w-5" />}
                    {i === 2 && <Store className="h-5 w-5" />}
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. COMPETÊNCIAS PROFISSIONAIS */}
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
        <section className="py-12 md:py-16 bg-surface-elevated border-t border-border">
          <div className="mx-auto max-w-lg px-5 md:px-8 text-center">
            <Reveal variant="up">
              <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-2">
                {locale === "pt" ? "Newsletter" : "Newsletter"}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-6 max-w-md mx-auto">
                {locale === "pt" ? "Análises, insights e novidades sobre saúde, farmácia e tecnologia direto na sua caixa de entrada." : "Analyses, insights and news about health, pharmacy and technology straight to your inbox."}
              </p>
            </Reveal>
            <NewsletterForm />
          </div>
        </section>

        <Footer />
        <FloatingCta />
        <ScrollToTop />
      </main>
    </PageShell>
  );
}
