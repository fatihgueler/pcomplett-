import { z } from "zod";

/**
 * Validierungsschema für den Rückrufservice (primärer Kontaktweg der Startseite).
 * Wird im Client (sofortiges Feedback) und serverseitig (API-Route) genutzt.
 * Es werden bewusst nur die zwingend nötigen Daten erhoben (Datenminimierung).
 */

// Auswahlbare Zeitfenster für den Rückruf.
export const rueckrufZeitfenster = [
  "08:00–10:00 Uhr",
  "10:00–12:00 Uhr",
  "12:00–14:00 Uhr",
  "14:00–16:00 Uhr",
  "16:00–17:00 Uhr",
] as const;

export const rueckrufSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Bitte geben Sie Ihren Namen an.")
    .max(120, "Der Name ist zu lang."),
  company: z
    .string()
    .trim()
    .min(2, "Bitte geben Sie Ihre Firma an.")
    .max(160, "Der Firmenname ist zu lang."),
  phone: z
    .string()
    .trim()
    .min(5, "Bitte geben Sie eine Telefonnummer an, unter der wir Sie erreichen.")
    .max(40, "Die Telefonnummer ist zu lang."),
  // Wunschtermin: Datum (YYYY-MM-DD) + Zeitfenster.
  date: z.string().trim().min(1, "Bitte wählen Sie einen Wunschtag."),
  timeSlot: z.enum(rueckrufZeitfenster, {
    message: "Bitte wählen Sie ein Zeitfenster.",
  }),
  consent: z
    .boolean()
    .refine((v) => v === true, "Bitte stimmen Sie der Datenschutzerklärung zu."),
  // Honeypot gegen Spam-Bots – muss leer bleiben.
  website: z.string().max(0).optional(),
});

export type RueckrufInput = z.infer<typeof rueckrufSchema>;

export type RueckrufFieldErrors = Partial<Record<keyof RueckrufInput, string>>;
