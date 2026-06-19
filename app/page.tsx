import { Especialidades } from "@/components/Especialidades";
import { Faq } from "@/components/Faq";
import { FloatingCta } from "@/components/FloatingCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Missao } from "@/components/Missao";
import { PageShell } from "@/components/motion/PageShell";
import { ProvasEntrega } from "@/components/ProvasEntrega";
import { TrustBar } from "@/components/TrustBar";
import { Trajetoria } from "@/components/Trajetoria";

export default function Home() {
  return (
    <PageShell>
      <main id="conteudo-principal" className="min-h-screen bg-surface text-foreground">
        <Header />
        <Hero />
        <ProvasEntrega />
        <TrustBar />
        <Especialidades />
        <Trajetoria />
        <Missao />
        <Faq />
        <Footer />
        <FloatingCta />
      </main>
    </PageShell>
  );
}
