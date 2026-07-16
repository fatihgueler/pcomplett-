# Offene Inhalte & Platzhalter

Diese Website enthält bewusst **Platzhalter im Format `{{NAME}}`**, wo echte
Daten fehlen. Bitte alle folgenden Stellen ersetzen, bevor die Seite live geht.
Ein globales Suchen nach `{{` findet alle offenen Stellen.

## 1. Marke & Design

| Platzhalter | Bedeutung | Datei(en) |
|-------------|-----------|-----------|
| `{{BRAND_RED_HEX}}` | Echtes Markenrot (aktuell Fallback `#C1121F`) | `app/globals.css` (`--brand`), `app/icon.tsx`, `app/opengraph-image.tsx` |
| `{{LOGO}}` | Echte Logo-Datei statt Text-Wortmarke | `components/layout/Logo.tsx` |

> Farbe zentral in `app/globals.css` unter `--brand`, `--brand-hover`,
> `--brand-active` anpassen – der Rest der Seite zieht automatisch nach.

## 2. Unternehmens- & Kontaktdaten — `lib/site.ts`

| Platzhalter | Beispiel |
|-------------|----------|
| `{{FIRMEN_RECHTSNAME}}` | „PComplett GmbH“ |
| `{{STRASSE_NR}}` | „Musterstraße 1“ |
| `{{PLZ}}` / `{{STADT}}` | „12345“ / „Musterstadt“ |
| `{{TELEFON}}` | „+49 30 1234567“ |
| `{{EMAIL}}` | „info@pcomplett.de“ |

Zusätzlich prüfen: `siteConfig.url`, `siteConfig.openingHours`,
`siteConfig.legalName`.

## 3. Vertrauens-Kennzahlen & Kundenstimmen — `lib/content.ts`

| Platzhalter | Bedeutung |
|-------------|-----------|
| `{{JAHRE_ERFAHRUNG}}` | z. B. „20“ |
| `{{ANZAHL_KUNDEN}}` | z. B. „150“ |
| `{{ANZAHL_PROJEKTE}}` | z. B. „500“ |
| `{{TESTIMONIAL_1}}`–`{{TESTIMONIAL_3}}` | Zitat der Kundenstimme |
| `{{KUNDE_1_NAME}}`–`{{KUNDE_3_NAME}}` | Name der/des Zitatgebenden |
| `{{KUNDE_1_FIRMA}}`–`{{KUNDE_3_FIRMA}}` | Firma/Rolle |

## 4. Partner-Logos — `lib/content.ts` / `components/sections/Partner.tsx`

`{{PARTNER_1}}`–`{{PARTNER_6}}` durch echte Partnernamen ersetzen. Für echte
Grafik-Logos die Text-Marke in `Partner.tsx` durch `next/image` ersetzen
(Graustufen per `grayscale`, Farbe bei Hover per `hover:grayscale-0`).

## 5. Rechtsseiten (Pflicht!) — juristisch prüfen lassen

**Impressum** (`app/impressum/page.tsx`): `{{FIRMEN_RECHTSNAME}}`,
`{{STRASSE_NR}}`, `{{PLZ}}`, `{{STADT}}`, `{{LAND}}`,
`{{VERTRETUNGSBERECHTIGTE_PERSON}}`, `{{TELEFON}}`, `{{EMAIL}}`,
`{{REGISTERGERICHT}}`, `{{REGISTERNUMMER}}`, `{{UMSATZSTEUER_ID}}`,
`{{VERANTWORTLICHE_PERSON}}`.

**Datenschutz** (`app/datenschutz/page.tsx`):
`{{DATENSCHUTZBEAUFTRAGTER_ODER_HINWEIS_ENTFAELLT}}`, `{{HOSTING_ANBIETER}}`,
`{{AUFSICHTSBEHOERDE_BUNDESLAND}}`, `{{STAND_DATUM}}`.

**AGB** (`app/agb/page.tsx`): sämtliche `{{AGB_*}}`-Abschnitte.

> Impressum, Datenschutzerklärung und AGB müssen rechtssicher sein. Empfohlen:
> Generator von **e-recht24.de** oder anwaltliche Prüfung. Keine der hier
> vorhandenen Texte sind rechtsverbindlich – sie bilden nur die Struktur ab.

## 6. Kontaktformular-Versand (technisch)

Die API-Route `app/api/kontakt/route.ts` ist ein **Stub**: Sie validiert die
Eingaben, versendet aber noch keine E-Mail. Zum Aktivieren siehe `DEPLOYMENT.md`
und `.env.example` (`RESEND_API_KEY`, `CONTACT_EMAIL`). Der Einbau eines
externen Dienstes wurde bewusst offen gelassen und benötigt eine Freigabe.

## 7. Bilder

Aktuell werden keine Fotos verwendet (bewusst grafisch/typografisch gelöst).
Falls echte Bilder gewünscht sind: ausschließlich über `next/image` einbinden,
mit `alt`-Text und expliziten Maßen.
