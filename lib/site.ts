/**
 * Zentrale Site-Konfiguration (Single Source of Truth für Metadaten & Kontakt).
 * Platzhalter im Format {{NAME}} vom Kunden ausfüllen lassen.
 */

export const siteConfig = {
  name: "PComplett",
  legalName: "{{FIRMEN_RECHTSNAME}}", // z.B. "PComplett IT GmbH" (künftige Rechtsform)
  // Produktions-URL – für Metadata, Sitemap, OG-Tags, JSON-LD.
  url: "https://www.pcomplett.de",
  city: "{{STADT}}",
  description:
    "PComplett ist Ihr IT- & KI-Systemhaus für Unternehmen und Privatkunden: KI-Lösungen, IT-Betreuung, IT-Sicherheit, Software & JTL-Module, Development sowie PC-Service – aus einer Hand.",
  slogan: "IT & KI für Unternehmen und Privatkunden",

  contact: {
    phone: "{{TELEFON}}", // z.B. "+49 30 1234567"
    email: "{{EMAIL}}", // z.B. "info@pcomplett.de"
    // Adresse strukturiert für JSON-LD LocalBusiness
    street: "{{STRASSE_NR}}",
    postalCode: "{{PLZ}}",
    addressLocality: "{{STADT}}",
    addressCountry: "DE",
  },

  // Öffnungszeiten für JSON-LD (optional anpassen)
  openingHours: "Mo–Fr 08:00–17:00",
} as const;

export type SiteConfig = typeof siteConfig;
