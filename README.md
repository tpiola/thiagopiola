# thiagopiola

Portfólio profissional de **Thiago Biasoli G. Piola** ? Farmac?utico (CRF-SP 58.519), Engenheiro de IA, especialista em vendas, treinamento e automaç?o.

Site em produç?o: [www.thiagopiola.com.br](https://www.thiagopiola.com.br)

## Stack

- [Next.js](https://nextjs.org) (App Router)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide](https://lucide.dev) + ícones de marca customizados
- Deploy: [Vercel](https://vercel.com)

## Fluxo de publicaç?o

Todas as alteraç?es s?o feitas **neste repositório** (GitHub). N?o é necessário clonar no computador local.

1. Editar código (Cursor Cloud Agent ou interface do GitHub)
2. `git push` na branch `main` (ou merge de PR)
3. A Vercel faz o deploy automaticamente

Consulte [VERCEL.md](./VERCEL.md) para revisar a integraç?o Git ? Vercel.

## Origem do código

O app foi sincronizado com o site em produç?o (recriaç?o a partir do HTML publicado e do projeto Vercel `v0-thiagopiola`). Snippet B2B auxiliar em `scripts/ai_studio_b2b_section.sh` (n?o integrado ao site).

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
components/    # seç?es do site (Hero, Compet?ncias, etc.)
lib/           # utilitários (cn)
public/        # favicon e assets estáticos
scripts/       # snippets auxiliares
```

## Licença

MIT ? ver [LICENSE](./LICENSE).
