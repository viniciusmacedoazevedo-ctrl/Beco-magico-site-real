import './Logo.css'

interface Props {
  tamanho?: 'md' | 'lg'
}

/**
 * Logotipo PROVISÓRIO (tipográfico), inspirado na placa da fachada.
 * Quando o arquivo oficial for entregue, substitua o conteúdo por
 * <img src="/img/logo.svg" alt="Beco Mágico" />.
 */
export function Logo({ tamanho = 'md' }: Props) {
  return (
    <span className={`logo logo--${tamanho}`}>
      <span className="logo-beco">Beco</span>
      <span className="logo-magico">Mágico</span>
    </span>
  )
}
