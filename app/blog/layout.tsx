import type { Metadata } from "next";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog — Thiago Piola | Farmácia, Tecnologia e Gestão",
  description:
    "Artigos sobre farmácia clínica, compliance ANVISA, inteligência artificial na saúde, automação de processos, liderança e gestão no varejo farmacêutico. Por Thiago Piola, Farmacêutico CRF/SP 58.519.",
  keywords: [
    "blog farmácia",
    "farmácia clínica",
    "compliance ANVISA",
    "inteligência artificial saúde",
    "automação farmácia",
    "n8n farmácia",
    "gestão farmacêutica",
    "liderança farmácia",
    "indicadores varejo farmacêutico",
    "Thiago Piola blog",
    "tecnologia farmacêutica",
    "IA generativa saúde",
  ],
  openGraph: {
    title: "Blog — Thiago Piola | Farmácia, Tecnologia e Gestão",
    description:
      "Artigos sobre farmácia clínica, compliance ANVISA, inteligência artificial na saúde e gestão no varejo farmacêutico.",
    url: `${site.url}/blog`,
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Thiago Piola | Farmácia, Tecnologia e Gestão",
    description:
      "Artigos sobre farmácia clínica, compliance ANVISA, IA na saúde e gestão farmacêutica.",
  },
  alternates: {
    canonical: `${site.url}/blog`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
