import { useRef, useState, type KeyboardEvent } from 'react'
import { categorias, produtos, type CategoriaId, type Produto } from '../data/cardapio'
import { AvisoDemonstrativo } from './AvisoDemonstrativo'
import { ProductCard } from './ProductCard'
import './MenuSection.css'

interface Props {
  onAbrir: (produto: Produto) => void
}

// Só mostra categorias que têm ao menos um produto
const categoriasComItens = categorias.filter((c) => produtos.some((p) => p.categoria === c.id))

export function MenuSection({ onAbrir }: Props) {
  const [ativa, setAtiva] = useState<CategoriaId>(categoriasComItens[0]?.id ?? 'hamburgueres')
  const abasRef = useRef<(HTMLButtonElement | null)[]>([])
  const itens = produtos.filter((p) => p.categoria === ativa)

  // Navegação por setas entre as abas (padrão WAI-ARIA)
  const aoTeclar = (e: KeyboardEvent<HTMLDivElement>) => {
    const atual = categoriasComItens.findIndex((c) => c.id === ativa)
    let proximo = atual
    if (e.key === 'ArrowRight') proximo = (atual + 1) % categoriasComItens.length
    else if (e.key === 'ArrowLeft') proximo = (atual - 1 + categoriasComItens.length) % categoriasComItens.length
    else if (e.key === 'Home') proximo = 0
    else if (e.key === 'End') proximo = categoriasComItens.length - 1
    else return
    e.preventDefault()
    setAtiva(categoriasComItens[proximo].id)
    abasRef.current[proximo]?.focus()
    abasRef.current[proximo]?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' })
  }

  return (
    <section id="cardapio" className="cardapio" aria-labelledby="cardapio-titulo">
      <div className="conteiner">
        <header className="cardapio-cabecalho" data-revelar>
          <p className="sobretitulo">Cardápio</p>
          <h2 id="cardapio-titulo" className="titulo-secao">
            Escolha o seu <em>feitiço</em>
          </h2>
          <AvisoDemonstrativo />
        </header>

        <div className="cardapio-abas" role="tablist" aria-label="Categorias do cardápio" onKeyDown={aoTeclar}>
          {categoriasComItens.map((c, i) => {
            const selecionada = c.id === ativa
            const total = produtos.filter((p) => p.categoria === c.id).length
            return (
              <button
                key={c.id}
                ref={(el) => {
                  abasRef.current[i] = el
                }}
                type="button"
                role="tab"
                id={`aba-${c.id}`}
                aria-selected={selecionada}
                aria-controls="cardapio-painel"
                tabIndex={selecionada ? 0 : -1}
                className="cardapio-aba"
                onClick={() => setAtiva(c.id)}
              >
                {c.nome}
                <span className="cardapio-aba-total" aria-hidden="true">
                  {total}
                </span>
              </button>
            )
          })}
        </div>

        <div id="cardapio-painel" role="tabpanel" aria-labelledby={`aba-${ativa}`} tabIndex={-1}>
          <ul className="cardapio-lista" role="list" key={ativa}>
            {itens.map((p, i) => (
              <li key={p.id} style={{ '--i': i } as React.CSSProperties}>
                <ProductCard produto={p} onAbrir={onAbrir} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
