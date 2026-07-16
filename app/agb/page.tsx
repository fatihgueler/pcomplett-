import type { Metadata } from "next";
import {
  LegalPage,
  LegalSection,
  PlaceholderNote,
} from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "AGB",
  description:
    "Allgemeine Geschäftsbedingungen der PComplett für Leistungen und Lieferungen.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/agb" },
};

export default function AgbPage() {
  return (
    <LegalPage
      title="Allgemeine Geschäftsbedingungen"
      intro="Bedingungen für die Erbringung von Leistungen und Lieferungen der PComplett."
    >
      <PlaceholderNote>
        AGB sind rechtlich anspruchsvoll und müssen auf das konkrete
        Leistungsangebot zugeschnitten sein. Bitte durch eine anwaltlich
        geprüfte Fassung ersetzen. Das folgende Gerüst dient nur als Struktur.
      </PlaceholderNote>

      <LegalSection heading="§ 1 Geltungsbereich">
        <p>{"{{AGB_GELTUNGSBEREICH}}"}</p>
      </LegalSection>

      <LegalSection heading="§ 2 Vertragsschluss">
        <p>{"{{AGB_VERTRAGSSCHLUSS}}"}</p>
      </LegalSection>

      <LegalSection heading="§ 3 Leistungen und Mitwirkungspflichten">
        <p>{"{{AGB_LEISTUNGEN}}"}</p>
      </LegalSection>

      <LegalSection heading="§ 4 Preise und Zahlungsbedingungen">
        <p>{"{{AGB_PREISE_ZAHLUNG}}"}</p>
      </LegalSection>

      <LegalSection heading="§ 5 Liefer- und Leistungszeiten">
        <p>{"{{AGB_LIEFERZEITEN}}"}</p>
      </LegalSection>

      <LegalSection heading="§ 6 Gewährleistung und Haftung">
        <p>{"{{AGB_GEWAEHRLEISTUNG_HAFTUNG}}"}</p>
      </LegalSection>

      <LegalSection heading="§ 7 Eigentumsvorbehalt">
        <p>{"{{AGB_EIGENTUMSVORBEHALT}}"}</p>
      </LegalSection>

      <LegalSection heading="§ 8 Schlussbestimmungen">
        <p>{"{{AGB_SCHLUSSBESTIMMUNGEN}}"}</p>
      </LegalSection>
    </LegalPage>
  );
}
