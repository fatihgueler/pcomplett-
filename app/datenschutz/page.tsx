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
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          <br />
          {"{{FIRMEN_RECHTSNAME}}"}
          <br />
          {"{{STRASSE_NR}}, {{PLZ}} {{STADT}}"}
          <br />
          E-Mail: {"{{EMAIL}}"} · Telefon: {"{{TELEFON}}"}
        </p>
      </LegalSection>

      <LegalSection heading="2. Datenschutzbeauftragte(r)">
        <p>{"{{DATENSCHUTZBEAUFTRAGTER_ODER_HINWEIS_ENTFAELLT}}"}</p>
      </LegalSection>

      <LegalSection heading="3. Hosting">
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

      <LegalSection heading="6. Cookies">
        <p>
          Diese Website verwendet nur technisch notwendige Cookies bzw. keine
          Tracking-Cookies. Sollten künftig Analyse- oder Marketing-Dienste
          eingesetzt werden, ist an dieser Stelle ein Cookie-Banner mit
          Einwilligung erforderlich.
        </p>
        <PlaceholderNote>
          Anpassen, sobald Tracking/Analytics eingebunden wird ({"{{"}
          COOKIE_DETAILS{"}}"}).
        </PlaceholderNote>
      </LegalSection>

      <LegalSection heading="7. Ihre Rechte">
        <p>
          Sie haben das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16),
          Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18),
          Datenübertragbarkeit (Art. 20) sowie Widerspruch (Art. 21 DSGVO).
          Zudem können Sie sich bei einer Aufsichtsbehörde beschweren.
        </p>
      </LegalSection>

      <LegalSection heading="8. Zuständige Aufsichtsbehörde">
        <p>{"{{AUFSICHTSBEHOERDE_BUNDESLAND}}"}</p>
      </LegalSection>

      <LegalSection heading="9. Aktualität">
        <p>Stand dieser Datenschutzerklärung: {"{{STAND_DATUM}}"}.</p>
      </LegalSection>
    </LegalPage>
  );
}
