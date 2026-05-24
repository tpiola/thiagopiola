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
        jobTitle: ["Farmacêutico", "Engenheiro de Inteligência Artificial", "Gestor de Automações"],
        worksFor: {
          "@type": "Organization",
          name: trajetoria.career[0].company,
        },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Professional license",
          name: site.credential,
        },
        knowsAbout: [
          "Farmácia",
          "Indústria farmacêutica",
          "Inteligência artificial",
          "Automação de processos",
          "Scrum",
          "Healthtech",
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
        sameAs: [site.linkedin, ...socialLinks.map((link) => link.href)],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.shortName,
        publisher: { "@id": personId },
        inLanguage: "pt-BR",
      },
      {
        "@type": "ProfessionalService",
        name: site.shortName,
        url: site.url,
        image: imageUrl,
        areaServed: { "@type": "Country", name: "Brasil" },
        address: {
          "@type": "PostalAddress",
          addressLocality: site.geo.locality,
          addressRegion: site.geo.region,
          addressCountry: site.geo.country,
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
