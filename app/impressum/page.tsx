import type { Metadata } from "next";
import {
  LegalPage,
  LegalSection,
  PlaceholderNote,
} from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung der PComplett.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <LegalPage
      title="Impressum"
      intro="Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz) und § 18 Abs. 2 MStV."
    >
      <PlaceholderNote>
        Pflichtseite: Bitte alle {"{{"}Platzhalter{"}}"} durch die echten
        Unternehmensdaten ersetzen. Rechtssichere Vorlagen liefert z. B.
        e-recht24.de.
      </PlaceholderNote>

      <LegalSection heading="Diensteanbieter">
        {/* TODO(CONTENT): Firmierung der neuen IT GmbH + Adresse bestätigen. Adresse laut alter Website: Am Listholze 31A, 30177 Hannover. Wegen GmbH-Gründung ALLE Angaben vor Livegang neu bestätigen, nicht ungeprüft übernehmen. */}
        <p>
          {"{{FIRMEN_RECHTSNAME}}"}
          <br />
          {"{{STRASSE_NR}}"}
          <br />
          {"{{PLZ}} {{STADT}}"}
          <br />
          {"{{LAND}}"}
        </p>
      </LegalSection>

      <LegalSection heading="Vertreten durch">
        {/* TODO(CONTENT): Geschäftsführer der IT GmbH eintragen. Alte Website nennt Inhaber Frank Bernhardt — wegen GmbH-Gründung neu bestätigen. */}
        <p>{"{{VERTRETUNGSBERECHTIGTE_PERSON}}"}</p>
      </LegalSection>

      <LegalSection heading="Kontakt">
        <p>
          Telefon: 0511 760 773 0
          <br />
          Fax: 0511 760 773 49
          <br />
          E-Mail: service@pcomplett.de
        </p>
      </LegalSection>

      <LegalSection heading="Registereintrag">
        {/* TODO(CONTENT): Handelsregister/HRB der neuen IT GmbH eintragen. */}
        <p>
          Registergericht: {"{{REGISTERGERICHT}}"}
          <br />
          Registernummer: {"{{REGISTERNUMMER}}"}
        </p>
        <PlaceholderNote>
          Nur bei eingetragenen Unternehmen (z. B. GmbH, UG) erforderlich – sonst
          diesen Abschnitt entfernen.
        </PlaceholderNote>
      </LegalSection>

      <LegalSection heading="Umsatzsteuer-ID">
        {/* TODO(CONTENT): USt-IdNr. der IT GmbH eintragen. Alte Website nennt DE169516345 — wegen GmbH-Gründung neu bestätigen. */}
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
          <br />
          {"{{UMSATZSTEUER_ID}}"}
        </p>
      </LegalSection>

      <LegalSection heading="Redaktionell verantwortlich">
        {/* TODO(CONTENT): Verantwortliche Person + Adresse bestätigen (siehe Hinweise oben). */}
        <p>
          {"{{VERANTWORTLICHE_PERSON}}"}
          <br />
          {"{{STRASSE_NR}}, {{PLZ}} {{STADT}}"}
        </p>
      </LegalSection>

      <LegalSection heading="EU-Streitschlichtung">
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          . Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
      </LegalSection>

      <LegalSection heading="Verbraucherstreitbeilegung / Universalschlichtungsstelle">
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
        <PlaceholderNote>
          Diese Angabe je nach tatsächlicher Bereitschaft/Verpflichtung anpassen.
        </PlaceholderNote>
      </LegalSection>
    </LegalPage>
  );
}
