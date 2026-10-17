/**
 * Dados oficiais do Beco Mágico.
 *
 * Tudo o que está como `null` ainda NÃO foi confirmado pelo estabelecimento.
 * Enquanto um campo estiver `null`, o site mostra a estrutura sem publicar
 * informação inventada (e esconde botões que dependeriam dele).
 */

export interface Endereco {
  logradouro: string
  bairro?: string
  cidade: string
  /** Link para abrir a rota no Google Maps (ex.: https://maps.app.goo.gl/...) */
  mapsUrl?: string
  /** URL de incorporação do mapa (Google Maps > Compartilhar > Incorporar) */
  mapaEmbedUrl?: string
}

export interface Horario {
  dias: string
  horas: string
}

export interface Rede {
  usuario: string
  url: string
}

export interface Marca {
  nome: string
  slogan: string
  fraseTematica: string
  endereco: Endereco | null
  horarios: Horario[] | null
  telefone: string | null
  /** Só números, com DDI e DDD. Ex.: 5584999999999 */
  whatsapp: string | null
  email: string | null
  instagram: Rede | null
  /** Texto curto sobre a história da casa, escrito/aprovado pelo Beco Mágico. */
  historia: string | null
}

export const marca: Marca = {
  nome: 'Beco Mágico',
  slogan: 'O hambúrguer mais mágico do Brasil.',
  fraseTematica: 'Saborosamente assustador',
  endereco: {
    logradouro: 'Av. Miguel Castro, 751',
    bairro: 'Lagoa Nova',
    cidade: 'Natal/RN',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Av.%20Miguel%20Castro%2C%20751%2C%20Lagoa%20Nova%2C%20Natal%20-%20RN',
    mapaEmbedUrl: 'https://www.google.com/maps?q=Av.%20Miguel%20Castro%2C%20751%2C%20Lagoa%20Nova%2C%20Natal%20-%20RN&output=embed',
  },
  horarios: [{ dias: 'Terça a domingo', horas: '17h30 às 22h30' }],
  telefone: null,
  whatsapp: null,
  email: null,
  instagram: null,
  historia: null,
}

/**
 * Imagens principais. Coloque os arquivos em `public/img/` e informe o caminho.
 * `null` = imagem ainda não fornecida (o site mostra uma composição provisória).
 */
export const imagens = {
  /**
   * Foto larga da abertura (hambúrguer à direita, área escura à esquerda para o texto).
   * Quando existe, ela ocupa o fundo da abertura no lugar da composição com o selo.
   */
  heroFundo: {
    grande: '/img/hero.webp',
    media: '/img/hero-1200.webp',
    largura: 2000,
    altura: 1116,
  } as { grande: string; media: string; largura: number; altura: number } | null,
  /** Hambúrguer recortado (PNG/WebP transparente, ~1600px) para a composição flutuante. Opcional. */
  heroHamburguer: null as string | null,
  /** Hambúrguer em iluminação dramática para a seção “Saborosamente assustador”. */
  tematica: '/img/produtos/hamburguer-pao-verde-queijo-empanado.webp' as string | null,
  /** Composição de hambúrgueres para a seção logo após a abertura (até 3). */
  transicao: [
    '/img/produtos/hamburguer-pao-verde-desfiado.webp',
    '/img/produtos/hamburguer-bacon-cheddar.webp',
    '/img/produtos/hamburguer-ovo-batata-palha.webp',
  ] as string[],
  /** Foto real da fachada (fornecida pelo estabelecimento). */
  fachada: {
    webp: '/img/fachada.webp',
    jpg: '/img/fachada.jpg',
    largura: 715,
    altura: 364,
  },
}
