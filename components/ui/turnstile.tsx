"use client";

import * as React from "react";

/**
 * Cloudflare Turnstile – DSGVO-freundliches Captcha (kein Google reCAPTCHA).
 * Site-Key über NEXT_PUBLIC_TURNSTILE_SITE_KEY ({{TURNSTILE_SITE_KEY}}).
 * Ist kein Site-Key gesetzt, wird ein Hinweis-Platzhalter angezeigt und das
 * Formular bleibt nutzbar (die Prüfung erfolgt dann serverseitig „soft").
 */

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
        },
      ) => string;
      reset: (id?: string) => void;
    };
  }
}

const SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

type Props = {
  onVerify: (token: string) => void;
  onExpire?: () => void;
};

export function Turnstile({ onVerify, onExpire }: Props) {
  const ref = React.useRef<HTMLDivElement>(null);
  const widgetId = React.useRef<string | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  React.useEffect(() => {
    if (!siteKey || !ref.current) return;

    function render() {
      if (!window.turnstile || !ref.current || widgetId.current) return;
      widgetId.current = window.turnstile.render(ref.current, {
        sitekey: siteKey as string,
        callback: onVerify,
        "expired-callback": onExpire,
        theme: "light",
      });
    }

    if (window.turnstile) {
      render();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`,
    );
    if (existing) {
      existing.addEventListener("load", render);
      return () => existing.removeEventListener("load", render);
    }

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.addEventListener("load", render);
    document.head.appendChild(script);
    return () => script.removeEventListener("load", render);
  }, [siteKey, onVerify, onExpire]);

  // Ohne konfigurierten Site-Key wird nichts gerendert (kein Debug-Hinweis im
  // Frontend). Das Captcha erscheint automatisch, sobald der Key gesetzt ist.
  if (!siteKey) return null;

  return <div ref={ref} className="min-h-[65px]" />;
}
