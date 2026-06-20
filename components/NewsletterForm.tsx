"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useLocale } from "@/lib/i18n";
import { spring } from "@/lib/motion";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { locale } = useLocale();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_MAKE_NEWSLETTER_WEBHOOK;

      if (!webhookUrl) {
        console.error("NEXT_PUBLIC_MAKE_NEWSLETTER_WEBHOOK não configurado");
        setStatus("error");
        return;
      }

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          source: "thiagopiola",
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        console.error("Webhook respondeu com status", response.status);
        setStatus("error");
      }
    } catch (err) {
      console.error("Erro ao enviar email para webhook:", err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={spring.soft}
        className="rounded-2xl border border-[var(--brand)]/20 bg-[var(--brand)]/5 p-8 text-center"
      >
        <Mail className="h-8 w-8 text-[var(--brand)] mx-auto mb-3" />
        <p className="text-base font-medium text-foreground">
          {locale === "pt" ? "Obrigado por assinar! 🎉" : "Thanks for subscribing! 🎉"}
        </p>
        <p className="text-sm text-muted mt-1">
          {locale === "pt" ? "Você receberá os próximos conteúdos no seu email." : "You'll receive upcoming content in your inbox."}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={locale === "pt" ? "seu@email.com" : "your@email.com"}
        required
        disabled={status === "loading"}
        className="flex-1 rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none focus:border-[var(--brand)] focus:ring-1 focus:ring-[var(--brand)]/30 transition-all disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary whitespace-nowrap disabled:opacity-50"
      >
        {status === "loading"
          ? (locale === "pt" ? "Enviando…" : "Sending…")
          : (locale === "pt" ? "Assinar" : "Subscribe")}
      </button>
      {status === "error" && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-full text-sm text-red-500 text-center"
        >
          {locale === "pt"
            ? "Ocorreu um erro ao enviar. Tente novamente mais tarde."
            : "An error occurred. Please try again later."}
        </motion.p>
      )}
    </form>
  );
}
