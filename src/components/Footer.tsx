import React from "react";
import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-500 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-emerald-500 font-bold">
          <Leaf size={18} />
          <span>Thiago Piola</span>
        </div>
        <p className="text-xs text-center">
          © {new Date().getFullYear()} Thiago B. G. Piola · CRF/SP 58.519 · Farmacêutico
        </p>
        <p className="text-xs text-center text-gray-600 max-w-xs">
          Conteúdo educativo. Não substitui consulta médica ou farmacêutica.
        </p>
      </div>
    </footer>
  );
}
