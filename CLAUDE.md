# Thiago Piola Portfolio — Guia do Desenvolvedor

Este arquivo serve como ponto de entrada para automação e convenções do projeto.

## Comandos Úteis
- `npm run dev` — Iniciar servidor de desenvolvimento
- `npm run build` — Validar build de produção (Next.js 16)
- `npm run lint` — Rodar verificações de lint
- `npm run format` — Formatar código com Prettier

## Convenções de Código
- **SSOT**: Dados em [lib/content.ts](lib/content.ts)
- **Estilos**: Tailwind v4 (CSS variables no [app/globals.css](app/globals.css))
- **Animações**: Framer Motion (veja [components/motion/](components/motion/))
- **SEO**: Schema.org em [components/JsonLd.tsx](components/JsonLd.tsx)

Para instruções detalhadas de comportamento do agente IA, consulte [AGENTS.md](AGENTS.md).

