/** Conteúdo centralizado do portfólio — thiagopiola.com.br */

const whatsappText = encodeURIComponent(
    "Olá, Thiago. Vim pelo site e quero conversar sobre treinamento de equipe, automação ou IA aplicada na minha operação.",
  );

export const site = {
    name: "Thiago Biasoli Garcia Piola",
    shortName: "Thiago Piola",
    credential: "Farmacêutico CRF/SP 58.519",
    location: "Franca, SP, Brasil",
    geo: {
          locality: "Franca",
          region: "SP",
          country: "BR",
    },
    phone: "(16) 99233-3344",
    phoneHref: "tel:5516992333344",
    email: "contato@thiagopiola.com.br",
    whatsapp: `https://wa.me/5516992333344?text=${whatsappText}`,
    linkedin: "https://www.linkedin.com/in/thiago-piola/",
    x: "https://x.com/ThiagoPiola07",
    crfConsultaUrl: "https://www.crfsp.org.br",
    cvUrl: "https://thiagopiola.notion.site/",
    cvLabel: "Ver Currículo",
    url: "https://www.thiagopiola.com.br",
    reidasvendas: "https://www.reidasvendas.com.br",
} as const;

export const footerTagline =
    "Farmacêutico, estrategista e engenheiro de IA. Especialista em treinamento de equipes, automação e inteligência artificial para aumentar receita e transformar operações farmacêuticas.";

/** Ordem alfabética obrigatória — rodapé */
export const socialLinks = [
  { href: "https://github.com/tpiola", label: "GitHub" },
  {
        href: "https://me.developers.google.com/u/105476544026751993130",
        label: "Google Developers",
  },
  { href: site.linkedin, label: "LinkedIn" },
  { href: "https://thiagopiola.notion.site/", label: "Notion" },
  { href: "https://www.reddit.com/user/Mental_Individual641/", label: "Reddit" },
  { href: "https://t.me/m/pGzbdmS2ZWRh", label: "Telegram" },
  { href: "https://www.tiktok.com/@tpiola", label: "TikTok" },
  { href: site.x, label: "X" },
  ] as const;

/** Redes profissionais — exibidas com destaque */
export const socialLinksProfessional = socialLinks.filter((l) =>
    ["GitHub", "Google Developers", "LinkedIn", "Notion", "X"].includes(l.label),
                                                          );

/** Redes comunidade — secundárias no rodapé */
export const socialLinksCommunity = socialLinks.filter((l) =>
    ["Reddit", "Telegram", "TikTok"].includes(l.label),
                                                       );

