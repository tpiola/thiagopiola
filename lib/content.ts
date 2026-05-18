/** Conteúdo — copy otimizado para RH de alto ticket no setor farmacêutico */

export const site = {
  name: "Thiago Biasoli G. Piola",
  shortName: "Thiago Piola",
  credential: "Farmacêutico CRF/SP 58.519",
  location: "Brasil",
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
  headline: "Dois perfis raros.\nUma pessoa.",
  sub: "Farmácia clínica. Engenharia de IA. Zero equivalente.",
  lead: "Esse profissional não existe em mais ninguém no mercado. Você está lendo o perfil certo.",
  ctaPrimary: "Baixar Currículo",
  ctaSecondary: "Falar agora",
} as const;

export const stats = [
  { value: "15+", label: "anos de operação farmacêutica" },
  { value: "0", label: "equivalentes no mercado" },
  { value: "2", label: "especialidades num único profissional" },
] as const;

/** NLP: visualização → confirmação → urgência */
export const textReveal = {
  paragraph:
    "Imagine ter alguém que domina compliance farmacêutico, lidera equipes comerciais com método e ainda constrói os sistemas de IA que automatizam a operação. Esse profissional existe. Está disponível. E você está lendo o perfil dele agora.",
} as const;

export const bento = {
  title: "Quatro frentes. Um profissional.",
  lead: "Enquanto outros escolhem entre saúde e tecnologia, Thiago entrega as duas — com histórico comprovado.",
  cards: [
    {
      tag: "Engenharia de IA",
      title: "Sistemas inteligentes por quem opera o negócio",
      desc: "Agentes de IA, automações n8n, aplicações Next.js e integrações ponta a ponta. Código que entende o contexto farmacêutico.",
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
      desc: "Playbooks, mentorias e acompanhamento de resultados em equipes comerciais e técnicas.",
      size: "small",
    },
    {
      tag: "Vendas",
      title: "Relacionamento executivo e conversão",
      desc: "Vendas consultivas em saúde. Escuta ativa, negociação complexa e entrega consistente de metas.",
      size: "large",
    },
  ],
} as const;

export const competencias = {
  title: "O diferencial que as vagas de alto ticket exigem.",
  lead: "Regulação farmacêutica, liderança comercial e engenharia de IA numa única pessoa. Exatamente o que indústrias e healthtechs buscam.",
  skills: [
    { title: "Engenharia de IA", desc: "Agentes, LLMs e arquiteturas de produto em contexto regulado." },
    { title: "Responsabilidade técnica", desc: "Compliance, ANVISA e operações de alto volume." },
    { title: "Gestão comercial", desc: "Liderança de times, metas e desenvolvimento de pessoas." },
    { title: "Automação n8n", desc: "Fluxos inteligentes e integração de sistemas críticos." },
    { title: "Vendas B2B", desc: "Negociação de alto valor e relacionamento executivo." },
    { title: "Produto digital", desc: "Sites, apps e sistemas para saúde e indústria." },
  ],
  metrics: [
    { value: "15+", label: "Anos de experiência" },
    { value: "2", label: "Domínios integrados" },
    { value: "Zero", label: "Substituto no mercado" },
  ],
} as const;

export const tecnologia = {
  title: "Stack técnico usado em produção.",
  lead: "Não teoria. Entregas reais com resultado mensurável.",
  items: [
    { title: "Agentes & LLMs", desc: "Claude, GPT, Gemini — assistentes sob medida para saúde e indústria" },
    { title: "Automação n8n", desc: "Orquestração de fluxos e processos críticos automatizados" },
    { title: "Next.js & React", desc: "Aplicações de alta performance e portais institucionais" },
    { title: "Dados & dashboards", desc: "Métricas para decisão em ambientes regulados" },
    { title: "CRM & integrações", desc: "Pipelines conectados do contato à conversão" },
    { title: "Compliance técnico", desc: "Processos auditáveis para ambientes ANVISA" },
  ],
} as const;

export const trajetoria = {
  /** Hero's journey headline */
  title: "A jornada que criou esse perfil.",
  lead: "Cada posição foi uma escolha deliberada. Não uma coincidência.",
  /** Milestone intro — the transformation moment */
  pivotLabel: "O ponto de virada",
  pivotText: "Pós-graduação em Engenharia de IA — onde 15 anos de farmácia encontraram sistemas do futuro.",
  career: [
    {
      company: "Droga Raia",
      period: "Atual",
      role: "Farmacêutico Responsável Técnico",
      desc: "A maior rede farmacêutica do Brasil. Alto padrão, alta exigência — vendas, liderança e compliance em escala.",
      tag: "Presente",
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
      desc: "Farmácia hospitalar crítica. Onde atenção aos detalhes virou hábito de vida.",
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

export const socialLinks = [
  { href: "https://www.linkedin.com/in/thiago-piola/", label: "LinkedIn" },
  { href: "https://www.instagram.com/thiagopiolaoficial/", label: "Instagram" },
  { href: "https://www.facebook.com/thiagopiolaoficial/", label: "Facebook" },
  { href: "https://x.com/ThiagoPiola07", label: "X" },
] as const;
