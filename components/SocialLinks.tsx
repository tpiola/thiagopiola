"use client";

import { motion, useReducedMotion } from "framer-motion";
import { socialLinks } from "@/lib/content";
import { cn } from "@/lib/utils";
import {
  BlueskyIcon,
  GitHubIcon,
  GoogleDevelopersIcon,
  LinkedinIcon,
  NotionIcon,
  RedditIcon,
  TelegramIcon,
  TikTokIcon,
} from "./SocialIcons";

const iconMap = {
  Bluesky: BlueskyIcon,
  GitHub: GitHubIcon,
  "Google Developers": GoogleDevelopersIcon,
  LinkedIn: LinkedinIcon,
  Notion: NotionIcon,
  Reddit: RedditIcon,
  Telegram: TelegramIcon,
  TikTok: TikTokIcon,
} as const;

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
};

export function SocialLinks({ className, iconClassName = "h-4 w-4" }: SocialLinksProps) {
  const reduce = useReducedMotion();

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {socialLinks.map(({ href, label }, index) => {
        const Icon = iconMap[label];
        return (
          <motion.a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
              "group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-border text-muted",
              "bg-surface-elevated/70 shadow-[0_1px_0_rgba(255,255,255,0.45)_inset]",
              "transition-colors duration-300 ease-out",
              "hover:border-[var(--brand)]/45 hover:text-[var(--brand)] hover:shadow-sm",
              "active:scale-95 motion-reduce:transition-none motion-reduce:hover:scale-100",
            )}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            whileHover={reduce ? undefined : { y: -3, scale: 1.06 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.035, duration: 0.35 }}
          >
            <span
              className="absolute inset-x-2 -bottom-3 h-5 rounded-full bg-[var(--brand)]/10 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            />
            <Icon className={cn("relative z-10", iconClassName)} />
          </motion.a>
        );
      })}
    </div>
  );
}
