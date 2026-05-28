"use client";

import { socialLinks } from "@/lib/content";
import { cn } from "@/lib/utils";
import {
  GitHubIcon,
  GoogleDevelopersIcon,
  LinkedinIcon,
  NotionIcon,
  RedditIcon,
  TelegramIcon,
  TikTokIcon,
  XIcon,
} from "./SocialIcons";

const iconMap = {
  GitHub: GitHubIcon,
  "Google Developers": GoogleDevelopersIcon,
  LinkedIn: LinkedinIcon,
  Notion: NotionIcon,
  Reddit: RedditIcon,
  Telegram: TelegramIcon,
  TikTok: TikTokIcon,
  X: XIcon,
} as const;

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
};

export function SocialLinks({ className, iconClassName = "h-4 w-4" }: SocialLinksProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {socialLinks.map(({ href, label }) => {
        const Icon = iconMap[label];
        return (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted",
              "transition-all duration-300 ease-out",
              "hover:scale-110 hover:border-[var(--brand)]/40 hover:text-[var(--brand)] hover:shadow-sm",
              "active:scale-95 motion-reduce:transition-none motion-reduce:hover:scale-100",
            )}
          >
            <Icon className={iconClassName} />
          </a>
        );
      })}
    </div>
  );
}
