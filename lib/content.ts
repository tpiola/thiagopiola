/** Conteudo centralizado do portfolio */

const whatsappText = encodeURIComponent(
  "Oi, Thiago. Vim pelo site e quero falar sobre IA, automacao ou um projeto digital.",
);

export const site = {
  name: "Thiago Biasoli G. Piola",
  shortName: "Thiago Piola",
  credential: "Farmaceutico CRF/SP 58.519",
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
  cvLabel: "Curriculo (Notion)",
  url: "https://www.thiagopiola.com.br",
} as const;

export const footerTagline =
  "Farmaceutico generalista, estrategista e engenheiro de IA. Atuacao em saude, drogaria, farmacia hospitalar e tecnologia - com foco em resultado real, com metodos Sprint e Scrum.";

/** Ordem alfabetica obrigatoria - rodape */
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

/** Redes profissionais - exibidas com destaque */
export const socialLinksProfessional = socialLinks.filter((l) =>
  ["GitHub", "Google Developers", "LinkedIn", "Notion", "X"].includes(l.label),
);

/** Redes comunidade - secundarias no rodape */
export const socialLinksCommunity = socialLinks.filter((l) =>
  ["Reddit", "Telegram", "TikTok"].includes(l.label),
);

export const nav = [
  { href: "#autoridade", label: "Autoridade" },
  { href: "#competencias", label: "Competencias" },
  { href: "#projetos", label: "Projetos" },
  { href: "#tecnologia", label: "Tecnologia" },
  { href: "#trajetoria", label: "Trajetoria" },
  { href: "#contato", label: "Contato" },
] as const;

export const hero = {
  title: "Thiago Piola",
  subtitle: "Farmaceutico generalista · Gestor de automacoes · Engenheiro de IA",
  lead: "15+ anos em saude · RT em rede nacional · IA e automacao em producao - do balcao ao produto digital publicado.",
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
    detail: "Farmaceutico RT · atual",
    href: undefined,
  },
  {
    label: "Pos IA + Google GEAR",
    detail: "Engenharia de IA aplicada",
    href: "https://me.developers.google.com/u/105476544026751993130",
  },
] as const;

export const farmaciaIndustria = {
  title: "Industria farmaceutica & saude",
  chips: [
    "Compliance & ANVISA / RDC",
    "Farmacia clinica e hospitalar",
    "Operacao em rede (varejo)",
    "Digitalizacao e IA em saude",
  ],
} as const;

export const autoridade = {
  title: "Quatro frentes. Um profissional.",
  lead: "Perfil raro para RH e lideres que buscam execucao em saude e tecnologia.",
  pilares: [
    {
      title: "Farmaceutico generalista / estrategista",
      desc: "Drogaria, hospitalar, industria, compliance e decisao tecnica com visao de negocio.",
    },
    {
      title: "Gestor de automacoes",
      desc: "Fluxos n8n, integracoes e operacao enxuta - menos retrabalho, mais escala.",
    },
    {
      title: "Engenheiro de Inteligencia Artificial",
      desc: "Agentes, LLMs e arquitetura aplicada com metodo Sprint e Scrum.",
    },
    {
      title: "Desenvolvedor de solucoes digitais",
      desc: "Sites, apps e sistemas que convertem visitante em oportunidade.",
    },
  ],
} as const;

export const competencias = {
  title: "Vitrine de competencias",
  lead: "Alto impacto para recrutadores e decisores - pouco ruido, alta densidade de valor.",
  skills: [
    {
      title: "Lideranca & vendas",
      desc: "Times, treinamento e conversao com etica CRF/SP.",
    },
    {
      title: "IA aplicada",
      desc: "Copilots, qualificacao e decisao assistida.",
    },
    {
      title: "Automacao & dados",
      desc: "CRM, dashboards e processos 24/7.",
    },
    {
      title: "Produto digital",
      desc: "Next.js, integracoes e entrega mensuravel.",
    },
  ],
  metrics: [
    { value: "15+", label: "Anos de experiencia" },
    { value: "CRF/SP", label: "Registro ativo" },
    { value: "360°", label: "Saude + tech" },
  ],
} as const;

