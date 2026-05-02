"use client";
import React, { useRef, useState, useTransition } from "react";
import { submitContact } from "@/app/actions/contact";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const handle = (formData: FormData) => {
    startTransition(async () => {
      const res = await submitContact(formData);
      setResult(res);
      if (res.success) formRef.current?.reset();
    });
  };

  if (result?.success) {
    return (
      <div className="bg-emerald-950 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 min-h-64 text-center">
        <CheckCircle2 size={48} className="text-emerald-400" />
        <p className="text-white font-bold text-xl">Mensagem enviada!</p>
        <p className="text-emerald-300 text-sm">{result.message}</p>
      </div>
    );
  }

  return (
    <div className="bg-emerald-950 rounded-3xl p-8">
      <h3 className="text-xl font-bold text-white mb-6">Envie uma mensagem</h3>
      <form ref={formRef} action={handle} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Seu nome completo"
          required
          className="w-full bg-emerald-900/50 border border-emerald-800 text-white placeholder-emerald-600 px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          required
          className="w-full bg-emerald-900/50 border border-emerald-800 text-white placeholder-emerald-600 px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <input
          type="tel"
          name="phone"
          placeholder="WhatsApp (opcional)"
          className="w-full bg-emerald-900/50 border border-emerald-800 text-white placeholder-emerald-600 px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <select
          name="subject"
          className="w-full bg-emerald-900/50 border border-emerald-800 text-white px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="Dúvida sobre saúde">Dúvida sobre saúde</option>
          <option value="Solução digital para negócio">Solução digital para negócio</option>
          <option value="Parceria">Parceria</option>
          <option value="Outro">Outro</option>
        </select>
        <textarea
          name="message"
          placeholder="Sua mensagem..."
          required
          rows={4}
          className="w-full bg-emerald-900/50 border border-emerald-800 text-white placeholder-emerald-600 px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
        />
        {result && !result.success && (
          <p className="text-red-400 text-sm">{result.message}</p>
        )}
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
        >
          {isPending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
          Enviar mensagem
        </button>
      </form>
    </div>
  );
}
