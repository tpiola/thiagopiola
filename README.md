# Piola Health v4.0

Site de Thiago Piola, farmacêutico CRF/SP 58.519. Educação em saúde, treinamento e soluções digitais para farmácias.

## Executar

```bash
npm ci
npm run dev
npm run validate
npm run start
```

Node 22/24. Next.js 14 do briefing foi atualizado para 16.4.0 por segurança e compatibilidade com React 19.3/R3F 9. TypeScript strict, Tailwind 3.4, GSAP, Lenis, Framer Motion, R3F/Drei/postprocessing, RHF/Zod e Resend.

## Integrações

| Recurso | Configuração |
|---|---|
| Contato | RESEND_API_KEY, RESEND_FROM_EMAIL verificado; CONTACT_TO_EMAIL opcional |
| Newsletter | Resend e RESEND_AUDIENCE_ID ou MAKE_NEWSLETTER_WEBHOOK; NEWSLETTER_TOKEN_SECRET recomendado |
| Sanity | NEXT_PUBLIC_SANITY_PROJECT_ID e NEXT_PUBLIC_SANITY_DATASET |
| Studio | SANITY_STUDIO_PROJECT_ID e SANITY_STUDIO_DATASET; npm run studio |
| Umami | NEXT_PUBLIC_UMAMI_URL e NEXT_PUBLIC_UMAMI_WEBSITE_ID |

Sem configuração, APIs de envio retornam 503 e a interface oferece contato direto. Newsletter: solicitação → email com token de 24h → confirmação manual → audiência/webhook. GET não inscreve automaticamente. O webhook público antigo é aceito no servidor para continuidade, mas prefira a variável privada. O envio editorial de quinta-feira deve ser operado no provedor após configuração e criação de conteúdo. Analytics exige escolha explícita; queries e confirmação de inscrição são excluídas.

Produtos usam valores do briefing e consultam disponibilidade; não há checkout fictício. Links Hotmart/Kiwify não foram fornecidos. Não há publicidade patrocinada ativa. Atendimentos e treinamento exigem definição de escopo e disponibilidade.

## Visual e assets

Clinical Noir. Hero com imagem original de farmácia vazia e loop de 10s criado por movimento de câmera sobre essa imagem; não é filmagem real de uma unidade. Modelo de molécula e caixa procedurais, sem GLB obrigatório. R3F só carrega após ativação. Mobile/reduced motion têm SVG imediato; o vídeo tem controle de reprodução/pausa. Jornada GSAP pinada no desktop, cinco passos visíveis no mobile. Monograma TP em blocos no footer. PDF gratuito e QR local para WhatsApp pessoal.

Para substituir por filmagem, usar arquivo próprio sem rostos/nome de medicamento, MP4 H.264 e poster. Para GLB, modelar no Blender, otimizar polígonos/texturas e validar tamanho, autoria e fallback antes de integrar.

## Deploy

Usar tpiola/thiagopiola, main, projeto Vercel thiagopiola existente. Não criar repositório/projeto duplicado.

```bash
npm run validate
git add .
git commit -m "feat: reconstruir Piola Health v4.0"
git push origin main
```

Após READY: conferir /api/health, /sitemap.xml, home, rotas, formulários e domínios. Histórico anterior disponível para recuperação. A auditoria e suas limitações estão em docs/AUDITORIA.md.
