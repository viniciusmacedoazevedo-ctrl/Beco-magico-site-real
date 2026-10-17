# Beco Mágico — site

Site da hamburgueria **Beco Mágico** ("O hambúrguer mais mágico do Brasil.").
React + TypeScript + Vite, CSS puro com variáveis (sem framework de CSS) e animações em CSS/JS leve, sem bibliotecas de animação.

## Rodar

```bash
npm install
npm run dev       # desenvolvimento em http://localhost:5173
npm run build     # gera a pasta dist/ (site estático, sobe em qualquer hospedagem)
npm run preview   # testa o build
npm run lint
```

## Estrutura

```
src/
  data/marca.ts        dados oficiais (endereço, horários, contatos, Instagram, história) + caminhos das imagens
  data/cardapio.ts     categorias e produtos (separados da interface)
  components/          Header, HeroSection, HeroBurger, Transicao, FeaturedProducts, ProductCard,
                       MenuSection, ProductModal, SectionAssustador, BrandStory, LocationSection, Footer
  styles/tokens.css    design system: cores, fontes, espaçamentos, raios, sombras, curvas de animação
  styles/base.css      reset, botões, títulos de seção, revelação ao rolar, movimento reduzido
public/img/            imagens (fachada.jpg/webp já incluídas)
```

## O que falta preencher (nada foi inventado)

| Item | Onde | Situação |
| --- | --- | --- |
| Cardápio oficial (nomes, descrições, preços, ingredientes) | `src/data/cardapio.ts` | **Itens de exemplo.** Trocar e mudar `CARDAPIO_DEMONSTRATIVO` para `false` (o aviso "Cardápio ilustrativo" some). |
| Foto principal do hambúrguer (abertura) | `public/img/` + `imagens.heroHamburguer` em `marca.ts` | Falta. Ideal: PNG/WebP **com fundo transparente**, ~1600×1600 px. Enquanto não existir, a abertura mostra o selo da marca. As gotas de molho, a sombra e a flutuação são ativadas quando a foto entra. |
| Fotos dos produtos | `public/img/produtos/` + campo `imagem` de cada produto | Faltam. Sem foto, o card mostra uma arte provisória (sem imagem quebrada). |
| Foto da seção "Saborosamente assustador" | `imagens.tematica` | Falta. Vertical (4:5), luz dramática laranja/roxa. |
| 3 fotos da seção "Cada mordida, um feitiço" | `imagens.transicao` | Faltam. Verticais (~900×1100). |
| Logotipo oficial | `src/components/Logo.tsx` | Hoje é **provisório** (tipográfico, inspirado na placa da fachada). Trocar pelo SVG/PNG oficial. |
| Endereço, link do mapa, horários, telefone/WhatsApp, Instagram, e-mail | `src/data/marca.ts` | `null` = "A confirmar". Ao preencher, aparecem os botões "Abrir rota", o mapa incorporado e "Pedir pelo WhatsApp" no detalhe do produto. |
| História da casa | `marca.historia` | Espaço reservado. |
| Foto da fachada em alta resolução | `public/img/fachada.*` | A atual tem 715×364 px. Uma versão maior deixa a seção "O Beco" mais nítida. |

## Decisões

- **Sem carrinho/pagamento**: não há integração de pedidos. O detalhe do produto oferece "Pedir pelo WhatsApp" assim que o número for cadastrado.
- **Acessibilidade**: HTML semântico, link "pular para o conteúdo", foco visível dourado, menu móvel com Esc e foco preso, abas com navegação por setas (WAI-ARIA), modal com `<dialog>` nativo, `prefers-reduced-motion` desliga animações e parallax.
- **Desempenho**: fontes locais (`@fontsource`, só os subconjuntos usados), nenhuma imagem é pedida quando ainda não existe, animações só com `transform`/`opacity`, parallax só em ponteiro fino.
