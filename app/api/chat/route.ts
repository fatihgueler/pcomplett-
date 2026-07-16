import { NextResponse } from "next/server";
import { z } from "zod";
import { buildSystemPrompt } from "@/lib/chat-prompt";

/**
 * Chatbot-Backend (Claude API).
 *
 * Der API-Key steht ausschließlich serverseitig über ANTHROPIC_API_KEY zur
 * Verfügung – niemals im Client. Fehlt der Key, antwortet die Route mit
 * `available: false`, damit das Widget einen freundlichen Hinweis statt eines
 * Fehlers anzeigt.
 */

// Modell konfigurierbar; Standard laut Vorgabe. Bei Bedarf per ENV überschreiben.
const MODEL = process.env.CHATBOT_MODEL ?? "claude-sonnet-4-6";
const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";
const MAX_HISTORY = 12;

const requestSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().trim().min(1).max(2000),
      }),
    )
    .min(1)
    .max(MAX_HISTORY),
});

export async function POST(request: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    // Graceful Fallback: Widget zeigt Hinweis statt Fehler.
    return NextResponse.json({ available: false }, { status: 200 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const parsed = requestSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  try {
    const res = await fetch(ANTHROPIC_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 512,
        system: buildSystemPrompt(),
        messages: parsed.data.messages,
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Antwort konnte nicht generiert werden." },
        { status: 502 },
      );
    }

    const data = (await res.json()) as {
      content?: Array<{ type: string; text?: string }>;
    };
    const reply =
      data.content
        ?.filter((block) => block.type === "text")
        .map((block) => block.text ?? "")
        .join("\n")
        .trim() ?? "";

    return NextResponse.json({ available: true, reply }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Der Assistent ist derzeit nicht erreichbar." },
      { status: 502 },
    );
  }
}
