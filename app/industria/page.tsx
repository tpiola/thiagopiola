import type { Metadata } from "next";
import { site } from "@/lib/content";
import { IndustriaDossier } from "./IndustriaDossier";

export const metadata: Metadata = {
  title: "Thiago Piola — Farmacêutico | Performance Comercial na Indústria Farmacêutica",
  description:
    "Farmacêutico CRF/SP 58.519 com mais de uma década de execução em operação farmacêutica, liderança de times, relacionamento com prescritores, compliance ANVISA e inteligência comercial orientada por dados.",
  keywords: [
    "farmacêutico indústria Franca SP",
    "vendas consultivas farmacêuticas",
    "representante farmacêutico",
    "executivo comercial farmacêutico",
    "trade marketing farma",
    "relacionamento com prescritores",
    "compliance ANVISA",
    "farmacêutico CRF/SP",
    "regulatory affairs farmacêutico",
    "farmacêutico vendas indústria",
    "profissional farmacêutico Ribeirão Preto",
    "assuntos regulatórios farmácia",
    "liderança equipes farmacêuticas",
    "gestão de território farmacêutico",
    "business acumen farmacêutico",
    "farmacêutico IA aplicada",
    "farmacêutico mais de uma década experiência",
    "farmacêutico Franca SP CRF",
    "liderança comercial farma",
    "sell out farmacêutico",
    "performance PDV farma",
    "curriculo farmacêutico indústria",
  ],
  openGraph: {
    title: "Thiago Piola — Perfil Profissional para Indústria Farmacêutica | CRF/SP 58.519",
    description:
      "Mais de uma década de experiência do hospital ao varejo farmacêutico, com foco em execução comercial, relacionamento médico, liderança de equipes e rigor regulatório.",
    url: `${site.url}/industria`,
    locale: "pt_BR",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiago Piola — Farmacêutico | Indústria Farmacêutica",
    description:
      "Execução comercial farmacêutica com visão técnica, liderança e compliance. CRF/SP 58.519.",
  },
  alternates: {
    canonical: `${site.url}/industria`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function IndustriaPage() {
  return <IndustriaDossier />;
}
