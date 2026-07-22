"use client";

import * as React from "react";
import Link from "next/link";
import { PhoneCall, CheckCircle2, Loader2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  rueckrufSchema,
  rueckrufZeitfenster,
  type RueckrufFieldErrors,
} from "@/lib/rueckruf-schema";
import { rueckruf } from "@/lib/content";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const initialValues = {
  name: "",
  company: "",
  phone: "",
  date: "",
  timeSlot: "",
  consent: false,
  website: "", // Honeypot
};

/** Heutiges Datum als min-Wert für das Datumsfeld (kein Rückruf in der Vergangenheit). */
function today(): string {
  const d = new Date();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${month}-${day}`;
}

export function RueckrufFormular() {
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState<RueckrufFieldErrors>({});
  const [status, setStatus] = React.useState<Status>("idle");
  const minDate = React.useMemo(today, []);

  function update<K extends keyof typeof initialValues>(
    key: K,
    value: (typeof initialValues)[K],
  ) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const parsed = rueckrufSchema.safeParse(values);
    if (!parsed.success) {
      const nextErrors: RueckrufFieldErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof RueckrufFieldErrors;
        if (field && !nextErrors[field]) nextErrors[field] = issue.message;
      }
      setErrors(nextErrors);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/rueckruf", {
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
          {rueckruf.successTitle}
        </h3>
        <p className="text-muted-foreground">{rueckruf.successText}</p>
        <Button variant="outline" className="mt-2" onClick={() => setStatus("idle")}>
          Weiteren Rückruf anfordern
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="rueckruf-name">Name</Label>
          <Input
            id="rueckruf-name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "rueckruf-name-error" : undefined}
          />
          {errors.name ? (
            <p id="rueckruf-name-error" role="alert" className="text-sm text-brand">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="rueckruf-company">Firma</Label>
          <Input
            id="rueckruf-company"
            name="company"
            autoComplete="organization"
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "rueckruf-company-error" : undefined}
          />
          {errors.company ? (
            <p id="rueckruf-company-error" role="alert" className="text-sm text-brand">
              {errors.company}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="rueckruf-phone">Telefon (für den Rückruf)</Label>
        <Input
          id="rueckruf-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={(e) => update("phone", e.target.value)}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "rueckruf-phone-error" : undefined}
        />
        {errors.phone ? (
          <p id="rueckruf-phone-error" role="alert" className="text-sm text-brand">
            {errors.phone}
          </p>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="rueckruf-date">Wunschtag</Label>
          <Input
            id="rueckruf-date"
            name="date"
            type="date"
            min={minDate}
            value={values.date}
            onChange={(e) => update("date", e.target.value)}
            aria-invalid={!!errors.date}
            aria-describedby={errors.date ? "rueckruf-date-error" : undefined}
          />
          {errors.date ? (
            <p id="rueckruf-date-error" role="alert" className="text-sm text-brand">
              {errors.date}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="rueckruf-time">Wunschzeit</Label>
          <div className="relative">
            <select
              id="rueckruf-time"
              name="timeSlot"
              value={values.timeSlot}
              onChange={(e) => update("timeSlot", e.target.value)}
              aria-invalid={!!errors.timeSlot}
              aria-describedby={errors.timeSlot ? "rueckruf-time-error" : undefined}
              className={cn(
                "h-11 w-full appearance-none rounded-md border border-border-strong bg-background px-3.5 pr-10 text-sm text-foreground shadow-sm transition-colors",
                "focus-visible:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-ring)]",
                values.timeSlot === "" && "text-subtle-foreground",
              )}
            >
              <option value="" disabled>
                Zeitfenster wählen …
              </option>
              {rueckrufZeitfenster.map((slot) => (
                <option key={slot} value={slot} className="text-foreground">
                  {slot}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-subtle-foreground"
              aria-hidden
            />
          </div>
          {errors.timeSlot ? (
            <p id="rueckruf-time-error" role="alert" className="text-sm text-brand">
              {errors.timeSlot}
            </p>
          ) : null}
        </div>
      </div>

      {/* Honeypot – für Menschen unsichtbar */}
      <div aria-hidden className="hidden">
        <label htmlFor="rueckruf-website">Website (bitte leer lassen)</label>
        <input
          id="rueckruf-website"
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
            id="rueckruf-consent"
            name="consent"
            type="checkbox"
            checked={values.consent}
            onChange={(e) => update("consent", e.target.checked)}
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "rueckruf-consent-error" : undefined}
            className="mt-0.5 size-5 shrink-0 cursor-pointer rounded border-border-strong accent-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-ring)]"
          />
          <Label
            htmlFor="rueckruf-consent"
            className="cursor-pointer font-normal leading-snug text-muted-foreground"
          >
            Ich habe die{" "}
            <Link href="/datenschutz" className="font-medium text-brand underline underline-offset-2">
              Datenschutzerklärung
            </Link>{" "}
            gelesen und stimme der Verarbeitung meiner Daten für den Rückruf zu.
          </Label>
        </div>
        {errors.consent ? (
          <p id="rueckruf-consent-error" role="alert" className="text-sm text-brand">
            {errors.consent}
          </p>
        ) : null}
      </div>

      {status === "error" ? (
        <p role="alert" className="rounded-md bg-brand-subtle px-4 py-3 text-sm text-brand">
          Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.
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
            <PhoneCall className="size-4" aria-hidden />
            Rückruf anfordern
          </>
        )}
      </Button>
    </form>
  );
}
