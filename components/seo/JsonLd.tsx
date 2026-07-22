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
    // Hinweis: Telefon/E-Mail bewusst NICHT im JSON-LD (Spam-Schutz, keine
    // Kontaktdaten im DOM). Kontakt läuft über Rückrufservice/Formular.
    areaServed: siteConfig.contact.addressLocality,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.street,
      postalCode: siteConfig.contact.postalCode,
      addressLocality: siteConfig.contact.addressLocality,
      addressCountry: siteConfig.contact.addressCountry,
    },
    knowsAbout: [
      "Serviceverträge",
      "Serveraufbau",
      "Netzwerke",
      "Arbeitsplätze einrichten",
      "Telefonanlagen",
      "IT-Sicherheit",
      "Hardware und Software",
    ],
    makesOffer: [
      "Serviceverträge / IT-Betreuung",
      "Serveraufbau",
      "Netzwerke",
      "Arbeitsplätze einrichten",
      "Telefonanlagen",
      "IT-Sicherheit & Hardware",
      "Software & JTL-Module",
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
