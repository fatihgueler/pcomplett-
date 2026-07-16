import { siteConfig } from "@/lib/site";

/**
 * Strukturierte Daten (Schema.org) für lokale IT-Dienstleistung.
 * Datenquelle ist ausschließlich die eigene siteConfig (vertrauenswürdig, kontrolliert).
 */
export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    areaServed: siteConfig.contact.addressLocality,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.street,
      postalCode: siteConfig.contact.postalCode,
      addressLocality: siteConfig.contact.addressLocality,
      addressCountry: siteConfig.contact.addressCountry,
    },
    knowsAbout: [
      "IT-Lösungen",
      "Softwareentwicklung",
      "Mediendesign",
      "IT-Service",
      "IT-Projektierung",
      "Hardware-Vermietung",
    ],
    makesOffer: [
      "IT-Lösungen",
      "Development",
      "Mediendesign",
      "Service",
      "Software",
      "Projektierung",
      "Vermietung",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
