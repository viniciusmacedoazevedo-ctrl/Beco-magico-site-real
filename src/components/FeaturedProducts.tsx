import { produtos, type Produto } from '../data/cardapio'
import { AvisoDemonstrativo } from './AvisoDemonstrativo'
import { ProductCard } from './ProductCard'
import './FeaturedProducts.css'

interface Props {
  onAbrir: (produto: Produto) => void
}

export function FeaturedProducts({ onAbrir }: Props) {
  const destaques = produtos.filter((p) => p.destaque).slice(0, 3)
  if (destaques.length === 0) return null

  return (
    <section className="destaques" aria-labelledby="destaques-titulo">
      <div className="conteiner">
        <header className="destaques-cabecalho" data-revelar>
          <div>
            <p className="sobretitulo">Criações da casa</p>
            <h2 id="destaques-titulo" className="titulo-secao">
              Os favoritos <em>do Beco</em>
            </h2>
          </div>
          <div className="destaques-lateral">
            <p className="texto-apoio">Primeira vez no beco? Comece por aqui. E deixe espaço para o shake.</p>
            <AvisoDemonstrativo />
          </div>
        </header>

        <ul className="destaques-lista" role="list">
          {destaques.map((p, i) => (
            <li key={p.id} data-revelar style={{ '--atraso': `${i * 110}ms` } as React.CSSProperties}>
              <ProductCard produto={p} variante="destaque" onAbrir={onAbrir} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
