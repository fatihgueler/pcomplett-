# -*- coding: utf-8 -*-
"""
Erzeugt public/downloads/pcomplett-it-firmenprofil.pdf.

Quelle der Inhalte: lib/content.ts, lib/site.ts (siehe app/firmenprofil/page.tsx
fuer die Web-Entsprechung dieser Datei -- beide muessen inhaltlich synchron
gehalten werden). Bei Textaenderungen dieses Skript erneut ausfuehren:

    python3 scripts/generate_firmenprofil_pdf.py
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    HRFlowable,
)
from reportlab.lib.enums import TA_LEFT

# Markenfarben (siehe brand.md)
NAVY = colors.HexColor("#0f172a")
RED = colors.HexColor("#c1121f")
SLATE = colors.HexColor("#475569")
BORDER = colors.HexColor("#e2e8f0")

OUT_PATH = "public/downloads/pcomplett-it-firmenprofil.pdf"

styles = getSampleStyleSheet()
h1 = ParagraphStyle("h1", parent=styles["Title"], fontName="Helvetica-Bold",
                     fontSize=22, textColor=NAVY, spaceAfter=4, alignment=TA_LEFT)
eyebrow = ParagraphStyle("eyebrow", parent=styles["Normal"], fontName="Helvetica-Bold",
                          fontSize=9, textColor=RED, spaceAfter=2)
sub = ParagraphStyle("sub", parent=styles["Normal"], fontName="Helvetica",
                      fontSize=11, textColor=SLATE, spaceAfter=10, leading=15)
h2 = ParagraphStyle("h2", parent=styles["Heading2"], fontName="Helvetica-Bold",
                     fontSize=14, textColor=NAVY, spaceBefore=16, spaceAfter=8)
body = ParagraphStyle("body", parent=styles["Normal"], fontName="Helvetica",
                       fontSize=9.5, textColor=colors.HexColor("#1e293b"), leading=13)
small = ParagraphStyle("small", parent=styles["Normal"], fontName="Helvetica",
                        fontSize=8.5, textColor=SLATE, leading=12)

story = []

# --- Kopf --------------------------------------------------------------
story.append(Paragraph("PCOMPLETT-IT", eyebrow))
story.append(Paragraph("Firmenprofil", h1))
story.append(Paragraph(
    "IT-Systemhaus für Unternehmen in Hannover: Serviceverträge, Serveraufbau, "
    "Netzwerke, Arbeitsplätze und Telefonanlagen. Wir übernehmen den Betrieb "
    "Ihrer IT – seit 1994.",
    sub,
))
story.append(HRFlowable(width="100%", thickness=1, color=BORDER, spaceAfter=14))

# --- Leistungen ----------------------------------------------------------
story.append(Paragraph("Leistungen", h2))
leistungen = [
    ("Serviceverträge", "Definierte Leistungen, kalkulierbare Kosten und verbindliche Reaktionszeiten für den laufenden Betrieb Ihrer Systeme."),
    ("Serveraufbau", "Planung, Einrichtung und Betrieb Ihrer Server – vor Ort oder virtualisiert. Stabil, ausfallsicher und sauber dokumentiert."),
    ("Netzwerke", "Strukturierte Verkabelung, WLAN und sichere Netzwerktechnik – zuverlässig geplant und für Wachstum vorbereitet."),
    ("Arbeitsplätze einrichten", "Neue PC-Arbeitsplätze komplett startklar: Hardware, Software und Anbindung – einheitlich eingerichtet und übergeben."),
    ("Telefonanlagen", "Moderne Telefonie für Unternehmen: Planung, Einrichtung und Betreuung Ihrer Telefonanlage – klar und wartungsarm."),
    ("IT-Sicherheit & Hardware", "Firewalls, Backups und geprüfte Hardware. Wir sichern Systeme und Daten ab, bevor ein Zwischenfall zum Problem wird."),
    ("Hardware & Software", "Beschaffung und Auflistung passender Hardware und Software – herstellerunabhängig empfohlen und einsatzfertig geliefert."),
]
rows = []
for i in range(0, len(leistungen), 2):
    pair = leistungen[i:i + 2]
    cells = [Paragraph(f"<b>{title}</b><br/>{text}", body) for title, text in pair]
    if len(cells) == 1:
        cells.append("")
    rows.append(cells)
t = Table(rows, colWidths=[85 * mm, 85 * mm])
t.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
    ("TOPPADDING", (0, 0), (-1, -1), 2),
]))
story.append(t)

# --- Warum PComplett-IT ---------------------------------------------------
story.append(Paragraph("Warum PComplett-IT", h2))
points = [
    ("Seit 1994", "Über 30 Jahre Erfahrung als IT-Systemhaus in Hannover."),
    ("Herstellerunabhängig", "Wir empfehlen die Lösung, die zu Ihrem Betrieb passt."),
    ("Fester Ansprechpartner", "Persönliche Betreuung statt wechselnder Hotlines."),
    ("Region Hannover", "Schnell vor Ort – und deutschlandweit per Fernwartung."),
]
prow = [Paragraph(f"<b>{t}</b><br/>{x}", body) for t, x in points]
pt = Table([prow[0:2], prow[2:4]], colWidths=[85 * mm, 85 * mm])
pt.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
]))
story.append(pt)

# --- Serviceverträge -------------------------------------------------------
story.append(Paragraph("Serviceverträge", h2))
story.append(Paragraph(
    "Konkrete Konditionen und Reaktionszeiten stimmen wir individuell mit Ihnen ab.",
    small,
))
story.append(Spacer(1, 4))
tiers = [
    ("Basis", "Solide Grundabsicherung", "bis zum nächsten Werktag",
     ["Support per Fernwartung", "Update- & Patch-Management", "Backup-Überwachung", "Fester Ansprechpartner"]),
    ("Komfort", "Für den laufenden Betrieb", "innerhalb von 4 Stunden",
     ["Alles aus Basis", "Proaktives Monitoring", "Vor-Ort-Service nach Bedarf", "Priorisierte Bearbeitung"]),
    ("Premium", "Maximale Verfügbarkeit", "innerhalb von 1 Stunde",
     ["Alles aus Komfort", "Erweiterte IT-Sicherheit", "Regelmäßige IT-Strategiegespräche", "Bevorzugte Reaktionszeiten"]),
]
tier_cells = []
for name, tagline, reaction, features in tiers:
    feat_html = "<br/>".join(f"• {f}" for f in features)
    tier_cells.append(Paragraph(
        f"<b>{name}</b><br/>{tagline}<br/><font color='#c1121f'><b>Reaktionszeit: {reaction}</b></font><br/><br/>{feat_html}",
        body,
    ))
tt = Table([tier_cells], colWidths=[56 * mm, 56 * mm, 56 * mm])
tt.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("BOX", (0, 0), (0, 0), 0.5, BORDER),
    ("BOX", (1, 0), (1, 0), 0.5, BORDER),
    ("BOX", (2, 0), (2, 0), 0.5, BORDER),
    ("LEFTPADDING", (0, 0), (-1, -1), 8),
    ("RIGHTPADDING", (0, 0), (-1, -1), 8),
    ("TOPPADDING", (0, 0), (-1, -1), 8),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
]))
story.append(tt)

# --- Referenzen ------------------------------------------------------------
story.append(Paragraph("Ausgewählte Referenzen", h2))
testimonials = [
    ("Individuelle Warenwirtschaftssoftware – entwickelt und betreut von PComplett-IT.", "ThyssenKrupp Stahlbau"),
    ("Word-Automatisierung für standardisierte Dokumentenvorlagen.", "TUI"),
    ("Software zur Abrechnung und Störungserfassung.", "Deutsche Messe AG, Hannover"),
    ("Telefonanlage mit 300 Anschlüssen – geplant und umgesetzt.", "HIS Hochschul-Informations-System GmbH"),
    ("Warenwirtschaft und Betrieb virtueller Server.", "J+S Druckfarben"),
]
for quote, author in testimonials:
    story.append(Paragraph(f"„{quote}“", body))
    story.append(Paragraph(f"<b>{author}</b>", small))
    story.append(Spacer(1, 6))

story.append(Paragraph(
    "<b>Technologie-Partner:</b> HP · Fujitsu · Starface · Yeastar · Jeester",
    body,
))

# --- Kontakt -------------------------------------------------------------
story.append(Spacer(1, 10))
story.append(HRFlowable(width="100%", thickness=1, color=BORDER, spaceAfter=10))
story.append(Paragraph("Kontakt", h2))
story.append(Paragraph(
    "Telefon: 0511 760 773 0<br/>"
    "E-Mail: service@pcomplett.de<br/>"
    "Am Listholze 31A, 30177 Hannover<br/>"
    "Mo–Fr 08:00–17:00 Uhr<br/>"
    "www.pcomplett.de",
    body,
))

doc = SimpleDocTemplate(
    OUT_PATH, pagesize=A4,
    leftMargin=20 * mm, rightMargin=20 * mm, topMargin=18 * mm, bottomMargin=18 * mm,
    title="PComplett-IT Firmenprofil", author="PComplett-IT",
)
doc.build(story)
print(f"OK: {OUT_PATH}")
