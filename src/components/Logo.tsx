import './Logo.css'

interface Props {
  tamanho?: 'md' | 'lg'
}

/** Logotipo oficial do Beco Mágico (selo redondo, fundo transparente). */
export function Logo({ tamanho = 'md' }: Props) {
  return (
    <picture className={`logo logo--${tamanho}`}>
      <source srcSet="/img/logo.webp" type="image/webp" />
      <img src="/img/logo.png" alt="Beco Mágico" width={384} height={384} decoding="async" />
    </picture>
  )
}
