# Multi-stage build: thiagopiola.com.br
# Stage 1: Build the Next.js app
FROM node:22-alpine AS builder
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./
COPY next.config.ts tsconfig.json eslint.config.mjs postcss.config.mjs ./
COPY src/ src/
COPY public/ public/

# Install dependencies
RUN npm ci --only=production 2>/dev/null; npm install --no-audit --no-fund

# Build
RUN npm run build

# Stage 2: Production with standalone output
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy standalone build
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
