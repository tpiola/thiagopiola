import { site, socialLinks, trajetoria } from "@/lib/content";

export function JsonLd() {
  const personId = `${site.url}/#person`;
  const imageUrl = `${site.url}/images/og-card.webp`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${site.url}/#profilepage`,
        url: site.url,
        mainEntity: { "@id": personId },
        inLanguage: "pt-BR",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: site.url }],
        },
      },
      {
        "@type": ["Person", "ProfessionalService"],
        "@id": personId,
        name: "Thiago Biasoli Garcia Piola",
        alternateName: ["Thiago Piola", "Thiago Biasoli Piola"],
        url: site.url,
        image: {
          "@type": "ImageObject",
          url: imageUrl,
          width: 1200,
          height: 630,
        },
        email: site.email,
        telephone: site.phone,
        jobTitle: [
          "Farmacêutico",
          "Especialista em Treinamento de Equipes",
          "Engenheiro de Inteligência Artificial",
          "Gestor de Automações",
          "Founder",
        ],
        description: "Farmacêutico CRF/SP 58.519 especialista em treinamento de equipes de alta performance, automação de processos e IA aplicada ao setor farmacêutico. Founder da Rei das Vendas.",
        worksFor: [
          {
            "@type": "Organization",
                        name: "Droga Raia — Filial Franca, SP",
            url: "https://www.drogaraia.com.br",
                        description: "Farmacêutico Responsável Técnico pela filial de Franca, SP.",
          },
          {
            "@type": "Organization",
            name: "Rei das Vendas",
            url: site.reidasvendas,
          },
        ],
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Professional license",
          name: "CRF/SP 58.519",
          recognizedBy: {
            "@type": "Organization",
            name: "Conselho Regional de Farmácia do Estado de São Paulo",
          },
        },
        knowsAbout: [
          "Farmácia",
          "Treinamento de equipes",
          "Gestão farmacêutica",
          "Compliance ANVISA",
          "Inteligência artificial",
          "Automação de processos",
          "n8n",
          "Google Gemini",
          "Claude AI",
          "Agentes inteligentes",
          "Scrum",
          "Sprint",
          "Healthtech",
          "Indústria farmacêutica",
          "Varejo farmacêutico",
          "Vendas consultivas técnico-científicas",
          "Relacionamento com prescritores",
          "Gestão de território farmacêutico",
          "Assuntos regulatórios",
          "Farmacovigilância",
          "BPF — Boas Práticas de Fabricação",
          "Liderança de equipes",
          "People analytics",
          "Inteligência comercial",
          "CRM farmacêutico",
          "Farmácia clínica e hospitalar",
          "Business acumen",
          "Indicadores de performance farmacêutica",
          "Negociação e persuasão ética",
        ],
        alumniOf: trajetoria.education.map((e) => ({
          "@type": "EducationalOrganization",
          name: e.course.split("—")[0]?.trim() ?? e.course,
        })),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Franca",
          addressRegion: "SP",
          addressCountry: "BR",
          postalCode: "14400-000",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -20.5386,
          longitude: -47.4008,
        },
        sameAs: [
          site.linkedin,
          site.reidasvendas,
          ...socialLinks.map((link) => link.href),
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: "Thiago Biasoli Garcia Piola",
        description: "Site profissional de Thiago Biasoli Garcia Piola — Farmacêutico, especialista em treinamento, automação e IA.",
        publisher: { "@id": personId },
        inLanguage: "pt-BR",
        potentialAction: {
          "@type": "ContactAction",
          target: `https://wa.me/5516992333344`,
          name: "Contato via WhatsApp",
        },
      },
      {
        "@type": "Organization",
        "@id": `${site.reidasvendas}/#organization`,
        name: "Rei das Vendas",
        url: site.reidasvendas,
        founder: { "@id": personId },
        description: "Plataforma de treinamento comercial para o setor farmacêutico.",
        sameAs: [site.reidasvendas],
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faqpage`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Quais são as especialidades do Thiago Piola?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Farmacêutico CRF/SP 58.519, especialista em treinamento de equipes de alta performance, automação de processos com n8n e IA aplicada ao setor farmacêutico. Founder da Rei das Vendas.",
            },
          },
          {
            "@type": "Question",
            name: "O Thiago Piola atende empresas da indústria farmacêutica?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sim. Thiago tem 15 anos de experiência do hospital ao varejo farmacêutico, com perfil voltado para vendas consultivas técnico-científicas, relacionamento com prescritores e compliance ANVISA. Confira o perfil completo em /industria.",
            },
          },
          {
            "@type": "Question",
            name: "Como entrar em contato com o Thiago Piola?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pelo WhatsApp (16) 99233-3344, e-mail contato@thiagopiola.com.br ou LinkedIn. Resposta em até 24 horas.",
            },
          },
          {
            "@type": "Question",
            name: "O que é o Rei das Vendas?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Plataforma de treinamento comercial para equipes do setor farmacêutico, fundada por Thiago Piola. Metodologia que transforma equipes em máquinas de conversão ética. Acesse reidasvendas.com.br.",
            },
          },
          {
            "@type": "Question",
            name: "Qual a formação do Thiago Piola?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Farmacêutico pela UNIFRAN, MBA em Gestão Empresarial, MBA em Gestão Estratégica, Google GEAR (IA e Agentes Inteligentes) e Pós-graduação em Engenharia de IA em andamento.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
