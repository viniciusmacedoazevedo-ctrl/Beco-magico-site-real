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
  endereco: null,
  horarios: null,
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
  /** Hambúrguer principal da abertura. Ideal: PNG/WebP com fundo transparente, ~1600px. */
  heroHamburguer: null as string | null,
  /** Hambúrguer em iluminação dramática para a seção “Saborosamente assustador”. */
  tematica: null as string | null,
  /** Composição de hambúrgueres para a seção logo após a abertura (até 3). */
  transicao: [] as string[],
  /** Foto real da fachada (fornecida pelo estabelecimento). */
  fachada: {
    webp: '/img/fachada.webp',
    jpg: '/img/fachada.jpg',
    largura: 715,
    altura: 364,
  },
}
