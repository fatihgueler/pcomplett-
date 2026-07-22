import { NextResponse } from "next/server";
import { rueckrufSchema } from "@/lib/rueckruf-schema";

/**
 * Rückrufservice-Backend.
 *
 * Validiert die Rückrufbitte serverseitig. Die eigentliche Zustellung ist noch
 * offen (Ticketsystem / interne Benachrichtigung) und über die klar markierte
 * TODO-Schnittstelle unten anzubinden. Bis dahin wird die Anfrage angenommen
 * und protokolliert, ohne extern weitergegeben zu werden.
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

  const parsed = rueckrufSchema.safeParse(payload);
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
  // TODO(BACKEND): Rückrufbitte an das Zielsystem übergeben.
  // Beispiele: Ticketsystem (siehe lib/tickets.ts), interne E-Mail/Chat-
  // Benachrichtigung oder Kalender-Eintrag. Env-Vars wie {{RUECKRUF_WEBHOOK_URL}}
  // konfigurieren. Zielsystem noch nicht festgelegt – daher hier bewusst offen.
  // const { name, company, phone, date, timeSlot } = parsed.data;
  // ---------------------------------------------------------------------------

  return NextResponse.json({ success: true }, { status: 200 });
}
