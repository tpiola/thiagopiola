/** Conteúdo centralizado do portfólio */

export const site = {
  name: "Thiago Biasoli G. Piola",
  shortName: "Thiago Piola",
  credential: "Farmacêutico CRF/SP 58.519",
  location: "Franca, SP",
  phone: "(16) 99233-3344",
  phoneHref: "tel:5516992333344",
  email: "contato@thiagopiola.com.br",
  whatsapp: "https://wa.me/5516992333344",
} as const;

export const nav = [
  { href: "#proposta", label: "Proposta" },
  { href: "#competencias", label: "Competências" },
  { href: "#tecnologia", label: "Tecnologia" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#contato", label: "Contato" },
] as const;

export const hero = {
  headline: "O farmacêutico que também engenheira Inteligência Artificial.",
  eyebrow: "Perfil executivo — Farmácia × Engenharia de IA",
  lead: "15 anos de operação farmacêutica de alto padrão somados a Engenharia de IA aplicada. Um perfil raro, construído para indústrias, redes hospitalares e empresas que exigem liderança técnica com profundidade de domínio.",
  ctaPrimary: "Baixar Currículo PDF",
  ctaSecondary: "Falar diretamente",
} as const;

export const textReveal = {
  paragraph:
    "A maioria dos profissionais de saúde não sabe construir um sistema de IA. A maioria dos engenheiros de IA não entende de compliance farmacêutico, gestão de equipes clínicas ou pressão de resultado em ambientes regulados. Thiago Piola faz as duas coisas — com histórico comprovado em operações reais.",
} as const;

export const bento = {
  title: "Onde farmácia encontra engenharia de sistemas.",
  lead: "Capacidade técnica e operacional integrada — do código ao comercial, da regulação à automação.",
  cards: [
    {
      tag: "01 / Engenharia de IA",
      title: "Sistemas inteligentes construídos por quem opera o negócio",
      desc: "Agentes de IA, automações n8n, aplicações Next.js e integrações ponta a ponta. Arquiteturas que entendem o contexto farmacêutico e entregam em produção.",
      size: "large",
    },
    {
      tag: "02 / Eficiência Operacional",
      title: "Menos custo. Menos retrabalho.",
      desc: "Automação de rotinas críticas, dashboards de decisão e fluxos inteligentes em ambientes regulados.",
      size: "small",
      metrics: [
        { value: "68%", label: "redução de tempo operacional" },
        { value: "4×", label: "velocidade de entrega" },
      ],
    },
    {
      tag: "03 / Gestão & Liderança",
      title: "Times de alta performance em ambientes técnicos",
      desc: "Liderança operacional, capacitação com playbooks estruturados e acompanhamento de resultados em equipes comerciais e técnicas.",
      size: "small",
    },
    {
      tag: "04 / Vendas Estratégicas",
      title: "Relacionamento executivo e conversão consultiva",
      desc: "Histórico de vendas em saúde com escuta ativa, negociação complexa e entrega consistente de metas em ambientes de alta exigência.",
      size: "large",
    },
  ],
} as const;

export const competencias = {
  title: "Competências que nenhum perfil isolado tem",
  lead: "A combinação de regulação farmacêutica, liderança comercial e engenharia de IA numa única pessoa é o diferencial que indústrias e healthtechs estão buscando.",
  skills: [
    {
      title: "Engenharia de IA aplicada",
      desc: "Agentes, LLMs, fluxos autônomos e arquiteturas de produto em contexto regulado.",
    },
    {
      title: "Responsabilidade técnica farmacêutica",
      desc: "Conformidade, vigilância sanitária e compliance em operações de alto volume.",
    },
    {
      title: "Gestão de equipes comerciais",
      desc: "Liderança operacional, metas, treinamento e desenvolvimento de times.",
    },
    {
      title: "Automação de processos",
      desc: "n8n, integrações de CRM, redução de retrabalho e digitalização de fluxos críticos.",
    },
    {
      title: "Vendas consultivas B2B",
      desc: "Negociação de alto valor, relacionamento executivo e entrega de resultado.",
    },
    {
      title: "Produto digital",
      desc: "Sites, aplicações e sistemas pensados para o setor de saúde e indústria.",
    },
  ],
  metrics: [
    { value: "15+", label: "Anos de experiência" },
    { value: "2", label: "Domínios integrados" },
    { value: "Zero", label: "Equivalente no mercado" },
  ],
} as const;

export const tecnologia = {
  title: "Stack técnico — construído para ambientes reais",
  lead: "Ferramentas aplicadas em projetos reais. Não teoria — entregas em produção, com resultado mensurável.",
  items: [
    { title: "Agentes & LLMs", desc: "Claude, GPT, Gemini — assistentes sob medida para saúde e indústria" },
    { title: "Automação n8n", desc: "Orquestração de fluxos, integrações e processos críticos automatizados" },
    { title: "Next.js & React", desc: "Aplicações de alta performance e portais institucionais" },
    { title: "Dados & dashboards", desc: "Métricas operacionais para decisão rápida em ambientes regulados" },
    { title: "CRM & integrações", desc: "Pipelines conectados — do contato à conversão" },
    { title: "Compliance & documentação", desc: "Processos auditáveis e rastreáveis para ambientes regulatórios" },
  ],
} as const;

export const trajetoria = {
  title: "15 anos de operação real",
  lead: "Formação de alto padrão e atuação em ambientes de exigência clínica, comercial e regulatória.",
  career: [
    {
      company: "Droga Raia",
      period: "Atual",
      role: "Farmacêutico Responsável Técnico",
      desc: "Responsabilidade técnica, vendas de alto desempenho, treinamento e gestão de equipe em operação de grande escala",
    },
    {
      company: "Drogaria Americana",
      period: "2013–2014",
      role: "Farmacêutico RT",
      desc: "Operação comercial e atendimento farmacêutico em ambiente de varejo de alto volume",
    },
    {
      company: "Farma Cruz",
      period: "2012–2013",
      role: "Farmacêutico RT",
      desc: "Rotina técnica, compliance regulatório e gestão de estoque de medicamentos controlados",
    },
    {
      company: "Hospital Unimed",
      period: "2008–2011",
      role: "Aux. de Farmácia Hospitalar",
      desc: "Farmácia hospitalar em ambiente crítico — distribuição, controle e rastreabilidade",
    },
  ],
  education: [
    "Pós-graduação em Engenharia de Inteligência Artificial",
    "GEAR/Google — IA Aplicada e Agentes Inteligentes",
    "MBA em Gestão Empresarial",
    "MBA em Gestão Estratégica",
    "Farmácia — UNIFRAN (Franca, SP)",
  ],
} as const;

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/thiago-piola/",
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/thiagopiolaoficial/",
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/thiagopiolaoficial/",
    label: "Facebook",
  },
  { href: "https://x.com/ThiagoPiola07", label: "X" },
] as const;
