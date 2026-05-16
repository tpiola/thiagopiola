# Checklist: Vercel ↔ repositório `tpiola/thiagopiola`

## Status (verificado)

| Item                      | Status                                         |
| ------------------------- | ---------------------------------------------- |
| Repositório Git           | `tpiola/thiagopiola`                           |
| Branch de produção        | `main`                                         |
| Projeto Vercel            | `v0-thiagopiola` (time **thiagoso**)           |
| Domínios                  | `thiagopiola.com.br`, `www.thiagopiola.com.br` |
| Framework                 | Next.js (Turbopack)                            |
| Deploy automático em push | Ativo                                          |

Último deploy de produção referencia o commit `e3fd306` na `main`.

## Revisão manual (opcional)

- [ ] Abrir https://www.thiagopiola.com.br após cada alteração importante
- [ ] Validar âncoras: `#competencias`, `#tecnologia`, `#trajetoria`, `#contato`
- [ ] Testar telefone/e-mail e links de redes sociais
- [ ] Conferir favicon e metadados (title, description, Open Graph)

## Configuração de referência

Se precisar reconectar ou criar outro projeto:

1. [Vercel Dashboard](https://vercel.com) → projeto do domínio
2. **Settings → Git** → `tpiola/thiagopiola`, branch `main`
3. **Framework Preset:** Next.js
4. **Root Directory:** `.`
5. **Build Command:** `npm run build`
6. **Install Command:** `npm install`

## Fluxo contínuo

```
Editar no GitHub / Cursor Agent → git push → Vercel deploy automático → site atualizado
```

Não é necessário clonar o repositório no computador local para publicar alterações.
