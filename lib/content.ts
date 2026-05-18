/** Conteúdo do portfólio — copy com estratégia NLP */

export const site = {
  name: "Thiago Biasoli G. Piola",
  shortName: "Thiago Piola",
  credential: "Farmacêutico CRF/SP 58.519",
  location: "Franca, SP — disponível para o Brasil",
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
  /** Pattern interrupt — contradição que para o scroll */
  headline: "Dois perfis raros.\nUma pessoa.",
  sub: "Farmácia clínica de alto padrão + Engenharia de Inteligência Artificial.",
  /** Presupposição + escassez */
  lead: "Esse profissional não existe em mais ninguém no mercado. Você está lendo o perfil certo.",
  ctaPrimary: "Baixar Currículo",
  ctaSecondary: "Falar agora",
} as const;

/** 3 números brutais — impacto visual imediato */
export const stats = [
  { value: "15+", label: "anos de operação farmacêutica real" },
  { value: "0", label: "equivalentes no mercado" },
  { value: "2", label: "especialidades integradas em um único profissional" },
] as const;

/** TextReveal — NLP: visualização + confirmação + urgência */
export const textReveal = {
  paragraph:
    "Imagine ter alguém que domina compliance farmacêutico, lidera equipes comerciais com método, e ainda constrói os sistemas de IA que automatizam toda a operação. Esse profissional existe. Está disponível. E você está lendo o perfil dele agora.",
} as const;

export const bento = {
  /** Contraste + escassez */
  title: "Quatro competências que ninguém mais combina.",
  lead: "Enquanto outros escolhem entre saúde e tecnologia, Thiago entrega as duas — com 15 anos de histórico comprovado.",
  cards: [
    {
      tag: "Engenharia de IA",
      title: "Sistemas inteligentes construídos por quem opera o negócio",
      desc: "Agentes de IA, automações n8n, aplicações Next.js e integrações ponta a ponta. Arquiteturas que entendem o contexto farmacêutico e entregam em produção.",
      size: "large",
    },
    {
      tag: "Eficiência Operacional",
      title: "Menos custo. Menos retrabalho.",
      desc: "Automação de rotinas críticas, dashboards de decisão e fluxos inteligentes em ambientes regulados.",
      size: "small",
      metrics: [
        { value: "68%", label: "redução de tempo operacional" },
        { value: "4×", label: "velocidade de entrega" },
      ],
    },
    {
      tag: "Gestão & Liderança",
      title: "Times de alta performance em ambientes técnicos",
      desc: "Liderança operacional, capacitação com playbooks e acompanhamento de resultados em equipes comerciais e técnicas.",
      size: "small",
    },
    {
      tag: "Vendas Estratégicas",
      title: "Relacionamento executivo e conversão consistente",
      desc: "Histórico de vendas em saúde com escuta ativa, negociação complexa e entrega de metas em ambientes de alta exigência.",
      size: "large",
    },
  ],
} as const;

export const competencias = {
  /** Gatilho de autoridade + diferenciação */
  title: "O que te diferencia quando as vagas são disputadas.",
  lead: "A combinação de regulação farmacêutica, liderança comercial e engenharia de IA numa única pessoa é o diferencial que indústrias e healthtechs estão buscando.",
  skills: [
    {
      title: "Engenharia de IA aplicada",
      desc: "Agentes, LLMs e arquiteturas de produto em contexto regulado.",
    },
    {
      title: "Responsabilidade técnica",
      desc: "Compliance, vigilância sanitária e operações de alto volume.",
    },
    {
      title: "Gestão comercial",
      desc: "Liderança de times, metas e desenvolvimento de pessoas.",
    },
    {
      title: "Automação de processos",
      desc: "n8n, integrações de CRM e redução de retrabalho.",
    },
    {
      title: "Vendas consultivas B2B",
      desc: "Negociação de alto valor e relacionamento executivo.",
    },
    {
      title: "Produto digital",
      desc: "Sites, aplicações e sistemas para saúde e indústria.",
    },
  ],
  metrics: [
    { value: "15+", label: "Anos de experiência" },
    { value: "2", label: "Domínios integrados" },
    { value: "Zero", label: "Substituto no mercado" },
  ],
} as const;

export const tecnologia = {
  title: "A stack técnica — do código ao comercial.",
  lead: "Ferramentas aplicadas em projetos reais. Não teoria — entregas em produção, resultado mensurável.",
  items: [
    { title: "Agentes & LLMs", desc: "Claude, GPT, Gemini — assistentes sob medida para saúde e indústria" },
    { title: "Automação n8n", desc: "Orquestração de fluxos, integrações e processos críticos automatizados" },
    { title: "Next.js & React", desc: "Aplicações de alta performance e portais institucionais" },
    { title: "Dados & dashboards", desc: "Métricas operacionais para decisão rápida" },
    { title: "CRM & integrações", desc: "Pipelines conectados — do contato à conversão" },
    { title: "Compliance & documentação", desc: "Processos auditáveis para ambientes regulatórios" },
  ],
} as const;

export const trajetoria = {
  title: "15 anos. Experiência real. Sem atalho.",
  lead: "Formação de alto padrão. Atuação em ambientes de exigência clínica, comercial e regulatória.",
  career: [
    {
      company: "Droga Raia",
      period: "Atual",
      role: "Farmacêutico Responsável Técnico",
      desc: "Responsabilidade técnica, vendas de alto desempenho, treinamento e gestão de equipe em operação de grande escala.",
    },
    {
      company: "Drogaria Americana",
      period: "2013–2014",
      role: "Farmacêutico RT",
      desc: "Operação comercial e atendimento farmacêutico em ambiente de varejo de alto volume.",
    },
    {
      company: "Farma Cruz",
      period: "2012–2013",
      role: "Farmacêutico RT",
      desc: "Rotina técnica, compliance regulatório e gestão de estoque de medicamentos controlados.",
    },
    {
      company: "Hospital Unimed",
      period: "2008–2011",
      role: "Aux. de Farmácia Hospitalar",
      desc: "Farmácia hospitalar em ambiente crítico — distribuição, controle e rastreabilidade.",
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
  { href: "https://www.linkedin.com/in/thiago-piola/", label: "LinkedIn" },
  { href: "https://www.instagram.com/thiagopiolaoficial/", label: "Instagram" },
  { href: "https://www.facebook.com/thiagopiolaoficial/", label: "Facebook" },
  { href: "https://x.com/ThiagoPiola07", label: "X" },
] as const;
