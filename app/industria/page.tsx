import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indústria Farmacêutica — Thiago Piola",
  description:
    "Atuação no setor farmacêutico: operação, treinamento, compliance e execução comercial. Experiência em gestão de equipes, conformidade ANVISA e vendas consultivas.",
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
        Atuação no Setor Farmacêutico
      </h1>

      <p className="mt-4 text-muted leading-relaxed">
        Experiência de mais de uma década em operação farmacêutica de alto padrão, combinando
        gestão técnica, compliance regulatório, treinamento de equipes e execução comercial no
        setor de saúde.
      </p>

      <hr className="my-10 border-border" />

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-foreground mb-4">Compliance &amp; Regulatório</h2>
        <p className="text-muted leading-relaxed">
          Responsável técnico com registro ativo CRF/SP 58.519, atuando na gestão de conformidade
          ANVISA, controle de medicamentos controlados (Portaria 344), documentação técnica e
          processos de auditoria interna. Garantia de operação dentro das exigências legais e boas
          práticas farmacêuticas.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-foreground mb-4">Treinamento &amp; Desenvolvimento</h2>
        <p className="text-muted leading-relaxed">
          Metodologia proprietária de treinamento comercial e técnico para equipes farmacêuticas,
          com foco em comunicação clara, protocolos de atendimento, indicadores de performance e
          conversão. Plataforma Rei das Vendas como ferramenta de capacitação contínua.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-foreground mb-4">Operação &amp; Execução Comercial</h2>
        <p className="text-muted leading-relaxed">
          Gestão de rotina de drogaria em ambiente de grande rede, com experiência em indicadores
          operacionais, vendas consultivas, relacionamento com pacientes e médicos, e liderança de
          equipe. Visão integrada que une operação hospitalar, tecnologia e resultado comercial.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">Tecnologia Aplicada à Saúde</h2>
        <p className="text-muted leading-relaxed">
          Automação de processos com n8n e LLM, agentes inteligentes (GEAR/Google), CRM e
          plataformas digitais — aplicando engenharia de IA para produtividade e tomada de
          decisão baseada em dados no setor farmacêutico.
        </p>
      </section>
    </main>
  );
}
