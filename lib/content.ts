/** Conteúdo centralizado — thiagopiola.com.br
 *  Copy profissional com posicionamento técnico-comercial em saúde.
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
    "Farmacêutico com atuação técnico-comercial em saúde — operação farmacêutica, hospitalar, treinamento, vendas consultivas e tecnologia.",
  url: "https://www.thiagopiola.com.br",
  reidasvendas: "https://www.reidasvendas.com.br",
  facebook: "https://www.facebook.com/thiagoopiolaoficial",
  instagram: "https://www.instagram.com/othiagopiolaoficial",
  github: "https://github.com/tpiola",
  tiktok: "https://www.tiktok.com/@tpiola",
  telegram: "https://t.me/m/pGzbdmS2ZWRh",
  reddit: "https://www.reddit.com/user/Mental_Individual641/",
} as const;

export const footerTagline =
  "Farmacêutico CRF/SP 58.519 — Atuação técnico-comercial em saúde.";

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
  { href: "/blog", label: "Blog" },
  { href: "#contato", label: "Contato" },
] as const;

/* ═══════════════════════════════════════════
   HERO — Posicionamento técnico-comercial
   Tom: direto, factual, baseado em competências reais
   ═══════════════════════════════════════════ */
export const hero = {
  tagline: "Farmacêutico CRF/SP 58.519 · Operação técnica e comercial em saúde",
  description:
    "Farmacêutico com visão técnica, comercial e digital para operações estratégicas em saúde.",
  titleLine1: "Thiago Biasoli Garcia Piola",
  titleLine2: "Farmacêutico CRF/SP 58.519 · Franca/SP",
  subtitleBefore: "Operação farmacêutica e hospitalar",
  subtitleAfter: "Vendas consultivas e tecnologia",
  lead:
    "Farmacêutico CRF/SP 58.519 — operação, treinamento, compliance e execução comercial em saúde.",
  ctaWhatsapp: "",
  ctaEmail: "E-mail",
  ctaLinkedin: "Ver perfil no LinkedIn",
  whatsappLabel: "",
  ctaPrincipal: "Ver perfil no LinkedIn",
  ctaSecundario: "Conhecer a trajetória",
  microCta: "CRF/SP 58.519 · Perfil profissional",
} as const;

export const heroEn = {
  tagline: "Pharmacist CRF/SP 58.519 · Technical and commercial operations in healthcare",
  description:
    "Pharmacist with technical, commercial and digital vision for strategic healthcare operations.",
  titleLine1: "Thiago Biasoli Garcia Piola",
  titleLine2: "Pharmacist CRF/SP 58.519 · Franca/SP",
  subtitleBefore: "Pharmaceutical and hospital operations",
  subtitleAfter: "Consultative sales and technology",
  lead:
    "Pharmacist CRF/SP 58.519 — operations, training, compliance and commercial execution in healthcare.",
  ctaWhatsapp: "",
  ctaEmail: "Email",
  ctaLinkedin: "View LinkedIn profile",
  whatsappLabel: "",
  ctaPrincipal: "View LinkedIn profile",
  ctaSecundario: "View career journey",
  microCta: "CRF/SP 58.519 · Professional profile",
} as const;

export const provasEntrega = [
  { value: "10+", label: "Anos em operação farmacêutica", detail: "RT, treinamento, compliance e execução comercial" },
  { value: "360°", label: "Visão integrada do negócio", detail: "Técnica, regulatória e comercial — visão 360° do negócio" },
  { value: "Ativa", label: "Plataforma Rei das Vendas", detail: "Treinamento comercial proprietário com método e resultado" },
] as const;

export const trustBar = [
  { label: "CRF/SP 58.519", detail: "Registro ativo e verificável — consulte no site do Conselho", href: "https://www.crfsp.org.br" },
  { label: "MBA · Pós em Engenharia de IA · GEAR/Google", detail: "Formação multidisciplinar: gestão, tecnologia e inteligência artificial", href: "https://me.developers.google.com/u/105476544026751993130" },
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
    { company: "Operação Farmacêutica e Varejo de Saúde", period: "Atual", role: "Farmacêutico RT", desc: "Experiência em atendimento farmacêutico, orientação, vendas consultivas, indicadores e treinamento de equipes.", impacts: ["Treinamento de equipe com compliance CRF/SP e foco em resultado comercial"] },
    { company: "Drogaria Americana", period: "2013–2014", role: "Farmacêutico RT", desc: "Operação, atendimento e gestão de rotina técnica", impacts: ["Gestão de rotina técnica e indicadores operacionais", "Atendimento e dispensação com conformidade regulatória"] },
    { company: "Farma Cruz", period: "2012–2013", role: "Farmacêutico RT", desc: "Compliance documental e rotina técnica", impacts: ["Controle documental e conformidade ANVISA", "Padronização de processos de dispensação"] },
    { company: "Hospital Unimed", period: "2008–2011", role: "Aux. de Farmácia", desc: "Farmácia hospitalar — vivência com médicos, prescrições, equipe multiprofissional, fluxos assistenciais e logística de medicamentos.", impacts: ["Comunicação técnica com profissionais da saúde", "Logística de medicamentos e rastreabilidade em ambiente hospitalar", "Contato direto com prescrições e equipe multiprofissional"] },
  ],
  education: [
    { course: "Pós-graduação em Engenharia de IA", status: "Em andamento" },
    { course: "GEAR/Google — IA e Agentes Inteligentes", status: "Concluído" },
    { course: "MBA em Gestão Empresarial", status: "Concluído" },
    { course: "MBA em Gestão Estratégica", status: "Concluído" },
    { course: "Farmácia — UNIFRAN", status: "Concluído" },
  ],
} as const;

/* ─── Seções de competências profissionais ─── */

export const sectionCompetencias =
  "Competências profissionais";

export const trajetoriaCards = [
  "Comunicação técnica com clareza — treinamento e desenvolvimento de equipes",
  "Vivência de campo — leitura de rotina e necessidades reais",
  "Disciplina regulatória — compliance e boas práticas",
  "Treinamento e desenvolvimento — método comercial proprietário",
  "Indicadores e leitura operacional — dados para tomada de decisão",
  "Tecnologia aplicada à produtividade — IA, n8n, automação",
] as const;

export const secaoCompetencias =
  "Farmacêutico com visão técnico-comercial: operação, relacionamento profissional e tecnologia aplicada.";

export const competenciasCards = [
  { titulo: "Comunicação Técnica", desc: "Traduzir informações farmacêuticas com clareza e linguagem adequada ao público profissional e ao paciente." },
  { titulo: "Vendas Consultivas", desc: "Identificar necessidades, conduzir conversas com ética e gerar resultado sem perder responsabilidade técnica." },
  { titulo: "Relacionamento Profissional", desc: "Pacientes, equipes, médicos e gestores — escuta ativa, respeito e comunicação objetiva." },
  { titulo: "Treinamento e Tecnologia", desc: "Desenvolvimento de pessoas com método estruturado, IA, automação e dados para produtividade." },
] as const;

export const posicionamento = "Farmacêutico com visão técnica, comercial e digital para operações estratégicas em saúde.";
