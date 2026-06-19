<!-- BEGIN:nextjs-agent-rules -->

# Thiago Piola Portfolio — AI Agent Instructions

## Identidade e Propósito
Este é o repositório do portfólio profissional de **Thiago Piola**. O objetivo é apresentar competências em Farmácia, Engenharia de IA, Vendas e Automação (n8n/SaaS).
O site foca em **CONVERSÃO** e **AUTORIDADE**.

## Stack Tecnológica (Modernissima)
- **Framework**: Next.js 16 (App Router) + React 19 (Server Components por padrão).
- **Estilização**: Tailwind CSS v4 (Configuração inline no [app/globals.css](app/globals.css)).
- **Animações**: Framer Motion v12 + Lenis (Smooth Scroll).
- **Ícones**: Lucide React.
- **SEO**: Metadata API do Next.js + [components/JsonLd.tsx](components/JsonLd.tsx) (Schema.org).

## Regras Invioláveis de Desenvolvimento

### 0. Design de Elite e Conversão Subconsciente (CRÍTICO)
- **Sempre** consulte [.github/SKILL_ELITE_DESIGN.md](.github/SKILL_ELITE_DESIGN.md) E [.github/SKILL_SUBCONSCIOUS_PERSUASION.md](.github/SKILL_SUBCONSCIOUS_PERSUASION.md) antes de criar ou editar componentes.
- O design deve refletir a estética de **Luxo Minimalista** (OpenAI/Apple) e a copy deve aplicar **PNL e Neuromarketing** (Dopamine loops, Double binds, Pacing & Leading).
- O objetivo final não é ser bonito, é ser **A ÚNICA OPÇÃO LÓGICA** na mente do cliente e das IAs.

### 1. Fonte Única de Verdade (SSOT)
- **TODO** texto, link, serviço ou item da trajetória **DEVE** estar em [lib/content.ts](lib/content.ts).
- Nunca "hardcodar" textos diretamente nos componentes se eles puderem ser centralizados no `content.ts`.

### 2. Responsividade Total (Mobile-First)
- O site deve ser perfeito em mobile (320px+) até ultra-wide (1920px+).
- Use os breakpoints do Tailwind v4: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`.
- Toque: Botões devem ter área mínima de 44x44px.
- **Auditoria**: Siga as diretrizes em [.github/responsive-audit.md](.github/responsive-audit.md) após mudanças na UI.

### 3. Tailwind v4
- Não procure por `tailwind.config.js`. As variáveis de tema e plugins estão no [app/globals.css](app/globals.css) usando `@theme`.

### 4. Animações
- Use `framer-motion` para transições de estado e entrada.
- Referencie [components/motion/](components/motion/) para padrões de animação de scroll e revelação.

## Fluxo de Trabalho
- **Build**: `npm run build` (Sempre rode antes de sugerir um deploy).
- **Lint/Format**: `npm run lint` e `npm run format`.
- **Scaffolding**: Para novas seções B2B, use/estude o script [scripts/ai_studio_b2b_section.sh](scripts/ai_studio_b2b_section.sh).

## SEO & Conversão
- Cada página/seção deve focar em capturar leads ou estabelecer autoridade.
- Use Schema.org via `JsonLd` para garantir que motores de busca (e IAs) entendam a entidade "Thiago Piola".

<!-- END:nextjs-agent-rules -->

