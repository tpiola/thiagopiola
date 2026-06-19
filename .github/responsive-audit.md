# Instruções de Auditoria de Responsividade

Sempre que alterar o layout ou componentes UI, realize uma auditoria de responsividade seguindo estes passos:

1.  **Viewports Obrigatórios**:
    *   **Mobile Small**: 320px (iPhone SE)
    *   **Mobile Large**: 430px (iPhone 15 Pro Max)
    *   **Tablet**: 768px (iPad Mini) / 1024px (iPad Pro)
    *   **Desktop**: 1440px / 1920px

2.  **Verificações**:
    *   [ ] Não há scroll horizontal indesejado.
    *   [ ] Textos não quebram de forma estranha em telas pequenas.
    *   [ ] Imagens usam `aspect-ratio` e `object-cover` para evitar distorção.
    *   [ ] Botões e links têm `min-height` e `min-width` de 44px em mobile.
    *   [ ] O menu hamburger funciona e é acessível.

3.  **Ferramentas**:
    *   Use `open_browser_page` e `mcp_chrome_devtoo_emulate` para testar diferentes viewports.
    *   Tire screenshots com `screenshot_page` para validar visualmente.

4.  **Tailwind v4 Gotchas**:
    *   Verifique se as classes `md:`, `lg:` etc. estão sendo aplicadas conforme esperado no `globals.css` (@theme).
