import { z } from "zod";

/**
 * Validierungsschema für das Kontaktformular.
 * Wird sowohl im Client (sofortiges Feedback) als auch serverseitig
 * in der API-Route verwendet – niemals nur clientseitig validieren.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Bitte geben Sie Ihren Namen an.")
    .max(120, "Der Name ist zu lang."),
  email: z.email("Bitte geben Sie eine gültige E-Mail-Adresse an."),
  message: z
    .string()
    .trim()
    .min(10, "Bitte beschreiben Sie Ihr Anliegen (mindestens 10 Zeichen).")
    .max(4000, "Ihre Nachricht ist zu lang."),
  consent: z
    .boolean()
    .refine((v) => v === true, "Bitte stimmen Sie der Datenschutzerklärung zu."),
  // Honeypot gegen Spam-Bots – muss leer bleiben.
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type FieldErrors = Partial<Record<keyof ContactInput, string>>;
