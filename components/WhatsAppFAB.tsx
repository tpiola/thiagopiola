"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/content";
import { WhatsAppIcon } from "./SocialIcons";

export function WhatsAppFAB() {
  return (
    <motion.a
      href={site.whatsappWithMessage}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-6 right-6 z-[85] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-shadow hover:shadow-[#25D366]/50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.4, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsAppIcon className="h-7 w-7 text-white" />
      <span className="sr-only">WhatsApp</span>
    </motion.a>
  );
}
