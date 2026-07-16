# Deployment-Anleitung (Vercel)

Diese Website ist für **Vercel** optimiert. Ein Push auf `main` löst automatisch
ein Deployment aus.

## 1. Git-Repository anlegen & pushen

```bash
git remote add origin https://github.com/<konto>/pcomplett-relaunch.git
git branch -M main
git push -u origin main
```

> Ein lokales Repository mit Commit-Historie ist bereits vorhanden.

## 2. Vercel-Projekt einrichten

1. Bei [vercel.com](https://vercel.com) mit GitHub anmelden (kostenlos).
2. **Add New → Project** → dieses Repository importieren.
3. Framework-Preset wird automatisch als **Next.js** erkannt.
4. **Deploy** klicken – fertig. SSL/HTTPS ist automatisch aktiv.

## 3. Umgebungsvariablen

In Vercel unter **Settings → Environment Variables** setzen (Vorlage:
`.env.example`). **Keine echten Keys committen.**

| Variable | Zweck |
|----------|-------|
| `ANTHROPIC_API_KEY` | Aktiviert den KI-Chatbot (Claude API). Ohne Key zeigt das Widget einen Hinweis statt eines Fehlers. |
| `CHATBOT_MODEL` | Optional; Chat-Modell überschreiben (Standard `claude-sonnet-4-6`). |
| `TICKET_PROVIDER`, … | Ticketsystem für Kontaktanfragen (aktuell Mock-Adapter). |
| `NEWSLETTER_PROVIDER`, … | Newsletter-Dienst für Double-Opt-in (aktuell Stub). |
| `RESEND_API_KEY`, `CONTACT_EMAIL` | Optionaler E-Mail-Versand des Kontaktformulars. |

**Funktionale Stubs aktivieren:**

- **Kontakt → Ticketsystem:** In `lib/tickets.ts` einen echten `TicketAdapter`
  (Zammad/Freshdesk/osTicket) ergänzen und in `getTicketAdapter()` per
  `TICKET_PROVIDER` auswählen. Die API-Route bleibt unverändert.
- **Newsletter:** In `app/api/newsletter/route.ts` den `TODO`-Block umsetzen
  (Kontakt speichern + Bestätigungs-Mail via Resend/Brevo).
- **Chatbot:** Nur `ANTHROPIC_API_KEY` setzen – die Route ist bereits fertig.

## 4. Eigene Domain verbinden

1. In Vercel **Settings → Domains** → `pcomplett.de` (und `www.pcomplett.de`)
   hinzufügen.
2. Beim Domain-Provider die von Vercel angezeigten DNS-Records setzen –
   üblich: `A`-Record `76.76.21.21` für die Apex-Domain und `CNAME`
   `cname.vercel-dns.com` für `www`. Es gelten die im Vercel-Dashboard
   angezeigten Werte.
3. Nach DNS-Propagation ist die Domain aktiv, SSL wird automatisch ausgestellt.

## 5. Vor dem Go-Live

- [ ] Alle Platzhalter aus **[CONTENT.md](./CONTENT.md)** ersetzt
- [ ] Impressum, Datenschutz, AGB rechtlich geprüft
- [ ] `siteConfig.url` in `lib/site.ts` = echte Produktions-URL
- [ ] `npm run build` läuft fehlerfrei durch
- [ ] Kontaktformular-Versand getestet (nach Aktivierung)
