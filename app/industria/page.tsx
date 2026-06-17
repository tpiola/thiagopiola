import type { Metadata } from "next";
import { site } from "@/lib/content";
import { IndustriaDossier } from "./IndustriaDossier";

export const metadata: Metadata = {
  title: "Dossiê Indústria Farmacêutica",
  description:
    "Perfil profissional completo de Thiago Biasoli Garcia Piola — Farmacêutico CRF/SP 58.519 com atuação em vendas, treinamento e indústria farmacêutica. 15+ anos de experiência em farmácia, liderança de equipe, compliance ANVISA e inteligência comercial.",
  openGraph: {
    title: "Thiago Piola — Atuação em Vendas, Treinamento e Indústria Farmacêutica",
    description:
      "Perfil profissional com experiência, competências e resultados. Farmacêutico CRF/SP 58.519 com foco em vendas, treinamento de equipes e desenvolvimento de negócios.",
    url: `${site.url}/industria`,
  },
};

export default function IndustriaPage() {
  return <IndustriaDossier />;
}
