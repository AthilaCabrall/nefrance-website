# Changelog

Registro de cada atualização do site, mais recente primeiro. Formato livre inspirado em [Keep a Changelog](https://keepachangelog.com/pt-BR/).

## 2026-08-17

### Removido
- Scroll-snap por seção (o encaixe automático ao rolar) — tirado por completo, a pedido.
- Box "+180 avaliações concluídas" no hero.

### Adicionado
- Logo 3D de verdade (`public/logo-3d.png`), gerada com Higgsfield (Recraft V4.1): cérebro em vidro/cromo com o degradê roxo → verde da marca, fundo transparente. Substitui o SVG placeholder no menu.
- `.glass-panel-dark`: variante mais escura e densa do vidro fosco, pra painéis que flutuam sobre fundo claro/movimentado (a Aurora) e precisam de mais contraste.
- **Cérebro em 3D de verdade no hero** (`public/brain.glb`, `components/ui/brain-3d.tsx`): modelo 3D real gerado com Higgsfield a partir da logo, renderizado com Three.js/React Three Fiber. Gira em geometria real conforme o mouse passa por cima (não é mais uma imagem plana inclinando). Comprimido de 13 MB para ~800 KB (texturas redimensionadas e recomprimidas, geometria com Draco) sem perda visível de qualidade. Só carrega em telas ≥1024px — celular nunca baixa o modelo.
- Fotos reais da Andrea e da Ingrid, direto nas pastas `public/team/andrea/` e `public/team/ingrid/`.

### Alterado
- **Hero**: a foto no bloco geométrico foi trocada pelo cérebro 3D girando (o mesmo da logo, agora bem maior), com o card de "+180 avaliações" no novo estilo de vidro escuro.
- Cérebro 3D aumentado de 380px para 500px (desktop).

### Corrigido
- Bug real na logo com tilt 3D: o `motion.div` que aplica a rotação usa `transform`, e um elemento com `transform` vira automaticamente uma nova referência de posicionamento para filhos `position: absolute` — como ele não tinha altura/largura definida, colapsava pra 0×0 e a imagem dentro nunca aparecia. Corrigido dando `h-full w-full` a esse `motion.div` (`components/ui/tilt-logo.tsx`).
- Bug real no cérebro 3D: o `Environment` do drei estava aparecendo como uma skybox visível atrás do modelo (o "quadrado esquisito" que você viu) em vez de só iluminar o material. Corrigido com `background={false}`.

## 2026-08-15

### Adicionado
- Botão flutuante de WhatsApp, fixo na tela durante toda a navegação (pedido comum em sites de clínica concorrentes pesquisados no início do projeto — nenhum ponto de contato ficava a mais de uma rolagem de distância).
- `README.md` e este `CHANGELOG.md`.
- Logo com efeito 3D no menu: inclina conforme o mouse passa por cima, pronta pra receber a logo real em PNG (`components/ui/tilt-logo.tsx`). Por enquanto usa uma marca de cérebro em SVG como placeholder.
- Spotlight nos cards de especialidades: uma luz suave segue o cursor ao passar por cima, reforçando que o card é interativo.
- Entrada do título do hero palavra por palavra (split text), só ali — o resto do site continua com o fade padrão pra não virar exagero.

### Alterado
- **Scroll**: o encaixe automático por seção (scroll-snap) estava travando com muita força a cada rolagem. Trocado de `mandatory` para `proximity` — agora só se ajusta quando o usuário já está perto do início de uma seção, sem lutar contra o gesto de rolagem.
- **Hero**: a mancha orgânica atrás do cérebro foi trocada por um bloco geométrico retangular com foto (mais fiel à referência do Behance/Instituto Rio Negro). O cérebro emoji foi removido depois (ver abaixo); o bloco com foto ficou sozinho, esperando a logo real.
- **Depoimentos**: redesenhados no formato de review (avatar, nome, estrelas, tempo relativo, texto), com cartão branco — sem usar a marca do Google, só o padrão visual, pra não parecer um review verificado de verdade.

### Removido
- Mascote da coruja no hero.
- Emoji de cérebro no hero (o cliente vai colocar a logo em PNG no lugar).
- Tudo relacionado a ferramentas de IA usadas para construir o site: `.claude/`, `CLAUDE.md`, `AGENTS.md`, script de screenshot e a dependência do Playwright. O repositório agora é só o essencial pra baixar e rodar em qualquer editor.

## 2026-08-13

### Adicionado
- Estrutura inicial do site: Next.js 16 + Tailwind v4 + Motion.
- Seções: Hero, Diferenciais, Sobre, Especialidades, Equipe (carrossel), Como Funciona, Depoimentos, CTA, Rodapé.
- Fundo animado Aurora (WebGL) com paleta roxo → verde extraída da logo do Instituto Nefrance.
- Sistema de pastas por profissional (`public/team/{slug}/`) — qualquer foto solta ali entra no rodízio do carrossel automaticamente.
- Dados reais da Andrea (Fonoaudióloga) e da Ingrid (Neuropsicopedagoga), enviados pelo cliente.
- Dados e foto reais da Luciene Perillo (Psicopedagoga), extraídos do portfólio em PDF enviado pelo cliente.
- CTA final dividido: metade com a chamada em degradê, metade com formulário de contato (nome, WhatsApp, mensagem) que monta e abre uma conversa no WhatsApp.
- Scroll-snap por seção (ajustado depois, ver 2026-08-15).
- Script `scripts/screenshot.mjs` para gerar PNG da página inteira sem precisar publicar o site.

### Corrigido
- Bug real: seções abaixo do hero podiam ficar permanentemente invisíveis dependendo de como a página carregava — o `whileInView` do Motion não disparava de forma confiável. Substituído por observer próprio com rede de segurança (nunca fica invisível por mais de 1s).
- Fallback automático de foto: se o arquivo local não existir ainda, mostra um placeholder em vez de ícone de imagem quebrada.
