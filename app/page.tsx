import { ArrowRight } from "lucide-react";
import { BentoGrid } from "@/components/BentoGrid";
import { Competencias } from "@/components/Competencias";
import { ContactForm } from "@/components/ContactForm";
import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollProgress } from "@/components/ScrollProgress";
import { StatsStrip } from "@/components/StatsStrip";
import { Tecnologia } from "@/components/Tecnologia";
import { TextReveal } from "@/components/TextReveal";
import { Trajetoria } from "@/components/Trajetoria";
import { VideoSection } from "@/components/VideoSection";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { site, textReveal } from "@/lib/content";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface text-foreground">
      <ScrollProgress />
      <Header />

      {/* ① Hero — video + pattern interrupt */}
      <Hero />

      {/* ② Stats — números reais */}
      <StatsStrip />

      {/* ③ Proposta — bento grid */}
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

      {/* ⑤ Mid video — curiosity gap */}
      <VideoSection
        src="/videos/mid-loop.mp4"
        className="min-h-[58vh] border-b border-white/8"
      >
        <div className="mx-auto w-full max-w-4xl px-5 py-20 sm:px-8 md:px-12 md:py-32 lg:px-16">
          <h2 className="max-w-3xl text-[clamp(2rem,5.5vw,4rem)] font-black leading-[0.93] tracking-[-0.04em] text-white">
            Sua empresa já sabe o que precisa.
            <span className="block text-white/30">A questão é: quando vai agir?</span>
          </h2>
          <a
            href={site.whatsappWithMessage}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#0066CC] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#0055BB] active:scale-[0.98]"
          >
            Conversar agora
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </VideoSection>

      {/* ⑥ Competências */}
      <Competencias />

      {/* ⑦ Stack técnica */}
      <Tecnologia />

      {/* ⑧ Trajetória */}
      <Trajetoria />

      {/* ⑨ End video — scarcity + urgência */}
      <VideoSection
        src="/videos/cta-loop.mp4"
        className="min-h-[52vh] border-b border-white/8"
        overlayClassName="from-black/80 via-black/55 to-black"
      >
        <div className="mx-auto w-full max-w-4xl px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16">
          <h2 className="max-w-2xl text-[clamp(2.2rem,6vw,4.5rem)] font-black leading-[0.9] tracking-[-0.04em] text-white">
            Esse perfil não fica disponível por muito tempo.
            <span className="block text-white/30">Profissionais assim escolhem onde atuam.</span>
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-white/45">
            Uma mensagem. Sem compromisso. Com possibilidade real.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={site.whatsappWithMessage}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0066CC] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#0055BB] active:scale-[0.98]"
            >
              Quero conversar agora
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </VideoSection>

      {/* ⑩ Formulário de contato */}
      <ContactForm />

      {/* ⑪ Footer */}
      <Footer />

      {/* Floating elements */}
      <WhatsAppFAB />
      <CookieConsent />
    </main>
  );
}
