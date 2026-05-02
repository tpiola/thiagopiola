"use client";
import React, { useRef, useState, useTransition } from "react";
import { subscribeNewsletter } from "@/app/actions/newsletter";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

interface NewsletterFormProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function NewsletterForm({
  title = "Receba conteúdo exclusivo",
  subtitle = "Dicas de saúde, tecnologia e inteligência artificial direto no seu e-mail. Sem spam, nunca.",
  dark = false,
}: NewsletterFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const handle = (formData: FormData) => {
    startTransition(async () => {
      const res = await subscribeNewsletter(formData);
      setResult(res);
      if (res.success) formRef.current?.reset();
    });
  };

  const bg = dark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200";
  const titleColor = dark ? "text-white" : "text-gray-900";
  const subColor = dark ? "text-gray-400" : "text-gray-500";
  const inputBg = dark ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500" : "bg-gray-50 border-gray-200 text-gray-900";

  return (
    <div className={`rounded-3xl border p-8 md:p-10 ${bg}`}>
      <h3 className={`text-2xl font-extrabold mb-2 ${titleColor}`}>{title}</h3>
      <p className={`text-sm mb-6 leading-relaxed ${subColor}`}>{subtitle}</p>

      {result?.success ? (
        <div className="flex items-center gap-3 text-emerald-500 font-semibold py-4">
          <CheckCircle2 size={24} />
          {result.message}
        </div>
      ) : (
        <form ref={formRef} action={handle} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            required
            className={`w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 focus:ring-emerald-500 transition ${inputBg}`}
          />
          <div className="flex gap-3">
            <input
              type="email"
              name="email"
              placeholder="Seu melhor e-mail"
              required
              className={`flex-1 px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 focus:ring-emerald-500 transition ${inputBg}`}
            />
            <button
              type="submit"
              disabled={isPending}
              className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-colors shrink-0"
            >
              {isPending ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <Send size={18} />
              )}
              <span className="hidden sm:inline">Quero receber</span>
            </button>
          </div>
          {result && !result.success && (
            <p className="text-red-500 text-sm">{result.message}</p>
          )}
          <p className={`text-xs ${subColor}`}>
            Seus dados estão seguros. Nunca compartilhamos com terceiros.
          </p>
        </form>
      )}
    </div>
  );
}
