"use server";
import { supabase } from "@/lib/supabase";

export async function subscribeNewsletter(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const name = String(formData.get("name") ?? "").trim();

  if (!email || !email.includes("@")) {
    return { success: false, message: "E-mail inválido." };
  }

  // Persist to Supabase
  if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
    const { error } = await supabase
      .from("newsletter_subscribers")
      .upsert({ email, name, source: "site_thiagopiola" }, { onConflict: "email" });

    if (error && error.code !== "23505") {
      console.error("Supabase newsletter error:", error.message);
    }
  }

  // Trigger N8N automation
  const webhookUrl = process.env.N8N_NEWSLETTER_WEBHOOK;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, source: "thiagopiola", ts: new Date().toISOString() }),
      });
    } catch {
      // non-blocking
    }
  }

  return { success: true, message: "Inscrito com sucesso! Bem-vindo(a)." };
}
