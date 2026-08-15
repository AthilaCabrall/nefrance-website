# Instituto Nefrance

Site institucional do Instituto Nefrance — clínica multidisciplinar no Setor Bela Vista, Goiânia, especializada em avaliação e intervenção em dificuldades de aprendizagem (TDAH, TEA, dislexia, atraso na alfabetização e afins).

Site em página única, com fundo animado (Aurora/WebGL), carrossel de equipe, cards de especialidades e formulário de contato via WhatsApp.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Motion](https://motion.dev) para animações
- [Phosphor Icons](https://phosphoricons.com)
- [ogl](https://github.com/oframe/ogl) para o fundo Aurora (WebGL)

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura

```
app/                  # rotas, layout raiz, globals.css (tokens de cor/tipografia)
components/
  sections/           # uma seção da home por arquivo (hero, especialidades, equipe...)
  ui/                 # peças reutilizáveis (botão, container, reveal on-scroll...)
  aurora/             # fundo animado em WebGL
lib/data/             # conteúdo editável (equipe, especialidades, depoimentos, processo)
lib/team-photos.server.ts   # leitura das pastas de foto da equipe
public/team/{slug}/   # fotos reais de cada profissional (ver abaixo)
```

## Adicionando foto de uma profissional

Não precisa mexer em código. Solte a imagem dentro de `public/team/{slug}/`, por exemplo:

```
public/team/andrea/foto-1.jpg
public/team/ingrid/foto-1.jpg
```

O site lê a pasta a cada carregamento de página. Mais de uma imagem na mesma pasta = uma é sorteada aleatoriamente a cada visita. Slugs atuais: `andrea`, `ingrid`, `luciene` (ver `lib/data/team.ts`).

## Conteúdo editável

Tudo em `lib/data/*.ts`, sem precisar tocar nos componentes:

- `team.ts` — equipe (nome, cargo, bio, tags)
- `specialties.ts` — especialidades atendidas
- `testimonials.ts` — depoimentos (estrelas, avatar, texto)
- `process.ts` — passos do "como funciona"

## Placeholders que ainda precisam de conteúdo real

- Número de WhatsApp: `5562000000000` (aparece em `cta-band.tsx`, `cta-form.tsx`, `whatsapp-float.tsx`, `footer.tsx`)
- E-mail e Instagram no rodapé
- Fotos da Andrea e da Ingrid (Luciene já está com foto real)
- Imagem do bloco geométrico do hero (`components/sections/hero.tsx`)
- Estatística "+180 avaliações concluídas" no hero

## Deploy

Feito via [Vercel](https://vercel.com), conectado a este repositório. Qualquer push em `main` gera um novo deploy automaticamente depois que o projeto for importado no dashboard da Vercel.
