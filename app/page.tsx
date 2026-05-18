import { Autoridade } from "@/components/Autoridade";
import { Competencias } from "@/components/Competencias";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PageShell } from "@/components/motion/PageShell";
import { Tecnologia } from "@/components/Tecnologia";
import { Trajetoria } from "@/components/Trajetoria";

export default function Home() {
  return (
    <PageShell>
      <main className="min-h-screen bg-surface text-foreground">
        <Header />
        <Hero />
        <Autoridade />
        <Competencias />
        <Tecnologia />
        <Trajetoria />
        <Footer />
      </main>
    </PageShell>
  );
}
