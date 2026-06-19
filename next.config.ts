import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["lucide-react"],
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1080, 1200, 1920],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "X-Frame-Options",
          value: "DENY",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
      ],
    },
    {
      source: "/images/(.*)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    {
      source: "/favicon.ico",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=86400",
        },
      ],
    },
  ],
};

export default nextConfig;
