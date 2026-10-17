/**
 * Cardápio do site.
 *
 * ATENÇÃO: enquanto `CARDAPIO_DEMONSTRATIVO` for `true`, os itens abaixo são
 * EXEMPLOS de layout — nomes, descrições, ingredientes e preços NÃO são do
 * Beco Mágico. Substitua pelos dados oficiais e mude a constante para `false`
 * (o aviso “cardápio ilustrativo” some do site).
 *
 * Fotos: coloque em `public/img/produtos/` e preencha `imagem` com o caminho
 * (ex.: '/img/produtos/feitico-classico.webp'). Sem imagem, o card mostra
 * uma arte provisória da marca.
 */

export const CARDAPIO_DEMONSTRATIVO = true

export type CategoriaId =
  | 'hamburgueres'
  | 'combos'
  | 'acompanhamentos'
  | 'bebidas'
  | 'sobremesas'

export interface Categoria {
  id: CategoriaId
  nome: string
}

export interface Produto {
  id: string
  categoria: CategoriaId
  nome: string
  descricao: string
  /** Em reais. `null` = preço a confirmar. */
  preco: number | null
  ingredientes?: string[]
  selo?: string
  destaque?: boolean
  imagem?: string
  imagemAlt?: string
}

export const categorias: Categoria[] = [
  { id: 'hamburgueres', nome: 'Hambúrgueres' },
  { id: 'combos', nome: 'Combos' },
  { id: 'acompanhamentos', nome: 'Acompanhamentos' },
  { id: 'bebidas', nome: 'Bebidas' },
  { id: 'sobremesas', nome: 'Sobremesas' },
]

export const produtos: Produto[] = [
  {
    id: 'feitico-classico',
    categoria: 'hamburgueres',
    nome: 'Feitiço Clássico',
    descricao: 'O encanto do básico bem feito: carne na chapa, queijo derretido e pão macio.',
    preco: 32.9,
    ingredientes: ['Pão brioche', 'Carne bovina', 'Queijo cheddar', 'Alface', 'Tomate', 'Molho da casa'],
    selo: 'Mais pedido',
    destaque: true,
  },
  {
    id: 'pocao-defumada',
    categoria: 'hamburgueres',
    nome: 'Poção Defumada',
    descricao: 'Bacon crocante, cebola caramelizada e um molho defumado que escorre.',
    preco: 38.9,
    ingredientes: ['Pão australiano', 'Carne bovina', 'Bacon', 'Cebola caramelizada', 'Molho barbecue'],
    selo: 'Da casa',
    destaque: true,
  },
  {
    id: 'caldeirao-duplo',
    categoria: 'hamburgueres',
    nome: 'Caldeirão Duplo',
    descricao: 'Duas carnes, dose dupla de queijo e coragem para encarar.',
    preco: 44.9,
    ingredientes: ['Pão brioche', '2 carnes bovinas', 'Queijo cheddar em dobro', 'Picles', 'Molho especial'],
    destaque: true,
  },
  {
    id: 'lua-de-fogo',
    categoria: 'hamburgueres',
    nome: 'Lua de Fogo',
    descricao: 'Pimenta jalapeño, queijo pepper jack e maionese picante para quem gosta de calor.',
    preco: 39.9,
    ingredientes: ['Pão brioche', 'Carne bovina', 'Queijo pepper jack', 'Jalapeño', 'Maionese picante'],
    selo: 'Picante',
  },
  {
    id: 'sombra-crocante',
    categoria: 'hamburgueres',
    nome: 'Sombra Crocante',
    descricao: 'Frango empanado bem crocante, salada fresca e molho de mostarda e mel.',
    preco: 34.9,
    ingredientes: ['Pão brioche', 'Frango empanado', 'Alface', 'Tomate', 'Molho mostarda e mel'],
  },
  {
    id: 'combo-aprendiz',
    categoria: 'combos',
    nome: 'Combo Aprendiz',
    descricao: 'Feitiço Clássico + batata média + refrigerante lata.',
    preco: 46.9,
  },
  {
    id: 'combo-feiticeiro',
    categoria: 'combos',
    nome: 'Combo Feiticeiro',
    descricao: 'Caldeirão Duplo + batata grande + bebida à escolha.',
    preco: 59.9,
    selo: 'Para fome grande',
  },
  {
    id: 'batata-encantada',
    categoria: 'acompanhamentos',
    nome: 'Batata Encantada',
    descricao: 'Batatas fritas sequinhas com sal e ervas.',
    preco: 18.9,
  },
  {
    id: 'aneis-de-cebola',
    categoria: 'acompanhamentos',
    nome: 'Anéis de Cebola',
    descricao: 'Empanados e crocantes, com molho para mergulhar.',
    preco: 21.9,
  },
  {
    id: 'refrigerante-lata',
    categoria: 'bebidas',
    nome: 'Refrigerante lata',
    descricao: '350 ml. Consulte os sabores disponíveis.',
    preco: 7.0,
  },
  {
    id: 'pocao-roxa',
    categoria: 'bebidas',
    nome: 'Poção Roxa',
    descricao: 'Bebida da casa de frutas vermelhas.',
    preco: 14.9,
  },
  {
    id: 'brownie-do-beco',
    categoria: 'sobremesas',
    nome: 'Brownie do Beco',
    descricao: 'Brownie de chocolate com calda quente.',
    preco: 19.9,
  },
]
