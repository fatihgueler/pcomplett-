# LinkedIn-Vorlagen — PComplett-IT

Wiederverwendbare Bannerformate im Markendesign (Navy/Rot, IBM Plex).
Quelle sind die HTML-Dateien in `templates/`, fertige Bilder liegen in
`exports/`.

## Formate

| Datei | Größe | Verwendung | LinkedIn-Format |
|---|---|---|---|
| `stellenausschreibung.html` | 1200×627 | Recruiting-Post | Freigeteiltes Bild im Feed |
| `aktion.html` | 1200×627 | Werbeaktion (siehe `lib/blog.ts` → `aktionen`) | Freigeteiltes Bild im Feed |
| `zitat-kachel.html` | 1200×1200 | Referenz-/Kundenzitat | Quadratischer Feed-Post |
| `unternehmensseite-banner.html` | 1128×191 | Titelbild der Unternehmensseite | LinkedIn-Seiten-Cover |

## Bearbeiten & neu exportieren

1. HTML-Datei in `templates/` öffnen, Text anpassen (Platzhalter `{{…}}`
   durch echte Inhalte ersetzen — nie unausgefüllt veröffentlichen).
2. Mit einem Screenshot-Tool exakt in der Zielgröße rendern und in
   `exports/` als PNG ablegen, z. B.:
   ```bash
   agent-browser set viewport 1200 627
   agent-browser open file:///pfad/zu/templates/aktion.html
   agent-browser screenshot exports/aktion.png
   ```
3. Vor Veröffentlichung: Platzhalter-Check (`grep "{{" exports nicht möglich`
   — bei PNGs visuell prüfen, dass kein `{{…}}` mehr sichtbar ist).

## Offene Platzhalter

- `stellenausschreibung.html`: `{{JOB_TITEL}}`, `{{JOB_KURZBESCHREIBUNG}}`,
  `{{JOB_ART}}` — mit echter Stellenausschreibung befüllen, sobald vorhanden.
- `aktion.html`: `{{AKTION_TITEL}}`, `{{AKTION_TEXT}}`, `{{AKTION_ZEITRAUM}}`
  — synchron zu `lib/blog.ts` → `aktionen` befüllen.
- `zitat-kachel.html` und `unternehmensseite-banner.html`: bereits mit
  echten, freigegebenen Inhalten befüllt (kein Platzhalter offen).
