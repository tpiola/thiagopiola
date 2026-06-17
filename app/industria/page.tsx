import type { Metadata } from "next";
import { site } from "@/lib/content";
import { IndustriaDossier } from "./IndustriaDossier";

export const metadata: Metadata = {
  title: "Atuação Profissional — Indústria Farmacêutica",
  description:
    "Farmacêutico CRF/SP 58.519 com 15 anos de experiência em farmácia, vendas consultivas, treinamento de equipes e compliance ANVISA. Perfil completo com trajetória, competências e resultados. Thiago Biasoli Garcia Piola.",
  openGraph: {
    title: "Thiago Piola — Atuação em Vendas, Treinamento e Indústria Farmacêutica",
    description:
      "Perfil profissional completo. Farmacêutico CRF/SP 58.519 com sólida experiência em vendas consultivas, liderança de equipes, inteligência comercial e conformidade regulatória. Disponível para Franca/SP, Ribeirão Preto e região.",
    url: `${site.url}/industria`,
  },
};

export default function IndustriaPage() {
  return <IndustriaDossier />;
}
