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

// --- Vorlage für einen echten Adapter (aktivieren, sobald entschieden) -------
// class ZammadTicketAdapter implements TicketAdapter {
//   async createTicket(payload: TicketPayload): Promise<TicketResult> {
//     const res = await fetch(`${process.env.ZAMMAD_URL}/api/v1/tickets`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Token token=${process.env.ZAMMAD_TOKEN}`,
//       },
//       body: JSON.stringify({ /* ... Mapping payload -> Zammad ... */ }),
//     });
//     const data = await res.json();
//     return { id: String(data.id) };
//   }
// }
// -----------------------------------------------------------------------------

/**
 * Wählt den aktiven Adapter. Später über eine ENV-Variable steuern, z.B.:
 *   if (process.env.TICKET_PROVIDER === "zammad") return new ZammadTicketAdapter();
 */
export function getTicketAdapter(): TicketAdapter {
  return new MockTicketAdapter();
}
