"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
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

const navFooter = [
  { href: "#farmacia", label: "Farmácia" },
  { href: "#competencias", label: "Competências" },
  { href: "#tecnologia", label: "Tecnologia" },
  { href: "#trajetoria", label: "Trajetória" },
];

const contactItems = [
  {
    href: "tel:5516992333344",
    label: "(16) 99233-3344",
    sub: "Telefone e WhatsApp",
    icon: Phone,
    external: true,
  },
  {
    href: "mailto:contato@thiagopiola.com.br",
    label: "contato@thiagopiola.com.br",
    sub: "E-mail profissional",
    icon: Mail,
    external: true,
  },
  {
    href: undefined,
    label: "Franca, SP",
    sub: "Brasil",
    icon: MapPin,
    external: false,
  },
];

function ContactCard({
  href,
  label,
  sub,
  icon: Icon,
  external,
}: {
  href?: string;
  label: string;
  sub: string;
  icon: typeof Phone;
  external: boolean;
}) {
  const inner = (
    <div className="group flex gap-4 rounded-2xl border border-white/6 bg-white/[0.03] p-4 transition-all duration-300 hover:border-blue-500/25 hover:bg-white/[0.06]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/80 to-blue-800/80 text-white shadow-inner shadow-blue-900/30">
        <Icon className="h-4 w-4" aria-hidden />
      </div>
      <div>
        <p className="text-sm font-semibold text-white/90 transition-colors group-hover:text-white">
          {label}
        </p>
        <p className="mt-0.5 text-xs text-white/40">{sub}</p>
      </div>
    </div>
  );

  if (!external || !href) {
    return inner;
  }

  return (
    <a href={href} className="block">
      {inner}
    </a>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contato" className="relative overflow-hidden bg-gray-950 text-white">
      <motion.div
        className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="pointer-events-none absolute inset-0">
        <motion.div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-emerald-500/5 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <motion.div
          className="grid gap-14 lg:grid-cols-12 lg:gap-10"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="lg:col-span-5">
            <Logo variant="full" showCredential iconClassName="h-12 w-12" theme="dark" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/50">
              Farmácia, engenharia de IA e automação com rigor profissional. Atuação orientada ao
              cuidado, à gestão e à excelência operacional.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/25"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-blue-400/90">
              Navegação
            </p>
            <ul className="mt-6 space-y-3">
              {navFooter.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-blue-400/90">
              Contato
            </p>
            <ul className="mt-6 space-y-4">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <ContactCard {...item} />
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-center text-[11px] tracking-wide text-white/35 md:text-left">
            © {year} Thiago Biasoli G. Piola · Farmacêutico CRF/SP 58.519
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
            Farmácia · IA · Automação
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
