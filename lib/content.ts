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
    cvLabel: "Ver Currículo",
    url: "https://www.thiagopiola.com.br",
    reidasvendas: "https://www.reidasvendas.com.br",
    industriaUrl: "https://www.thiagopiola.com.br/industria",
} as const;

export const footerTagline =
    "Farmacêutico CRF/SP 58.519. 15 anos transformando conhecimento em resultado — do hospital à indústria.";

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
  { href: "/industria", label: "Indústria" },
  { href: "#contato", label: "Contato" },
] as const;

export const hero = {
    title: "Thiago Biasoli\nGarcia Piola",
    titleLine1: "Thiago Biasoli",
    titleLine2: "Garcia Piola",
    subtitleBefore: "Metas Batidas",
    subtitleAfter: "Vidas Transformadas",
    lead: "Farmacêutico Notável RD Saúde 2025 — 1 entre 14.000. Mérito inédito em Franca/SP. Da linha de frente da drogaria para a indústria, com IA, automação e inteligência comercial que provam resultado.",
    ctaWhatsapp: "Vamos conversar",
    ctaEmail: "E-mail",
    ctaLinkedin: "LinkedIn",
    ctaIndustria: "Currículo completo →",
} as const;

export const provasEntrega = [
    { value: "1/14.000", label: "Farmacêutico Notável RD Saúde 2025", detail: "Mérito inédito em Franca/SP" },
    { value: "15", label: "Anos de operação", detail: "CRF/SP 58.519 · RT Droga Raia" },
    { value: "100%", label: "Rework eliminado", detail: "Automação n8n + IA" },
    { value: "Ativa", label: "Plataforma Rei das Vendas", detail: "Treinamento comercial escalável" },
] as const;

export const trustBar = [
  { label: "CRF/SP 58.519", detail: "Registro ativo e verificável", href: "https://www.crfsp.org.br" },
  { label: "Droga Raia — Franca, SP", detail: "Farmacêutico RT de filial", href: undefined },
  { label: "Pós IA + Google GEAR", detail: "Engenharia de IA aplicada", href: "https://me.developers.google.com/u/105476544026751993130" },
] as const;

export const projetos = {
    title: "Entregas em produção.",
    lead: "Projetos reais com stack verificável.",
    items: [
      { title: "Automação de qualificação B2B", problem: "Leads sem triagem consistente entre canais.", result: "Fluxos n8n + CRM com LLM — triagem automática, zero retrabalho.", stack: ["n8n", "LLM", "CRM"], href: "https://thiagopiola.notion.site/" },
      { title: "Agentes inteligentes (GEAR/Google)", problem: "Operação repetitiva consumindo tempo de gestão.", result: "Arquitetura Sprint/Scrum — atendimento escalável.", stack: ["Google AI", "Agentes", "Scrum"], href: "https://me.developers.google.com/u/105476544026751993130" },
      { title: "Rei das Vendas", problem: "Equipes sem método de conversão estruturado.", result: "Plataforma de treinamento comercial para o setor farmacêutico.", stack: ["Treinamento", "Vendas", "Farmácia"], href: "https://www.reidasvendas.com.br" },
    ],
} as const;

export const trajetoria = {
    title: "Trajetória",
    lead: "Experiência verificável em ambientes de alta exigência.",
    career: [
      { company: "Droga Raia — Filial Franca, SP", period: "Atual", role: "Farmacêutico RT de Filial", desc: "RT, vendas, treinamento e gestão", impacts: ["Farmacêutico RT pela filial de Franca, SP", "Treinamento de equipe com compliance CRF/SP"] },
      { company: "Drogaria Americana", period: "2013–2014", role: "Farmacêutico RT", desc: "Operação e atendimento", impacts: ["Gestão de rotina técnica", "Suporte a indicadores operacionais"] },
      { company: "Farma Cruz", period: "2012–2013", role: "Farmacêutico RT", desc: "Compliance e rotina técnica", impacts: ["Controle documental e conformidade", "Padronização de dispensação"] },
      { company: "Hospital Unimed", period: "2008–2011", role: "Aux. de Farmácia", desc: "Farmácia hospitalar", impacts: ["Suporte à farmácia clínica", "Logística de estoque crítico"] },
    ],
    education: [
      { course: "Pós-graduação em Engenharia de IA", status: "Em andamento" },
      { course: "GEAR/Google — IA e Agentes Inteligentes", status: "Concluído" },
      { course: "MBA em Gestão Empresarial", status: "Concluído" },
      { course: "MBA em Gestão Estratégica", status: "Concluído" },
      { course: "Farmácia — UNIFRAN", status: "Concluído" },
    ],
} as const;

export const heroEn = {
    title: "Thiago Biasoli\nGarcia Piola",
    titleLine1: "Thiago Biasoli",
    titleLine2: "Garcia Piola",
    subtitleBefore: "Targets Hit",
    subtitleAfter: "Lives Transformed",
    lead: "Notable Pharmacist RD Saúde 2025 — 1 in 14,000. First-ever in Franca/SP. From the front lines of pharmacy to the industry, with AI, automation and business intelligence that deliver results.",
} as const;
