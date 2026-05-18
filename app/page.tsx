import { ArrowRight, Download } from "lucide-react";
import { BentoGrid } from "@/components/BentoGrid";
import { Competencias } from "@/components/Competencias";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Tecnologia } from "@/components/Tecnologia";
import { TextReveal } from "@/components/TextReveal";
import { Trajetoria } from "@/components/Trajetoria";
import { VideoSection } from "@/components/VideoSection";
import { site, textReveal } from "@/lib/content";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface text-foreground">
      <ScrollProgress />
      <Header />

      {/* 1 — Hero (video background) */}
      <Hero />

      {/* 2 — What I do */}
      <BentoGrid />

      {/* 3 — Word-by-word manifesto reveal */}
      <section className="border-b border-border py-28 md:py-36">
        <div className="mx-auto max-w-4xl px-6 md:px-12 lg:px-16">
          <TextReveal
            text={textReveal.paragraph}
            className="text-2xl font-semibold leading-snug tracking-tight text-foreground md:text-3xl lg:text-[2.4rem]"
          />
        </div>
      </section>

      {/* 4 — Mid video manifesto */}
      <VideoSection
        src="/videos/mid-loop.mp4"
        className="min-h-[55vh] border-b border-white/8"
      >
        <div className="mx-auto w-full max-w-4xl px-6 py-20 md:px-12 md:py-28 lg:px-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/35">
            Disponibilidade
          </p>
          <h2 className="mt-5 max-w-3xl text-[clamp(2rem,5vw,3.8rem)] font-black leading-[0.95] tracking-tighter text-white">
            Disponível para indústrias, grupos farmacêuticos e healthtechs de alto padrão.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/50 md:text-lg">
            Atuação presencial ou remota. Qualquer estado do Brasil.
          </p>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#0066CC] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#0055BB]"
          >
            Iniciar conversa
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </VideoSection>

      {/* 5 — Proof points */}
      <Competencias />

      {/* 6 — Tech stack */}
      <Tecnologia />

      {/* 7 — Track record */}
      <Trajetoria />

      {/* 8 — End video CTA */}
      <VideoSection
        src="/videos/cta-loop.mp4"
        className="min-h-[52vh] border-b border-white/8"
        overlayClassName="from-black/80 via-black/60 to-black"
      >
        <div className="mx-auto w-full max-w-4xl px-6 py-20 md:px-12 md:py-28 lg:px-16">
          <h2 className="max-w-2xl text-[clamp(2.2rem,5.5vw,4.2rem)] font-black leading-[0.93] tracking-tighter text-white">
            Pronto para o próximo desafio.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/50">
            Farmacêutico CRF/SP 58.519 com Engenharia de IA — pronto para contribuir no mais alto nível.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/curriculo-thiago-piola.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/15"
            >
              <Download className="h-4 w-4 opacity-70" />
              Baixar Currículo PDF
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0066CC] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#0055BB]"
            >
              WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </VideoSection>

      <Footer />
    </main>
  );
}
