import { HREF_PEDIDO } from '../data/marca'

interface Props {
  compacto?: boolean
  className?: string
  onClick?: () => void
}

/**
 * Chamada principal “Pedir agora”. Hoje leva ao cardápio (não há sistema de
 * pedidos). Quando houver, troque `HREF_PEDIDO` em `marca.ts`.
 */
export function BotaoPedir({ compacto = false, className = '', onClick }: Props) {
  return (
    <a
      href={HREF_PEDIDO}
      className={`botao-pedir ${compacto ? 'botao-pedir--compacto' : ''} ${className}`}
      onClick={onClick}
    >
      Pedir agora
      <span className="botao-pedir-seta" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </a>
  )
}