export const nav = [
  { href: "#impacto", label: "Impacto" },
  { href: "#metodo", label: "Método" },
  { href: "#resultados", label: "Resultados" },
  { href: "#stack", label: "Stack" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#contato", label: "Contato" },
  ] as const;

export const hero = {
    title: "Thiago Biasoli\nGarcia Piola",
    titleLine1: "Thiago Biasoli",
    titleLine2: "Garcia Piola",
    subtitle: "Sua operação farmacêutica está deixando dinheiro na mesa.",
    lead: "Treinamento de alta performance · Automação inteligente · IA que gera receita. Farmacêutico CRF/SP 58.519 com 15+ anos de operação real.",
    ctaWhatsapp: "Quero resultados",
    ctaEmail: "E-mail",
    ctaLinkedin: "LinkedIn",
} as const;

export const trustBar = [
  {
        label: "CRF/SP 58.519",
        detail: "Registro ativo e verificável",
        href: "https://www.crfsp.org.br",
  },
  {
            label: "Droga Raia — Franca, SP",
            detail: "Farmacêutico RT de filial — operação atual",
            href: undefined,    },
  {
        label: "Pós IA + Google GEAR",
        detail: "Engenharia de IA aplicada",
        href: "https://me.developers.google.com/u/105476544026751993130",
  },
  ] as const;

export const farmaciaIndustria = {
    title: "Indústria farmacêutica & saúde",
    chips: [
          "Compliance & ANVISA / RDC",
          "Farmácia clínica e hospitalar",
          "Operação em rede (varejo)",
          "Digitalização e IA em saúde",
        ],
} as const;

export const autoridade = {
    sectionId: "impacto",
    sectionLabel: "01 / Impacto",
    title: "Resultados que mudam operações.",
    lead: "Chega de treinamentos que não geram mudança. De automações que ficam no papel. Cada ação tem dono, prazo e resultado mensurável.",
    pilares: [
      {
              number: "01",
              emoji: "🎯",
              title: "Treinamento de equipes de alta performance",
              desc: "Metodologia ativa que transforma equipe comum em time de resultados — com compliance CRF/SP, conversão ética e indicadores reais.",
      },
      {
              number: "02",
              emoji: "⚙️",
              title: "Automação que elimina retrabalho",
              desc: "Fluxos n8n, integrações e processos 24/7 — menos erro humano, mais escala, operação enxuta que não depende de você estar presente.",
      },
      {
              number: "03",
              emoji: "🤖",
              title: "IA que gera receita, não relatório",
              desc: "Agentes inteligentes, LLMs e arquitetura aplicada com método Sprint/Scrum — IA que trabalha dentro da sua realidade operacional.",
      },
      {
              number: "04",
              emoji: "📊",
              title: "Estratégia com visão de negócio",
              desc: "Decisão técnica com fundamento comercial — do balcão ao produto digital, unindo saúde, tecnologia e resultado financeiro.",
      },
        ],
} as const;

export const competencias = {
    sectionId: "metodo",
    sectionLabel: "02 / Método",
    title: "Como transformo operações em resultados.",
    lead: "Diagnóstico real, execução real, resultado mensurável.",
    skills: [
      {
              title: "Treinamento & liderança de equipes",
              desc: "Times treinados para converter, engajar e crescer — com métricas reais e compliance regulatório.",
      },
      {
              title: "IA aplicada à operação",
              desc: "Copilots, qualificação assistida e decisão inteligente integrada ao fluxo de trabalho.",
      },
      {
              title: "Automação & dashboards",
              desc: "CRM, indicadores e processos automatizados rodando 24/7 sem depender de planilha.",
      },
      {
              title: "Produto digital e escala",
              desc: "Next.js, integrações e entregas que convertem visitante em oportunidade real.",
      },
        ],
    metrics: [
      { value: "15+", label: "Anos de operação real" },
      { value: "CRF/SP", label: "Registro ativo" },
      { value: "360°", label: "Saúde + tech + negócio" },
        ],
} as const;

export const projetos = {
    sectionId: "resultados",
    sectionLabel: "03 / Resultados",
    title: "Entregas em produção.",
    lead: "Projetos reais com stack verificável — prova de execução.",
    items: [
      {
              title: "Automação de qualificação B2B",
              problem: "Leads sem triagem consistente entre canais, gerando perda de oportunidades.",
              result: "Fluxos n8n + CRM com resposta assistida por LLM — triagem automática, zero retrabalho.",
              stack: ["n8n", "LLM", "CRM"],
              href: "https://thiagopiola.notion.site/",
      },
      {
              title: "Agentes inteligentes (GEAR/Google)",
              problem: "Operação repetitiva em atendimento e conteúdo consumindo tempo de gestão.",
              result: "Arquitetura de agentes com método Sprint/Scrum — atendimento escalável, gestão livre.",
              stack: ["Google AI", "Agentes", "Scrum"],
              href: "https://me.developers.google.com/u/105476544026751993130",
      },
      {
              title: "Rei das Vendas — plataforma de treinamento",
              problem: "Equipes farmacêuticas sem método de conversão ética e escalável.",
              result: "Plataforma de treinamento comercial para o setor farmacêutico — em operação.",
              stack: ["Treinamento", "Vendas", "Farmácia"],
              href: "https://www.reidasvendas.com.br",
      },
        ],
} as const;

export const tecnologia = {
    sectionId: "stack",
    sectionLabel: "04 / Stack",
    title: "Ferramentas que entregam resultado.",
    lead: "Stack usado em produção real — sem promessa de vitrine.",
    items: [
      { title: "Agentes & LLMs", desc: "Atendimento e qualificação inteligente em escala" },
      { title: "n8n & integrações", desc: "Orquestração sem atrito operacional" },
      { title: "Claude AI & Google Gemini", desc: "Modelos de linguagem aplicados ao negócio" },
      { title: "Dados & CRM", desc: "Métricas para decisão rápida e precisa" },
      { title: "Sprint & Scrum", desc: "Entrega previsível com resultado real" },
      { title: "SEO & GEO", desc: "Visibilidade local e global otimizada" },
        ],
} as const;

export const trajetoria = {
    sectionId: "trajetoria",
    sectionLabel: "05 / Trajetória",
    title: "Trajetória",
    lead: "Experiência verificável em ambientes de alta exigência.",
    career: [
      {
                    company: "Droga Raia — Filial Franca, SP",
              period: "Atual",
                    role: "Farmacêutico Responsável Técnico de Filial",
              desc: "RT, vendas, treinamento e gestão",
              impacts: [
                                  "Farmacêutico Responsável Técnico pela filial de Franca, SP",
                        "Treinamento de equipe e conversão com compliance CRF/SP",
                      ],
      },
      {
              company: "Drogaria Americana",
              period: "2013–2014",
              role: "Farmacêutico RT",
              desc: "Operação e atendimento",
              impacts: [
                        "Gestão de rotina técnica e atendimento farmacêutico",
                        "Suporte a indicadores operacionais da unidade",
                      ],
      },
      {
              company: "Farma Cruz",
              period: "2012–2013",
              role: "Farmacêutico RT",
              desc: "Compliance e rotina técnica",
              impacts: [
                        "Controle de documentação e conformidade regulatória",
                        "Padronização de processos de dispensação",
                      ],
      },
      {
              company: "Hospital Unimed",
              period: "2008–2011",
              role: "Aux. de Farmácia",
              desc: "Farmácia hospitalar",
              impacts: [
                        "Suporte à farmácia clínica hospitalar",
                        "Logística e controle de estoque crítico",
                      ],
      },
        ],
    education: [
      { course: "Pós-graduação em Engenharia de IA", status: "Em andamento" },
      { course: "GEAR/Google — IA e Agentes Inteligentes", status: "Concluído" },
      { course: "MBA em Gestão Empresarial", status: "Concluído" },
      { course: "MBA em Gestão Estratégica", status: "Concluído" },
      { course: "Farmácia — UNIFRAN", status: "Concluído" },
        ],
} as const;

/** Resumo EN para RH internacional */
export const heroEn = {
    title: "Thiago Biasoli\nGarcia Piola",
    titleLine1: "Thiago Biasoli",
    titleLine2: "Garcia Piola",
    subtitle: "Your pharmacy operation is leaving money on the table.",
    lead: "High-performance team training · Intelligent automation · AI that drives revenue. Pharmacist CRF/SP 58.519 with 15+ years of real operations.",
} as const;
