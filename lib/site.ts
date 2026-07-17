/**
 * Zentrale Site-Konfiguration (Single Source of Truth für Metadaten & Kontakt).
 * Platzhalter im Format {{NAME}} vom Kunden ausfüllen lassen.
 */

export const siteConfig = {
  name: "PComplett",
  // Aktuell Einzelunternehmen (Inhaber Frank Bernhardt). Bei GmbH-Gründung Firmierung anpassen.
  legalName: "PComplett – Inhaber Frank Bernhardt",
  // Produktions-URL – für Metadata, Sitemap, OG-Tags, JSON-LD.
  url: "https://www.pcomplett.de",
  city: "Hannover",
  description:
    "PComplett ist Ihr IT- & KI-Systemhaus für Unternehmen und Privatkunden: KI-Lösungen, IT-Betreuung, IT-Sicherheit, Software & JTL-Module, Development sowie PC-Service – aus einer Hand.",
  slogan: "IT & KI für Unternehmen und Privatkunden",

  contact: {
    phone: "0511 760 773 0",
    fax: "0511 760 773 49",
    email: "service@pcomplett.de",
    // Adresse strukturiert für JSON-LD LocalBusiness
    street: "Am Listholze 31A",
    postalCode: "30177",
    addressLocality: "Hannover",
    addressCountry: "DE",
  },

  // Öffnungszeiten für JSON-LD (optional anpassen)
  openingHours: "Mo–Fr 08:00–17:00",
} as const;

export type SiteConfig = typeof siteConfig;
