<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

### Overview

This is a static portfolio site (single-page) for Thiago Piola. No database, no API routes, no backend, no environment variables needed.

### Running the dev environment

```bash
npm install
npm run dev        # starts Next.js dev server on port 3000
```

### Available scripts (see `package.json`)

| Command          | Purpose                |
| ---------------- | ---------------------- |
| `npm run dev`    | Dev server (Turbopack) |
| `npm run build`  | Production build       |
| `npm run lint`   | ESLint                 |
| `npm run format` | Prettier formatting    |

### Notes

- Next.js 16.2.6 with Turbopack — check `node_modules/next/dist/docs/` for API reference as noted in the top-level AGENTS.md rule.
- Tailwind CSS v4 is used (via `@tailwindcss/postcss`); no `tailwind.config.js` file exists — configuration is done in CSS.
- All site content is hardcoded in `lib/content.ts`; no external data fetching.
- No `.env` file is required.
