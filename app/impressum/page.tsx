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
      {/* Hinweis für später: Bei Gründung der IT GmbH Firmierung, Vertretung (Geschäftsführer), Handelsregister/HRB und USt-IdNr. aktualisieren. */}

      <LegalSection heading="Diensteanbieter">
        <p>
          PComplett
          <br />
          Inhaber: Frank Bernhardt
          <br />
          Am Listholze 31A
          <br />
          30177 Hannover
          <br />
          Deutschland
        </p>
      </LegalSection>

      <LegalSection heading="Vertreten durch">
        <p>Frank Bernhardt (Inhaber)</p>
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

      <LegalSection heading="Umsatzsteuer-ID">
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
          <br />
          DE169516345
        </p>
      </LegalSection>

      <LegalSection heading="Redaktionell verantwortlich">
        <p>
          Frank Bernhardt
          <br />
          Am Listholze 31A, 30177 Hannover
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
