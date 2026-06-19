/** Conteúdo centralizado — thiagopiola.com.br
 *  Copy profissional voltada para recrutadores da indústria farmacêutica.
 *  Tom: factual, direto, baseado em resultados e competências verificáveis.
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
  description:
    "Farmacêutico CRF/SP 58.519 com mais de uma década em operação farmacêutica na maior rede de farmácias do Brasil. Execução técnica, visão de negócio, inteligência artificial e automação.",
  url: "https://www.thiagopiola.com.br",
  reidasvendas: "https://www.reidasvendas.com.br",
  industriaUrl: "https://www.thiagopiola.com.br/industria",
  facebook: "https://www.facebook.com/thiagoopiolaoficial",
  instagram: "https://www.instagram.com/othiagopiolaoficial",
} as const;

export const footerTagline =
  "Farmacêutico CRF/SP 58.519 — Operação, tecnologia e execução comercial em saúde.";

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
   HERO — Posicionamento para recrutadores
   Tom: direto, factual, baseado em reconhecimento real
   ═══════════════════════════════════════════ */
export const hero = {
  tagline: "Farmacêutico CRF/SP 58.519 · Operação, tecnologia e execução comercial",
  description:
    "Farmacêutico CRF/SP 58.519 — mais de uma década em operação na maior rede de farmácias do Brasil, combinando técnica, negócio e tecnologia.",
  titleLine1: "Thiago Biasoli Garcia Piola",
  titleLine2: "Farmacêutico · CRF/SP 58.519 · Operação, tecnologia e execução em saúde",
  subtitleBefore: "Mais de uma década na maior rede do Brasil",
  subtitleAfter: "Técnica, comercial e regulatória com tecnologia",
  lead:
    "Farmacêutico CRF/SP 58.519 — operação, treinamento, compliance ANVISA e IA aplicada à saúde.",
  ctaWhatsapp: "",
  ctaEmail: "E-mail",
  ctaLinkedin: "Ver perfil no LinkedIn",
  ctaIndustria: "Dossiê Executivo →",
  whatsappLabel: "",
  ctaPrincipal: "Ver perfil no LinkedIn",
  ctaSecundario: "Ver trajetória profissional",
  microCta: "CRF/SP 58.519 · Perfil verificado · Contato direto",
} as const;

export const heroEn = {
  tagline: "Pharmacist CRF/SP 58.519 · Operations, technology and commercial execution",
  description:
    "Pharmacist CRF/SP 58.519 — over a decade at Brazil's largest pharmacy chain, combining technical, business and technology.",
  titleLine1: "Thiago Biasoli Garcia Piola",
  titleLine2: "Pharmacist · CRF/SP 58.519 · Operations, technology and execution in healthcare",
  subtitleBefore: "Over a decade at Brazil's largest chain",
  subtitleAfter: "Technical, commercial and regulatory with technology",
  lead:
    "Pharmacist CRF/SP 58.519 — operations, training, ANVISA compliance and AI applied to healthcare.",
  ctaWhatsapp: "",
  ctaEmail: "Email",
  ctaLinkedin: "View LinkedIn profile",
  ctaIndustria: "Executive Dossier →",
  whatsappLabel: "",
  ctaPrincipal: "View LinkedIn profile",
  ctaSecundario: "View career journey",
  microCta: "CRF/SP 58.519 · Verified profile · Direct contact",
} as const;

export const provasEntrega = [
  { value: "10+", label: "Anos em operação farmacêutica", detail: "Grande rede — RT, treinamento, compliance ANVISA e execução comercial" },
  { value: "360°", label: "Visão integrada do negócio", detail: "Farmácia clínica ao sell-out no PDV — técnica, regulatória e comercial" },
  { value: "Ativa", label: "Plataforma Rei das Vendas", detail: "Treinamento comercial proprietário aplicado ao setor farmacêutico" },
] as const;

export const trustBar = [
  { label: "CRF/SP 58.519", detail: "Registro ativo e verificável — consulte no site do Conselho", href: "https://www.crfsp.org.br" },
  { label: "MBA + Pós em Engenharia de IA + GEAR/Google", detail: "Formação multidisciplinar: gestão, tecnologia e inteligência artificial", href: "https://me.developers.google.com/u/105476544026751993130" },
] as const;

