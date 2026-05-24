import { site, socialLinks, trajetoria } from "@/lib/content";

export function JsonLd() {
  const personId = `${site.url}/#person`;
  const imageUrl = `${site.url}/images/og-card.webp`;

  const knowsAbout = [
    "Farmácia",
    "Farmacêutico responsável técnico",
    "CRF/SP",
    "Indústria farmacêutica",
    "Varejo farmacêutico",
    "Farmácia hospitalar",
    "Inteligência artificial aplicada",
    "Automação de processos",
    "Agentes inteligentes",
    "Vendas consultivas",
    "Treinamento de equipes",
    "Facilitação de resultados",
    "Healthtech",
    "SEO local e GEO",
    "Scrum",
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${site.url}/#profilepage`,
        url: site.url,
        name: `${site.name} — Farmacêutico, IA e tecnologia`,
        mainEntity: { "@id": personId },
        inLanguage: "pt-BR",
      },
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        alternateName: site.shortName,
        url: site.url,
        image: imageUrl,
        email: site.email,
        telephone: site.phone,
        jobTitle: [
          "Farmacêutico",
          "Farmacêutico Responsável Técnico",
          "Engenheiro de Inteligência Artificial",
          "Gestor de Automações",
          "Facilitador de Resultados",
        ],
        worksFor: {
          "@type": "Organization",
          name: trajetoria.career[0].company,
        },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Professional license",
          name: site.credential,
        },
        knowsAbout,
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
        homeLocation: {
          "@type": "Place",
          name: site.location,
          geo: {
            "@type": "GeoCoordinates",
            latitude: site.geo.latitude,
            longitude: site.geo.longitude,
          },
        },
        sameAs: [site.linkedin, ...socialLinks.map((link) => link.href)],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.shortName,
        description:
          "Portfólio profissional de Thiago Biasoli Garcia Piola, farmacêutico CRF/SP com atuação em IA aplicada, tecnologia, vendas e treinamentos.",
        publisher: { "@id": personId },
        inLanguage: "pt-BR",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#professionalservice`,
        name: site.name,
        url: site.url,
        image: imageUrl,
        telephone: site.phone,
        email: site.email,
        priceRange: "Sob consulta",
        areaServed: [
          { "@type": "City", name: "Franca" },
          { "@type": "State", name: "São Paulo" },
          { "@type": "Country", name: "Brasil" },
        ],
        serviceType: [
          "Consultoria em IA aplicada",
          "Automação de processos",
          "Treinamento de equipes",
          "Vendas consultivas",
          "Tecnologia para saúde",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: site.geo.locality,
          addressRegion: site.geo.region,
          addressCountry: site.geo.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.latitude,
          longitude: site.geo.longitude,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: site.url }],
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
