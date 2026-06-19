/** Conteúdo centralizado — thiagopiola.com.br */

const whatsappText = encodeURIComponent(
  "Olá, Thiago. Vi seu portfólio e quero conversar sobre resultados comerciais e estratégia para operação farmacêutica.",
  );

export const site = {
    name: "Thiago Biasoli Garcia Piola",
    shortName: "Thiago Piola",
    credential: "Farmacêutico CRF/SP 58.519",
    location: "Franca, SP, Brasil",
    geo: { locality: "Franca", region: "SP", country: "BR" },
    phone: "(16) 99233-3344",
    phoneHref: "tel:5516992333344",
    email: "thiagoopiola@gmail.com",
    whatsapp: `https://wa.me/5516992333344?text=${whatsappText}`,
    linkedin: "https://www.linkedin.com/in/thiago-piolaoficial",
    x: "https://x.com/thiago_piola",
    crfConsultaUrl: "https://www.crfsp.org.br",
    cvUrl: "https://thiagopiola.notion.site/",
    cvLabel: "Ver Currículo",
    url: "https://www.thiagopiola.com.br",
    reidasvendas: "https://www.reidasvendas.com.br",
    industriaUrl: "https://www.thiagopiola.com.br/industria",
    facebook: "https://www.facebook.com/thiagoopiolaoficial",
    instagram: "https://www.instagram.com/othiagopiolaoficial",
} as const;

export const footerTagline =
  "Farmacêutico CRF/SP 58.519. 15 anos conectando ciência, execução comercial e performance em operação farmacêutica.";

export const socialLinks = [
  { href: "https://github.com/tpiola", label: "GitHub" },
  { href: "https://me.developers.google.com/u/105476544026751993130", label: "Google Developers" },
  { href: site.linkedin, label: "LinkedIn" },
  { href: "https://thiagopiola.notion.site/", label: "Notion" },
  { href: site.x, label: "X" },
  { href: site.instagram, label: "Instagram" },
  { href: site.facebook, label: "Facebook" },
  { href: "https://www.tiktok.com/@tpiola", label: "TikTok" },
  { href: "https://t.me/m/pGzbdmS2ZWRh", label: "Telegram" },
  { href: "https://www.reddit.com/user/Mental_Individual641/", label: "Reddit" },
] as const;

export const socialLinksProfessional = socialLinks.filter((l) =>
    ["GitHub", "Google Developers", "LinkedIn", "Notion", "X"].includes(l.label));

export const socialLinksCommunity = socialLinks.filter((l) =>
    ["Instagram", "Facebook", "TikTok", "Telegram", "Reddit"].includes(l.label));

export const nav = [
  { href: "#trajetoria", label: "Trajetória" },
  { href: "/industria", label: "Indústria" },
  { href: "#contato", label: "Contato" },
] as const;

export const hero = {
    title: "Thiago Biasoli\nGarcia Piola",
    titleLine1: "Thiago Biasoli",
    titleLine2: "Garcia Piola",
    subtitleBefore: "Estrategista de Negócios",
    subtitleAfter: "Especialista em IA & Vendas",
    lead: "Líder de alta performance com visão 360° da operação farmacêutica e tecnologia. Traduzo complexidade técnica em resultados comerciais sólidos, utilizando IA e automação para escalar processos e garantir o compliance e a rentabilidade.",
    ctaWhatsapp: "Agendar Reunião",
    ctaEmail: "E-mail",
    ctaLinkedin: "LinkedIn",
    ctaIndustria: "Acessar Portfólio Estratégico →",
} as const;

export const provasEntrega = [
  { value: "1/14.000", label: "Farmacêutico Notável RD Saúde 2025", detail: "Reconhecimento nacional em operação farmacêutica" },
  { value: "15", label: "Anos em campo", detail: "Execução técnica, comercial e regulatória" },
  { value: "360°", label: "Visão de operação", detail: "Da farmácia clínica ao sell-out no PDV" },
  { value: "Ativa", label: "Plataforma Rei das Vendas", detail: "Método comercial aplicado ao setor farma" },
] as const;

export const trustBar = [
  { label: "CRF/SP 58.519", detail: "Registro ativo e verificável", href: "https://www.crfsp.org.br" },
  { label: "RD Saúde — operação de alta escala", detail: "Liderança técnica e comercial em loja referência", href: undefined },
  { label: "Pós IA + Google GEAR", detail: "Modelagem de decisão e produtividade comercial", href: "https://me.developers.google.com/u/105476544026751993130" },
] as const;

export const projetos = {
  title: "Execução com método e rastreabilidade.",
  lead: "Projetos em produção que combinam estratégia comercial, tecnologia e governança operacional.",
    items: [
      { title: "Automação de qualificação B2B", problem: "Leads sem triagem consistente entre canais.", result: "Fluxos n8n + CRM com LLM — triagem automática, zero retrabalho.", stack: ["n8n", "LLM", "CRM"], href: "https://thiagopiola.notion.site/" },
      { title: "Agentes inteligentes (GEAR/Google)", problem: "Operação repetitiva consumindo tempo de gestão.", result: "Arquitetura Sprint/Scrum — atendimento escalável.", stack: ["Google AI", "Agentes", "Scrum"], href: "https://me.developers.google.com/u/105476544026751993130" },
      { title: "Rei das Vendas", problem: "Equipes sem método de conversão estruturado.", result: "Plataforma de treinamento comercial para o setor farmacêutico.", stack: ["Treinamento", "Vendas", "Farmácia"], href: "https://www.reidasvendas.com.br" },
    ],
} as const;

export const trajetoria = {
    title: "Trajetória",
  lead: "Experiência verificável em ambientes de alta exigência, com foco em resultado, segurança e crescimento sustentável.",
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
    subtitleBefore: "Applied Science",
    subtitleAfter: "Commercial Performance",
    lead: "Notable Pharmacist at RD Saúde 2025 (1 in 14,000), with proven field execution, team leadership and data-driven commercial intelligence for the pharmaceutical market.",
    ctaWhatsapp: "Strategic call",
    ctaEmail: "Email",
    ctaLinkedin: "LinkedIn",
    ctaIndustria: "Executive dossier →",
} as const;
