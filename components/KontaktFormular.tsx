"use client";

import * as React from "react";
import Link from "next/link";
import { Send, CheckCircle2, Loader2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactSchema, type ContactFieldErrors } from "@/lib/contact-schema";
import { contact } from "@/lib/content";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  consent: false,
  website: "", // Honeypot
};

export function KontaktFormular() {
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState<ContactFieldErrors>({});
  const [status, setStatus] = React.useState<Status>("idle");

  function update<K extends keyof typeof initialValues>(
    key: K,
    value: (typeof initialValues)[K],
  ) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const nextErrors: ContactFieldErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof ContactFieldErrors;
        if (field && !nextErrors[field]) nextErrors[field] = issue.message;
      }
      setErrors(nextErrors);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-3 rounded-lg border border-brand/30 bg-brand-subtle p-8"
      >
        <CheckCircle2 className="size-8 text-brand" aria-hidden />
        <h3 className="font-display text-xl font-semibold text-ink">
          {contact.successTitle}
        </h3>
        <p className="text-muted-foreground">{contact.successText}</p>
        <Button variant="outline" className="mt-2" onClick={() => setStatus("idle")}>
          Weitere Nachricht senden
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name ? (
          <p id="name-error" role="alert" className="text-sm text-brand">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">E-Mail</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" role="alert" className="text-sm text-brand">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">
            Telefon <span className="text-subtle-foreground">(optional)</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone ? (
            <p id="phone-error" role="alert" className="text-sm text-brand">
              {errors.phone}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="subject">Anliegen</Label>
        <div className="relative">
          <select
            id="subject"
            name="subject"
            value={values.subject}
            onChange={(e) => update("subject", e.target.value)}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className={cn(
              "h-11 w-full appearance-none rounded-md border border-border-strong bg-background px-3.5 pr-10 text-sm text-foreground shadow-sm transition-colors",
              "focus-visible:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-ring)]",
              values.subject === "" && "text-subtle-foreground",
            )}
          >
            <option value="" disabled>
              Bitte wählen …
            </option>
            {contact.subjects.map((subject) => (
              <option key={subject} value={subject} className="text-foreground">
                {subject}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-subtle-foreground"
            aria-hidden
          />
        </div>
        {errors.subject ? (
          <p id="subject-error" role="alert" className="text-sm text-brand">
            {errors.subject}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Nachricht</Label>
        <Textarea
          id="message"
          name="message"
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" role="alert" className="text-sm text-brand">
            {errors.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot – für Menschen unsichtbar */}
      <div aria-hidden className="hidden">
        <label htmlFor="website">Website (bitte leer lassen)</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={values.consent}
            onChange={(e) => update("consent", e.target.checked)}
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-0.5 size-5 shrink-0 cursor-pointer rounded border-border-strong accent-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-ring)]"
          />
          <Label htmlFor="consent" className="cursor-pointer font-normal leading-snug text-muted-foreground">
            Ich habe die{" "}
            <Link href="/datenschutz" className="font-medium text-brand underline underline-offset-2">
              Datenschutzerklärung
            </Link>{" "}
            gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung
            meiner Anfrage zu.
          </Label>
        </div>
        {errors.consent ? (
          <p id="consent-error" role="alert" className="text-sm text-brand">
            {errors.consent}
          </p>
        ) : null}
      </div>

      {status === "error" ? (
        <p role="alert" className="rounded-md bg-brand-subtle px-4 py-3 text-sm text-brand">
          Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut
          oder kontaktieren Sie uns direkt telefonisch.
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden />
            Wird gesendet…
          </>
        ) : (
          <>
            <Send className="size-4" aria-hidden />
            Anfrage senden
          </>
        )}
      </Button>
    </form>
  );
}
