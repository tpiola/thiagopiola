import { Competencias } from "@/components/Competencias";
import { FarmaciaComunicacao } from "@/components/FarmaciaComunicacao";
import { FarmaciaFuturo } from "@/components/FarmaciaFuturo";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Tecnologia } from "@/components/Tecnologia";
import { Trajetoria } from "@/components/Trajetoria";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <ScrollProgress />
      <Header />
      <Hero />
      <FarmaciaComunicacao />
      <Competencias />
      <FarmaciaFuturo />
      <Tecnologia />
      <Trajetoria />
      <Footer />
    </main>
  );
}
