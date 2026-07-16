"use client";

import * as React from "react";
import Link from "next/link";
import { Loader2, MailCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  newsletterSchema,
  type NewsletterFieldErrors,
} from "@/lib/newsletter-schema";
import { newsletter } from "@/lib/content";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const initialValues = {
  email: "",
  segment: "unternehmen" as "unternehmen" | "privat",
  consent: false,
  website: "",
};

export function NewsletterForm() {
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState<NewsletterFieldErrors>({});
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
    const parsed = newsletterSchema.safeParse(values);
    if (!parsed.success) {
      const nextErrors: NewsletterFieldErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof NewsletterFieldErrors;
        if (field && !nextErrors[field]) nextErrors[field] = issue.message;
      }
      setErrors(nextErrors);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/newsletter", {
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
        className="flex items-start gap-3 rounded-lg border border-brand/30 bg-brand-subtle p-6"
      >
        <MailCheck className="mt-0.5 size-6 shrink-0 text-brand" aria-hidden />
        <div className="flex flex-col gap-1">
          <p className="font-display font-semibold text-ink">
            {newsletter.successTitle}
          </p>
          <p className="text-sm text-muted-foreground">{newsletter.successText}</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {/* Segment-Auswahl */}
      <fieldset className="flex flex-col gap-2">
        <legend className="mb-1 text-sm font-medium text-foreground">
          Ich interessiere mich als:
        </legend>
        <div className="flex flex-wrap gap-2">
          {newsletter.segments.map((seg) => {
            const active = values.segment === seg.value;
            return (
              <label
                key={seg.value}
                className={cn(
                  "cursor-pointer rounded-md border px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "border-brand bg-brand text-brand-foreground"
                    : "border-border-strong bg-background text-foreground hover:border-brand",
                )}
              >
                <input
                  type="radio"
                  name="segment"
                  value={seg.value}
                  checked={active}
                  onChange={() =>
                    update("segment", seg.value as "unternehmen" | "privat")
                  }
                  className="sr-only"
                />
                {seg.label}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="flex flex-col gap-2">
        <Label htmlFor="newsletter-email">E-Mail-Adresse</Label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@beispiel.de"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "newsletter-email-error" : undefined}
          />
          <Button type="submit" disabled={status === "submitting"} className="shrink-0">
            {status === "submitting" ? (
              <>
                <Loader2 className="size-4 animate-spin" aria-hidden />
                Sende…
              </>
            ) : (
              <>
                Anmelden
                <ArrowRight className="size-4" aria-hidden />
              </>
            )}
          </Button>
        </div>
        {errors.email ? (
          <p id="newsletter-email-error" role="alert" className="text-sm text-brand">
            {errors.email}
          </p>
        ) : null}
      </div>

      {/* Honeypot */}
      <div aria-hidden className="hidden">
        <label htmlFor="newsletter-website">Website (leer lassen)</label>
        <input
          id="newsletter-website"
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
            id="newsletter-consent"
            type="checkbox"
            checked={values.consent}
            onChange={(e) => update("consent", e.target.checked)}
            aria-invalid={!!errors.consent}
            className="mt-0.5 size-5 shrink-0 cursor-pointer rounded border-border-strong accent-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-ring)]"
          />
          <Label
            htmlFor="newsletter-consent"
            className="cursor-pointer text-xs font-normal leading-snug text-muted-foreground"
          >
            Ich möchte den Newsletter erhalten und akzeptiere die{" "}
            <Link href="/datenschutz" className="font-medium text-brand underline underline-offset-2">
              Datenschutzerklärung
            </Link>
            . Abmeldung jederzeit möglich.
          </Label>
        </div>
        {errors.consent ? (
          <p role="alert" className="text-sm text-brand">
            {errors.consent}
          </p>
        ) : null}
      </div>

      {status === "error" ? (
        <p role="alert" className="text-sm text-brand">
          Die Anmeldung hat nicht geklappt. Bitte versuchen Sie es später erneut.
        </p>
      ) : null}
    </form>
  );
}
