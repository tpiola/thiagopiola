import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indústria Farmacêutica — Thiago Piola",
  description:
    "Atuação no setor farmacêutico: operação, treinamento, compliance e execução comercial.",
  openGraph: {
    title: "Indústria Farmacêutica — Thiago Piola",
    description:
      "Atuação no setor farmacêutico: operação, treinamento, compliance e execução comercial.",
  },
};

export default function IndustriaPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 pt-32 pb-20 md:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Indústria Farmacêutica
      </h1>
      <p className="mt-4 text-muted leading-relaxed">
        Página em construção. Em breve, conteúdo sobre atuação, projetos e
        resultados no setor farmacêutico — operação, treinamento, compliance,
        tecnologia e execução comercial.
      </p>
    </main>
  );
}
