import { CARDAPIO_DEMONSTRATIVO } from '../data/cardapio'
import './AvisoDemonstrativo.css'

/** Aviso visível enquanto o cardápio usa dados de exemplo. */
export function AvisoDemonstrativo() {
  if (!CARDAPIO_DEMONSTRATIVO) return null
  return (
    <p className="aviso-demo" role="note">
      <strong>Cardápio ilustrativo.</strong> Nomes, descrições e preços são exemplos e serão substituídos pelo cardápio
      oficial do Beco Mágico.
    </p>
  )
}
