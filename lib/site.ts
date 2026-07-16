/**
 * Zentrale Site-Konfiguration (Single Source of Truth für Metadaten & Kontakt).
 * Platzhalter im Format {{NAME}} vom Kunden ausfüllen lassen.
 */

export const siteConfig = {
  name: "PComplett",
  // TODO(CONTENT): Firmierung der neuen IT GmbH vor Livegang bestätigen (GmbH-Gründung).
  legalName: "{{FIRMEN_RECHTSNAME}}",
  // Produktions-URL – für Metadata, Sitemap, OG-Tags, JSON-LD.
  url: "https://www.pcomplett.de",
  city: "Hannover",
  description:
    "PComplett ist Ihr IT- & KI-Systemhaus für Unternehmen und Privatkunden: KI-Lösungen, IT-Betreuung, IT-Sicherheit, Software & JTL-Module, Development sowie PC-Service – aus einer Hand.",
  slogan: "IT & KI für Unternehmen und Privatkunden",

  contact: {
    phone: "0511 760 773 0",
    email: "service@pcomplett.de",
    // Adresse strukturiert für JSON-LD LocalBusiness
    // TODO(CONTENT): Adresse noch nicht bestätigt — laut alter Website: Am Listholze 31A, 30177 Hannover. Vor Livegang verifizieren (GmbH-Gründung!).
    street: "{{STRASSE_NR}}",
    postalCode: "{{PLZ}}",
    addressLocality: "Hannover",
    addressCountry: "DE",
  },

  // Öffnungszeiten für JSON-LD (optional anpassen)
  openingHours: "Mo–Fr 08:00–17:00",
} as const;

export type SiteConfig = typeof siteConfig;
