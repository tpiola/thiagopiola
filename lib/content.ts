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
  headline: "Farmacêutico com engenharia de IA.",
  subheadline: "Preparado para qualquer mercado.",
  lead: "Base farmacêutica sólida somada a Engenharia de Inteligência Artificial — vendas, gestão, treinamento, automação e produtos digitais com método e resultado mensurável.",
  ctaPrimary: "Falar comigo",
  ctaSecondary: "Ver atuação",
} as const;

export const proposta = {
  title: "Do varejo à indústria. Da gestão à tecnologia.",
  lead: "Atuo onde negócio, pessoas e sistemas se encontram — sem limitar a carreira a um único setor.",
  mercados: [
    {
      tag: "Saúde & negócios",
      title: "Farmácia, indústria e varejo",
      items: [
        "Drogaria e operações comerciais",
        "Treinamento, mentorias e gestão de pessoas",
        "Vendas consultivas e responsabilidade técnica",
      ],
    },
    {
      tag: "Tecnologia",
      title: "IA, automação e produto digital",
      items: [
        "Sites, aplicativos e integrações",
        "Agentes de IA e fluxos automatizados",
        "Métodos que geram produtividade, economia e velocidade",
      ],
    },
  ],
} as const;

export const competencias = {
  title: "Competências que atravessam setores",
  lead: "Experiência prática em liderança comercial e construção de soluções com IA — sempre com ética profissional e foco em entrega.",
  skills: [
    {
      title: "Vendas & relacionamento",
      desc: "Conversão com estratégia, escuta e consistência comercial.",
    },
    {
      title: "Treinamento & mentoria",
      desc: "Capacitação de equipes com método e acompanhamento.",
    },
    {
      title: "Gestão de pessoas",
      desc: "Liderança operacional e desenvolvimento de times.",
    },
    {
      title: "Engenharia de IA",
      desc: "Agentes, modelos aplicados e arquitetura de soluções.",
    },
    {
      title: "Automação",
      desc: "Processos digitais que reduzem custo e retrabalho.",
    },
    {
      title: "Produto digital",
      desc: "Sites, apps e sistemas orientados a resultado.",
    },
  ],
  metrics: [
    { value: "15+", label: "Anos de experiência" },
    { value: "2", label: "Mercados integrados" },
    { value: "360°", label: "Visão negócio + tech" },
  ],
} as const;

export const tecnologia = {
  title: "Stack e entregas técnicas",
  lead: "Ferramentas e práticas usadas em projetos reais — do atendimento automatizado ao produto publicado.",
  items: [
    { title: "Agentes & LLMs", desc: "Assistentes, qualificação e copilots sob medida" },
    { title: "Automação n8n", desc: "Orquestração de fluxos e integrações" },
    { title: "Next.js & React", desc: "Sites e aplicações de alta performance" },
    { title: "Dados & dashboards", desc: "Métricas para decisão rápida" },
    { title: "CRM & integrações", desc: "Sistemas conectados ponta a ponta" },
    { title: "Métodos de produtividade", desc: "Playbooks que aceleram operação" },
  ],
} as const;

export const trajetoria = {
  title: "Trajetória",
  lead: "Formação contínua e atuação em ambientes de alta exigência.",
  career: [
    {
      company: "Droga Raia",
      period: "Atual",
      role: "Farmacêutico RT",
      desc: "RT, vendas, treinamento e gestão de equipe",
    },
    {
      company: "Drogaria Americana",
      period: "2013–2014",
      role: "Farmacêutico RT",
      desc: "Operação e atendimento farmacêutico",
    },
    {
      company: "Farma Cruz",
      period: "2012–2013",
      role: "Farmacêutico RT",
      desc: "Rotina técnica e compliance",
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
