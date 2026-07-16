import { z } from "zod";

/** Segmente der Newsletter-Anmeldung. */
export const newsletterSegments = ["unternehmen", "privat"] as const;

export const newsletterSchema = z.object({
  email: z.email("Bitte geben Sie eine gültige E-Mail-Adresse an."),
  segment: z.enum(newsletterSegments),
  consent: z
    .boolean()
    .refine((v) => v === true, "Bitte bestätigen Sie die Einwilligung."),
  // Honeypot gegen Spam-Bots – muss leer bleiben.
  website: z.string().max(0).optional(),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

export type NewsletterFieldErrors = Partial<
  Record<keyof NewsletterInput, string>
>;
