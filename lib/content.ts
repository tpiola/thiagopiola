/** Conteúdo centralizado — thiagopiola.com.br
 *  Copy profissional com posicionamento técnico-comercial em saúde.
 *  Tom: factual, direto, baseado em resultados e competências verificáveis.
 *
 *  Cada seção tem versão PT e EN (sufixo En) para i18n.
 */

const whatsappText = encodeURIComponent(
  "Olá, tudo bem? Meu nome é",
);

const whatsappTextEn = encodeURIComponent(
  "Hi, how are you? My name is",
);

export const site = {
  name: "Thiago Biasoli Garcia Piola",
  shortName: "Thiago Piola",
  credential: "Farmacêutico CRF/SP 58.519",
  credentialEn: "Pharmacist CRF/SP 58.519",
  location: "Franca, SP, Brasil",
  locationEn: "Franca, SP, Brazil",
  geo: { locality: "Franca", region: "SP", country: "BR" },
  phone: "(16) 99233-3344",
  phoneHref: "tel:5516992333344",
  email: "contato@thiagopiola.com.br",
  whatsapp: `https://wa.me/5516992333344?text=${whatsappText}`,
  whatsappEn: `https://wa.me/5516992333344?text=${whatsappTextEn}`,
  linkedin: "https://www.linkedin.com/in/thiago-piolaoficial",
  x: "https://x.com/thiago_piola",
  crfConsultaUrl: "https://www.crfsp.org.br",
  cvUrl: "https://thiagopiola.notion.site/",
  cvLabel: "Ver Currículo",
  cvLabelEn: "View Resume",
  description:
    "Farmacêutico com atuação técnico-comercial em saúde — operação farmacêutica, hospitalar, treinamento, vendas consultivas e tecnologia.",
  descriptionEn:
    "Pharmacist with technical-commercial expertise in healthcare — pharmaceutical and hospital operations, training, consultative sales and technology.",
  url: "https://thiagopiola.com.br",
  reidasvendas: "https://www.reidasvendas.com.br",
  saudegpt: "https://www.saudegpt.com",
  thiagolab: "https://www.thiagolab.com",
  facebook: "https://www.facebook.com/thiagoopiolaoficial",
  instagram: "https://www.instagram.com/othiagopiolaoficial",
  github: "https://github.com/tpiola",
  tiktok: "https://www.tiktok.com/@tpiola",
  telegram: "https://t.me/m/pGzbdmS2ZWRh",
  reddit: "https://www.reddit.com/user/Mental_Individual641/",
  badgeNotavel: "✦ Farmacêutico Notável 2025",
  badgeNotavelEn: "✦ Notable Pharmacist 2025",
} as const;

export const footerTagline =
  "Farmacêutico CRF/SP 58.519 — Atuação técnico-comercial em saúde.";
export const footerTaglineEn =
  "Pharmacist CRF/SP 58.519 — Technical-commercial expertise in healthcare.";

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
  { href: "#trajetoria", label: "Trajetória", labelEn: "Career" },
  { href: "/blog", label: "Blog", labelEn: "Blog" },
  { href: "#contato", label: "Contato", labelEn: "Contact" },
] as const;

/* ═══════════════════════════════════════════
   HERO — Posicionamento técnico-comercial
   Tom: direto, factual, baseado em competências reais
   ═══════════════════════════════════════════ */
export const hero = {
  tagline: "Farmacêutico CRF/SP 58.519 · Operação técnica e comercial em saúde",
  description:
    "Farmacêutico com mais de uma década unindo operação hospitalar e drogaria, tecnologia e execução comercial — exclusividade no setor de Saúde mundial.",
  titleLine1: "Thiago Biasoli Garcia Piola",
  titleLine2: "Farmacêutico CRF/SP 58.519 · Franca/SP",
  subtitleBefore: "Operação hospitalar e drogaria",
  subtitleAfter: "Exclusividade no setor de Saúde mundial",
  lead:
    "Farmacêutico CRF/SP 58.519 — operação, treinamento, compliance e execução comercial em saúde.",
  ctaWhatsapp: "",
  ctaEmail: "E-mail",
  ctaLinkedin: "Ver perfil no LinkedIn",
  whatsappLabel: "",
  ctaPrincipal: "Ver perfil no LinkedIn",
  ctaSecundario: "",
  microCta: "CRF/SP 58.519 · Perfil profissional",
  rotatingLabel: "Seu próximo passo:",
  descriptionCard: "Operação farmacêutica e hospitalar · Vendas consultivas e tecnologia",
  founderPrefix: "Founder",
  scrollLabel: "Role para explorar",
  menuCloseLabel: "Fechar menu",
  menuOpenLabel: "Abrir menu",
  menuLinkedinLabel: "Ver perfil no LinkedIn",
  menuMicroCopy: "CRF/SP 58.519 · Resposta em até 2h",
  ariaHero: "Hero principal",
  ariaNav: "Principal",
  linkedinAria: "LinkedIn",
  whatsappAria: "Contato via WhatsApp",
} as const;

