# thiagopiola

Portfólio profissional de **Thiago Biasoli G. Piola** — Farmacêutico (CRF-SP 58.519), Engenheiro de IA, especialista em vendas, treinamento e automação.

Site em produção: [www.thiagopiola.com.br](https://www.thiagopiola.com.br)

## Stack

- [Next.js](https://nextjs.org) (App Router)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide](https://lucide.dev) + ícones de marca customizados
- Deploy: [Vercel](https://vercel.com)

## Fluxo de publicação

Todas as alterações são feitas **neste repositório** (GitHub). Não é necessário clonar no computador local.

1. Editar código (Cursor Cloud Agent ou interface do GitHub)
2. `git push` na branch `main` (ou merge de PR)
3. A Vercel faz o deploy automaticamente

Consulte [VERCEL.md](./VERCEL.md) para revisar a integração Git → Vercel.

## Origem do código

O app foi sincronizado com o site em produção (recriação a partir do HTML publicado e do projeto Vercel `v0-thiagopiola`). Snippet B2B auxiliar em `scripts/ai_studio_b2b_section.sh` (não integrado ao site).

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # validar antes do deploy
npm run lint
npx prettier -w .
```

## Estrutura

```
app/           # layout, página principal, estilos globais
components/    # seções do site (Hero, Competências, etc.)
lib/           # utilitários (cn)
public/        # favicon e assets estáticos
scripts/       # snippets auxiliares
```

## Licença

MIT — ver [LICENSE](./LICENSE).
