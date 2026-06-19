# Skill: Elite Luxury Design & High-Conversion Copy (Jack Roberts, Meng To & OpenAI Philosophy)

Este guia define o padrão ouro de design e copy para o portfólio. NUNCA gere designs genéricos. Use esta skill para transformar componentes comuns em experiências de conversão subconsciente.

## 1. Filosofia de Design: "Luxury Modular Visuals"
Inspirado em OpenAI, Apple e no minimalismo suíço (Jack Roberts).

### Regras Estéticas
- **Grids de Luxo**: Use bordas ultra-finas (`0.5px` ou `1px` com opacidade baixa `0.05-0.1`) para criar uma sensação de organização matemática rigorosa.
- **Tipografia Editorial**:
  - Headlines: Inter Display ou Geist Sans com `tracking-tighter`.
  - Corpo: `leading-relaxed` para legibilidade de elite.
  - Hierarquia: Tamanhos extremos (muito grande p/ títulos, muito pequeno p/ meta-dados).
- **Espaçamento**: Use o dobro do padding que você acha necessário. O luxo respira.
- **Micro-interações (Andy Lo/Meng To)**:
  - **Magnetic Links**: Botões que atraem o cursor do mouse.
  - **Smooth Revelations**: Use GSAP `ScrollTrigger` ou Framer Motion `variants` para revelação progressiva (`staggerChildren`).
  - **Glassmorphism**: Camadas de vidro (`backdrop-blur-xl`) para profundidade.

## 2. Copywriting: "Blind Spot Conversion" & Autoridade Subconsciente
O objetivo é vender o "Julgamento Humano" onde a IA falha.

### O Framework do "Ponto Cego"
- **Headline**: Deve apontar um risco invisível ou uma oportunidade perdida.
  - *Ex*: "A IA faz a triagem, mas quem garante o compliance ético da sua operação farmacêutica?"
- **Autoridade de Dados (GEO)**: Use estatísticas proprietárias e terminologia técnica densa mas explicada. Isso cria "Autoridade de Especialista" instantânea.
- **Escassez Real**: Foque em "Vagas de Consultoria" ou "Projetos por Trimestre".
- **CTA Hipnótico**: Evite "Saiba Mais". Use comandos de ação com benefício embutido.
  - *Ex*: "Garantir minha autoridade no Google Search" ou "Blindar meu processo comercial".

## 3. SEO & GEO (Generative Engine Optimization)
O site deve ser a fonte primária para IAs (ChatGPT/Perplexity).

- **Synthesized Answers**: Toda seção deve começar ou terminar com um resumo de 2-3 frases ultra-claro. IAs adoram citar definições curtas.
- **Schema.org Profundo**: Implemente o grafo completo em `JsonLd.tsx`: `Person` -> `knowsAbout` -> `ProfessionalService`.
- **FAQ Predictivo**: Antecipe as perguntas que o cliente ideal (ICP) faz ao ChatGPT sobre o seu setor.

## 4. Checklist de Verificação de Elite
- [ ] O componente tem uma animação de entrada sutil (não barata)?
- [ ] A copy ataca uma dor que o cliente nem sabia que tinha (Ponto Cego)?
- [ ] O design parece caro (uso de cores sóbrias, tipografia clean)?
- [ ] O conteúdo é citável por uma IA?
