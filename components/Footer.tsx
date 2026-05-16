"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XTwitterIcon } from "./SocialIcons";
import { Logo } from "./Logo";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/thiago-piola/",
    label: "LinkedIn",
    icon: LinkedinIcon,
  },
  {
    href: "https://www.instagram.com/thiagopiolaoficial/",
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    href: "https://www.facebook.com/thiagopiolaoficial/",
    label: "Facebook",
    icon: FacebookIcon,
  },
  { href: "https://x.com/ThiagoPiola07", label: "X", icon: XTwitterIcon },
];

const WHATSAPP_QR =
  "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https%3A%2F%2Fwa.me%2F5516992333344&color=1d4ed8&bgcolor=ffffff";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contato" className="relative overflow-hidden border-t border-gray-100 bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <motion.div
        className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Logo variant="full" showCredential iconClassName="h-10 w-10" theme="light" />
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Farmacêutico CRF/SP com atuação em farmácia, engenharia de IA e automação. Conectando
              cuidado ao paciente, gestão e tecnologia para resultados consistentes.
            </p>
            <div className="mt-5 flex gap-2">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition-all hover:border-blue-500 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/20"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-2">
            <div>
              <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-900">
                Contato
              </h4>
              <motion.div className="space-y-3 text-sm text-gray-500">
                <a
                  href="tel:5516992333344"
                  className="flex items-center gap-2 transition-colors hover:text-blue-600"
                >
                  <Phone className="h-4 w-4 text-blue-500" aria-hidden />
                  (16) 99233-3344
                </a>
                <a
                  href="mailto:contato@thiagopiola.com.br"
                  className="flex items-center gap-2 transition-colors hover:text-blue-600"
                >
                  <Mail className="h-4 w-4 text-blue-500" aria-hidden />
                  contato@thiagopiola.com.br
                </a>
                <a
                  href="https://wa.me/5516992333344"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-blue-600"
                >
                  <MessageCircle className="h-4 w-4 text-blue-500" aria-hidden />
                  WhatsApp
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-500" aria-hidden />
                  Franca, SP
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col items-start sm:items-end">
              <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-900">
                Escanear
              </h4>
              <a
                href="https://wa.me/5516992333344"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition-all hover:shadow-md"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={WHATSAPP_QR}
                  alt="QR Code WhatsApp"
                  className="h-24 w-24 rounded-lg"
                  width={96}
                  height={96}
                />
              </a>
              <p className="mt-2 text-[10px] text-gray-400">Aponte a câmera para o WhatsApp</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-14 border-t border-gray-100 pt-7">
          <p className="text-center text-[11px] text-gray-400">
            © {year} THIAGO BIASOLI G. PIOLA · Farmacêutico CRF/SP 58.519
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
