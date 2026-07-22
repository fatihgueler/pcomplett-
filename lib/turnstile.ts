/**
 * Serverseitige Verifikation eines Cloudflare-Turnstile-Tokens.
 * Secret über TURNSTILE_SECRET_KEY ({{TURNSTILE_SECRET_KEY}}).
 *
 * Ist kein Secret gesetzt (z. B. lokale Entwicklung), wird „soft" bestanden,
 * damit das Formular nutzbar bleibt. In Produktion Secret hinterlegen.
 */
export async function verifyTurnstile(
  token: string | undefined,
  remoteIp?: string,
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // Soft-Pass ohne Konfiguration
  if (!token) return false;

  try {
    const body = new URLSearchParams({ secret, response: token });
    if (remoteIp) body.append("remoteip", remoteIp);

    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      },
    );
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}
