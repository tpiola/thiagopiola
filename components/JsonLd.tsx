import { site } from "@/lib/content";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        alternateName: site.shortName,
        url: site.url,
        email: site.email,
        telephone: site.phone,
        jobTitle: ["Farmacêutico", "Engenheiro de Inteligência Artificial", "Gestor de Automações"],
        address: {
          "@type": "PostalAddress",
          addressLocality: site.geo.locality,
          addressRegion: site.geo.region,
          addressCountry: site.geo.country,
        },
        sameAs: [
          "https://bsky.app/profile/thiagopiola.bsky.social",
          "https://github.com/tpiola",
          "https://thiagopiola.notion.site/",
          "https://www.tiktok.com/@tpiola",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.shortName,
        publisher: { "@id": `${site.url}/#person` },
        inLanguage: "pt-BR",
      },
      {
        "@type": "ProfessionalService",
        name: site.shortName,
        url: site.url,
        areaServed: {
          "@type": "Country",
          name: "Brasil",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: site.geo.locality,
          addressRegion: site.geo.region,
          addressCountry: site.geo.country,
        },
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
