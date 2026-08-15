# Changelog

Registro de cada atualização do site, mais recente primeiro. Formato livre inspirado em [Keep a Changelog](https://keepachangelog.com/pt-BR/).

## 2026-08-15

### Adicionado
- Botão flutuante de WhatsApp, fixo na tela durante toda a navegação (pedido comum em sites de clínica concorrentes pesquisados no início do projeto — nenhum ponto de contato ficava a mais de uma rolagem de distância).
- `README.md` e este `CHANGELOG.md`.

### Alterado
- **Scroll**: o encaixe automático por seção (scroll-snap) estava travando com muita força a cada rolagem. Trocado de `mandatory` para `proximity` — agora só se ajusta quando o usuário já está perto do início de uma seção, sem lutar contra o gesto de rolagem.
- **Hero**: a mancha orgânica atrás do cérebro foi trocada por um bloco geométrico retangular com foto (mais fiel à referência do Behance/Instituto Rio Negro), com o cérebro quebrando a borda do bloco.
- **Depoimentos**: redesenhados no formato de review (avatar, nome, estrelas, tempo relativo, texto), com cartão branco — sem usar a marca do Google, só o padrão visual, pra não parecer um review verificado de verdade.

### Removido
- Mascote da coruja no hero.

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
