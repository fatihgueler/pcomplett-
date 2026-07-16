import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/newsletter-schema";

/**
 * Newsletter-Anmeldung – VORBEREITETER STUB (Double-Opt-in).
 *
 * Aktuell: validiert die Eingaben serverseitig und antwortet mit Erfolg,
 * verschickt aber noch KEINE Bestätigungs-E-Mail und speichert nichts.
 *
 * Zum Aktivieren (Double-Opt-in):
 *  1. Dienst wählen – z.B. Resend oder Brevo – und als Dependency ergänzen.
 *  2. Umgebungsvariablen setzen (siehe .env.example).
 *  3. Im markierten Block unten Bestätigungs-Mail + Speicherung umsetzen.
 */
export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Ungültige Anfrage." },
      { status: 400 },
    );
  }

  const parsed = newsletterSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Validierung fehlgeschlagen.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  // Honeypot: Bots füllen dieses Feld aus – still verwerfen.
  if (parsed.data.website) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  // ---------------------------------------------------------------------------
  // TODO(Freigabe erforderlich): Double-Opt-in umsetzen.
  //  - Kontakt mit Status "pending" + Segment (parsed.data.segment) speichern.
  //  - Bestätigungs-E-Mail mit eindeutigem Token versenden (Resend/Brevo).
  //  - Bestätigungs-Route anlegen, die den Status auf "confirmed" setzt.
  // Beispiel-Umgebungsvariablen: NEWSLETTER_PROVIDER, RESEND_API_KEY / BREVO_API_KEY.
  // ---------------------------------------------------------------------------

  return NextResponse.json({ success: true }, { status: 200 });
}