export const heroEn = {
  tagline: "Pharmacist CRF/SP 58.519 · Technical and commercial operations in healthcare",
  description:
    "Pharmacist with over a decade bridging hospital and drugstore operations, technology and commercial execution — exclusivity in the global Healthcare sector.",
  titleLine1: "Thiago Biasoli Garcia Piola",
  titleLine2: "Pharmacist CRF/SP 58.519 · Franca/SP",
  subtitleBefore: "Hospital and drugstore operations",
  subtitleAfter: "Exclusivity in the global Healthcare sector",
  lead:
    "Pharmacist CRF/SP 58.519 — operations, training, compliance and commercial execution in healthcare.",
  ctaWhatsapp: "",
  ctaEmail: "Email",
  ctaLinkedin: "View LinkedIn profile",
  whatsappLabel: "",
  ctaPrincipal: "View LinkedIn profile",
  ctaSecundario: "",
  microCta: "CRF/SP 58.519 · Professional profile",
  rotatingLabel: "Your next step:",
  descriptionCard: "Pharmaceutical and hospital operations · Consultative sales and technology",
  founderPrefix: "Founder",
  scrollLabel: "Scroll to explore",
  menuCloseLabel: "Close menu",
  menuOpenLabel: "Open menu",
  menuLinkedinLabel: "View LinkedIn profile",
  menuMicroCopy: "CRF/SP 58.519 · Response within 2h",
  ariaHero: "Main hero",
  ariaNav: "Main navigation",
  linkedinAria: "LinkedIn",
  whatsappAria: "Contact via WhatsApp",
} as const;

export const provasEntrega = [
  { value: "12+", label: "Anos como RT em grande rede", labelEn: "12+ years as RT in major chain", detail: "Responsável técnico, treinamento, gestão de pessoas e processos, compliance ANVISA e execução comercial", detailEn: "Technical manager, training, people and process management, ANVISA compliance and commercial execution" },
  { value: "1/14.000", label: "Farmacêutico Notável RD Saúde 2025", labelEn: "Notable Pharmacist RD Saúde 2025", detail: "Finalista entre 14 mil farmacêuticos — Ética, compromisso e lealdade reconhecidos nacionalmente", detailEn: "Finalist among 14,000 pharmacists — Ethics, commitment and loyalty recognized nationwide" },
  { value: "360°", label: "Visão integrada do negócio", labelEn: "Integrated business vision", detail: "Técnica, regulatória e comercial — visão 360° do negócio", detailEn: "Technical, regulatory and commercial — 360° business view" },
  { value: "Ativa", label: "Plataforma Rei das Vendas", labelEn: "Rei das Vendas Platform", detail: "Treinamento comercial proprietário com método e resultado", detailEn: "Proprietary sales training with method and results" },
] as const;

export const trustBar = [
  { label: "CRF/SP 58.519", labelEn: "CRF/SP 58.519", detail: "Registro ativo e verificável — consulte no site do Conselho", detailEn: "Active and verifiable registration — check on the Council website", href: "https://www.crfsp.org.br" },
  { label: "MBA · AI Engineering · GEAR/Google", labelEn: "MBA · AI Engineering · GEAR/Google", detail: "Formação multidisciplinar: gestão, tecnologia e inteligência artificial", detailEn: "Multidisciplinary background: management, technology and artificial intelligence", href: "https://me.developers.google.com/u/105476544026751993130" },
] as const;

