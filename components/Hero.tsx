"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XTwitterIcon } from "./SocialIcons";
import { AnimateIn } from "./AnimateIn";
import { PharmacyIcon } from "./PharmacyIcon";

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

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-950">
      <div className="absolute inset-0 scale-110">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover opacity-30"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-working-at-night-5178/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/50 to-gray-950"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[5%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        <motion.div
          className="absolute right-[5%] top-[30%] h-[400px] w-[400px] rounded-full bg-blue-400/10 blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 pb-24 pt-32 text-center md:px-8">
        <AnimateIn>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 backdrop-blur">
            <PharmacyIcon className="h-3.5 w-3.5" />
            CRF-SP 58.519 · Franca, SP
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <h1 className="text-4xl font-black leading-[1.0] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <span
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #93c5fd 40%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Thiago Biasoli G. Piola
            </span>
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/55 md:text-xl">
            Farmacêutico · Engenheiro de IA · Vendas · Treinamento · Automação
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <motion.div
            className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-blue-400" aria-hidden />
              Franca, SP
            </span>
            <a
              href="tel:5516992333344"
              className="flex items-center gap-1.5 transition-colors hover:text-white/70"
            >
              <Phone className="h-3.5 w-3.5 text-blue-400" aria-hidden />
              (16) 99233-3344
            </a>
            <a
              href="mailto:contato@thiagopiola.com.br"
              className="flex items-center gap-1.5 transition-colors hover:text-white/70"
            >
              <Mail className="h-3.5 w-3.5 text-blue-400" aria-hidden />
              contato@thiagopiola.com.br
            </a>
          </motion.div>
        </AnimateIn>

        <AnimateIn delay={0.4}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/5516992333344"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-blue-600 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.15em] text-white shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/50"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Entrar em Contato
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#competencias"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.15em] text-white/80 backdrop-blur transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              Conhecer mais
            </a>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.5}>
          <div className="mt-8 flex justify-center gap-2">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/50 backdrop-blur transition-all hover:border-blue-400/50 hover:text-blue-400"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </AnimateIn>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-white/30" aria-hidden />
        </motion.div>
      </div>
    </section>
  );
}
