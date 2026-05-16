import { Competencias } from "@/components/Competencias";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Proposta } from "@/components/Proposta";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Tecnologia } from "@/components/Tecnologia";
import { Trajetoria } from "@/components/Trajetoria";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface text-foreground">
      <ScrollProgress />
      <Header />
      <Hero />
      <Proposta />
      <Competencias />
      <Tecnologia />
      <Trajetoria />
      <Footer />
    </main>
  );
}
