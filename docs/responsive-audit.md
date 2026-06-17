# Auditoria de Responsividade Mobile — thiagopiola.com.br

Data: 17/06/2026
Projeto: Next.js 16 + Tailwind CSS v4
Analisados: 17 componentes + globals.css + layout.tsx + indústria page

---

## Problemas Encontrados e Corrigidos

### 🔴 CRÍTICO: Touch targets abaixo do mínimo WCAG (44px)

| Componente | Elemento | Tamanho | Correção |
|-----------|----------|---------|----------|
| `Header.tsx` | Botão hamburger menu | `h-9 w-9` (36px) | → `h-11 w-11` (44px) |
| `Header.tsx` | Botão fechar menu mobile | `h-10 w-10` (40px) | → `h-11 w-11` (44px) |
| `ThemeToggle.tsx` | Botão tema claro/escuro | `h-9 w-9` (36px) | → `h-11 w-11` (44px) |
| `SocialLinks.tsx` | Ícones redes sociais (hero) | `h-10 w-10` (40px) | → `h-11 w-11` (44px) |
| `SocialLinksGrouped.tsx` | Ícones redes sociais (footer) | `h-9 w-9` (36px) | → `h-11 w-11` (44px) |

**Impacto:** Usuários mobile têm dificuldade em tocar nos botões de navegação e redes sociais, causando frustração e possíveis toques acidentais.

**Correção:** Todos os touch targets elevados para `h-11 w-11` (44px), conforme WCAG 2.2 Success Criterion 2.5.8.

---

### 🟡 MÉDIO: Viewport sem width/scale explícito

**Arquivo:** `app/layout.tsx` (linha 130-135)

```tsx
export const viewport: Viewport = {
  themeColor: [...]
};
```

**Problema:** O objeto `viewport` não inclui `width: device-width` e `initialScale: 1`. Embora o Next.js inclua defaults, é frágil — qualquer alteração futura pode quebrar o zoom/ escala em mobile.

**Impacto:** Em dispositivos muito pequenos (<360px), o site pode não escalar corretamente.

**Correção:** Adicionado `width: "device-width"` e `initialScale: 1` explicitamente.

---

### 🟡 MÉDIO: Logo com whitespace-nowrap em viewports estreitas

**Arquivo:** `components/Logo.tsx` (linha 56)

```tsx
<span className="whitespace-nowrap text-[12px] font-semibold ...">
  THIAGO PIOLA
</span>
```

**Problema:** `whitespace-nowrap` impede quebra de linha, e em viewports < 320px (~iPhone SE) o texto pode transbordar o container. O container pai tem `min-w-0` que permite encolhimento, mas o texto fixo impede redução abaixo do ponto de overflow.

**Impacto:** Em dispositivos muito pequenos, o nome pode causar overflow horizontal no cabeçalho.

**Correção:** Adicionado `overflow-hidden text-ellipsis` para truncar graciosamente em viewports extremas. O `whitespace-nowrap` mantido para evitar quebra.

---

### 🟢 VERDE: Overflow-x hidden já presente

**Arquivo:** `app/globals.css` (linhas 43-46 e 61-68)

```css
html { overflow-x: hidden; }
body { overflow-x: hidden; }
```

**Status:** ✅ Já implementado corretamente. Nenhuma correção necessária.

---

### 🟢 VERDE: Grids responsivos

Todos os grids do site já possuem variantes responsivas:

| Componente | Grid |
|-----------|------|
| `ProvasEntrega.tsx` | `grid gap-5 sm:grid-cols-2 lg:grid-cols-4` ✅ |
| `TrustBar.tsx` | `grid gap-4 sm:grid-cols-3` ✅ |
| `Trajetoria.tsx` | `grid gap-6 lg:grid-cols-2` ✅ |
| `Projetos.tsx` | `grid gap-5 lg:grid-cols-3` ✅ |
| `Footer.tsx` | `grid gap-12 lg:grid-cols-12` ✅ |
| `IndustriaDossier.tsx` | `grid gap-12 md:grid-cols-2` ✅ |

**Status:** ✅ Todos os grids quebram corretamente para coluna única em mobile.

---

### 🟢 VERDE: Seções com padding adequado

Todas as seções seguem o padrão `mx-auto max-w-6xl px-5 md:px-8`, garantindo 20px de padding lateral em mobile e 32px em desktop.

**Status:** ✅

---

### 🟢 VERDE: Tipografia fluida com clamp()

Os tamanhos de fonte usam `clamp()`:

```css
.text-display { font-size: clamp(3rem, 9vw, 6.5rem); }
.text-heading-xl { font-size: clamp(2rem, 5vw, 4rem); }
.text-heading { font-size: clamp(1.5rem, 3.5vw, 2.5rem); }
```

E media query adicional para < 640px reduz ainda mais.

**Status:** ✅

---

### 🟢 VERDE: Nav mobile funcional

O Header possui menu mobile com:
- Botão hamburger visível em `lg:hidden`
- Overlay fullscreen com backdrop-blur
- Framer Motion para transições
- Botão close e links que fecham o menu onClick

**Status:** ✅

---

### 🟢 VERDE: Imagens com max-width: 100%

- `ProfilePortrait.tsx`: `w-full max-w-[280px]`, Image com `object-cover` ✅
- `Logo.tsx`: `h-auto w-auto object-contain` com `maxWidth: 180px` ✅

**Status:** ✅

---

## Resumo das Correções Aplicadas

| # | Arquivo | Correção |
|---|---------|----------|
| 1 | `app/layout.tsx` | Adicionado `width: "device-width"` e `initialScale: 1` ao viewport export |
| 2 | `components/Header.tsx` | Hamburger button: `h-9 w-9` → `h-11 w-11` (44px) |
| 3 | `components/Header.tsx` | Close button mobile: `h-10 w-10` → `h-11 w-11` (44px) |
| 4 | `components/ThemeToggle.tsx` | Theme button: `h-9 w-9` → `h-11 w-11` (44px) |
| 5 | `components/SocialLinks.tsx` | Social icons: `h-10 w-10` → `h-11 w-11` (44px) |
| 6 | `components/SocialLinksGrouped.tsx` | Social icons footer: `h-9 w-9` → `h-11 w-11` (44px) |
| 7 | `components/Logo.tsx` | Adicionado `overflow-hidden text-ellipsis` ao texto do logo |

---

## Recomendações Futuras

1. **Testar em dispositivos reais:** iPhone SE (375x667), Galaxy S8+ (360x740), Google Pixel (412x915)
2. **Verificar Floating CTA:** O touch target está exatamente em 44px no mobile (ícone 20px + py-3). Considerar aumentar para `py-3.5` para margem de segurança.
3. **Mobile menu scroll:** Adicionar `overflow-y-auto` ao menu mobile para prevenir problemas futuros se mais itens de nav forem adicionados.
4. **Lighthouse mobile:** Executar auditoria Lighthouse em viewport 375px para confirmar scores.
