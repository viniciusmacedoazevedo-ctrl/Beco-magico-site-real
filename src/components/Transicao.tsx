import { imagens } from '../data/marca'
import { caminhoGotejamento } from '../lib/gotejamento'
import { Foto } from './Foto'
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

const passos = [
  { num: '01', titulo: 'Entre no beco', texto: 'A porta de madeira entalhada é o começo da experiência.' },
  { num: '02', titulo: 'Escolha seu feitiço', texto: 'Do clássico ao mais ousado: cada hambúrguer tem a sua personalidade.' },
  { num: '03', titulo: 'Prove a magia', texto: 'A primeira mordida explica o resto. Sem truques, só sabor.' },
]

const molduras = [0, 1, 2]

export function Transicao() {
  return (
    <section id="universo" className="transicao" aria-labelledby="transicao-titulo">
      <svg className="transicao-borda" viewBox="0 0 1440 140" preserveAspectRatio="none" aria-hidden="true">
        <path d={borda} />
      </svg>

      <div className="transicao-grade conteiner">
        <div className="transicao-texto" data-revelar>
          <p className="sobretitulo">O universo do Beco</p>
          <h2 id="transicao-titulo" className="titulo-secao">
            Cada mordida, <br />
            um <em>feitiço.</em>
          </h2>
          <p className="texto-apoio">
            No Beco Mágico, o hambúrguer é o protagonista. O resto — a luz, o clima, o mistério — existe para deixar
            cada pedaço ainda mais memorável.
          </p>
        </div>

        <div className="transicao-molduras" aria-label="Hambúrgueres do Beco Mágico">
          {molduras.map((i) => (
            <figure
              key={i}
              className={`moldura moldura--${i + 1}`}
              data-revelar
              style={{ '--atraso': `${i * 120}ms` } as React.CSSProperties}
            >
              <Foto src={imagens.transicao[i]} alt="Hambúrguer do Beco Mágico" largura={900} altura={1100} />
            </figure>
          ))}
        </div>

        <ol className="transicao-passos" role="list">
          {passos.map((p, i) => (
            <li key={p.num} data-revelar style={{ '--atraso': `${i * 100}ms` } as React.CSSProperties}>
              <span className="passo-num">{p.num}</span>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
