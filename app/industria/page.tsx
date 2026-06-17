import type { Metadata } from "next";
import { site } from "@/lib/content";
import { IndustriaDossier } from "./IndustriaDossier";

export const metadata: Metadata = {
  title: "Thiago Piola — Farmacêutico | Indústria Farmacêutica | Franca SP",
  description:
    "Farmacêutico CRF/SP 58.519 · 15 anos de experiência · Vendas consultivas técnico-científicas, relacionamento com prescritores, liderança de equipes, compliance ANVISA e inteligência comercial. Perfil disponível para Franca, Ribeirão Preto e região.",
  keywords: [
    "farmacêutico indústria Franca SP",
    "vendas consultivas farmacêuticas",
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
    "farmacêutico 15 anos experiência",
    "farmacêutico Franca SP CRF",
    "recrutamento farmacêutico interior SP",
    "curriculo farmacêutico indústria",
  ],
  openGraph: {
    title: "Thiago Piola — Perfil Farmacêutico para Indústria | CRF/SP 58.519 | Franca SP",
    description:
      "15 anos de experiência do hospital ao balcão. Vendas consultivas, relacionamento com prescritores, liderança, compliance ANVISA e inteligência comercial. Disponível para Franca/SP, Ribeirão Preto e região.",
    url: `${site.url}/industria`,
    locale: "pt_BR",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiago Piola — Farmacêutico | Indústria Farmacêutica",
    description:
      "15 anos de experiência. Vendas consultivas, relacionamento com prescritores, compliance ANVISA. CRF/SP 58.519.",
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
