"use client";

import { socialLinksCommunity, socialLinksProfessional } from "@/lib/content";
import { cn } from "@/lib/utils";
import {
  BlueskyIcon,
  GitHubIcon,
  GoogleDevelopersIcon,
  NotionIcon,
  RedditIcon,
  TelegramIcon,
  TikTokIcon,
} from "./SocialIcons";

const iconMap = {
  Bluesky: BlueskyIcon,
  GitHub: GitHubIcon,
  "Google Developers": GoogleDevelopersIcon,
  Notion: NotionIcon,
  Reddit: RedditIcon,
  Telegram: TelegramIcon,
  TikTok: TikTokIcon,
} as const;

type SocialLinksGroupedProps = {
  className?: string;
};

function LinkGrid({
  links,
  label,
}: {
  links: readonly { href: string; label: string }[];
  label: string;
}) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-wider text-muted">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {links.map(({ href, label: linkLabel }) => {
          const Icon = iconMap[linkLabel as keyof typeof iconMap];
          return (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={linkLabel}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted",
                "transition-all duration-300 hover:border-[var(--brand)]/40 hover:text-[var(--brand)]",
                "active:scale-95",
              )}
            >
              <Icon className="h-3.5 w-3.5" />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export function SocialLinksGrouped({ className }: SocialLinksGroupedProps) {
  return (
    <div className={cn("space-y-5", className)}>
      <LinkGrid links={socialLinksProfessional} label="Profissional" />
      <LinkGrid links={socialLinksCommunity} label="Comunidade" />
    </div>
  );
}
