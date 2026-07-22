import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { getTicketAdapter, type TicketPayload } from "@/lib/tickets";
import { verifyTurnstile } from "@/lib/turnstile";

/**
 * Übergabe eines Kontakt-Anliegens an das Ticketsystem.
 *
 * Ablauf:
 *  1. Cloudflare-Turnstile-Token prüfen (Captcha, DSGVO-freundlich).
 *  2. Eingaben serverseitig validieren (contactSchema, inkl. Feld „Anliegen").
 *  3. Typisierten Payload über den Ticket-Adapter (lib/tickets.ts) übergeben.
 *     Zielsystem konfigurierbar über TICKET_API_URL / TICKET_API_KEY.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Ungültige Anfrage." },
      { status: 400 },
    );
  }

  const { turnstileToken, ...rest } =
    (body as { turnstileToken?: string } & Record<string, unknown>) ?? {};

  // 1. Captcha prüfen (soft-pass, wenn kein Secret konfiguriert ist).
  const remoteIp =
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for") ??
    undefined;
  const captchaOk = await verifyTurnstile(turnstileToken, remoteIp ?? undefined);
  if (!captchaOk) {
    return NextResponse.json(
      { success: false, error: "Captcha-Prüfung fehlgeschlagen." },
      { status: 400 },
    );
  }

  // 2. Validierung.
  const parsed = contactSchema.safeParse(rest);
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

  // 3. Übergabe an das Ticketsystem.
  try {
    const payload: TicketPayload = {
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      subject: parsed.data.subject,
      message: parsed.data.message,
    };
    const adapter = getTicketAdapter();
    const ticket = await adapter.createTicket(payload);
    return NextResponse.json({ success: true, ticketId: ticket.id }, { status: 200 });
  } catch {
    return NextResponse.json(
      { success: false, error: "Die Anfrage konnte nicht angelegt werden." },
      { status: 500 },
    );
  }
}
