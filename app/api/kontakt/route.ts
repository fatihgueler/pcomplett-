import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

/**
 * Kontaktformular-Backend – VORBEREITETER STUB.
 *
 * Aktuell: validiert die Eingaben serverseitig und antwortet mit Erfolg,
 * versendet aber noch KEINE E-Mail. Der Versand über einen externen Dienst
 * (z.B. Resend oder SMTP) wurde bewusst nicht eingebaut – das erfordert eine
 * Freigabe und Zugangsdaten.
 *
 * Zum Aktivieren des Versands:
 *  1. Dienst wählen (Resend empfohlen) und Dependency ergänzen.
 *  2. Umgebungsvariablen setzen: RESEND_API_KEY, CONTACT_EMAIL (siehe .env.example).
 *  3. Im markierten Block unten den Versand implementieren.
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

  const parsed = contactSchema.safeParse(payload);
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

  // Honeypot: Bots füllen dieses Feld aus – Anfrage still verwerfen.
  if (parsed.data.website) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  // ---------------------------------------------------------------------------
  // TODO(Freigabe erforderlich): E-Mail-Versand hier implementieren.
  // Beispiel mit Resend (Dependency + RESEND_API_KEY zuerst ergänzen):
  //
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "website@pcomplett.de",
  //     to: process.env.CONTACT_EMAIL!,
  //     replyTo: parsed.data.email,
  //     subject: `Neue Anfrage von ${parsed.data.name}`,
  //     text: parsed.data.message,
  //   });
  //
  // Bis dahin: Anfrage wird angenommen, aber nicht weitergeleitet.
  // ---------------------------------------------------------------------------

  return NextResponse.json({ success: true }, { status: 200 });
}
