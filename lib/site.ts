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
    "IT-Systemhaus für Unternehmen in Hannover: Serviceverträge, Serveraufbau, Netzwerke, Arbeitsplätze und Telefonanlagen. Wir übernehmen den Betrieb Ihrer IT – seit 1994.",
  slogan: "IT-Systemhaus für Unternehmen",

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

  // Koordinaten für die Karte (Leaflet/OpenStreetMap).
  // {{KARTE_KOORDINATEN}} – Näherungswert, bitte exakte Position bestätigen.
  geo: { lat: 52.399, lng: 9.788 },

  // Öffnungszeiten für JSON-LD (optional anpassen)
  openingHours: "Mo–Fr 08:00–17:00",
} as const;

export type SiteConfig = typeof siteConfig;
