/** Pede para a seção do cardápio mostrar (e destacar) um produto. */
export const EVENTO_MOSTRAR_PRODUTO = 'beco:mostrar-produto'

export function mostrarNoCardapio(id: string) {
  window.dispatchEvent(new CustomEvent<string>(EVENTO_MOSTRAR_PRODUTO, { detail: id }))
}
