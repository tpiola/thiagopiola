/** Conteúdo centralizado do portfólio */

export const site = {
  name: "Thiago Biasoli Garcia Piola",
  shortName: "Thiago Piola",
  credential: "Farmacêutico CRF/SP 58.519",
  location: "Franca, SP, Brasil",
  geo: {
    locality: "Franca",
    region: "SP",
    country: "BR",
    latitude: -20.5386,
    longitude: -47.4008,
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
  "Farmacêutico generalista, RT, especialista em vendas, treinamentos e IA aplicada. Conecta saúde, tecnologia e automação para facilitar resultados reais em operações, equipes e produtos digitais.";

/** Ordem alfabética obrigatória — rodapé */
export const socialLinks = [
  { href: "https://bsky.app/profile/thiagopiola.bsky.social", label: "Bluesky" },
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
] as const;

/** Redes profissionais — exibidas com destaque */
export const socialLinksProfessional = socialLinks.filter((l) =>
  ["GitHub", "Google Developers", "LinkedIn", "Notion"].includes(l.label),
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
  title: site.name,
  subtitle: "Farmacêutico RT · IA aplicada · Vendas, treinamentos e automação",
  lead: "15+ anos em saúde, operação farmacêutica e facilitação de resultados — unindo CRF/SP, inteligência artificial, tecnologia e método comercial para transformar processos em crescimento real.",
  ctaWhatsapp: "WhatsApp",
  ctaEmail: "E-mail",
  ctaLinkedin: "LinkedIn",
} as const;

export const trustBar = [
  {
    label: "CRF/SP 58.519",
    detail: "Farmacêutico RT com registro ativo",
    href: site.crfConsultaUrl,
  },
  {
    label: "Saúde + IA aplicada",
    detail: "Automação, agentes e tecnologia em produção",
    href: "https://me.developers.google.com/u/105476544026751993130",
  },
  {
    label: "Vendas & treinamento",
    detail: "Facilitador de resultado para equipes e operação",
    href: site.linkedin,
  },
] as const;

export const farmaciaIndustria = {
  title: "Farmácia, indústria & inteligência aplicada",
  chips: [
    "CRF/SP · RT · compliance",
    "Farmácia clínica, hospitalar e varejo",
    "Vendas consultivas e treinamento",
    "IA, automação e healthtech",
  ],
} as const;

export const autoridade = {
  title: "Farmácia, IA e resultado no mesmo profissional.",
  lead: "Autoridade prática para RH, líderes e empresas que precisam de alguém capaz de traduzir saúde, tecnologia, vendas e treinamento em execução mensurável.",
  pilares: [
    {
      title: "Farmacêutico RT e estrategista",
      desc: "Registro CRF/SP, rotina técnica, compliance, atendimento e leitura de operação em ambientes regulados.",
    },
    {
      title: "Inteligência artificial aplicada",
      desc: "Agentes, LLMs, automações e produtos digitais usados para reduzir atrito e acelerar decisão.",
    },
    {
      title: "Vendas e treinamento de equipes",
      desc: "Facilitação comercial, capacitação prática e conversão com ética, clareza e método.",
    },
    {
      title: "Tecnologia que facilita resultados",
      desc: "Processos, dados, CRM e experiências digitais que conectam estratégia, operação e crescimento.",
    },
  ],
} as const;

export const competencias = {
  title: "Competências de alto impacto",
  lead: "Uma combinação rara: autoridade farmacêutica, visão comercial, didática de treinamento e engenharia de IA aplicada.",
  skills: [
    {
      title: "Farmácia & compliance",
      desc: "CRF/SP, RT, rotina técnica, farmácia clínica, varejo e ambientes regulados.",
    },
    {
      title: "IA aplicada & automação",
      desc: "Agentes, LLMs, n8n, fluxos de decisão e processos digitais escaláveis.",
    },
    {
      title: "Vendas & treinamento",
      desc: "Capacitação de equipe, conversão consultiva e facilitação de performance.",
    },
    {
      title: "Tecnologia & resultado",
      desc: "Next.js, CRM, dados, SEO/GEO e entrega mensurável para stakeholders.",
    },
  ],
  metrics: [
    { value: "15+", label: "Anos em saúde" },
    { value: "CRF/SP", label: "Autoridade técnica" },
    { value: "360°", label: "Farmácia + IA + vendas" },
  ],
} as const;

export const projetos = {
  title: "Projetos em produção",
  lead: "Entregas reais com stack mensurável — prova de execução para RH, líderes comerciais e stakeholders de tecnologia.",
  items: [
    {
      title: "Portfólio thiagopiola.com.br",
      problem: "Presença digital executiva para autoridade farmacêutica, IA aplicada e tecnologia.",
      result: "Site Next.js com SEO/GEO, schema estruturado, performance e narrativa de conversão.",
      stack: ["Next.js", "SEO/GEO", "Vercel"],
      href: "https://www.thiagopiola.com.br",
    },
    {
      title: "Automação de qualificação B2B",
      problem: "Leads sem triagem consistente entre canais e baixa velocidade de resposta.",
      result: "Fluxos n8n + CRM com resposta assistida por LLM e visão de funil.",
      stack: ["n8n", "LLM", "CRM"],
      href: "https://thiagopiola.notion.site/",
    },
    {
      title: "Agentes inteligentes (GEAR/Google)",
      problem: "Operação repetitiva em atendimento, treinamento e conteúdo.",
      result: "Arquitetura de agentes com método Sprint/Scrum para facilitar resultados.",
      stack: ["Google AI", "Agentes", "Scrum"],
      href: "https://me.developers.google.com/u/105476544026751993130",
    },
  ],
} as const;

export const tecnologia = {
  title: "Stack de entrega",
  lead: "Ferramentas usadas em projetos reais — automação, IA, dados, presença digital e performance comercial.",
  items: [
    { title: "Agentes & LLMs", desc: "Atendimento, treinamento e qualificação inteligente" },
    { title: "n8n & integrações", desc: "Orquestração para reduzir retrabalho operacional" },
    { title: "Next.js / React", desc: "Sites e apps de alta definição com performance" },
    { title: "Dados & CRM", desc: "Métricas para decisão rápida e acompanhamento de funil" },
    { title: "Sprint & Scrum", desc: "Facilitação, cadência e entrega previsível" },
    { title: "SEO & GEO", desc: "Autoridade local, busca Google e presença por localização" },
  ],
} as const;

export const trajetoria = {
  title: "Trajetória",
  lead: "Experiência verificável em ambientes de alta exigência, com saúde, vendas, treinamento e tecnologia aplicada.",
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
  title: site.name,
  subtitle: "Pharmacist · Applied AI · Sales, training and automation",
  lead: "15+ years in healthcare, pharmacy operations and result facilitation — connecting professional pharmacy authority, AI, technology and commercial execution.",
} as const;