export const projetos = {
  title: "Projetos em produção com impacto real.",
  titleEn: "Production projects with real impact.",
  lead: "Soluções em operação que combinam estratégia comercial, tecnologia e governança operacional.",
  leadEn: "Operational solutions combining commercial strategy, technology and operational governance.",
  items: [
    { title: "Automação de qualificação B2B", titleEn: "B2B Qualification Automation", problem: "Leads sem triagem consistente entre canais.", problemEn: "Leads without consistent screening across channels.", result: "Fluxos n8n + CRM com LLM — triagem automática, zero retrabalho.", resultEn: "n8n + CRM with LLM flows — automatic screening, zero rework.", stack: ["n8n", "LLM", "CRM"], href: "https://thiagopiola.notion.site/" },
    { title: "Agentes inteligentes (GEAR/Google)", titleEn: "Intelligent Agents (GEAR/Google)", problem: "Operação repetitiva consumindo tempo de gestão.", problemEn: "Repetitive operations consuming management time.", result: "Arquitetura Sprint/Scrum — atendimento escalável com IA.", resultEn: "Sprint/Scrum architecture — scalable AI-powered service.", stack: ["Google AI", "Agents", "Scrum"], href: "https://me.developers.google.com/u/105476544026751993130" },
    { title: "Rei das Vendas", titleEn: "Rei das Vendas", problem: "Equipes sem método de conversão estruturado.", problemEn: "Teams without a structured conversion method.", result: "Plataforma de treinamento comercial para o setor farmacêutico.", resultEn: "Sales training platform for the pharmaceutical sector.", stack: ["Training", "Sales", "Pharma"], href: "https://www.reidasvendas.com.br" },
  ],
} as const;

export const trajetoria = {
  title: "Trajetória",
  titleEn: "Career Journey",
  lead: "Experiência verificável em ambientes de alta exigência. Resultado, segurança regulatória e crescimento sustentável.",
  leadEn: "Verifiable experience in high-demand environments. Results, regulatory safety and sustainable growth.",
  career: [
    { company: "Operação Farmacêutica e Varejo de Saúde", companyEn: "Pharmaceutical Operations & Health Retail", period: "Atual", periodEn: "Current", role: "Farmacêutico RT", roleEn: "Pharmacist RT", desc: "Experiência em atendimento farmacêutico, orientação, vendas consultivas, indicadores e treinamento de equipes.", descEn: "Experience in pharmaceutical care, counseling, consultative sales, KPIs and team training.", impacts: ["Treinamento de equipe com compliance CRF/SP e foco em resultado comercial"], impactsEn: ["Team training with CRF/SP compliance and focus on commercial results"] },
    { company: "Drogaria Americana", companyEn: "Drogaria Americana", period: "2013–2014", periodEn: "2013–2014", role: "Farmacêutico RT", roleEn: "Pharmacist RT", desc: "Operação, atendimento e gestão de rotina técnica", descEn: "Operations, customer service and technical routine management", impacts: ["Gestão de rotina técnica e indicadores operacionais", "Atendimento e dispensação com conformidade regulatória"], impactsEn: ["Technical routine management and operational KPIs", "Customer service and dispensing with regulatory compliance"] },
    { company: "Farma Cruz", companyEn: "Farma Cruz", period: "2012–2013", periodEn: "2012–2013", role: "Farmacêutico RT", roleEn: "Pharmacist RT", desc: "Compliance documental e rotina técnica", descEn: "Document compliance and technical routine", impacts: ["Controle documental e conformidade ANVISA", "Padronização de processos de dispensação"], impactsEn: ["Document control and ANVISA compliance", "Standardization of dispensing processes"] },
    { company: "Hospital Unimed", companyEn: "Hospital Unimed", period: "2008–2011", periodEn: "2008–2011", role: "Aux. de Farmácia", roleEn: "Pharmacy Assistant", desc: "Farmácia hospitalar — vivência com médicos, prescrições, equipe multiprofissional, fluxos assistenciais e logística de medicamentos.", descEn: "Hospital pharmacy — experience with physicians, prescriptions, multidisciplinary teams, care flows and medication logistics.", impacts: ["Comunicação técnica com profissionais da saúde", "Logística de medicamentos e rastreabilidade em ambiente hospitalar", "Contato direto com prescrições e equipe multiprofissional"], impactsEn: ["Technical communication with healthcare professionals", "Medication logistics and traceability in hospital environment", "Direct contact with prescriptions and multidisciplinary team"] },
  ],
  education: [
    { course: "Pós-graduação em Engenharia de IA", courseEn: "Postgraduate in AI Engineering", status: "Em andamento", statusEn: "In progress" },
    { course: "GEAR/Google — IA e Agentes Inteligentes", courseEn: "GEAR/Google — AI and Intelligent Agents", status: "Concluído", statusEn: "Completed" },
    { course: "MBA em Gestão Empresarial", courseEn: "MBA in Business Management", status: "Concluído", statusEn: "Completed" },
    { course: "MBA em Gestão Estratégica", courseEn: "MBA in Strategic Management", status: "Concluído", statusEn: "Completed" },
    { course: "Farmácia — UNIFRAN", courseEn: "Pharmacy — UNIFRAN", status: "Concluído", statusEn: "Completed" },
  ],
} as const;

