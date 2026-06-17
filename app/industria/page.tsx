import type { Metadata } from "next";
import { site } from "@/lib/content";
import { IndustriaDossier } from "./IndustriaDossier";

export const metadata: Metadata = {
  title: "Dossiê Indústria Farmacêutica",
  description:
    "Perfil completo de Thiago Biasoli Garcia Piola — Farmacêutico CRF/SP 58.519, candidato a Representante / Consultor de Vendas na Indústria Farmacêutica. 15+ anos de operação em PDV, liderança de equipe, sell-out e compliance ANVISA.",
  openGraph: {
    title: "Thiago Piola — Dossiê para Indústria Farmacêutica",
    description:
      "Perfil completo com experiência, competências e resultados. Candidato a Representante / Consultor de Vendas / Propagandista.",
    url: `${site.url}/industria`,
  },
};

export default function IndustriaPage() {
  return <IndustriaDossier />;
}
