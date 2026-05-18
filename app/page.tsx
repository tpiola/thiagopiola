import { ArrowRight, Download } from "lucide-react";
import { BentoGrid } from "@/components/BentoGrid";
import { Competencias } from "@/components/Competencias";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollProgress } from "@/components/ScrollProgress";
import { StatsStrip } from "@/components/StatsStrip";
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

      {/* ① Hero — video + pattern interrupt headline */}
      <Hero />

      {/* ② Stats — 3 brutal numbers */}
      <StatsStrip />

      {/* ③ What I do — bento grid */}
      <BentoGrid />

      {/* ④ NLP word-by-word reveal */}
      <section className="border-b border-border py-28 md:py-40">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 md:px-12 lg:px-16">
          <TextReveal
            text={textReveal.paragraph}
            className="text-[clamp(1.4rem,3.5vw,2.6rem)] font-semibold leading-snug tracking-tight text-foreground"
          />
        </div>
      </section>

      {/* ⑤ Mid video — manifesto + CTA (curiosity gap) */}
      <VideoSection
        src="/videos/mid-loop.mp4"
        className="min-h-[58vh] border-b border-white/8"
      >
        <div className="mx-auto w-full max-w-4xl px-5 py-20 sm:px-8 md:px-12 md:py-32 lg:px-16">
          <h2 className="max-w-3xl text-[clamp(2rem,5.5vw,4rem)] font-black leading-[0.93] tracking-[-0.04em] text-white">
            Sua empresa já sabe o que precisa de um profissional assim.
            <span className="block text-white/30">A única pergunta é: quando vai agir?</span>
          </h2>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#0066CC] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#0055BB] active:scale-[0.98]"
          >
            Conversar agora
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </VideoSection>

      {/* ⑥ Proof — competências */}
      <Competencias />

      {/* ⑦ Stack técnica */}
      <Tecnologia />

      {/* ⑧ Track record */}
      <Trajetoria />

      {/* ⑨ End video — CTA final (scarcity + curiosity) */}
      <VideoSection
        src="/videos/cta-loop.mp4"
        className="min-h-[52vh] border-b border-white/8"
        overlayClassName="from-black/80 via-black/55 to-black"
      >
        <div className="mx-auto w-full max-w-4xl px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16">
          <h2 className="max-w-2xl text-[clamp(2.2rem,6vw,4.5rem)] font-black leading-[0.9] tracking-[-0.04em] text-white">
            Uma conversa muda tudo.
            <span className="block text-white/30">Ou não muda nada.</span>
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-white/45">
            Só há uma forma de descobrir.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/curriculo-thiago-piola.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/18 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/28 hover:bg-white/12 active:scale-[0.98]"
            >
              <Download className="h-4 w-4 opacity-60" />
              Baixar Currículo
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0066CC] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0055BB] active:scale-[0.98]"
            >
              WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </VideoSection>

      {/* ⑩ Footer — editorial + todas as redes */}
      <Footer />
    </main>
  );
}
