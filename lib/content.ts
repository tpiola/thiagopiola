/** Conteúdo centralizado — thiagopiola.com.br
 *  Copy com PNL, hipnose, autoridade e gatilhos de conversão.
 *  Tom: mestre respeitado, não vendedor.
 */

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
  "Farmacêutico CRF/SP 58.519 · 15 anos conectando ciência, execução comercial e performance em operação farmacêutica.";

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

/* ═══════════════════════════════════════════
   HERO COPY — PNL & Hipnose
   Gatilhos: autoridade, escassez, prova social,
   dor → desejo → ação
   ═══════════════════════════════════════════ */
export const hero = {
  titleLine1: "Você precisa de um",
  titleLine2: "Farmacêutico Executivo",
  subtitleBefore: "15 anos de estrada.",
  subtitleAfter: "Resultado que se vê no sell-out.",
  lead: "Enquanto você lê isto, sua operação está perdendo receita que um profissional certo poderia recuperar em semanas. Não é sobre currículo bonito. É sobre execução que converte. Sou o farmacêutico que enxerga o que ninguém vê — e transforma em resultado no PDV.",
  ctaWhatsapp: "Falar com Thiago",
  ctaEmail: "E-mail",
  ctaLinkedin: "LinkedIn",
  ctaIndustria: "Dossiê Executivo →",
  microCta: "Resposta em até 2 horas · Sem jogada de vendas",
} as const;

export const heroEn = {
  titleLine1: "You need a",
  titleLine2: "Pharmaceutical Executive",
  subtitleBefore: "15 years in the field.",
  subtitleAfter: "Results you can measure at POS.",
  lead: "While you read this, your operation is losing revenue that the right professional could recover in weeks. This isn't about a pretty resume. It's about execution that converts. I'm the pharmacist who sees what no one else sees — and turns it into results at the point of sale.",
  ctaWhatsapp: "Talk to Thiago",
  ctaEmail: "Email",
  ctaLinkedin: "LinkedIn",
  ctaIndustria: "Executive Dossier →",
  microCta: "Response within 2 hours · No sales pitch",
} as const;

export const provasEntrega = [
  { value: "1/14.000", label: "Farmacêutico Notável RD Saúde 2025", detail: "Reconhecimento nacional em operação farmacêutica — top 0.007%" },
  { value: "15", label: "Anos em campo", detail: "Execução técnica, comercial e regulatória ininterrupta" },
  { value: "360°", label: "Visão de operação", detail: "Da farmácia clínica ao sell-out no PDV" },
  { value: "Ativa", label: "Plataforma Rei das Vendas", detail: "Método comercial proprietário aplicado ao setor farma" },
] as const;

export const trustBar = [
  { label: "CRF/SP 58.519", detail: "Registro ativo e verificável — consulte", href: "https://www.crfsp.org.br" },
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
