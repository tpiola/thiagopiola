import type { Metadata } from "next";
import { site } from "@/lib/content";

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

const POSTS_META: Record<string, { title: string; description: string }> = {
  "farmacia-clinica-na-era-digital": {
    title: "Farmácia Clínica na Era Digital — Thiago Piola",
    description:
      "Como a transformação digital está redefinindo o papel do farmacêutico clínico — da reconciliação medicamentosa ao uso de prontuários eletrônicos e telefarmácia.",
  },
  "compliance-anvisa-2026": {
    title: "Compliance ANVISA: O Que Mudou em 2026 — Thiago Piola",
    description:
      "Atualização completa sobre as novas resoluções da ANVISA para o varejo farmacêutico: RDCs atualizadas, documentação obrigatória e prazos de adequação.",
  },
  "ia-generativa-aplicada-a-saude": {
    title: "IA Generativa Aplicada à Saúde — Thiago Piola",
    description:
      "Explorando casos de uso reais de inteligência artificial generativa no setor saúde: atendimento, análise de dados clínicos, automação documental e suporte à decisão.",
  },
  "gestao-indicadores-varejo-farmaceutico": {
    title: "Gestão de Indicadores no Varejo Farmacêutico — Thiago Piola",
    description:
      "Os KPIs essenciais para gestão de farmácias — giro, ruptura, ticket médio, conversão e margem — e como usá-los para decisões comerciais mais assertivas.",
  },
  "lideranca-desenvolvimento-equipes-farmacia": {
    title: "Liderança e Desenvolvimento de Equipes em Farmácia — Thiago Piola",
    description:
      "Estratégias práticas para formar, treinar e reter talentos no varejo farmacêutico, com foco em comunicação clara, feedback estruturado e cultura de resultados.",
  },
  "automacao-processos-n8n-farmacia": {
    title: "Automação de Processos com n8n na Farmácia — Thiago Piola",
    description:
      "Guia prático de como utilizar o n8n para automatizar fluxos de trabalho na farmácia: notificações, CRM, relatórios de indicadores e integração entre sistemas.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = POSTS_META[slug];

  if (!meta) {
    return {
      title: "Post — Thiago Piola",
      description: "Artigo do blog de Thiago Piola — Farmácia, Tecnologia e Gestão.",
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${site.url}/blog/${slug}`,
      locale: "pt_BR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    alternates: {
      canonical: `${site.url}/blog/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const POST_SLUGS = [
  "farmacia-clinica-na-era-digital",
  "compliance-anvisa-2026",
  "ia-generativa-aplicada-a-saude",
  "gestao-indicadores-varejo-farmaceutico",
  "lideranca-desenvolvimento-equipes-farmacia",
  "automacao-processos-n8n-farmacia",
];

export function generateStaticParams() {
  return POST_SLUGS.map((slug) => ({ slug }));
}

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
