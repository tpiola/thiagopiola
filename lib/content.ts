/** Conteúdo centralizado — thiagopiola.com.br | Posicionamento: Representante / Consultor de Vendas — Indústria Farmacêutica */

const whatsappText = encodeURIComponent(
    "Olá, Thiago. Vim pelo site e quero saber mais sobre sua experiência para atuar como representante na indústria farmacêutica.",
  );

export const site = {
    name: "Thiago Biasoli Garcia Piola",
    shortName: "Thiago Piola",
    credential: "Farmacêutico CRF/SP 58.519",
    location: "Franca, SP — disponível para Ribeirão Preto e região",
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
    "Farmacêutico CRF/SP 58.519 com 15+ anos de operação em PDV, varejo, clínica e hospitalar. Experiência em gestão de equipe, sell-out, compliance e indicadores comerciais. Pronto para território em Franca/SP, Ribeirão Preto e região.";

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
    subtitle: "15 anos operando o PDV que o representante farmacêutico é treinado a conquistar.",
    lead: "Farmacêutico CRF/SP 58.519 · RT Droga Raia · Liderança de equipe, sell-out e compliance. Do balcão à indústria — conheço o cliente, a operação e o território.",
    ctaWhatsapp: "Quero conversar",
    ctaEmail: "E-mail",
    ctaLinkedin: "LinkedIn",
} as const;

export const trustBar = [
  {
        label: "CRF/SP 58.519",
        detail: "Registro ativo e verificável — CRF-SP",
        href: "https://www.crfsp.org.br",
  },
  {
            label: "Droga Raia — RD Saúde",
            detail: "Farmacêutico RT líder de loja referência",
            href: undefined,
    },
  {
        label: "15+ anos de operação",
        detail: "Varejo, clínica, hospitalar e indústria",
        href: undefined,
  },
  ] as const;

export const farmaciaIndustria = {
    title: "Keywords para recrutadores de indústria farmacêutica",
    chips: [
          "Representante Farmacêutico",
          "Consultor de Vendas",
          "Propagandista",
          "Key Account / KAM",
          "Sell-out e Sell-in",
          "PDV e Trade Marketing",
          "Gestão de Território",
          "Gestão de Carteira",
          "Indicadores Comerciais",
          "Prescritores e Visitação",
          "Compliance ANVISA / RDC",
          "CRM e Omnichannel",
          "Treinamento de Equipe",
          "Força de Vendas",
          "IA Aplicada a Vendas",
        ],
} as const;

export const autoridade = {
    sectionId: "impacto",
    sectionLabel: "01 / Impacto",
    title: "Eu opero o PDV que a indústria quer influenciar.",
    lead: "A maioria dos representantes passa anos tentando entender o ponto de venda. Eu não preciso entender — eu opero o PDV todos os dias. Essa é a diferença que levo para o território.",
    pilares: [
      {
              number: "01",
              emoji: "🏪",
              title: "Operação de PDV e Sell-out",
              desc: "Gerencio indicadores reais de ponto de venda — giro, ruptura, margem e sell-out — em loja líder de rede. Decisão baseada em dado, não em palpite.",
      },
      {
              number: "02",
              emoji: "🎯",
              title: "Indicação Ativa e Treinamento",
              desc: "Metodologia própria de treinamento de balcão para conversão ética. Equipes treinadas para indicar com conhecimento técnico e compliance.",
      },
      {
              number: "03",
              emoji: "📋",
              title: "Compliance e Regulatório",
              desc: "CRF/SP ativo, conformidade ANVISA, RDCs e boas práticas. Zero não-conformidade regulatória — segurança que a indústria exige.",
      },
      {
              number: "04",
              emoji: "📊",
              title: "Dados e Inteligência Comercial",
              desc: "Dashboards, CRM e automações que transformam número em decisão. Do sell-out ao share — métrica que orienta a visita do representante.",
      },
        ],
} as const;

