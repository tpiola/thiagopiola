import { BentoGrid } from "@/components/BentoGrid";
import { Competencias } from "@/components/Competencias";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Tecnologia } from "@/components/Tecnologia";
import { TextReveal } from "@/components/TextReveal";
import { Trajetoria } from "@/components/Trajetoria";
import { textReveal } from "@/lib/content";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface text-foreground">
      <ScrollProgress />
      <Header />
      <Hero />
      <BentoGrid />

      {/* Impact statement — word-by-word scroll reveal */}
      <section className="border-b border-border py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-12 lg:px-16">
          <TextReveal
            text={textReveal.paragraph}
            className="text-2xl font-semibold leading-snug tracking-tight text-foreground md:text-3xl lg:text-4xl"
          />
        </div>
      </section>

      <Competencias />
      <Tecnologia />
      <Trajetoria />
      <Footer />
    </main>
  );
}
