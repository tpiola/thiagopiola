/** Conteúdo centralizado do portfólio */

export const site = {
  name: "Thiago Biasoli G. Piola",
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
  whatsapp: "https://wa.me/5516992333344",
  linkedin: "https://www.linkedin.com/in/thiago-piola/",
  crfConsultaUrl: "https://www.crfsp.org.br",
  cvUrl: "https://thiagopiola.notion.site/",
  cvLabel: "Currículo (Notion)",
  url: "https://www.thiagopiola.com.br",
} as const;

export const footerTagline =
  "Farmacêutico generalista, estrategista e engenheiro de IA. Atuação em saúde, drogaria, farmácia hospitalar e tecnologia — com foco em resultado real, com métodos Sprint e Scrum.";

/** Ordem alfabética obrigatória — rodapé */
export const socialLinks = [
  { href: "https://bsky.app/profile/thiagopiola.bsky.social", label: "Bluesky" },
  { href: "https://github.com/tpiola", label: "GitHub" },
  {
    href: "https://me.developers.google.com/u/105476544026751993130",
    label: "Google Developers",
  },
  { href: "https://thiagopiola.notion.site/", label: "Notion" },
  { href: "https://www.reddit.com/user/Mental_Individual641/", label: "Reddit" },
  { href: "https://t.me/m/pGzbdmS2ZWRh", label: "Telegram" },
  { href: "https://www.tiktok.com/@tpiola", label: "TikTok" },
] as const;

/** Redes profissionais — exibidas com destaque */
export const socialLinksProfessional = socialLinks.filter((l) =>
  ["GitHub", "Google Developers", "Notion"].includes(l.label),
);

/** Redes comunidade — secundárias no rodapé */
export const socialLinksCommunity = socialLinks.filter((l) =>
  ["Bluesky", "Reddit", "Telegram", "TikTok"].includes(l.label),
);

export const nav = [
  { href: "#autoridade", label: "Autoridade" },
  { href: "#competencias", label: "Competências" },
  { href: "#projetos", label: "Projetos" },
  { href: "#tecnologia", label: "Tecnologia" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#contato", label: "Contato" },
] as const;

export const hero = {
  title: "Thiago Piola",
  subtitle: "Farmacêutico generalista · Gestor de automações · Engenheiro de IA",
  lead: "15+ anos em saúde · RT em rede nacional · IA e automação em produção — do balcão ao produto digital publicado.",
  ctaWhatsapp: "WhatsApp",
  ctaEmail: "E-mail",
  ctaLinkedin: "LinkedIn",
} as const;

export const trustBar = [
  {
    label: "CRF/SP 58.519",
    detail: "Registro ativo",
    href: site.crfConsultaUrl,
  },
  {
    label: "Droga Raia",
    detail: "Farmacêutico RT · atual",
    href: undefined,
  },
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
  title: "Quatro frentes. Um profissional.",
  lead: "Perfil raro para RH e líderes que buscam execução em saúde e tecnologia.",
  pilares: [
    {
      title: "Farmacêutico generalista / estrategista",
      desc: "Drogaria, hospitalar, indústria, compliance e decisão técnica com visão de negócio.",
    },
    {
      title: "Gestor de automações",
      desc: "Fluxos n8n, integrações e operação enxuta — menos retrabalho, mais escala.",
    },
    {
      title: "Engenheiro de Inteligência Artificial",
      desc: "Agentes, LLMs e arquitetura aplicada com método Sprint e Scrum.",
    },
    {
      title: "Desenvolvedor de soluções digitais",
      desc: "Sites, apps e sistemas que convertem visitante em oportunidade.",
    },
  ],
} as const;

export const competencias = {
  title: "Vitrine de competências",
  lead: "Alto impacto para recrutadores e decisores — pouco ruído, alta densidade de valor.",
  skills: [
    {
      title: "Liderança & vendas",
      desc: "Times, treinamento e conversão com ética CRF/SP.",
    },
    {
      title: "IA aplicada",
      desc: "Copilots, qualificação e decisão assistida.",
    },
    {
      title: "Automação & dados",
      desc: "CRM, dashboards e processos 24/7.",
    },
    {
      title: "Produto digital",
      desc: "Next.js, integrações e entrega mensurável.",
    },
  ],
  metrics: [
    { value: "15+", label: "Anos de experiência" },
    { value: "CRF/SP", label: "Registro ativo" },
    { value: "360°", label: "Saúde + tech" },
  ],
} as const;

export const projetos = {
  title: "Projetos em produção",
  lead: "Entregas reais com stack mensurável — prova de execução para RH e stakeholders.",
  items: [
    {
      title: "Portfólio thiagopiola.com.br",
      problem: "Presença digital executiva para RH farmacêutico e tech.",
      result: "Site estático Next.js, SEO/GEO, Core Web Vitals otimizado.",
      stack: ["Next.js", "Framer Motion", "Vercel"],
      href: "https://www.thiagopiola.com.br",
    },
    {
      title: "Automação de qualificação B2B",
      problem: "Leads sem triagem consistente entre canais.",
      result: "Fluxos n8n + CRM com resposta assistida por LLM.",
      stack: ["n8n", "LLM", "CRM"],
      href: "https://thiagopiola.notion.site/",
    },
    {
      title: "Agentes inteligentes (GEAR/Google)",
      problem: "Operação repetitiva em atendimento e conteúdo.",
      result: "Arquitetura de agentes com método Sprint/Scrum.",
      stack: ["Google AI", "Agentes", "Scrum"],
      href: "https://me.developers.google.com/u/105476544026751993130",
    },
  ],
} as const;

export const tecnologia = {
  title: "Stack de entrega",
  lead: "Ferramentas usadas em projetos reais — performance e clareza para stakeholders.",
  items: [
    { title: "Agentes & LLMs", desc: "Atendimento e qualificação inteligente" },
    { title: "n8n & integrações", desc: "Orquestração sem atrito operacional" },
    { title: "Next.js / React", desc: "Sites e apps em alta definição" },
    { title: "Dados & CRM", desc: "Métricas para decisão rápida" },
    { title: "Sprint & Scrum", desc: "Entrega previsível e resultado real" },
    { title: "SEO & GEO", desc: "Visibilidade local e global" },
  ],
} as const;

export const trajetoria = {
  title: "Trajetória",
  lead: "Experiência verificável em ambientes de alta exigência.",
  career: [
    {
      company: "Droga Raia",
      period: "Atual",
      role: "Farmacêutico RT",
      desc: "RT, vendas, treinamento e gestão",
      impacts: [
        "Responsável técnico em operação de alta rotatividade",
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
      impacts: ["Suporte à farmácia clínica hospitalar", "Logística e controle de estoque crítico"],
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
  title: "Thiago Piola",
  subtitle: "Pharmacist · Automation lead · AI engineer",
  lead: "15+ years in healthcare · National retail pharmacy RT · Production AI & automation — from pharmacy floor to shipped digital products.",
} as const;
