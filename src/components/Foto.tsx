import './Foto.css'

interface Props {
  src?: string | null
  alt: string
  largura?: number
  altura?: number
  prioridade?: boolean
  className?: string
}

/**
 * Exibe a foto do produto. Sem `src`, mostra uma arte provisória da marca
 * (nenhuma requisição é feita, então não há imagem quebrada nem erro no console).
 */
export function Foto({ src, alt, largura = 1200, altura = 900, prioridade = false, className = '' }: Props) {
  if (src) {
    return (
      <img
        className={`foto ${className}`}
        src={src}
        alt={alt}
        width={largura}
        height={altura}
        loading={prioridade ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={prioridade ? 'high' : 'auto'}
      />
    )
  }

  return (
    <div className={`foto foto--provisoria ${className}`} role="img" aria-label={`${alt} (foto em breve)`}>
      <svg className="foto-anel" viewBox="0 0 200 200" aria-hidden="true">
        <circle cx="100" cy="100" r="78" />
        <circle cx="100" cy="100" r="64" strokeDasharray="2 7" />
      </svg>
      <span className="foto-monograma" aria-hidden="true">
        BM
      </span>
      <span className="foto-legenda" aria-hidden="true">
        Foto em breve
      </span>
    </div>
  )
}
