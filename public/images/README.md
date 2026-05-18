# /public/images

## Foto profissional — Thiago Piola

Coloque o arquivo `thiago-piola.jpg` aqui para ativar a foto de perfil no Hero.

### Especificações

- **Arquivo:** `thiago-piola.jpg`
- **Resolução:** 800×1100 px mínimo (proporção retrato)
- **Estilo:** Retrato de estúdio com fundo escuro ou neutro — integra naturalmente ao fundo preto do Hero via máscara de gradiente
- **Formato:** JPG (qualidade 85–90) ou WebP

### Como ativar no Hero

No componente `components/Hero.tsx`, localize o comentário:
```
{/* Replace this div with <Image> pointing to /public/images/thiago-piola.jpg */}
```

Substitua o `<div>` placeholder por:
```tsx
import Image from "next/image";

<Image
  src="/images/thiago-piola.jpg"
  alt="Thiago Piola"
  fill
  className="object-cover object-top"
  priority
/>
```

O gradiente de máscara (`linear-gradient`) já está configurado para integrar a foto ao fundo escuro sem recorte brusco.

## Favicon

O arquivo `favicon.svg` está em `/public/favicon.svg` (já configurado).
