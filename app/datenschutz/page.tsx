import type { Metadata } from "next";
import {
  LegalPage,
  LegalSection,
  PlaceholderNote,
} from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Informationen zum Datenschutz gemäß DSGVO bei PComplett.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <LegalPage
      title="Datenschutzerklärung"
      intro="Informationen zur Verarbeitung personenbezogener Daten gemäß Art. 13, 14 DSGVO."
    >
      <PlaceholderNote>
        Hinweis: Bitte diese Datenschutzerklärung vor dem Livegang rechtlich
        prüfen lassen (z. B. e-recht24.de oder Ihre/Ihren
        Datenschutzbeauftragte(n)).
      </PlaceholderNote>

      <LegalSection heading="1. Verantwortlicher">
        {/* Bei GmbH-Gründung Firmierung aktualisieren. */}
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          <br />
          PComplett, Inhaber Frank Bernhardt
          <br />
          Am Listholze 31A, 30177 Hannover
          <br />
          E-Mail: service@pcomplett.de · Telefon: 0511 760 773 0
        </p>
      </LegalSection>

      <LegalSection heading="2. Datenschutzbeauftragter">
        <p>
          Als Datenschutzbeauftragter ist bestellt:
          <br />
          Marc Schümann, Telefon: 0511 760 773 12
        </p>
      </LegalSection>

      <LegalSection heading="3. Hosting">
        {/* Hosting-Ziel des Relaunches ist Vercel; bei anderem Anbieter anpassen. */}
        <p>
          Diese Website wird bei der Vercel Inc. (340 S Lemon Ave #4133, Walnut,
          CA 91789, USA) gehostet. Beim Aufruf werden technisch notwendige Daten
          (u. a. IP-Adresse) verarbeitet. Rechtsgrundlage ist unser berechtigtes
          Interesse an einer sicheren und effizienten Bereitstellung (Art. 6
          Abs. 1 lit. f DSGVO). Mit dem Anbieter besteht ein
          Auftragsverarbeitungsvertrag; für die Übermittlung in die USA gelten
          die EU-Standardvertragsklauseln.
        </p>
      </LegalSection>

      <LegalSection heading="4. Server-Logfiles">
        <p>
          Der Hosting-Anbieter erhebt automatisch Informationen in
          Server-Logfiles (Browsertyp, Betriebssystem, Referrer-URL, Uhrzeit
          des Zugriffs, IP-Adresse). Diese Daten dienen der Sicherheit und
          Stabilität und werden nicht mit anderen Datenquellen zusammengeführt.
        </p>
      </LegalSection>

      <LegalSection heading="5. Kontaktformular und Kontaktaufnahme">
        <p>
          Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren,
          verarbeiten wir die von Ihnen angegebenen Daten (Name, E-Mail-Adresse,
          Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO. Die Daten
          werden gelöscht, sobald sie nicht mehr erforderlich sind und keine
          gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
      </LegalSection>

      <LegalSection heading="6. Rückrufservice">
        <p>
          Wenn Sie über unseren Rückrufservice einen Rückruf anfordern,
          verarbeiten wir die von Ihnen angegebenen Daten (Name, Firma,
          Telefonnummer sowie Wunschtag und -zeit) ausschließlich zur
          Durchführung des gewünschten Rückrufs. Rechtsgrundlage ist Art. 6
          Abs. 1 lit. b bzw. lit. f DSGVO. Die Daten werden gelöscht, sobald sie
          nicht mehr erforderlich sind und keine gesetzlichen
          Aufbewahrungspflichten entgegenstehen.
        </p>
      </LegalSection>

      <LegalSection heading="7. KI-Chatbot (Claude API)">
        <p>
          Auf unserer Website bieten wir einen KI-gestützten Chat-Assistenten
          an. Ihre Eingaben im Chat werden zur Beantwortung Ihrer Fragen an
          unseren Dienstleister Anthropic (Anbieter der Claude API) übermittelt
          und dort verarbeitet. Bitte geben Sie im Chat keine
          personenbezogenen oder vertraulichen Daten ein. Rechtsgrundlage ist
          unser berechtigtes Interesse an einer effizienten Beantwortung von
          Anfragen (Art. 6 Abs. 1 lit. f DSGVO). Dabei kann es zu einer
          Übermittlung in ein Drittland (USA) kommen; die hierfür
          erforderlichen Garantien (z. B. Standardvertragsklauseln) sind zu
          beachten.
        </p>
      </LegalSection>

      <LegalSection heading="8. Cookies">
        <p>
          Diese Website verwendet nur technisch notwendige Cookies bzw. keine
          Tracking-Cookies. Sollten künftig Analyse- oder Marketing-Dienste
          eingesetzt werden, ist an dieser Stelle ein Cookie-Banner mit
          Einwilligung erforderlich.
        </p>
      </LegalSection>

      <LegalSection heading="9. Ihre Rechte">
        <p>
          Sie haben das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16),
          Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18),
          Datenübertragbarkeit (Art. 20) sowie Widerspruch (Art. 21 DSGVO).
          Zudem können Sie sich bei einer Aufsichtsbehörde beschweren.
        </p>
      </LegalSection>

      <LegalSection heading="10. Zuständige Aufsichtsbehörde">
        <p>
          Die Landesbeauftragte für den Datenschutz Niedersachsen (LfD
          Niedersachsen), Hannover.
        </p>
      </LegalSection>

      <LegalSection heading="11. Aktualität">
        <p>Stand dieser Datenschutzerklärung: Juli 2026.</p>
      </LegalSection>
    </LegalPage>
  );
}
