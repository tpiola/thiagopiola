/** Conteúdo — funil de vendas para RH de alto ticket */

export const site = {
  name: "Thiago Biasoli Garcia Piola",
  shortName: "Thiago Piola",
  credential: "Farmacêutico CRF/SP 58.519",
  location: "Brasil",
  phone: "(16) 99233-3344",
  phoneHref: "tel:5516992333344",
  email: "contato@thiagopiola.com.br",
  whatsapp: "https://wa.me/5516992333344",
  whatsappWithMessage:
    "https://wa.me/5516992333344?text=Vi%20seu%20site%2C%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20para%20conversar.",
  reidasVendas: "https://www.reidasvendas.com.br",
} as const;

export const nav = [
  { href: "#proposta", label: "Proposta" },
  { href: "#competencias", label: "Competências" },
  { href: "#tecnologia", label: "Tecnologia" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#contato", label: "Contato" },
] as const;

export const hero = {
  headline: "Thiago Biasoli\nGarcia Piola.",
  sub: "Farmacêutico · Engenheiro de IA · Gestor Estratégico",
  lead: "15 anos na ponta da farmácia. Formação de equipes. Resultados em vendas. E agora, Inteligência Artificial.",
  ctaSecondary: "Falar agora",
} as const;

export type StatItem = {
  value: string;
  label: string;
  animate?: boolean;
  target?: number;
  suffix?: string;
};

export const stats: StatItem[] = [
  { value: "15+", label: "anos de operação farmacêutica", animate: true, target: 15, suffix: "+" },
  { value: "500+", label: "profissionais treinados em drogaria e vendas de alta performance", animate: true, target: 500, suffix: "+" },
  { value: "Competência Comprovada", label: "dois domínios de excelência num único profissional" },
];

/** NLP word-by-word reveal */
export const textReveal = {
  paragraph:
    "Compliance. Liderança. IA aplicada. O raro profissional que entrega os três — com histórico comprovado.",
} as const;

export const bento = {
  title: "Quatro frentes. Um profissional.",
  lead: "Resultado. Ética. Formação. Não apenas entrega — transforma equipes inteiras.",
  cards: [
    {
      tag: "Engenharia de IA",
      title: "Sistemas inteligentes por quem opera o negócio",
      desc: "Agentes de IA, automações n8n e integrações ponta a ponta. Código que entende o contexto farmacêutico.",
      size: "large",
    },
    {
      tag: "Eficiência",
      title: "Menos custo. Menos retrabalho.",
      desc: "Automação de rotinas críticas em ambientes regulados.",
      size: "small",
      metrics: [
        { value: "68%", label: "redução operacional" },
        { value: "4×", label: "velocidade" },
      ],
    },
    {
      tag: "Liderança",
      title: "Times de alta performance",
      desc: "Formação, mentorias e cultura de excelência. Ética em cada equipe liderada.",
      size: "small",
    },
    {
      tag: "Vendas",
      title: "Relacionamento executivo e conversão",
      desc: "Vendas consultivas em saúde. Negociação complexa e entrega consistente de metas.",
      size: "large",
    },
  ],
} as const;

export const competencias = {
  title: "Um perfil que você não vai encontrar de novo.",
  lead: "Farmácia clínica, gestão de equipes, vendas de alta performance e Engenharia de IA. Tudo junto. No Brasil, é raro. Aqui, é comprovado.",
  skills: [
    { title: "Engenharia de IA", desc: "Agentes, LLMs e automações em contexto regulado." },
    { title: "Responsabilidade técnica", desc: "Compliance, ANVISA e operações de alto volume." },
    { title: "Gestão comercial", desc: "Liderança de times, metas e formação de pessoas." },
    { title: "Automação n8n", desc: "Fluxos inteligentes e integração de sistemas críticos." },
    { title: "Vendas B2B", desc: "Negociação de alto valor e relacionamento executivo." },
    { title: "Produto digital", desc: "Sites, apps e sistemas para saúde e indústria." },
  ],
  metrics: [
    { value: "15+", label: "Anos de experiência" },
    { value: "500+", label: "Profissionais treinados" },
    { value: "Zero", label: "Substituto no mercado" },
  ],
} as const;

export const tecnologia = {
  title: "Stack em produção.",
  lead: "Não teoria. Entregas reais.",
  items: [
    { title: "Agentes & LLMs", desc: "Claude, GPT, Gemini — sob medida para saúde e indústria" },
    { title: "Automação n8n", desc: "Orquestração de fluxos e processos críticos" },
    { title: "Next.js & React", desc: "Aplicações de alta performance e portais institucionais" },
    { title: "Dados & dashboards", desc: "Métricas para decisão em ambientes regulados" },
    { title: "CRM & integrações", desc: "Pipelines conectados do contato à conversão" },
    { title: "Compliance técnico", desc: "Processos auditáveis para ambientes ANVISA" },
  ],
} as const;

export const trajetoria = {
  title: "Experiência + IA = Escala sem limite",
  lead: "Cada posição foi deliberada. A IA foi o catalisador.",
  pivotLabel: "O ponto de virada",
  pivotText: "Pós-graduação em Engenharia de IA — onde 15 anos de farmácia encontraram sistemas do futuro.",
  career: [
    {
      company: "Droga Raia",
      period: "Atual",
      role: "Farmacêutico Responsável Técnico",
      desc: "A maior rede farmacêutica do Brasil. Vendas, liderança e compliance em escala.",
      tag: "Presente",
    },
    {
      company: "Rei das Vendas",
      period: "2024–Atual",
      role: "Founder",
      desc: "Plataforma de treinamento e vendas de alta performance para o mercado farmacêutico.",
      tag: "Empreendimento",
    },
    {
      company: "Drogaria Americana",
      period: "2013–2014",
      role: "Farmacêutico RT",
      desc: "Operação comercial de alto volume. Resultados sob pressão.",
      tag: "Virada comercial",
    },
    {
      company: "Farma Cruz",
      period: "2012–2013",
      role: "Farmacêutico RT",
      desc: "Compliance regulatório e controle de medicamentos controlados.",
      tag: "Fundação técnica",
    },
    {
      company: "Hospital Unimed",
      period: "2008–2011",
      role: "Aux. de Farmácia Hospitalar",
      desc: "Farmácia hospitalar crítica. Atenção aos detalhes como hábito de vida.",
      tag: "O começo",
    },
  ],
  education: [
    "Pós-graduação em Engenharia de Inteligência Artificial",
    "GEAR/Google — IA Aplicada e Agentes Inteligentes",
    "MBA em Gestão Empresarial",
    "MBA em Gestão Estratégica",
    "Farmácia — UNIFRAN",
  ],
} as const;

export const footerBio =
  "Farmacêutico generalista, estrategista e engenheiro de IA. Atuação em saúde, drogaria, farmácia hospitalar e tecnologia — com foco em resultado real, com métodos Sprint e Scrum.";

/** Sorted alphabetically by label */
export const socialLinks = [
  { href: "https://bsky.app/profile/thiagopiola.bsky.social", label: "Bluesky" },
  { href: "https://www.facebook.com/thiagopiolaoficial/", label: "Facebook" },
  { href: "https://github.com/tpiola", label: "GitHub" },
  { href: "https://me.developers.google.com/u/105476544026751993130", label: "Google" },
  { href: "https://www.instagram.com/thiagopiolaoficial/", label: "Instagram" },
  { href: "https://www.linkedin.com/in/thiago-piola/", label: "LinkedIn" },
  { href: "https://thiagopiola.notion.site/", label: "Notion" },
  { href: "https://www.reddit.com/user/Mental_Individual641/", label: "Reddit" },
  { href: "https://t.me/m/pGzbdmS2ZWRh", label: "Telegram" },
  { href: "https://www.tiktok.com/@tpiola", label: "TikTok" },
  { href: "https://x.com/ThiagoPiola07", label: "X" },
] as const;
