import { useState, type KeyboardEvent } from 'react'
import { buscarProduto, VITRINE, type Produto } from '../data/cardapio'
import { caminhoGotejamento } from '../lib/gotejamento'
import { mostrarNoCardapio } from '../lib/eventos'
import { formatarPreco } from '../lib/formatar'
import { Morcegos, type Morcego } from './Atmosfera'
import { IconeSeta } from './Icones'
import './Transicao.css'

const borda = caminhoGotejamento([
  { x: 120, w: 26, h: 54 },
  { x: 310, w: 18, h: 28 },
  { x: 520, w: 34, h: 96 },
  { x: 700, w: 16, h: 34 },
  { x: 905, w: 28, h: 70 },
  { x: 1120, w: 20, h: 40 },
  { x: 1310, w: 30, h: 84 },
])

const posicoes = ['centro', 'direita', 'esquerda'] as const

// Morcegos que “saem” do molho escuro do topo, contra o fundo claro
const bando: Morcego[] = [
  { y: 6, t: 30, d: 30, a: -8, p: 2, x: 24 },
  { y: 14, t: 18, d: 42, a: -22, p: 3, x: 72, volta: true },
  { y: 2, t: 22, d: 36, a: -15, p: 3, x: 52 },
]

interface Props {
  onAbrir: (produto: Produto) => void
}

/** Vitrine “Universo do Beco”: três hambúrgueres recortados; o selecionado vem para a frente. */
export function Transicao({ onAbrir }: Props) {
  const itens = VITRINE.map(buscarProduto).filter((p): p is Produto => Boolean(p?.recorte))
  const [ativo, setAtivo] = useState(0)
  const selecionado = itens[ativo]

  if (itens.length === 0) return null

  const posicaoDe = (i: number) => posicoes[(i - ativo + itens.length) % itens.length] ?? 'esquerda'

  const aoTeclar = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const passo = e.key === 'ArrowRight' ? 1 : -1
    const proximo = (ativo + passo + itens.length) % itens.length
    setAtivo(proximo)
    e.currentTarget.querySelector<HTMLButtonElement>(`[data-indice="${proximo}"]`)?.focus()
  }

  return (
    <section id="universo" className="universo" aria-labelledby="universo-titulo">
      <svg className="universo-borda" viewBox="0 0 1440 140" preserveAspectRatio="none" aria-hidden="true">
        <path d={borda} />
      </svg>

      <Morcegos bando={bando} className="universo-morcegos" />
      <svg className="universo-runa" viewBox="0 0 200 200" aria-hidden="true">
        <circle cx="100" cy="100" r="96" />
        <circle cx="100" cy="100" r="80" strokeDasharray="2 6" />
        <path d="M100 8 L180 146 L20 146 Z M100 192 L20 54 L180 54 Z" />
      </svg>

      <div className="conteiner">
        <header className="universo-cabecalho" data-revelar>
          <p className="sobretitulo">O universo do Beco</p>
          <h2 id="universo-titulo" className="titulo-secao">
            Cada mordida, <em>um feitiço.</em>
          </h2>
          <p className="texto-apoio">Três criações da casa. Toque em uma para trazê-la para a frente e ver o que vai dentro.</p>
        </header>

        <div className="vitrine" data-revelar>
          <span className="vitrine-luz" aria-hidden="true" />
          <div className="vitrine-palco" role="group" aria-label="Escolha um hambúrguer" onKeyDown={aoTeclar}>
            {itens.map((p, i) => {
              const pos = posicaoDe(i)
              return (
                <button
                  key={p.id}
                  type="button"
                  data-indice={i}
                  data-pos={pos}
                  className="vitrine-item"
                  aria-pressed={i === ativo}
                  aria-controls="vitrine-painel"
                  tabIndex={i === ativo ? 0 : -1}
                  onClick={() => setAtivo(i)}
                >
                  <span className="vitrine-sombra" aria-hidden="true" />
                  <img
                    src={p.recorte}
                    alt=""
                    width={1000}
                    height={850}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                  <span className="vitrine-rotulo">{p.nome}</span>
                  <span className="visualmente-oculto">{i === ativo ? ' (selecionado)' : ''}</span>
                </button>
              )
            })}
          </div>

          <div id="vitrine-painel" className="vitrine-painel" aria-live="polite">
            <div className="vitrine-painel-conteudo" key={selecionado.id}>
              <div className="vitrine-painel-topo">
                {selecionado.selo && <span className="vitrine-selo">{selecionado.selo}</span>}
                <span className="vitrine-contador" aria-hidden="true">
                  {String(ativo + 1).padStart(2, '0')} / {String(itens.length).padStart(2, '0')}
                </span>
              </div>
              <h3 className="vitrine-nome">{selecionado.nome}</h3>
              <p className="vitrine-descricao">{selecionado.descricao}</p>
              <div className="vitrine-rodape">
                <span className="vitrine-preco">{formatarPreco(selecionado.preco)}</span>
                <div className="vitrine-acoes">
                  <button type="button" className="botao botao--escuro" onClick={() => onAbrir(selecionado)}>
                    Ver detalhes
                  </button>
                  <button
                    type="button"
                    className="botao botao--contorno"
                    onClick={() => mostrarNoCardapio(selecionado.id)}
                  >
                    Ver no cardápio
                    <IconeSeta />
                  </button>
                </div>
              </div>
            </div>
            <div className="vitrine-pontos" aria-hidden="true">
              {itens.map((p, i) => (
                <span key={p.id} className={i === ativo ? 'ativo' : ''} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
