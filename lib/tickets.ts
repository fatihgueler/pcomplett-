/**
 * Ticket-Adapter (Adapter-Muster).
 *
 * Kontaktanfragen sollen später als Ticket an ein Ticketsystem übergeben werden.
 * Welches System (Zammad / Freshdesk / osTicket) eingesetzt wird, ist noch offen.
 * Deshalb definiert diese Datei nur das Interface `TicketAdapter` und einen
 * Mock-Adapter. Ein echter Adapter wird später ergänzt – der restliche Code
 * (API-Route) bleibt unverändert.
 */

export interface TicketPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface TicketResult {
  id: string;
}

export interface TicketAdapter {
  createTicket(payload: TicketPayload): Promise<TicketResult>;
}

/**
 * Mock-Adapter: nimmt die Anfrage an und vergibt eine ID, ohne sie extern
 * weiterzugeben. Ersetzt den echten Versand, bis ein Ticketsystem gewählt ist.
 */
class MockTicketAdapter implements TicketAdapter {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async createTicket(_payload: TicketPayload): Promise<TicketResult> {
    return { id: `mock-${crypto.randomUUID()}` };
  }
}

/**
 * Generischer HTTP-Adapter: übergibt das Anliegen per POST an eine konfigurierte
 * Ticket-API. Zielsystem noch offen – daher bewusst generisch (URL + Key als
 * Env-Vars). Sobald das konkrete System feststeht, ggf. das Payload-Mapping
 * anpassen, ohne die aufrufende API-Route zu ändern.
 *
 *   TICKET_API_URL  = {{TICKET_API_URL}}
 *   TICKET_API_KEY  = {{TICKET_API_KEY}}
 */
class HttpTicketAdapter implements TicketAdapter {
  constructor(
    private readonly url: string,
    private readonly apiKey: string,
  ) {}

  async createTicket(payload: TicketPayload): Promise<TicketResult> {
    const res = await fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      throw new Error(`Ticket-API antwortete mit Status ${res.status}`);
    }
    const data = (await res.json().catch(() => ({}))) as { id?: string | number };
    return { id: data.id != null ? String(data.id) : `ticket-${Date.now()}` };
  }
}

/**
 * Wählt den aktiven Adapter. Sind TICKET_API_URL und TICKET_API_KEY gesetzt,
 * wird die echte Ticket-API angebunden – sonst der Mock-Adapter.
 */
export function getTicketAdapter(): TicketAdapter {
  const url = process.env.TICKET_API_URL;
  const apiKey = process.env.TICKET_API_KEY;
  if (url && apiKey) {
    return new HttpTicketAdapter(url, apiKey);
  }
  return new MockTicketAdapter();
}
