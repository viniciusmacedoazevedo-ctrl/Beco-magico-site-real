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
  | 'shakes'
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
  /** Recorte do produto com fundo transparente (WebP com canal alfa). */
  recorte?: string
}

export const categorias: Categoria[] = [
  { id: 'hamburgueres', nome: 'Hambúrgueres' },
  { id: 'combos', nome: 'Combos' },
  { id: 'acompanhamentos', nome: 'Acompanhamentos' },
  { id: 'shakes', nome: 'Shakes' },
  { id: 'bebidas', nome: 'Bebidas' },
  { id: 'sobremesas', nome: 'Sobremesas' },
]

const foto = (arquivo: string) => `/img/produtos/${arquivo}.webp`

// Descrições baseadas no que aparece em cada foto. Nomes e preços: exemplos.
export const produtos: Produto[] = [
  {
    id: 'feitico-classico',
    categoria: 'hamburgueres',
    nome: 'Feitiço Clássico',
    descricao: 'Pão brioche, carne na chapa, cheddar derretido, bacon crocante, cebola roxa, tomate e alface.',
    preco: 34.9,
    ingredientes: ['Pão brioche', 'Carne bovina', 'Cheddar', 'Bacon', 'Cebola roxa', 'Tomate', 'Alface americana'],
    selo: 'Mais pedido',
    destaque: true,
    imagem: foto('hamburguer-bacon-cheddar'),
    imagemAlt: 'Hambúrguer com pão brioche, bacon, cheddar derretido, cebola roxa, tomate e alface',
  },
  {
    id: 'pocao-defumada',
    categoria: 'hamburgueres',
    nome: 'Poção Defumada',
    descricao: 'Pão escuro, carne grelhada, cheddar, cebola caramelizada com pedaços de bacon e maionese temperada.',
    preco: 39.9,
    ingredientes: ['Pão escuro', 'Carne bovina', 'Cheddar', 'Cebola caramelizada', 'Bacon', 'Maionese temperada'],
    selo: 'Da casa',
    imagem: foto('hamburguer-pao-escuro-cebola'),
    imagemAlt: 'Hambúrguer de pão escuro com cheddar, cebola caramelizada e bacon',
    recorte: '/img/recortes/hamburguer-escuro.webp',
  },
  {
    id: 'feitico-verde',
    categoria: 'hamburgueres',
    nome: 'Feitiço Verde',
    descricao: 'Pão verde, carne suculenta, queijo derretido escorrendo, queijo empanado crocante e rúcula.',
    preco: 42.9,
    ingredientes: ['Pão verde', 'Carne bovina', 'Queijo derretido', 'Queijo empanado', 'Rúcula'],
    imagem: foto('hamburguer-pao-verde-queijo-empanado'),
    imagemAlt: 'Hambúrguer de pão verde com queijo empanado, queijo derretido e rúcula',
    recorte: '/img/recortes/hamburguer-verde.webp',
  },
  {
    id: 'caldeirao-vermelho',
    categoria: 'hamburgueres',
    nome: 'Caldeirão Vermelho',
    descricao: 'Pão vermelho, carne na chapa, cheddar derretido e alface crespa. Simples e marcante.',
    preco: 32.9,
    ingredientes: ['Pão vermelho', 'Carne bovina', 'Cheddar', 'Alface crespa'],
    imagem: foto('hamburguer-pao-vermelho'),
    imagemAlt: 'Hambúrguer de pão vermelho com cheddar e alface crespa',
    recorte: '/img/recortes/hamburguer-vermelho.webp',
  },
  {
    id: 'desfiado-encantado',
    categoria: 'hamburgueres',
    nome: 'Desfiado Encantado',
    descricao: 'Pão verde recheado com carne desfiada, molho de queijo cremoso e vinagrete fresquinho.',
    preco: 38.9,
    ingredientes: ['Pão verde', 'Carne desfiada', 'Molho de queijo', 'Vinagrete'],
    destaque: true,
    imagem: foto('hamburguer-pao-verde-desfiado'),
    imagemAlt: 'Mãos segurando hambúrguer de pão verde com carne desfiada e molho de queijo',
  },
  {
    id: 'lua-de-fogo',
    categoria: 'hamburgueres',
    nome: 'Lua de Fogo',
    descricao: 'Pão marcado a fogo, carne, queijo, molho de tomate, ovo frito e muita batata palha.',
    preco: 39.9,
    ingredientes: ['Pão marcado', 'Carne bovina', 'Queijo', 'Molho de tomate', 'Ovo frito', 'Batata palha'],
    selo: 'Para fome grande',
    imagem: foto('hamburguer-ovo-batata-palha'),
    imagemAlt: 'Hambúrguer de pão avermelhado com ovo frito, molho de tomate e batata palha',
    recorte: '/img/recortes/hamburguer-batata-palha.webp',
  },
  {
    id: 'combo-feiticeiro',
    categoria: 'combos',
    nome: 'Combo Feiticeiro',
    descricao: 'Caldeirão Vermelho + Poção Azul, a bebida que solta fumaça.',
    preco: 52.9,
    imagem: foto('combo-hamburguer-e-pocao'),
    imagemAlt: 'Hambúrguer de pão vermelho ao lado de um copo de bebida azul soltando fumaça',
  },
  {
    id: 'shake-arco-iris',
    categoria: 'shakes',
    nome: 'Shake Nuvem Encantada',
    descricao: 'Camadas rosa, lilás e azul, cobertas com chantilly.',
    preco: 24.9,
    imagem: foto('shake-rosa-e-azul'),
    imagemAlt: 'Shake em camadas rosa, lilás e azul com chantilly e canudos listrados',
  },
  {
    id: 'shake-caramelo',
    categoria: 'shakes',
    nome: 'Shake Caramelo Dourado',
    descricao: 'Shake cremoso com calda de caramelo, chantilly, biscoito e chocolate branco.',
    destaque: true,
    preco: 26.9,
    imagem: foto('shake-caramelo'),
    imagemAlt: 'Shake de baunilha com calda de caramelo, chantilly, biscoito e chocolate branco',
  },
  {
    id: 'shake-frutas-vermelhas',
    categoria: 'shakes',
    nome: 'Shake Poção Roxa',
    descricao: 'Shake de frutas vermelhas, cremoso e espumante.',
    preco: 22.9,
    imagem: foto('shake-frutas-vermelhas'),
    imagemAlt: 'Copo de shake roxo de frutas vermelhas soltando vapor',
  },
  {
    id: 'pocao-azul',
    categoria: 'bebidas',
    nome: 'Poção Azul',
    descricao: 'Bebida azul cintilante que chega à mesa soltando fumaça.',
    preco: 19.9,
    imagem: foto('bebida-azul-fumaca'),
    imagemAlt: 'Copo alto com bebida azul cintilante envolta em fumaça, ao lado de um caldeirão',
  },
  {
    id: 'elixir-verde',
    categoria: 'bebidas',
    nome: 'Elixir Verde',
    descricao: 'Bebida verde gelada com fatias de maçã verde.',
    preco: 18.9,
    imagem: foto('bebida-verde-maca'),
    imagemAlt: 'Taça com bebida verde, fatias de maçã verde e uma pena',
  },
  {
    id: 'tonico-rubi',
    categoria: 'bebidas',
    nome: 'Tônico Rubi',
    descricao: 'Bebida vermelha com gás, gelo e um ramo de alecrim.',
    preco: 17.9,
    imagem: foto('bebida-vermelha-alecrim'),
    imagemAlt: 'Copo lapidado com bebida vermelha gaseificada, gelo e alecrim',
  },
  {
    id: 'caneca-caveira',
    categoria: 'bebidas',
    nome: 'Caneca da Caveira',
    descricao: 'Bebida dourada e espumante servida na caneca de caveira, com bacon crocante.',
    preco: 21.9,
    imagem: foto('bebida-caneca-caveira'),
    imagemAlt: 'Caneca em formato de caveira com bebida dourada, espuma e uma tira de bacon',
  },
]

/** Produto da abertura (precisa ter `recorte`). */
export const PRODUTO_ABERTURA = 'feitico-verde'

/** Os três produtos da vitrine interativa “Universo do Beco” (precisam ter `recorte`). */
export const VITRINE = ['pocao-defumada', 'caldeirao-vermelho', 'lua-de-fogo']

export const buscarProduto = (id: string) => produtos.find((p) => p.id === id)
