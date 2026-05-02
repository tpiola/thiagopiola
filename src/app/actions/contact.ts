"use server";
import { supabase } from "@/lib/supabase";

export async function submitContact(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const subject = String(formData.get("subject") ?? "Contato site");

  if (!name || !email || !message) {
    return { success: false, message: "Preencha nome, e-mail e mensagem." };
  }

  if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
    const { error } = await supabase.from("contact_messages").insert({
      name,
      email,
      phone,
      message,
      subject,
      source: "site_thiagopiola",
    });
    if (error) console.error("Supabase contact error:", error.message);
  }

  const webhookUrl = process.env.N8N_CONTACT_WEBHOOK;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, subject, ts: new Date().toISOString() }),
      });
    } catch {
      // non-blocking
    }
  }

  return { success: true, message: "Mensagem enviada! Retornaremos em breve." };
}
