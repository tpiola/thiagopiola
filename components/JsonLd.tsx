import { site, trajetoria } from "@/lib/content";

export function JsonLd() {
  const personId = `${site.url}/#person`;
  const organizationId = `${site.url}/#organization`;
  const websiteId = `${site.url}/#website`;
  const profilePageId = `${site.url}/#profilepage`;
  const breadcrumbId = `${site.url}/#breadcrumb`;
  const imageUrl = `${site.url}/images/og-card.webp`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": profilePageId,
        url: site.url,
        mainEntity: { "@id": personId },
        inLanguage: "pt-BR",
        breadcrumb: { "@id": breadcrumbId },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: site.url },
        ],
      },
      {
        "@type": ["Person", "ProfessionalService"],
        "@id": personId,
        name: "Thiago Biasoli Garcia Piola",
        givenName: "Thiago",
        familyName: "Piola",
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
          "Farmacêutico Responsável Técnico",
          "Profissional de Saúde",
          "Consultor Técnico-Comercial",
          "Especialista em Treinamento de Equipes",
          "Analista de Inteligência Artificial e Automação",
          "Founder",
        ],
        description:
          "Farmacêutico CRF/SP 58.519 com atuação técnico-comercial em saúde — treinamento de equipes, vendas consultivas, automação de processos e IA aplicada à saúde. Founder da Rei das Vendas.",
        worksFor: [
          {
            "@type": "Organization",
            name: "Droga Raia — Filial Franca, SP",
            url: "https://www.drogaraia.com.br",
            description:
              "Farmacêutico Responsável Técnico pela filial de Franca, SP.",
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
        award: "Farmacêutico Notável 2025",
        knowsAbout: [
          "Farmácia",
          "Vendas Consultivas",
          "Treinamento de Equipes",
          "Saúde",
          "Inteligência Artificial",
          "Automação de Processos",
          "Comunicação Técnica",
          "Relacionamento Profissional",
          "Gestão de Indicadores",
        ],
        alumniOf: trajetoria.education.map((e) => ({
          "@type": "EducationalOrganization",
          name: e.course.split("—")[0]?.trim() ?? e.course,
        })),
        address: {
          "@type": "PostalAddress",
          addressLocality: site.geo.locality,
          addressRegion: site.geo.region,
          addressCountry: site.geo.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -20.5386,
          longitude: -47.4008,
        },
        sameAs: [
          site.linkedin,
          site.github,
          site.x,
          site.instagram,
          site.facebook,
          site.tiktok,
          site.telegram,
          site.reddit,
          "https://me.developers.google.com/u/105476544026751993130",
          "https://thiagopiola.notion.site/",
        ],
      },
      {
        "@type": "Organization",
        "@id": organizationId,
        name: site.shortName,
        alternateName: site.name,
        url: site.url,
        email: site.email,
        telephone: site.phone,
        description: site.description,
        founder: { "@id": personId },
        address: {
          "@type": "PostalAddress",
          addressLocality: site.geo.locality,
          addressRegion: site.geo.region,
          addressCountry: site.geo.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -20.5386,
          longitude: -47.4008,
        },
        sameAs: [
          site.linkedin,
          site.github,
          site.x,
          site.instagram,
          site.facebook,
          site.tiktok,
          site.telegram,
          site.reddit,
          "https://me.developers.google.com/u/105476544026751993130",
          "https://thiagopiola.notion.site/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: site.url,
        name: "Thiago Biasoli Garcia Piola",
        description:
          "Site profissional de Thiago Biasoli Garcia Piola — Farmacêutico, especialista em treinamento, automação e IA.",
        publisher: { "@id": personId },
        inLanguage: "pt-BR",
        potentialAction: {
          "@type": "ContactAction",
          target: `https://wa.me/5516992333344`,
          name: "Contato via WhatsApp",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${site.url}/#localbusiness`,
        name: site.shortName,
        url: site.url,
        email: site.email,
        telephone: site.phone,
        description: "Farmácia e consultoria farmacêutica em Franca, SP — responsabilidade técnica, treinamento e vendas consultivas.",
        image: imageUrl,
        priceRange: "$$",
        openingHours: "Mo-Fr 08:00-18:00",
        areaServed: { "@type": "City", name: "Franca" },
        address: {
          "@type": "PostalAddress",
          addressLocality: site.geo.locality,
          addressRegion: site.geo.region,
          addressCountry: site.geo.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -20.5386,
          longitude: -47.4008,
        },
        parentOrganization: { "@id": organizationId },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Thiago Piola atende em Franca?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sim, Thiago Piola é farmacêutico com registro ativo CRF/SP 58.519 e atua como Responsável Técnico em Franca, SP, na Droga Raia. Também oferece consultoria e treinamento para equipes farmacêuticas em toda a região.",
            },
          },
          {
            "@type": "Question",
            name: "Quais serviços Thiago Piola oferece?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Thiago Piola oferece responsabilidade técnica farmacêutica, treinamento de equipes, vendas consultivas, compliance ANVISA, automação de processos com IA e consultoria técnico-comercial para o setor de saúde.",
            },
          },
          {
            "@type": "Question",
            name: "Como entrar em contato com Thiago Piola?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `O contato pode ser feito via WhatsApp (${site.phone}), email (${site.email}) ou LinkedIn. A resposta geralmente ocorre em até 2 horas.`,
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
