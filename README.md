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

## Botão "Pedir agora"

Componente `BotaoPedir` (abertura, cabeçalho, menu do celular e final da cena do feitiço). O destino fica em `HREF_PEDIDO` (`src/data/marca.ts`). Hoje é `#cardapio`, porque o site não tem sistema de pedidos. Quando houver um link de delivery ou de WhatsApp, troque só essa constante.

## Botão "Reservar mesa"

Componente `BotaoReservar`. Abre a página de reservas da Plugguest (`LINK_RESERVA` em `src/data/marca.ts`) em uma nova aba. Aparece no cabeçalho, no menu do celular, na abertura, na seção "O Beco", na localização e no rodapé.

## Tipografia

- Títulos: Anton.
- "Mágico" e o nome da marca: Grenze Gotisch (variável, peso 800).
- Itálicos editoriais: Fraunces.
- Textos e preços: Manrope.

## Atmosfera

`src/components/Atmosfera.tsx` tem os morcegos (`Morcegos`) e a poeira mágica (`PoeiraMagica`). Cada seção passa o seu próprio bando/partículas: a abertura usa poucos morcegos atrás do hambúrguer, "Saborosamente assustador" tem um bando cruzando a lua, e a fachada tem dois perto do telhado. Tudo é `aria-hidden`, `pointer-events: none` e fica parado com `prefers-reduced-motion`.

## Cena do feitiço ("Saborosamente assustador")

`src/components/SectionAssustador.tsx` + `Feiticeiro.tsx`. O visitante clica em **Lançar feitiço** e a cena roda uma vez: o ambiente acende, o braço do feiticeiro sobe, aparece a runa, o raio de partículas vai até o hambúrguer, um anel o envolve e ele começa a crescer, a fumaça se abre atrás dele enquanto morcegos passam, uma explosão de fumaça o encobre e, quando se dissipa, aparece a versão de pão roxo, bem maior. No final aparece o botão "Pedir agora". Depois o botão vira **Repetir feitiço**. A linha do tempo fica em `ROTEIRO` (ms) e os estados visuais em `[data-fase=...]` no CSS. Com `prefers-reduced-motion`, a troca é direta, sem partículas.

- **Imagens:** as duas são montagens feitas a partir das suas fotos, **sem IA**. `hamburguer-comum.webp` é o recorte do hambúrguer de pão vermelho com o pão recolorido para dourado. `hamburguer-magico.webp` é o "turbinado": o recorte do hambúrguer de pão escuro com a camada de cheddar e carne duplicada (duas carnes, cheddar em dobro, bacon com cebola, molho escorrendo) e o pão recolorido para roxo. O turbinado é mais alto e fica apoiado na mesma base do comum. Para trocar por fotos reais, mantenha o fundo transparente e a base do hambúrguer no rodapé da imagem.
- **Feiticeiro:** ilustração vetorial (SVG) feita para o site, em silhueta contra a luz. Pode ser trocado por uma ilustração profissional sem mudar a lógica, desde que mantenha o grupo `#braco`.
- A cena traz o aviso "Cena ilustrativa": o hambúrguer roxo não é um item do cardápio.

## Decisões

- **Sem carrinho/pagamento**: não há integração de pedidos. O detalhe do produto oferece "Pedir pelo WhatsApp" assim que o número for cadastrado.
- **Acessibilidade**: HTML semântico, link "pular para o conteúdo", foco visível dourado, menu móvel com Esc e foco preso, abas com navegação por setas (WAI-ARIA), modal com `<dialog>` nativo, `prefers-reduced-motion` desliga animações e parallax.
- **Desempenho**: fontes locais (`@fontsource`, só os subconjuntos usados), nenhuma imagem é pedida quando ainda não existe, animações só com `transform`/`opacity`, parallax só em ponteiro fino.
