# PRODUCT.md — Beco Mágico

Contexto durável do produto. Fonte para decisões de design, texto e conteúdo do site.
Tudo aqui foi informado pelo responsável pelo projeto. O que ainda não foi confirmado aparece em **Pendências**, e não deve ser inventado.

## O que é

**Beco Mágico** é uma hamburgueria em Natal/RN com atmosfera misteriosa e temática mágica: fachada preta, placa com letras douradas, estandartes coloridos e uma porta de madeira entalhada. As fotos dos produtos mostram velas, livros antigos, fumaça, caldeirão e pães coloridos (vermelho, verde, escuro).

- **Frase principal:** “O hambúrguer mais mágico do Brasil.”
- **Frase de identidade:** “SABOROSAMENTE ASSUSTADOR”. Deve aparecer grande e legível, nunca escondida.
- **Endereço:** Av. Miguel Castro, 751 – Lagoa Nova, Natal/RN.
- **Horário:** terça a domingo, das 17h30 às 22h30.
- **Reservas:** https://plugguest.com.br/beco-magico-natal/

## Superfície atual

| Superfície | Modo | Sucesso do visitante |
| --- | --- | --- |
| Site institucional de uma página (`/`) | **Persuade** | Sentir vontade de comer, explorar o cardápio e saber como chegar. |

Não há pedido online, carrinho nem pagamento. O botão “Pedir pelo WhatsApp” só aparece quando o número for cadastrado.

## Público

Pessoas de Natal e visitantes que procuram uma hamburgueria com experiência diferente: um programa para sair à noite, levar amigos ou família, ou fotografar. A maioria vai abrir o site no celular, muitas vezes vindo do Instagram ou do Google Maps.

## Personalidade e tom

- Misteriosa, mágica, divertida. Um pouco “assustadora”, mas sempre apetitosa.
- Premium e editorial. Não é infantil nem um template de delivery.
- Texto curto, em português, direto, com um toque de humor (“feitiço”, “poção”, “entrar no beco”).
- O hambúrguer é sempre o protagonista. A atmosfera serve ao produto.

## Direção visual (pedida pelo cliente)

- Tons escuros (preto profundo, grafite), laranja queimado para ações e destaques, roxo escuro como acento mágico, dourado do logotipo.
- Halloween **sutil e elegante**: fumaça delicada, luz dramática, pequenas partículas. Sem excesso de caveiras ou abóboras, sem sangue, nada infantil.
- Tipografia forte e expressiva nos títulos, com leitura fácil nos textos e preços.
- Ritmo visual: evitar que o site seja uma sequência de blocos pretos iguais.
- Fotografia publicitária com luz de velas e fumaça (as 15 fotos fornecidas definem esse padrão).

## Ativos oficiais

- **Logotipo:** selo redondo (`public/img/logo.png`, `logo.webp`). O original fornecido tem só 173 px.
- **Fachada:** foto real, recortada para mostrar só o prédio (`public/img/fachada.*`).
- **Fotos de produto:** 15 fotos (7 hambúrgueres/combo, 3 shakes, 4 bebidas, 1 foto larga para a abertura) em `public/img/`.

## Regras

- **Não inventar** informações oficiais: preços, nomes de produtos, ingredientes, história, prêmios, avaliações, contatos.
- Dados de exemplo ficam centralizados (`src/data/cardapio.ts`) e marcados no site como “Cardápio ilustrativo”, até chegarem os oficiais.
- Não copiar literalmente os sites de referência.
- Acessibilidade: contraste adequado, foco visível, navegação por teclado, textos alternativos, respeito a `prefers-reduced-motion`.
- Funcionar bem do celular pequeno ao monitor grande, sem rolagem lateral.

## Pendências

- Nomes e preços reais do cardápio (hoje são exemplos).
- WhatsApp/telefone e Instagram.
- Logotipo em resolução maior e foto da fachada em resolução maior.
- História da casa (texto oficial).
- Onde o site será hospedado e qual domínio.