export const competencias = {
    sectionId: "metodo",
    sectionLabel: "03 / Método",
    title: "Competências que a indústria farmacêutica busca.",
    lead: "Distribuídas naturalmente — as palavras-chave que fazem seu perfil aparecer na busca do recrutador.",
    skills: [
      {
              title: "Gestão de Território e Carteira",
              desc: "Planejamento de rotas, priorização de prescritores, gestão de visitas e cobertura territorial com indicadores de resultado.",
      },
      {
              title: "Sell-out e Indicadores de PDV",
              desc: "Leitura de sell-out, ruptura, giro e share. Decisão comercial baseada em dado — do PDV ao reporte regional.",
      },
      {
              title: "Venda Consultiva e Indicação Ativa",
              desc: "Técnica de indicação com embasamento científico e compliance. Conversão ética que respeita o cliente e a regulação.",
      },
      {
              title: "Treinamento de Equipes de Balcão",
              desc: "Metodologia que transforma equipe comum em time de alta performance — com métricas reais de sell-out e indicador de conversão.",
      },
      {
              title: "Compliance ANVISA e Regulatório",
              desc: "Conformidade com RDCs, boas práticas de dispensação e controle documental. Conhecimento que o mercado regulado exige.",
      },
      {
              title: "CRM e Análise de Dados Comerciais",
              desc: "CRM, dashboards e BI comercial para decisão rápida e precisa. Funil, funil, funil — com número, não achismo.",
      },
      {
              title: "Relacionamento com Prescritores",
              desc: "Relação com médicos, dentistas e profissionais de saúde — baseada em respeito técnico e entrega de valor.",
      },
      {
              title: "IA e Automação Aplicadas a Vendas",
              desc: "Automação de processos, agentes inteligentes e LLMs para qualificação, follow-up e gestão de carteira em escala.",
      },
        ],
    metrics: [
      { value: "15+", label: "Anos de operação real em farmácia" },
      { value: "CRF/SP", label: "Registro profissional ativo" },
      { value: "360°", label: "Varejo + clínica + hospitalar + digital" },
        ],
} as const;

export const projetos = {
    sectionId: "resultados",
    sectionLabel: "04 / Resultados",
    title: "Prova de execução comercial.",
    lead: "Entregas reais que demonstram método comercial, visão de mercado e capacidade de execução.",
    items: [
      {
              title: "Rei das Vendas",
              problem: "Equipes farmacêuticas sem método de conversão ética e escalável — dependência de intuição, não de processo.",
              result: "Plataforma de treinamento comercial com método documentado, dashboard de indicadores e integração CRM.",
              stack: ["Treinamento", "CRM", "Farmácia"],
              href: "https://www.reidasvendas.com.br",
      },
      {
              title: "Dossiê Indústria Farmacêutica",
              problem: "Recrutadores de indústria farmacêutica precisam de prova de experiência organizada e navegável.",
              result: "Documento vivo com experiência, competências e resultados — formato que o RH lê em 3 minutos.",
              stack: ["Indústria", "Representante", "Vendas"],
              href: site.industriaUrl,
      },
      {
              title: "Automação de Indicadores Comerciais",
              problem: "Decisão atrasada por falta de dado consolidado — planilhas e relatórios manuais consomem tempo de gestão.",
              result: "Fluxos n8n + dashboards em tempo real. CRM com lead scoring, sell-out tracking e BI comercial.",
              stack: ["n8n", "CRM", "BI"],
              href: "https://thiagopiola.notion.site/",
      },
        ],
} as const;

export const tecnologia = {
    sectionId: "stack",
    sectionLabel: "05 / Stack",
    title: "Ferramentas que entregam resultado comercial.",
    lead: "Stack usada em produção real — prova de execução, não promessa de vitrine.",
    items: [
      { title: "CRM & Automação Comercial", desc: "Gestão de carteira e indicadores em tempo real — funil, sell-out, follow-up automatizado" },
      { title: "n8n & Integrações", desc: "Orquestração de processos comerciais sem atrito — 24/7, escala, zero planilha" },
      { title: "IA e Agentes Inteligentes", desc: "LLMs e agentes para qualificação, conteúdo e decisão comercial acelerada" },
      { title: "Dashboards & BI", desc: "Painéis vivos de sell-out, giro, ruptura, conversão — decisão baseada em dado" },
      { title: "Google GEAR & IA Aplicada", desc: "Programa Google de agentes e IA — formação em inteligência artificial para negócios" },
      { title: "SEO & Presença Digital", desc: "Posicionamento local e conteúdo que gera visita — tráfego que vira lead" },
        ],
} as const;

