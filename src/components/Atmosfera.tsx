import './Atmosfera.css'

/**
 * Camadas decorativas (morcegos, poeira mágica). Ficam sempre atrás do
 * conteúdo, com pointer-events: none e aria-hidden.
 */

export interface Morcego {
  /** altura do voo, em % da camada */
  y: number
  /** tamanho em px */
  t: number
  /** duração da travessia, em s */
  d: number
  /** atraso inicial, em s (negativo = já começa no meio do caminho) */
  a: number
  /** profundidade 1 (perto) a 3 (longe): controla desfoque e opacidade */
  p: 1 | 2 | 3
  /** voa da direita para a esquerda */
  volta?: boolean
  /** posição horizontal parada (em %) quando o movimento está reduzido */
  x: number
}

function Silhueta() {
  return (
    <svg viewBox="0 0 64 30" focusable="false">
      <path d="M32 9.5c-1.3 0-2.2.9-2.6 2-.5-.9-1.3-1.6-2.3-1.9.3.9.2 1.8-.2 2.6C22.6 10 15.4 7.6 8.8 8.2c3 1.4 4.8 3.4 5.3 5.9-2.9-1.1-6.6-1-9.6.6 3.3.5 5.8 2.3 6.8 4.7-2.1-.3-4.3.1-6 1.3 4.7.1 9.6 1.7 13.3 4.5 2-1.6 4.7-2.1 7.1-1.5.9 1.5 2.3 2.7 3.6 3.7 1.3-1 2.7-2.2 3.6-3.7 2.4-.6 5.1-.1 7.1 1.5 3.7-2.8 8.6-4.4 13.3-4.5-1.7-1.2-3.9-1.6-6-1.3 1-2.4 3.5-4.2 6.8-4.7-3-1.6-6.7-1.7-9.6-.6.5-2.5 2.3-4.5 5.3-5.9-6.6-.6-13.8 1.8-18.1 4-.4-.8-.5-1.7-.2-2.6-1 .3-1.8 1-2.3 1.9-.4-1.1-1.3-2-2.6-2Z" />
    </svg>
  )
}

export function Morcegos({ bando, className = '' }: { bando: Morcego[]; className?: string }) {
  return (
    <div className={`morcegos ${className}`} aria-hidden="true">
      {bando.map((m, i) => (
        <span
          key={i}
          className={`morcego morcego--p${m.p} ${m.volta ? 'morcego--volta' : ''}`}
          style={
            {
              top: `${m.y}%`,
              '--t': `${m.t}px`,
              '--d': `${m.d}s`,
              '--a': `${m.a}s`,
              '--xe': `${m.x}%`,
            } as React.CSSProperties
          }
        >
          <span className="morcego-onda">
            <Silhueta />
          </span>
        </span>
      ))}
    </div>
  )
}

export interface Grao {
  x: number
  y: number
  /** cor: o = ouro, l = laranja, r = roxo */
  c: 'o' | 'l' | 'r'
  d: number
  a: number
  t?: number
}

export function PoeiraMagica({ graos, className = '' }: { graos: Grao[]; className?: string }) {
  return (
    <div className={`poeira ${className}`} aria-hidden="true">
      {graos.map((g, i) => (
        <span
          key={i}
          className={`grao grao--${g.c}`}
          style={
            {
              left: `${g.x}%`,
              top: `${g.y}%`,
              '--d': `${g.d}s`,
              '--a': `${g.a}s`,
              '--t': `${g.t ?? 3}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
