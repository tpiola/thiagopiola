/** Conteúdo centralizado — thiagopiola.com.br */

const whatsappText = encodeURIComponent(
  "Olá, Thiago. Vim pelo seu site e quero saber mais sobre sua trajetória.",
);

export const site = {
  name: "Thiago Biasoli Garcia Piola",
  shortName: "Thiago Piola",
  credential: "Farmacêutico CRF/SP 58.519",
  location: "Franca, SP, Brasil",
  geo: { locality: "Franca", region: "SP", country: "BR" },
  phone: "(16) 99233-3344",
  phoneHref: "tel:5516992333344",
  email: "contato@thiagopiola.com.br",
  whatsapp: `https://wa.me/5516992333344?text=${whatsappText}`,
  linkedin: "https://www.linkedin.com/in/thiago-piola/",
  x: "https://x.com/ThiagoPiola07",
  crfConsultaUrl: "https://www.crfsp.org.br",
  cvUrl: "https://thiagopiola.notion.site/",
  cvLabel: "Ver Currículo Completo",
  url: "https://www.thiagopiola.com.br",
  reidasvendas: "https://www.reidasvendas.com.br",
} as const;

export const footerTagline =
  "Farmacêutico CRF/SP 58.519. 15 anos formando equipes de alta performance — do hospital à maior rede de farmácias do Brasil.";

export const socialLinks = [
  { href: "https://github.com/tpiola", label: "GitHub" },
  { href: "https://me.developers.google.com/u/105476544026751993130", label: "Google Developers" },
  { href: site.linkedin, label: "LinkedIn" },
  { href: "https://thiagopiola.notion.site/", label: "Notion" },
  { href: "https://www.reddit.com/user/Mental_Individual641/", label: "Reddit" },
  { href: "https://t.me/m/pGzbdmS2ZWRh", label: "Telegram" },
  { href: "https://www.tiktok.com/@tpiola", label: "TikTok" },
  { href: site.x, label: "X" },
] as const;

export const socialLinksProfessional = socialLinks.filter((l) =>
  ["GitHub", "Google Developers", "LinkedIn", "Notion", "X"].includes(l.label));

export const socialLinksCommunity = socialLinks.filter((l) =>
  ["Reddit", "Telegram", "TikTok"].includes(l.label));

export const nav = [
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#missao", label: "Missão" },
  { href: "#contato", label: "Contato" },
] as const;

export const hero = {
  titleLine1: "Thiago Biasoli",
  titleLine2: "Garcia Piola",
  badge: "Farmacêutico CRF/SP 58.519 · Franca, SP",
  subtitleBefore: "Treinamento",
  subtitleAfter: "Alta Performance",
  lead: "Farmacêutico Notável RD Saúde 2025 — 1 entre 14.000. 15 anos formando equipes de excelência na maior rede de farmácias do Brasil. Especialista em treinamento, vendas consultivas e gestão de alta performance no setor farmacêutico.",
  ctaWhatsapp: "Vamos conversar",
  ctaLinkedin: "LinkedIn",
} as const;

export const heroEn = {
  titleLine1: "Thiago Biasoli",
  titleLine2: "Garcia Piola",
  subtitleBefore: "Training",
  subtitleAfter: "High Performance",
  lead: "Notable Pharmacist RD Saúde 2025 — 1 in 14,000. 15 years building high-performance teams at Brazil's largest pharmacy chain. Expert in training, consultative sales and performance management in the pharmaceutical sector.",
} as const;

export const provasEntrega = [
  { value: "15", label: "Anos em farmácia", detail: "Do hospital à maior rede do Brasil" },
  { value: "1/14.000", label: "Farmacêutico Notável RD Saúde 2025", detail: "Mérito inédito em Franca/SP" },
  { value: "CRF/SP", label: "58.519 — Registro ativo", detail: "Verificável · Droga Raia RT" },
  { value: "Ativa", label: "Plataforma Rei das Vendas", detail: "Treinamento comercial farmacêutico" },
] as const;

