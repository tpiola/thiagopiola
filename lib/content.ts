/** Conteúdo centralizado — thiagopiola.com.br | Farmacêutico · Vendas · Treinamento · Indústria Farmacêutica */

const whatsappText = encodeURIComponent(
    "Olá, Thiago. Vim pelo seu site e gostaria de saber mais sobre sua trajetória profissional.",
  );

export const site = {
    name: "Thiago Biasoli Garcia Piola",
    shortName: "Thiago Piola",
    credential: "Farmacêutico CRF/SP 58.519",
    location: "Franca, SP — Ribeirão Preto e região",
    geo: {
          locality: "Franca",
          region: "SP",
          country: "BR",
    },
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
    "Farmacêutico CRF/SP 58.519 com mais de 15 anos de experiência em farmácia, vendas, treinamento de equipes e gestão de negócios. Da operação à estratégia — resultado que se mede.";

/** Ordem alfabética obrigatória — rodapé */
export const socialLinks = [
  { href: "https://github.com/tpiola", label: "GitHub" },
  {
        href: "https://me.developers.google.com/u/105476544026751993130",
        label: "Google Developers",
  },
  { href: site.linkedin, label: "LinkedIn" },
  { href: "https://thiagopiola.notion.site/", label: "Notion" },
  { href: "https://www.reddit.com/user/Mental_Individual641/", label: "Reddit" },
  { href: "https://t.me/m/pGzbdmS2ZWRh", label: "Telegram" },
  { href: "https://www.tiktok.com/@tpiola", label: "TikTok" },
  { href: site.x, label: "X" },
  ] as const;

export const socialLinksProfessional = socialLinks.filter((l) =>
    ["GitHub", "Google Developers", "LinkedIn", "Notion", "X"].includes(l.label),
                                                          );

export const socialLinksCommunity = socialLinks.filter((l) =>
    ["Reddit", "Telegram", "TikTok"].includes(l.label),
                                                       );

export const nav = [
  { href: "#impacto", label: "Impacto" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#metodo", label: "Método" },
  { href: "#resultados", label: "Resultados" },
  { href: "#stack", label: "Stack" },
  { href: "#contato", label: "Contato" },
  ] as const;

export const hero = {
    title: "Thiago Biasoli\nGarcia Piola",
    titleLine1: "Thiago Biasoli",
    titleLine2: "Garcia Piola",
    subtitle: "15 anos transformando conhecimento farmacêutico em resultado de vendas.",
    lead: "Farmacêutico CRF/SP 58.519 · RT Droga Raia · Liderança de equipe, treinamento, compliance e inteligência comercial. Da farmácia à indústria — conheço o negócio, a operação e o cliente.",
    ctaWhatsapp: "Quero conversar",
    ctaEmail: "E-mail",
    ctaLinkedin: "LinkedIn",
} as const;

export const trustBar = [
  {
        label: "CRF/SP 58.519",
        detail: "Registro ativo e verificável",
        href: "https://www.crfsp.org.br",
  },
  {
            label: "Droga Raia — RD Saúde",
            detail: "Farmacêutico RT — liderança de filial referência",
            href: undefined,
    },
  {
        label: "15+ anos de atuação",
        detail: "Farmácia, clínica, hospitalar e indústria",
        href: undefined,
  },
  ] as const;

export const farmaciaIndustria = {
    title: "Áreas de atuação e interesse",
    chips: [
          "Vendas Consultivas",
          "Treinamento e Desenvolvimento",
          "Gestão de Equipes",
          "Desenvolvimento de Negócios",
          "Relacionamento com Clientes",
          "Estratégia Comercial",
          "Expansão de Mercado",
          "Compliance e Regulatório",
          "Resultados e Metas",
          "Performance Comercial",
          "CRM e Inteligência de Dados",
          "Produto Farmacêutico",
          "Prescrição e Indicação",
          "Inovação e IA Aplicada",
          "Comunicação Científica",
        ],
} as const;

export const autoridade = {
    sectionId: "impacto",
    sectionLabel: "01 / Impacto",
    title: "O que construí em 15 anos de farmácia.",
    lead: "Mais de uma década unindo conhecimento técnico, gestão de pessoas e visão comercial. Cada resultado é prova de método — não de sorte.",
    pilares: [
      {
              number: "01",
              emoji: "🏪",
              title: "Gestão de Farmácia e Resultados",
              desc: "Lidero uma das lojas mais relevantes da maior rede do país. Giro, margem, ruptura, conversão — decisão baseada em dado, não em palpite.",
      },
      {
              number: "02",
              emoji: "🎯",
              title: "Treinamento e Desenvolvimento",
              desc: "Metodologia própria que transforma equipes. Treinamento técnico-comercial com foco em conversão ética, indicadores reais e crescimento contínuo.",
      },
      {
              number: "03",
              emoji: "📋",
              title: "Compliance e Boas Práticas",
              desc: "CRF/SP ativo, conformidade ANVISA e RDCs. Zero autuação — rigor regulatório que protege a operação e a reputação.",
      },
      {
              number: "04",
              emoji: "📊",
              title: "Dados e Inteligência de Negócios",
              desc: "Dashboards, CRM e automações que transformam números em decisão comercial. Do dado à ação — em tempo real.",
      },
        ],
} as const;

export const competencias = {
    sectionId: "metodo",
    sectionLabel: "03 / Método",
    title: "Competências que geram resultado.",
    lead: "O que entrego em cada desafio profissional — da gestão de pessoas à inteligência de dados.",
    skills: [
      {
              title: "Gestão de Equipes e Liderança",
              desc: "Liderança de times de até 13 profissionais. Desenvolvimento de pessoas, delegação por resultado e cultura de alta performance.",
      },
      {
              title: "Vendas Consultivas e Relacionamento",
              desc: "Técnica de indicação e venda com embasamento científico. Relacionamento de longo prazo com clientes, prescritores e parceiros.",
      },
      {
              title: "Treinamento e Desenvolvimento de Pessoas",
              desc: "Metodologia que transforma equipes comuns em times de alta performance. Treinamento técnico-comercial com métrica de conversão.",
      },
      {
              title: "Inteligência Comercial e CRM",
              desc: "CRM, dashboards e BI comercial para decisão rápida. Funil, sell-out e indicadores — tudo com número, sem achismo.",
      },
      {
              title: "Compliance e Regulatório",
              desc: "Conformidade com RDCs, ANVISA e boas práticas de farmácia. Conhecimento que o mercado regulado exige e valoriza.",
      },
      {
              title: "Expansão e Desenvolvimento de Negócios",
              desc: "Visão de mercado, prospecção e estruturação comercial. Da operação atual a novas oportunidades — com método e resultado.",
      },
      {
              title: "Produto Farmacêutico e Comunicação Científica",
              desc: "Conhecimento profundo de mecanismos de ação, indicações e fisiologia. Base clínica que fundamenta a venda consultiva.",
      },
      {
              title: "Inovação e IA Aplicada a Negócios",
              desc: "Automação de processos, agentes inteligentes e LLMs para qualificação, conteúdo e decisão comercial acelerada.",
      },
        ],
    metrics: [
      { value: "15+", label: "Anos em operação farmacêutica" },
      { value: "CRF/SP", label: "Registro profissional ativo" },
      { value: "360°", label: "Farmácia + clínica + hospitalar + digital" },
        ],
} as const;

export const projetos = {
    sectionId: "resultados",
    sectionLabel: "04 / Resultados",
    title: "Entregas que provam execução.",
    lead: "Projetos reais com stack verificável — método comercial, visão de mercado e capacidade de entrega.",
    items: [
      {
              title: "Rei das Vendas",
              problem: "Equipes farmacêuticas sem método de conversão estruturado — dependência de intuição, não de processo.",
              result: "Plataforma de treinamento comercial com método documentado, dashboard de indicadores e integração CRM.",
              stack: ["Treinamento", "CRM", "Farmácia"],
              href: "https://www.reidasvendas.com.br",
      },
      {
              title: "Dossiê de Atuação Profissional",
              problem: "Experiência consolidada em mais de 15 anos precisa de apresentação clara e navegável.",
              result: "Documento vivo com trajetória, competências e resultados — organizado por áreas de atuação.",
              stack: ["Indústria", "Vendas", "Farmácia"],
              href: site.industriaUrl,
      },
      {
              title: "Automação de Indicadores Comerciais",
              problem: "Decisão atrasada por falta de dado consolidado — planilhas e relatórios manuais consumindo tempo de gestão.",
              result: "Fluxos n8n + dashboards em tempo real. CRM com lead scoring, tracking de indicadores e BI comercial.",
              stack: ["n8n", "CRM", "BI"],
              href: "https://thiagopiola.notion.site/",
      },
        ],
} as const;

export const tecnologia = {
    sectionId: "stack",
    sectionLabel: "05 / Stack",
    title: "Ferramentas que entregam resultado.",
    lead: "Stack usado em produção real — prova de execução, não promessa de vitrine.",
    items: [
      { title: "CRM & Automação Comercial", desc: "Gestão de carteira e indicadores em tempo real — funil, tracking, follow-up automatizado" },
      { title: "n8n & Integrações", desc: "Orquestração de processos comerciais sem atrito — 24/7, escala, zero planilha" },
      { title: "IA e Agentes Inteligentes", desc: "LLMs e agentes para qualificação, conteúdo e decisão comercial acelerada" },
      { title: "Dashboards & BI", desc: "Painéis vivos de indicadores de farmácia — decisão baseada em dado, não em palpite" },
      { title: "Google GEAR & IA Aplicada", desc: "Programa Google de agentes e IA — formação em inteligência artificial para negócios" },
      { title: "Gestão de Presença Digital", desc: "Posicionamento profissional e conteúdo que gera reconhecimento e oportunidade" },
        ],
} as const;

export const trajetoria = {
    sectionId: "trajetoria",
    sectionLabel: "02 / Trajetória",
    title: "Trajetória profissional.",
    lead: "Experiência consolidada em ambientes de alta exigência — da farmácia ao hospital, da operação à estratégia.",
    career: [
      {
                    company: "Droga Raia / RD Saúde — Franca, SP",
              period: "Atual — [N] anos",
                    role: "Farmacêutico Responsável Técnico de Filial",
              desc: "Liderança, gestão de equipe, indicadores comerciais e compliance regulatório",
              impacts: [
                                  "Lidero equipe de ~13 profissionais em loja referência da rede, gerenciando resultados em indicadores de venda, giro, ruptura e margem em [N] categorias de produtos.",
                        "Desenvolvi e implementei método próprio de treinamento da equipe para indicação ativa, elevando a taxa de conversão em [X%] e o ticket médio em [Y%].",
                        "Mantenho conformidade regulatória CRF/SP e ANVISA — [N] anos sem não-conformidades.",
                        "Estruturei dashboards e sistema próprio de CRM para leitura de indicadores e tomada de decisão comercial em tempo real.",
                      ],
      },
      {
              company: "Drogaria Americana — Franca, SP",
              period: "2013–2014",
              role: "Farmacêutico RT",
              desc: "Gestão de rotina técnica, atendimento e operação comercial",
              impacts: [
                        "Gerenciei rotina técnica e operacional, atendendo média de [N] pacientes por dia com foco em adesão e indicação ativa.",
                        "Implementei processos de atendimento que reduziram o tempo de espera em [X%] e aumentaram a produtividade da equipe.",
                        "Participei de ações comerciais da indústria, contribuindo para aumento de [X%] nos resultados de [N] linhas de produtos.",
                      ],
      },
      {
              company: "Farma Cruz — Franca, SP",
              period: "2012–2013",
              role: "Farmacêutico RT",
              desc: "Compliance regulatório, processos e documentação",
              impacts: [
                        "Responsável por controle documental e conformidade regulatória — adequação a RDCs e boas práticas de farmácia.",
                        "Padronizei processos de dispensação garantindo rastreabilidade total e segurança do paciente.",
                        "Vivenciei o ciclo completo de visitas e negociações com a indústria farmacêutica, compreendendo na prática a dinâmica de vendas e relacionamento.",
                      ],
      },
      {
              company: "Hospital Unimed — Franca, SP",
              period: "2008–2011",
              role: "Auxiliar de Farmácia — Farmácia Hospitalar",
              desc: "Farmácia clínica, logística de medicamentos e suporte multidisciplinar",
              impacts: [
                        "Atuei em farmácia clínica hospitalar, suportando equipe multidisciplinar em ambiente de alta complexidade — [N] leitos.",
                        "Gerenciei logística de medicamentos controlados e de alto custo, garantindo [X%] de disponibilidade e rastreabilidade total.",
                        "Participei de comissões de farmácia e terapêutica, consolidando base clínica que fundamenta a abordagem com prescritores.",
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

/** Resumo EN */
export const heroEn = {
    title: "Thiago Biasoli\nGarcia Piola",
    titleLine1: "Thiago Biasoli",
    titleLine2: "Garcia Piola",
    subtitle: "15 years turning pharmaceutical knowledge into sales results.",
    lead: "Pharmacist CRF/SP 58.519 · Head RT at Droga Raia/RD Saúde · Team leadership, training, compliance and business intelligence. From pharmacy to industry — I know the business, the operation and the client.",
} as const;
