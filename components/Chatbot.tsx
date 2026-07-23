"use client";

import * as React from "react";
import { MessageCircle, X, Send, Loader2, Bot } from "lucide-react";
import { chatbot } from "@/lib/content";
import { cn } from "@/lib/utils";

type Message = { role: "user" | "assistant"; content: string };
type Status = "idle" | "sending" | "unavailable";

export function Chatbot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [input, setInput] = React.useState("");
  const [status, setStatus] = React.useState<Status>("idle");

  const inputRef = React.useRef<HTMLInputElement>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  React.useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, status]);

  async function sendMessage(event: React.FormEvent) {
    event.preventDefault();
    const text = input.trim();
    if (!text || status === "sending") return;

    const nextMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setStatus("sending");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await res.json();

      if (!res.ok || data.available === false) {
        setStatus("unavailable");
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: chatbot.unavailable },
        ]);
        return;
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply?.trim() || chatbot.errorText,
        },
      ]);
      setStatus("idle");
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: chatbot.errorText },
      ]);
      setStatus("idle");
    }
  }

  return (
    <>
      {/* Toggle-Button */}
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls="chatbot-panel"
        aria-label={isOpen ? chatbot.closeLabel : chatbot.openLabel}
        className={cn(
          "no-print fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-lg transition-all duration-200 hover:bg-brand-hover hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-ring)] focus-visible:ring-offset-2",
          isOpen && "scale-90 opacity-0",
        )}
      >
        <MessageCircle className="size-6" aria-hidden />
      </button>

      {/* Panel */}
      <div
        id="chatbot-panel"
        role="dialog"
        aria-label={chatbot.title}
        hidden={!isOpen}
        className={cn(
          "no-print fixed bottom-5 right-5 z-50 flex w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl",
          isOpen ? "flex" : "hidden",
        )}
        style={{ maxHeight: "min(32rem, calc(100vh - 2.5rem))" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 border-b border-border bg-ink px-4 py-3">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex size-9 items-center justify-center rounded-full bg-brand text-brand-foreground">
              <Bot className="size-5" aria-hidden />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold text-white">
                {chatbot.title}
              </span>
              <span className="text-xs text-white/60">{chatbot.subtitle}</span>
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label={chatbot.closeLabel}
            className="inline-flex size-8 items-center justify-center rounded-md text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        {/* Nachrichten */}
        <div
          ref={scrollRef}
          className="flex flex-1 flex-col gap-3 overflow-y-auto p-4"
          aria-live="polite"
        >
          <Bubble role="assistant">{chatbot.greeting}</Bubble>
          {messages.map((msg, index) => (
            <Bubble key={index} role={msg.role}>
              {msg.content}
            </Bubble>
          ))}
          {status === "sending" ? (
            <Bubble role="assistant">
              <Loader2 className="size-4 animate-spin" aria-hidden />
              <span className="sr-only">Antwort wird generiert…</span>
            </Bubble>
          ) : null}
        </div>

        {/* Eingabe */}
        <form
          onSubmit={sendMessage}
          className="flex items-center gap-2 border-t border-border p-3"
        >
          <label htmlFor="chatbot-input" className="sr-only">
            {chatbot.placeholder}
          </label>
          <input
            id="chatbot-input"
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={chatbot.placeholder}
            disabled={status === "unavailable"}
            className="h-10 flex-1 rounded-md border border-border-strong bg-background px-3 text-sm text-foreground placeholder:text-subtle-foreground focus-visible:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-ring)] disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "sending" || status === "unavailable" || !input.trim()}
            aria-label="Nachricht senden"
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-md bg-brand text-brand-foreground transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-ring)] disabled:opacity-50"
          >
            <Send className="size-4" aria-hidden />
          </button>
        </form>
      </div>
    </>
  );
}

function Bubble({
  role,
  children,
}: {
  role: "user" | "assistant";
  children: React.ReactNode;
}) {
  const isUser = role === "user";
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
        isUser
          ? "ml-auto max-w-[85%] rounded-br-sm bg-brand text-brand-foreground"
          : "mr-auto max-w-[85%] rounded-bl-sm bg-muted text-foreground",
      )}
    >
      {children}
    </div>
  );
}