export const trustBar = [
  { label: "CRF/SP 58.519", detail: "Registro ativo e verificável", href: "https://www.crfsp.org.br" },
  { label: "Droga Raia — Franca, SP", detail: "Farmacêutico RT · maior rede do Brasil", href: undefined },
  { label: "Google GEAR — IA Aplicada", detail: "Formação Google em agentes inteligentes", href: "https://me.developers.google.com/u/105476544026751993130" },
] as const;

export const especialidades = [
  {
    icon: "users",
    title: "Treinamento & Desenvolvimento de Equipes",
    desc: "Formação contínua de equipes multiprofissionais com foco em atendimento, indicação ativa e compliance. Metodologia testada em ambiente de alta exigência e metas agressivas.",
  },
  {
    icon: "trending-up",
    title: "Gestão de Alta Performance",
    desc: "Acompanhamento de indicadores, cultura de metas e desenvolvimento de talentos. Experiência na gestão de equipes em loja referência da maior rede farmacêutica do Brasil.",
  },
  {
    icon: "message-circle",
    title: "Vendas Consultivas & Indicação Ativa",
    desc: "Técnicas de vendas éticas aplicadas ao setor farmacêutico: anamnese rápida, indicação por necessidade real, fidelização e aumento de ticket médio por valor, não por pressão.",
  },
  {
    icon: "shield-check",
    title: "Compliance ANVISA & Regulatório",
    desc: "Histórico sem autuações. Gestão de psicotrópicos, controlados, cadeia fria e rastreabilidade SNGPC. Alinhamento contínuo com RDCs e boas práticas de farmácia.",
  },
  {
    icon: "zap",
    title: "IA Aplicada & Inteligência Comercial",
    desc: "Formado pelo Google GEAR em agentes inteligentes e IA aplicada. Uso de ferramentas digitais para análise de dados, melhoria de processos e comunicação científica.",
  },
  {
    icon: "award",
    title: "Relacionamento com Prescritores",
    desc: "Experiência em farmácia hospitalar (Unimed) e varejo de alta prescrição. Entendimento profundo do ciclo prescritor-dispensador — a base do relacionamento médico-indústria.",
  },
] as const;