export const projetos = {
  title: "Projetos em producao",
  lead: "Entregas reais com stack mensuravel - prova de execucao para RH e stakeholders.",
  items: [
    {
      title: "Portfolio thiagopiola.com.br",
      problem: "Presenca digital executiva para RH farmaceutico e tech.",
      result: "Site estatico Next.js, SEO/GEO, Core Web Vitals otimizado.",
      stack: ["Next.js", "Framer Motion", "Vercel"],
      href: "https://www.thiagopiola.com.br",
    },
    {
      title: "Automacao de qualificacao B2B",
      problem: "Leads sem triagem consistente entre canais.",
      result: "Fluxos n8n + CRM com resposta assistida por LLM.",
      stack: ["n8n", "LLM", "CRM"],
      href: "https://thiagopiola.notion.site/",
    },
    {
      title: "Agentes inteligentes (GEAR/Google)",
      problem: "Operacao repetitiva em atendimento e conteudo.",
      result: "Arquitetura de agentes com metodo Sprint/Scrum.",
      stack: ["Google AI", "Agentes", "Scrum"],
      href: "https://me.developers.google.com/u/105476544026751993130",
    },
  ],
} as const;

export const tecnologia = {
  title: "Stack de entrega",
  lead: "Ferramentas usadas em projetos reais - performance e clareza para stakeholders.",
  items: [
    { title: "Agentes & LLMs", desc: "Atendimento e qualificacao inteligente" },
    { title: "n8n & integracoes", desc: "Orquestracao sem atrito operacional" },
    { title: "Next.js / React", desc: "Sites e apps em alta definicao" },
    { title: "Dados & CRM", desc: "Metricas para decisao rapida" },
    { title: "Sprint & Scrum", desc: "Entrega previsivel e resultado real" },
    { title: "SEO & GEO", desc: "Visibilidade local e global" },
  ],
} as const;

export const trajetoria = {
  title: "Trajetoria",
  lead: "Experiencia verificavel em ambientes de alta exigencia.",
  career: [
    {
      company: "Droga Raia",
      period: "Atual",
      role: "Farmaceutico RT",
      desc: "RT, vendas, treinamento e gestao",
      impacts: [
        "Responsavel tecnico em operacao de alta rotatividade",
        "Treinamento de equipe e conversao com compliance CRF/SP",
      ],
    },
    {
      company: "Drogaria Americana",
      period: "2013-2014",
      role: "Farmaceutico RT",
      desc: "Operacao e atendimento",
      impacts: [
        "Gestao de rotina tecnica e atendimento farmaceutico",
        "Suporte a indicadores operacionais da unidade",
      ],
    },
    {
      company: "Farma Cruz",
      period: "2012-2013",
      role: "Farmaceutico RT",
      desc: "Compliance e rotina tecnica",
      impacts: [
        "Controle de documentacao e conformidade regulatoria",
        "Padronizacao de processos de dispensacao",
      ],
    },
    {
      company: "Hospital Unimed",
      period: "2008-2011",
      role: "Aux. de Farmacia",
      desc: "Farmacia hospitalar",
      impacts: ["Suporte a farmacia clinica hospitalar", "Logistica e controle de estoque critico"],
    },
  ],
  education: [
    { course: "Pos-graduacao em Engenharia de IA", status: "Em andamento" },
    { course: "GEAR/Google - IA e Agentes Inteligentes", status: "Concluido" },
    { course: "MBA em Gestao Empresarial", status: "Concluido" },
    { course: "MBA em Gestao Estrategica", status: "Concluido" },
    { course: "Farmacia - UNIFRAN", status: "Concluido" },
  ],
} as const;

/** Resumo EN para RH internacional */
export const heroEn = {
  title: "Thiago Piola",
  subtitle: "Pharmacist · Automation lead · AI engineer",
  lead: "15+ years in healthcare · National retail pharmacy RT · Production AI & automation - from pharmacy floor to shipped digital products.",
} as const;
