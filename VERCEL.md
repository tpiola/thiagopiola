# Checklist: conectar Vercel ao repositório

Use este guia no [dashboard da Vercel](https://vercel.com) **após** o merge do código Next.js na branch `main`.

## Antes de conectar o Git

- [ ] Confirmar que `npm run build` passa no repositório `tpiola/thiagopiola`
- [ ] (Opcional) Pausar deploys de produção no projeto atual até o primeiro deploy com código completo

## Conectar o repositório

1. Abra o projeto Vercel que serve **thiagopiola.com.br** e **www.thiagopiola.com.br**
2. **Settings → Git** → Connect Git Repository → `tpiola/thiagopiola`
3. **Production Branch:** `main`
4. **Framework Preset:** Next.js
5. **Root Directory:** `.` (raiz)
6. **Build Command:** `npm run build` (padrão)
7. **Install Command:** `npm install` (padrão)

## Domínios

- [ ] `thiagopiola.com.br` apontando para este projeto
- [ ] `www.thiagopiola.com.br` apontando para este projeto (redirect www → apex ou vice-versa, conforme preferência atual)

## Após o primeiro deploy

- [ ] Abrir https://www.thiagopiola.com.br e validar seções: Competências, Tecnologia, Trajetória, Contato
- [ ] Testar link WhatsApp e formulários de contato
- [ ] Verificar favicon e metadados (title, description) nas ferramentas de preview social

## Fluxo contínuo

```
Editar no GitHub / Cursor Agent → git push → Vercel deploy automático → site atualizado
```

Não é necessário clonar o repositório no computador local para publicar alterações.