/* ─── Seções de competências profissionais ─── */

export const sectionCompetencias = "Competências profissionais";
export const sectionCompetenciasEn = "Professional Skills";

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
export const secaoCompetenciasEn =
  "Pharmacist with technical-commercial vision: operations, professional relationships and applied technology.";

export const competenciasCards = [
  { titulo: "Comunicação Técnica", tituloEn: "Technical Communication", desc: "Traduzir informações farmacêuticas com clareza e linguagem adequada ao público profissional e ao paciente.", descEn: "Translating pharmaceutical information with clarity and language appropriate for professional and patient audiences." },
  { titulo: "Vendas Consultivas", tituloEn: "Consultative Sales", desc: "Identificar necessidades, conduzir conversas com ética e gerar resultado sem perder responsabilidade técnica.", descEn: "Identifying needs, conducting ethical conversations and generating results without losing technical responsibility." },
  { titulo: "Relacionamento Profissional", tituloEn: "Professional Relationship", desc: "Pacientes, equipes, médicos e gestores — escuta ativa, respeito e comunicação objetiva.", descEn: "Patients, teams, physicians and managers — active listening, respect and objective communication." },
  { titulo: "Treinamento e Tecnologia", tituloEn: "Training & Technology", desc: "Desenvolvimento de pessoas com método estruturado, IA, automação e dados para produtividade.", descEn: "People development with structured methodology, AI, automation and data for productivity." },
] as const;

export const posicionamento = "Farmacêutico com visão técnica, comercial e digital para operações estratégicas em saúde.";
export const posicionamentoEn = "Pharmacist with technical, commercial and digital vision for strategic healthcare operations.";

/* ─── Newsletter & Blog ─── */

export const newsletter = {
  title: "Receba conteúdos sobre saúde, farmácia e tecnologia",
  titleEn: "Receive content about health, pharmacy and technology",
  desc: "Análises, insights e novidades direto na sua caixa de entrada.",
  descEn: "Analyses, insights and news straight to your inbox.",
  placeholder: "seu@email.com",
  placeholderEn: "your@email.com",
  cta: "Assinar",
  ctaEn: "Subscribe",
  sending: "Enviando…",
  sendingEn: "Sending…",
  successTitle: "Obrigado por assinar! 🎉",
  successTitleEn: "Thanks for subscribing! 🎉",
  successDesc: "Você receberá os próximos conteúdos no seu email.",
  successDescEn: "You'll receive upcoming content in your inbox.",
  errorMsg: "Ocorreu um erro ao enviar. Tente novamente mais tarde.",
  errorMsgEn: "An error occurred. Please try again later.",
};

/* ─── Blog ─── */

