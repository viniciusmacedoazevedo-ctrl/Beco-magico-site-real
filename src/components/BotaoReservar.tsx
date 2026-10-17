import { LINK_RESERVA } from '../data/marca'

interface Props {
  className?: string
  /** texto do botão */
  rotulo?: string
  onClick?: () => void
}

/** Abre a página de reservas (Plugguest) em uma nova aba. */
export function BotaoReservar({ className = '', rotulo = 'Reservar mesa', onClick }: Props) {
  return (
    <a
      href={LINK_RESERVA}
      target="_blank"
      rel="noopener noreferrer"
      className={`botao botao--reservar ${className}`}
      onClick={onClick}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="3.5" y="5" width="17" height="15" rx="3" />
        <path d="M3.5 10h17M8 3v4M16 3v4M9 14.5l2 2 4-4" />
      </svg>
      {rotulo}
      <span className="visualmente-oculto"> (abre em nova aba)</span>
    </a>
  )
}
