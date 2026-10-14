# Auditoria Piola Health v4.0 — 13/10/2026

## Escopo e evidência
Reconstrução no repositório tpiola/thiagopiola e projeto Vercel thiagopiola existentes. Nenhuma infraestrutura duplicada. Histórico Git preservado; árvore anterior substituída. Next 16.4/React 19.3 substituem versões antigas do briefing por segurança e compatibilidade.

Na primeira implementação: 29 rotas HTTP 200, nove larguras sem overflow, cinco páginas sem violações automatizadas Axe, sem erros JS, canvas ativado/pausado e movimento reduzido verificados. Lighthouse de laboratório variou entre 90 e 95 em Performance e marcou 100 em Accessibility, Best Practices e SEO. LCP entre 2,78 e 3,45 s: meta de 2,5 s não atingida. CLS aproximadamente 0,00011. Esses resultados não são medição de campo nem garantia em todos os aparelhos.

Após desconexão do ambiente original, fonte recuperada em sandbox isolado do mesmo projeto. npm ci, lint, TypeScript e compilação concluídos; BUILD_ID e prerender-manifest presentes. Alguns textos foram reescritos durante recuperação. Resultado dos novos testes e produção deve ser conferido antes de extrapolar resultados anteriores.

## Checklist solicitado
P = implementado, precisa confirmação em produção. A = verificado no primeiro laboratório. V = verificado na recuperação. D = depende de configuração externa. F = meta pendente.

| Nº | Item | Estado / observação |
|---|---|---|
|1|Todas as rotas|V — geradas no build; navegação precisa confirmação em produção|
|2|Header Thiago Piola → TP|A/P|
|3|Menu mobile|A/P — Escape e foco|
|4|Links internos|A/P|
|5|CTAs|P — rotas e WhatsApp pessoal; ofertas consultam disponibilidade|
|6|Newsletter valida email|A/P|
|7|Contato envia Resend|D — não enviar sem credenciais/dominio verificado|
|8|Blog Sanity|D — três artigos locais enquanto CMS não conectado|
|9|Artigo individual|A/P|
|10|Sitemap|V/P|
|11|Design system|P — Clinical Noir|
|12|Paleta consistente|P|
|13|Playfair Display|V — next/font compila|
|14|Sem FOUT visível|P — display swap; depende da rede|
|15|CRF header/footer|P|
|16|Contraste AA|A — Axe; revisão manual completa ainda necessária|
|17|Sem rostos|P — farmácia vazia e ilustrações|
|18|Lucide|V/P|
|19|Cursor magnético|P — desktop, escolha de movimento respeitada|
|20|Reveal por palavra|P — GSAP; mobile/reduced motion imediato|
|21|Lenis|P — somente quando apropriado|
|22|Scrollytelling pinado|A/P — mobile exibe os cinco passos|
|23|3D mouse|A/P|
|24|3D scroll|A/P|
|25|Transição de página|P — entrada inicial imediata para LCP|
|26|Hover cards|P|
|27|Footer pixel-brick|P — monograma TP|
|28|Reduced motion|A/P — sem canvas automático, cinco passos visíveis|
|29|320px|A|
|30|375px|A|
|31|414px|A|
|32|768px|A|
|33|1280px|A|
|34|1920px|A|
|35|3D mobile/fallback|A/P — SVG imediato e ativação opcional|
|36|Performance ≥90|A — 90–95 no laboratório anterior; repetir na produção|
|37|Accessibility ≥90|A — 100; automação não substitui revisão manual|
|38|Best Practices ≥90|A — 100|
|39|SEO ≥90|A — 100|
|40|LCP <2,5s|F — 2,78–3,45s no laboratório anterior|
|41|CLS <0,1|A — ~0,00011|
|42|Poster vídeo|P — WebP e JPG|
|43|3D lazy|P — carrega depois de ativação|
|44|next/image|P|
|45|Sem promessa de cura|P — percentuais clínicos sem evidência removidos|
|46|Orientação profissional|P — consulte seu médico ou farmacêutico|
|47|LGPD publicada|P — política, consentimento e confirmação manual de email|

## Pendências operacionais
- Configurar Resend, remetente verificado, audiência/webhook e segredo de token. Testar inscrição com endereço autorizado. Operar conteúdo semanal no provedor.
- Conectar Sanity e publicar conteúdo revisado. Configurar Umami quando disponível.
- Fornecer checkout Hotmart/Kiwify e produto real antes de habilitar pagamento. Não há checkout fictício.
- Revisar dados do controlador, política e escopo profissional com o responsável. O site não certifica conformidade jurídica nem se atribui habilitação médica.
- Conferir declaração de finalista e demais dados profissionais com documentação do titular.
- Meta LCP permanece aberta. Repetir Lighthouse móvel na produção e medir dados reais.
- Vídeo é movimento de câmera sobre imagem original gerada, não filmagem de uma unidade. Modelos 3D procedurais, sem GLB obrigatório.

## Revalidação da fonte recuperada
10 rotas principais/sitemap responderam 200 no servidor de produção local. Seis larguras (320,375,414,768,1280,1920) sem overflow. Axe em home/saúde/empresas/contato: zero violações WCAG A/AA automatizadas. Zero erros JS durante essas navegações. Build completo identificado por EKKQns9wOsESoxTI0_w-h. Testes não enviaram emails nem realizaram pagamentos.

Novo Lighthouse no sandbox: Accessibility/Best Practices/SEO 100. Performance inválida por erro NO_SCREENSHOTS do Chromium; não usar o zero retornado como nota do site. Métricas coletadas: FCP 1,14s, LCP 3,34s, TBT 0ms, CLS 0,000254. A meta de LCP segue pendente e a nota Performance precisa repetição em navegador compatível.