export const blog = {
  pageTitle: "Blog",
  pageTitleEn: "Blog",
  tag: "Conteúdo profissional",
  tagEn: "Professional content",
  subtitle: "Farmácia clínica, tecnologia aplicada à saúde, gestão farmacêutica, compliance regulatório e automação de processos. Conteúdo direto, baseado em experiência real de mais de uma década na operação.",
  subtitleEn: "Clinical pharmacy, health technology, pharmaceutical management, regulatory compliance and process automation. Straightforward content based on over a decade of real operational experience.",
  articlesLabel: "Artigos",
  articlesLabelEn: "Articles",
  articlesTitle: "Últimas publicações",
  articlesTitleEn: "Latest publications",
  footerNote: "Mais artigos em breve. Acompanhe para conteúdo sobre farmácia, tecnologia e gestão.",
  footerNoteEn: "More articles coming soon. Follow for content on pharmacy, technology and management.",
  readMore: "Ler artigo",
  readMoreEn: "Read article",
  ctaTitle: "Receba os próximos artigos",
  ctaTitleEn: "Get the next articles",
  ctaDesc: "Conteúdo sobre farmácia clínica, compliance, IA aplicada à saúde e automação. Direto ao ponto, sem spam.",
  ctaDescEn: "Content on clinical pharmacy, compliance, AI in healthcare and automation. Straight to the point, no spam.",
  ctaButton: "Seguir no LinkedIn",
  ctaButtonEn: "Follow on LinkedIn",
  backLink: "← Voltar à página inicial",
  backLinkEn: "← Back to homepage",
  /* Section labels */
  sectionLabelCareer: "Trajetória",
  sectionLabelCareerEn: "Career",
  sectionLabelResults: "Resultados",
  sectionLabelResultsEn: "Results",
  sectionLabelSkills: "Atuação Profissional",
  sectionLabelSkillsEn: "Professional Expertise",
  sectionLabelManifesto: "Manifesto Profissional",
  sectionLabelManifestoEn: "Professional Manifesto",
  /* Manifesto */
  manifestoQuote: "\"A tecnologia acelera processos, mas o Judgment Layer humano é o que valida o compliance e a conversão no ponto de venda.\"",
  manifestoQuoteEn: "\"Technology accelerates processes, but the human Judgment Layer is what validates compliance and conversion at the point of sale.\"",
  manifestoDesc: "Minha abordagem une a precisão de dados da Engenharia de IA com a intuição científica de anos em campo. Eu elimino o ponto cego entre a diretriz da diretoria e o resultado no faturamento da filial.",
  manifestoDescEn: "My approach combines the data precision of AI Engineering with the scientific intuition of years in the field. I eliminate the blind spot between boardroom directives and branch revenue results.",
  /* Projetos section labels */
  projectChallenge: "Desafio",
  projectChallengeEn: "Challenge",
  projectResult: "Resultado",
  projectResultEn: "Result",
  projectView: "Ver projeto",
  projectViewEn: "View project",
  /* Skills description */
  skillsDesc: "Comunicação técnica, vendas consultivas, relacionamento profissional, treinamento e tecnologia.",
  skillsDescEn: "Technical communication, consultative sales, professional relationships, training and technology.",
  /* Trajetoria section */
  experienceLabel: "Experiência",
  experienceLabelEn: "Experience",
  educationLabel: "Formação",
  educationLabelEn: "Education",
  /* Newsletter section label */
  newsletterSectionLabel: "CONTEÚDO",
  newsletterSectionLabelEn: "CONTENT",
  /* Footer */
  footerPerfil: "Perfil Profissional",
  footerPerfilEn: "Professional Profile",
  footerLinkedinTitle: "LinkedIn",
  footerLinkedinTitleEn: "LinkedIn",
  footerLinkedinDesc: "Conecte-se para acompanhar trajetória, resultados e posicionamento no setor farmacêutico. Perfil verificado com recomendações e histórico completo.",
  footerLinkedinDescEn: "Connect to follow career journey, results and positioning in the pharmaceutical sector. Verified profile with recommendations and full history.",
  footerLinkedinCta: "Ver perfil no LinkedIn",
  footerLinkedinCtaEn: "View LinkedIn profile",
  footerMenu: "Menu",
  footerMenuEn: "Menu",
  footerContact: "Contato",
  footerContactEn: "Contact",
  footerWhatsappDesc: "Mensagem rápida",
  footerWhatsappDescEn: "Quick message",
  footerPhoneLabel: "Telefone",
  footerPhoneLabelEn: "Phone",
  footerEmailLabel: "E-mail",
  footerEmailLabelEn: "Email",
  footerLocationLabel: "Localização",
  footerLocationLabelEn: "Location",
  footerSite: "Site",
  footerSiteEn: "Site",
  footerCopyright: "Todos os direitos reservados.",
  footerCopyrightEn: "All rights reserved.",
  footerCreatedBy: "Criado por",
  footerCreatedByEn: "Created by",
  /* TrustBar */
  trustCredentials: "Credenciais verificáveis",
  trustCredentialsEn: "Verifiable credentials",
  /* Career */
  careerImpact: "Impactos",
  careerImpactEn: "Impacts",
  /* Section labels for provas entrega */
  provasEntregaLabel: "Provas de Entrega",
  provasEntregaLabelEn: "Proof of Delivery",
};