export const trajetoria = {
  title: "Trajetória",
  lead: "15 anos de experiência verificável em farmácia. Do hospital ao varejo de alta performance.",
  career: [
    {
      company: "Droga Raia — Filial Franca, SP",
      period: "Atual",
      role: "Farmacêutico Responsável Técnico de Filial",
      desc: "Liderança técnica e comercial em loja referência da maior rede de farmácias do Brasil",
      impacts: [
        "RT pela filial de Franca/SP — conformidade CRF/SP e ANVISA mantida continuamente",
        "Responsável pelo treinamento contínuo da equipe em atendimento farmacêutico, vendas e indicação ativa",
        "Premiado Farmacêutico Notável RD Saúde 2025 — 1 entre 14.000 profissionais, mérito inédito em Franca/SP",
        "Gestão de indicadores de giro, ruptura, margem e satisfação do cliente",
      ],
    },
    {
      company: "Drogaria Americana",
      period: "2013–2014",
      role: "Farmacêutico RT",
      desc: "Gestão técnica e treinamento de equipe em farmácia de bairro",
      impacts: [
        "Rotina de atendimento ao público com foco em adesão ao tratamento",
        "Treinamento da equipe em protocolos de dispensação e atendimento",
        "Participação em ações comerciais com a indústria farmacêutica",
      ],
    },
    {
      company: "Farma Cruz",
      period: "2012–2013",
      role: "Farmacêutico RT",
      desc: "Compliance regulatório e padronização de processos",
      impacts: [
        "Controle documental e adequação às RDCs e boas práticas de farmácia",
        "Padronização de processos de dispensação com rastreabilidade",
        "Treinamento da equipe em conformidade e atendimento técnico",
      ],
    },
    {
      company: "Hospital Unimed",
      period: "2008–2011",
      role: "Auxiliar de Farmácia — Farmácia Hospitalar",
      desc: "Farmácia clínica hospitalar em ambiente de alta complexidade",
      impacts: [
        "Suporte a equipe multidisciplinar em farmácia hospitalar",
        "Logística de medicamentos controlados e de alto custo",
        "Base clínica sólida para entendimento do ciclo prescritor",
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

export const projetos = {
  title: "Projetos",
  lead: "",
  items: [] as { title: string; problem: string; result: string; stack: string[]; href: string }[],
} as const;

export const missao = {
  title: "Por que a indústria farmacêutica?",
  lead: "Uma missão de vida que pede um campo maior.",
  texto: "Escolhi a farmácia porque acredito que cuidar da saúde das pessoas é o que há de mais humano e importante. Nesses 15 anos, treinei equipes, desenvolvi profissionais e entreguei resultados — sempre com esse propósito. Hoje, busco um novo desafio que me permita ampliar esse impacto: na indústria farmacêutica, onde uma boa decisão, um bom produto, um bom treinamento de representantes pode beneficiar milhares de vidas de uma vez.",
  detalhe: "Não é sobre deixar algo para trás. É sobre levar o que construí para um campo onde posso fazer ainda mais.",
  cta: "Vamos conversar sobre como posso contribuir?",
} as const;

export const reiDasVendas = {
  label: "Founder & CEO",
  title: "Rei das Vendas",
  desc: "Plataforma de treinamento comercial para o setor farmacêutico. Metodologia desenvolvida com base em anos de experiência real no balcão — treinando equipes para converter com ética e excelência.",
  href: "https://www.reidasvendas.com.br",
  badge: "Prova de autoridade em treinamento farmacêutico",
} as const;

export const faqItems = [
  {
    q: "Qual é a especialidade principal de Thiago Piola?",
    a: "Treinamento de equipes de alta performance no setor farmacêutico. Em 15 anos de carreira, desenvolveu e aplicou programas contínuos de capacitação em atendimento, vendas consultivas e compliance, com reconhecimento como Farmacêutico Notável RD Saúde 2025 — 1 entre 14.000 profissionais.",
  },
  {
    q: "Thiago Piola tem experiência com a indústria farmacêutica?",
    a: "Sim. Além de 15 anos no varejo farmacêutico (incluindo hospital, drogarias independentes e a maior rede do Brasil), Thiago participou de ações comerciais com a indústria, possui formação em IA aplicada (Google GEAR) e é Founder da Rei das Vendas, plataforma de treinamento comercial para o setor. Disponível para Franca/SP, Ribeirão Preto e região.",
  },
  {
    q: "Como entrar em contato com Thiago Piola para oportunidades?",
    a: "Pelo LinkedIn (www.linkedin.com/in/thiago-piola), WhatsApp (16) 99233-3344 ou e-mail contato@thiagopiola.com.br. Resposta garantida em até 24 horas úteis.",
  },
  {
    q: "O que é o Rei das Vendas?",
    a: "Plataforma de treinamento comercial para equipes do setor farmacêutico, fundada por Thiago Piola. Baseada em anos de experiência real no balcão, a metodologia foi desenvolvida para capacitar equipes em vendas éticas, indicação ativa e fidelização de clientes. Acesse reidasvendas.com.br.",
  },
  {
    q: "Qual é a formação acadêmica de Thiago Piola?",
    a: "Farmacêutico pela UNIFRAN, com MBA em Gestão Empresarial, MBA em Gestão Estratégica, certificação Google GEAR em IA e Agentes Inteligentes (concluído), e Pós-graduação em Engenharia de IA (em andamento).",
  },
] as const;