export const trajetoria = {
    sectionId: "trajetoria",
    sectionLabel: "02 / Trajetória",
    title: "Trajetória profissional.",
    lead: "Experiência verificável em ambientes de alta exigência — do balcão ao hospital. Cada linha preparada para recrutador de indústria farmacêutica.",
    career: [
      {
                    company: "Droga Raia / RD Saúde — Franca, SP",
              period: "Atual — [N] anos",
                    role: "Farmacêutico Responsável Técnico de Filial",
              desc: "Liderança, gestão de equipe, indicadores comerciais e compliance regulatório",
              impacts: [
                                  "Lidero equipe de ~13 profissionais em loja referência da rede, gerenciando indicadores de sell-out, ruptura e giro em [N] categorias de produtos.",
                        "Treinei equipe para indicação ativa com método próprio, elevando a taxa de conversão em [X%] e o ticket médio em [Y%].",
                        "Mantenho conformidade regulatória CRF/SP e ANVISA — [N] anos sem qualquer não-conformidade ou auto de infração.",
                        "Implementei dashboards e sistema próprio de CRM para leitura de indicadores comerciais e tomada de decisão em tempo real.",
                      ],
      },
      {
              company: "Drogaria Americana — Franca, SP",
              period: "2013–2014",
              role: "Farmacêutico RT",
              desc: "Gestão de rotina técnica, atendimento e operação comercial",
              impacts: [
                        "Gerenciei rotina técnica e operacional, atendendo média de [N] pacientes/dia com foco em adesão e indicação.",
                        "Implementei processos de dispensação que reduziram o tempo de espera em [X%] e aumentaram a rotatividade de estoque.",
                        "Suportei campanhas de trade marketing da indústria, resultando em aumento de [X%] no sell-out de [N] linhas.",
                      ],
      },
      {
              company: "Farma Cruz — Franca, SP",
              period: "2012–2013",
              role: "Farmacêutico RT",
              desc: "Compliance regulatório, documentação e processos de dispensação",
              impacts: [
                        "Responsável por controle documental e conformidade regulatória — adequação a RDCs e boas práticas de farmácia.",
                        "Padronizei processos de dispensação garantindo rastreabilidade total e segurança do paciente.",
                        "Participei de visitas de representantes da indústria, compreendendo na prática o ciclo de vendas e negociação.",
                      ],
      },
      {
              company: "Hospital Unimed — Franca, SP",
              period: "2008–2011",
              role: "Auxiliar de Farmácia — Farmácia Hospitalar",
              desc: "Farmácia clínica, logística de medicamentos e suporte multidisciplinar",
              impacts: [
                        "Atuei em farmácia clínica hospitalar, suportando equipe multidisciplinar em ambiente de alta complexidade — [N] leitos.",
                        "Gerenciei logística de medicamentos controlados e de alto custo, garantindo [X%] de disponibilidade e rastreabilidade.",
                        "Participei de comissões de farmácia e terapêutica, desenvolvendo visão clínica que hoje fundamenta a relação com prescritores.",
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

/** Resumo EN para RH internacional */
export const heroEn = {
    title: "Thiago Biasoli\nGarcia Piola",
    titleLine1: "Thiago Biasoli",
    titleLine2: "Garcia Piola",
    subtitle: "15 years operating the point-of-sale that pharmaceutical sales reps are trained to win.",
    lead: "Pharmacist CRF/SP 58.519 · Head RT at Droga Raia/RD Saúde · Team leadership, sell-out and compliance. From the counter to the industry — I know the client, the operation and the territory.",
} as const;
