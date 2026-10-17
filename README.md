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
| Cardápio oficial (nomes, descrições, preços, ingredientes) | `src/data/cardapio.ts` | **Nomes e preços de exemplo.** As 14 fotos de produto já estão ligadas, e as descrições seguem o que aparece em cada foto. Trocar pelos dados reais e mudar `CARDAPIO_DEMONSTRATIVO` para `false` (o aviso "Cardápio ilustrativo" some). |
| Fotos | `public/img/produtos/` (fotos) e `public/img/recortes/` (recortes) | 14 fotos de produto em WebP. Os hambúrgueres da abertura e do "Universo do Beco" são **recortes com transparência real** (canal alfa), gerados a partir das próprias fotos com remoção de fundo automática (modelo isnet). Para trocar, gere um WebP/PNG transparente e aponte `recorte` no produto (`cardapio.ts`) ou `imagens.heroHamburguer` (`marca.ts`). |
| Logotipo oficial | `src/components/Logo.tsx` | Hoje é **provisório** (tipográfico, inspirado na placa da fachada). Trocar pelo SVG/PNG oficial. |
| Endereço, link do mapa, horários, telefone/WhatsApp, Instagram, e-mail | `src/data/marca.ts` | `null` = "A confirmar". Ao preencher, aparecem os botões "Abrir rota", o mapa incorporado e "Pedir pelo WhatsApp" no detalhe do produto. |
| História da casa | `marca.historia` | Espaço reservado. |
| Foto da fachada em alta resolução | `public/img/fachada.*` | A atual tem 715×364 px. Uma versão maior deixa a seção "O Beco" mais nítida. |

## Atmosfera

`src/components/Atmosfera.tsx` tem os morcegos (`Morcegos`) e a poeira mágica (`PoeiraMagica`). Cada seção passa o seu próprio bando/partículas: a abertura usa poucos morcegos atrás do hambúrguer, "Saborosamente assustador" tem um bando cruzando a lua, e a fachada tem dois perto do telhado. Tudo é `aria-hidden`, `pointer-events: none` e fica parado com `prefers-reduced-motion`.

## Decisões

- **Sem carrinho/pagamento**: não há integração de pedidos. O detalhe do produto oferece "Pedir pelo WhatsApp" assim que o número for cadastrado.
- **Acessibilidade**: HTML semântico, link "pular para o conteúdo", foco visível dourado, menu móvel com Esc e foco preso, abas com navegação por setas (WAI-ARIA), modal com `<dialog>` nativo, `prefers-reduced-motion` desliga animações e parallax.
- **Desempenho**: fontes locais (`@fontsource`, só os subconjuntos usados), nenhuma imagem é pedida quando ainda não existe, animações só com `transform`/`opacity`, parallax só em ponteiro fino.