export const projetos = {
  title: "Projetos em produção com impacto real.",
  lead: "Soluções em operação que combinam estratégia comercial, tecnologia e governança operacional.",
  items: [
    { title: "Automação de qualificação B2B", problem: "Leads sem triagem consistente entre canais.", result: "Fluxos n8n + CRM com LLM — triagem automática, zero retrabalho.", stack: ["n8n", "LLM", "CRM"], href: "https://thiagopiola.notion.site/" },
    { title: "Agentes inteligentes (GEAR/Google)", problem: "Operação repetitiva consumindo tempo de gestão.", result: "Arquitetura Sprint/Scrum — atendimento escalável com IA.", stack: ["Google AI", "Agentes", "Scrum"], href: "https://me.developers.google.com/u/105476544026751993130" },
    { title: "Rei das Vendas", problem: "Equipes sem método de conversão estruturado.", result: "Plataforma de treinamento comercial para o setor farmacêutico.", stack: ["Treinamento", "Vendas", "Farmácia"], href: "https://www.reidasvendas.com.br" },
  ],
} as const;

export const trajetoria = {
  title: "Trajetória",
  lead: "Experiência verificável em ambientes de alta exigência. Resultado, segurança regulatória e crescimento sustentável.",
  career: [
    { company: "Droga Raia (RD Saúde) — Filial Franca, SP", period: "Atual", role: "Farmacêutico RT de Filial", desc: "Responsável Técnico — vendas, treinamento, compliance ANVISA e gestão de equipe", impacts: ["Treinamento de equipe com compliance CRF/SP e foco em resultado comercial"] },
    { company: "Drogaria Americana", period: "2013–2014", role: "Farmacêutico RT", desc: "Operação, atendimento e gestão de rotina técnica", impacts: ["Gestão de rotina técnica e indicadores operacionais", "Atendimento e dispensação com conformidade regulatória"] },
    { company: "Farma Cruz", period: "2012–2013", role: "Farmacêutico RT", desc: "Compliance documental e rotina técnica", impacts: ["Controle documental e conformidade ANVISA", "Padronização de processos de dispensação"] },
    { company: "Hospital Unimed", period: "2008–2011", role: "Aux. de Farmácia", desc: "Farmácia hospitalar — logística e suporte clínico", impacts: ["Suporte à farmácia clínica", "Logística de estoque crítico e rastreabilidade"] },
  ],
  education: [
    { course: "Pós-graduação em Engenharia de IA", status: "Em andamento" },
    { course: "GEAR/Google — IA e Agentes Inteligentes", status: "Concluído" },
    { course: "MBA em Gestão Empresarial", status: "Concluído" },
    { course: "MBA em Gestão Estratégica", status: "Concluído" },
    { course: "Farmácia — UNIFRAN", status: "Concluído" },
  ],
} as const;

/* ─── Seções direcionadas a recrutadores da indústria ─── */

export const sectionParaRecrutadores =
  "Competências que a indústria farmacêutica valoriza";

export const trajetoriaCards = [
  "Comunicação técnica com clareza — treinamento e desenvolvimento de equipes",
  "Vivência de campo — leitura de rotina, necessidades reais e canal",
  "Disciplina regulatória — compliance ANVISA e boas práticas de dispensação",
  "Treinamento e desenvolvimento — método comercial proprietário aplicado",
  "Indicadores e leitura operacional — dados para tomada de decisão",
  "Tecnologia aplicada à produtividade — IA, n8n, automação de processos",
] as const;

export const secaoIndustria =
  "Perfil preparado para a indústria farmacêutica: visão de negócio, execução em campo e tecnologia aplicada.";

export const industriaCards = [
  { titulo: "Campo e Canal", desc: "Leitura prática de rotina de drogarias, necessidades reais de pacientes e comportamento de prescritores." },
  { titulo: "Regulatório e Compliance", desc: "Disciplina documental, compliance ANVISA, BPF e boas práticas de dispensação — mais de uma década de atuação regulada." },
  { titulo: "Tecnologia e Automação", desc: "Automação de processos com n8n, agentes de IA (GEAR/Google), CRM e indicadores para decisão baseada em dados." },
  { titulo: "Treinamento e Desenvolvimento", desc: "Desenvolvimento de equipes com método comercial estruturado, comunicação clara e foco em resultado." },
] as const;
