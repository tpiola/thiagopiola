import { Autoridade } from "@/components/Autoridade";
import { Competencias } from "@/components/Competencias";
import { FloatingCta } from "@/components/FloatingCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PageShell } from "@/components/motion/PageShell";
import { Projetos } from "@/components/Projetos";
import { ScrollShowcase3D } from "@/components/ScrollShowcase3D";
import { Tecnologia } from "@/components/Tecnologia";
import { Trajetoria } from "@/components/Trajetoria";
import { TrustBar } from "@/components/TrustBar";

export default function Home() {
  return (
    <PageShell>
      <main id="conteudo-principal" className="min-h-screen bg-surface text-foreground">
        <Header />
        <Hero />
        <TrustBar />
        <Autoridade />
        <Competencias />
        <Projetos />
        <ScrollShowcase3D />
        <Tecnologia />
        <Trajetoria />
        <Footer />
        <FloatingCta />
      </main>
    </PageShell>
  );
}
