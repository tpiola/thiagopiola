import { Autoridade } from "@/components/Autoridade";
import { Competencias } from "@/components/Competencias";
import { FloatingCta } from "@/components/FloatingCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JornadaHero } from "@/components/JornadaHero";
import { PageShell } from "@/components/motion/PageShell";
import { Projetos } from "@/components/Projetos";
import { ProvasEntrega } from "@/components/ProvasEntrega";
import { Tecnologia } from "@/components/Tecnologia";
import { Trajetoria } from "@/components/Trajetoria";
import { TrustBar } from "@/components/TrustBar";

export default function Home() {
  return (
    <PageShell>
      <main id="conteudo-principal" className="min-h-screen bg-surface text-foreground">
        <Header />
        <Hero />
        <JornadaHero />
        <ProvasEntrega />
        <TrustBar />
        <Autoridade />
        <Competencias />
        <Projetos />
        <Tecnologia />
        <Trajetoria />
        <Footer />
        <FloatingCta />
      </main>
    </PageShell>
  );
}
