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
    },
    phone: "(16) 99233-3344",
    phoneHref: "tel:5516992333344",
    email: "contato@thiagopiola.com.br",
    whatsapp: "https://wa.me/5516992333344",
    url: "https://www.thiagopiola.com.br",
} as const;

export const footerTagline =
    "Farmacêutico generalista, estrategista e engenheiro de IA. Atuação em saúde, drogaria, farmácia hospitalar e tecnologia — com foco em resultado real, com métodos Sprint e Scrum.";

/** Ordem alfabética obrigatória */
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

export const nav = [
  { href: "#autoridade", label: "Autoridade" },
  { href: "#competencias", label: "Competências" },
  { href: "#tecnologia", label: "Tecnologia" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#contato", label: "Contato" },
  ] as const;

export const hero = {
    title: "Thiago Biasoli Garcia Piola",
    subtitle: "Farmacêutico generalista · Gestor de automações · Engenheiro de IA",
    lead: "Autoridade híbrida para indústria farmacêutica, healthtech e operações digitais — do RT ao produto publicado.",
    ctaWhatsapp: "WhatsApp",
    ctaEmail: "E-mail",
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
      },
      {
              company: "Drogaria Americana",
              period: "2013–2014",
              role: "Farmacêutico RT",
              desc: "Operação e atendimento",
      },
      {
              company: "Farma Cruz",
              period: "2012–2013",
              role: "Farmacêutico RT",
              desc: "Compliance e rotina técnica",
      },
      {
              company: "Hospital Unimed",
              period: "2008–2011",
              role: "Aux. de Farmácia",
              desc: "Farmácia hospitalar",
      },
        ],
    education: [
          "Pós-graduação em Engenharia de IA",
          "GEAR/Google — IA e Agentes Inteligentes",
          "MBA em Gestão Empresarial",
          "MBA em Gestão Estratégica",
          "Farmácia — UNIFRAN",
        ],
} as const;
