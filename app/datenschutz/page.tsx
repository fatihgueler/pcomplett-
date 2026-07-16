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
        Wichtig: Diese Seite ist ein strukturiertes Gerüst. Eine
        rechtssichere, vollständige Datenschutzerklärung muss individuell
        erstellt werden – z. B. über den Generator von e-recht24.de oder durch
        eine/einen Datenschutzbeauftragte(n). Alle {"{{"}Platzhalter{"}}"} sind
        zu ersetzen.
      </PlaceholderNote>

      <LegalSection heading="1. Verantwortlicher">
        {/* TODO(CONTENT): Firmierung der neuen IT GmbH + Adresse bestätigen. Adresse laut alter Website: Am Listholze 31A, 30177 Hannover. Wegen GmbH-Gründung vor Livegang neu bestätigen. */}
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          <br />
          {"{{FIRMEN_RECHTSNAME}}"}
          <br />
          {"{{STRASSE_NR}}, {{PLZ}} {{STADT}}"}
          <br />
          E-Mail: service@pcomplett.de · Telefon: 0511 760 773 0
        </p>
      </LegalSection>

      <LegalSection heading="2. Datenschutzbeauftragte(r)">
        {/* TODO(CONTENT): Datenschutzbeauftragte(n) benennen oder Hinweis, dass keine(r) bestellt ist. */}
        <p>{"{{DATENSCHUTZBEAUFTRAGTER_ODER_HINWEIS_ENTFAELLT}}"}</p>
      </LegalSection>

      <LegalSection heading="3. Hosting">
        {/* TODO(CONTENT): Hosting-Anbieter eintragen (z.B. Vercel Inc.) und AV-Vertrag bestätigen. */}
        <p>
          Diese Website wird bei einem externen Dienstleister gehostet
          ({"{{HOSTING_ANBIETER}}"}). Beim Aufruf werden technisch notwendige
          Daten (u. a. IP-Adresse) verarbeitet. Rechtsgrundlage ist unser
          berechtigtes Interesse an einer sicheren und effizienten
          Bereitstellung (Art. 6 Abs. 1 lit. f DSGVO). Ein
          Auftragsverarbeitungsvertrag mit dem Anbieter liegt vor.
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

      <LegalSection heading="6. Newsletter">
        {/* TODO(CONTENT): Newsletter-Dienstleister benennen (z.B. Resend/Brevo) und AV-Vertrag bestätigen. */}
        <p>
          Wenn Sie sich für unseren Newsletter anmelden, verarbeiten wir Ihre
          E-Mail-Adresse sowie das gewählte Segment (Unternehmen oder Privat),
          um Ihnen die gewünschten Informationen zuzusenden. Die Anmeldung
          erfolgt im Double-Opt-in-Verfahren: Sie erhalten zunächst eine
          Bestätigungs-E-Mail, und Ihre Einwilligung wird protokolliert.
          Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
          Sie können den Newsletter jederzeit abbestellen und Ihre Einwilligung
          mit Wirkung für die Zukunft widerrufen.
        </p>
      </LegalSection>

      <LegalSection heading="7. KI-Chatbot (Claude API)">
        {/* TODO(CONTENT): Auftragsverarbeitung/Datenübermittlung mit Anthropic (Claude API) rechtlich bestätigen (AV-Vertrag, Garantien für Drittlandtransfer). */}
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
        {/* TODO(CONTENT): Cookie-/Tracking-Details ergänzen, sobald Analytics/Marketing eingebunden wird. */}
        <PlaceholderNote>
          Anpassen, sobald Tracking/Analytics eingebunden wird ({"{{"}
          COOKIE_DETAILS{"}}"}).
        </PlaceholderNote>
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
        {/* TODO(CONTENT): Zuständige Aufsichtsbehörde eintragen (Sitz Hannover → Niedersachsen) und vor Livegang bestätigen. */}
        <p>{"{{AUFSICHTSBEHOERDE_BUNDESLAND}}"}</p>
      </LegalSection>

      <LegalSection heading="11. Aktualität">
        {/* TODO(CONTENT): Stand-Datum vor Livegang einsetzen. */}
        <p>Stand dieser Datenschutzerklärung: {"{{STAND_DATUM}}"}.</p>
      </LegalSection>
    </LegalPage>
  );
}
