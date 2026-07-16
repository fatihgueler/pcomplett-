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

## 3. Umgebungsvariablen (für den E-Mail-Versand)

Das Kontaktformular ist aktuell ein **Stub** (nimmt Anfragen an, versendet aber
noch keine E-Mail). Zum Aktivieren:

1. Dienst wählen – **Resend** empfohlen ([resend.com](https://resend.com),
   kostenlos bis 3.000 Mails/Monat) und als Dependency ergänzen:
   `npm install resend`
2. In `app/api/kontakt/route.ts` den markierten `TODO`-Block implementieren.
3. In Vercel unter **Settings → Environment Variables** setzen:

   | Variable | Wert |
   |----------|------|
   | `RESEND_API_KEY` | API-Key aus dem Resend-Dashboard |
   | `CONTACT_EMAIL` | Zieladresse für Anfragen, z. B. `info@pcomplett.de` |

4. Absender-Domain in Resend verifizieren (DKIM/SPF-Records beim
   Domain-Provider setzen), damit E-Mails zugestellt werden.

Vorlage siehe `.env.example`. **Keine echten Keys committen.**

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
