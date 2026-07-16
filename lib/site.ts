/**
 * Zentrale Site-Konfiguration (Single Source of Truth für Metadaten & Kontakt).
 * Platzhalter im Format {{NAME}} vom Kunden ausfüllen lassen.
 */

export const siteConfig = {
  name: "PComplett",
  legalName: "{{FIRMEN_RECHTSNAME}}", // z.B. "PComplett GmbH"
  // Produktions-URL – für Metadata, Sitemap, OG-Tags, JSON-LD.
  url: "https://www.pcomplett.de",
  city: "{{STADT}}",
  description:
    "PComplett ist Ihr IT-Systemhaus für kleine und mittlere Unternehmen: IT-Lösungen, Software, Development, Mediendesign, Service, Projektierung und Vermietung – aus einer Hand.",
  slogan: "Ihr IT-Partner für den Mittelstand",

  contact: {
    phone: "{{TELEFON}}", // z.B. "+49 30 1234567"
    email: "{{EMAIL}}", // z.B. "info@pcomplett.de"
    // Adresse strukturiert für JSON-LD LocalBusiness
    street: "{{STRASSE_NR}}",
    postalCode: "{{PLZ}}",
    addressLocality: "{{STADT}}",
    addressCountry: "DE",
  },

  // Vertrauens-Kennzahlen (Platzhalter – echte Werte einsetzen)
  stats: {
    yearsExperience: "{{JAHRE_ERFAHRUNG}}",
    customers: "{{ANZAHL_KUNDEN}}",
    projects: "{{ANZAHL_PROJEKTE}}",
  },

  // Öffnungszeiten für JSON-LD (optional anpassen)
  openingHours: "Mo–Fr 08:00–17:00",
} as const;

export type SiteConfig = typeof siteConfig;
