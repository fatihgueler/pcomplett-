import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { getTicketAdapter } from "@/lib/tickets";

/**
 * Kontaktformular-Backend.
 *
 * Validiert die Eingaben serverseitig und übergibt die Anfrage über das
 * Adapter-Muster (siehe lib/tickets.ts) an ein Ticketsystem. Aktuell ist ein
 * Mock-Adapter aktiv – ein echter Adapter (Zammad/Freshdesk/osTicket) lässt
 * sich später ergänzen, ohne diese Route zu ändern.
 *
 * Optional zusätzlich: E-Mail-Benachrichtigung (siehe .env.example).
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

  try {
    const adapter = getTicketAdapter();
    const ticket = await adapter.createTicket({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      subject: parsed.data.subject,
      message: parsed.data.message,
    });

    return NextResponse.json({ success: true, ticketId: ticket.id }, { status: 200 });
  } catch {
    return NextResponse.json(
      { success: false, error: "Die Anfrage konnte nicht angelegt werden." },
      { status: 500 },
    );
  }
}
