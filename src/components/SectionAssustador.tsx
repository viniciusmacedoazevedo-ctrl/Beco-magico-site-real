import { imagens, marca } from '../data/marca'
import { Morcegos, type Morcego } from './Atmosfera'
import { Foto } from './Foto'
import { IconeEstrela } from './Icones'
import './SectionAssustador.css'

const repeticoes = [0, 1, 2, 3]

// Bando que cruza a lua (mais denso que nas outras seções: é o momento “assustador”)
const bando: Morcego[] = [
  { y: 8, t: 54, d: 24, a: -3, p: 1, x: 70 },
  { y: 18, t: 30, d: 32, a: -14, p: 2, x: 82, volta: true },
  { y: 26, t: 22, d: 40, a: -9, p: 3, x: 58 },
  { y: 4, t: 18, d: 44, a: -30, p: 3, x: 90, volta: true },
  { y: 34, t: 38, d: 28, a: -20, p: 2, x: 64 },
  { y: 14, t: 14, d: 50, a: -40, p: 3, x: 76 },
]

export function SectionAssustador() {
  const [primeira, segunda] = marca.fraseTematica.split(' ')

  return (
    <section className="assustador" aria-labelledby="assustador-titulo">
      <div className="assustador-faixa" aria-hidden="true">
        <div className="assustador-faixa-trilho">
          {[...repeticoes, ...repeticoes].map((_, k) => (
            <span key={k}>
              {marca.fraseTematica}
              <IconeEstrela />
            </span>
          ))}
        </div>
      </div>

      <div className="assustador-palco">
        <div className="assustador-fundo" aria-hidden="true">
          <span className="assustador-luz assustador-luz--roxa" />
          <span className="assustador-luz assustador-luz--laranja" />
          <span className="assustador-lua" />
          <span className="assustador-nevoa" />
        </div>
        <Morcegos bando={bando} className="assustador-morcegos" />

        <div className="assustador-grade conteiner">
          <h2 id="assustador-titulo" className="assustador-titulo" data-revelar>
            <span className="assustador-p1">{primeira}</span>
            <span className="assustador-p2">{segunda}</span>
          </h2>

          <figure className="assustador-foto" data-revelar style={{ '--atraso': '150ms' } as React.CSSProperties}>
            <Foto
              src={imagens.tematica}
              alt="Hambúrguer de pão vermelho ao lado de uma bebida azul soltando fumaça"
              largura={1100}
              altura={1300}
            />
          </figure>

          <div className="assustador-texto" data-revelar style={{ '--atraso': '250ms' } as React.CSSProperties}>
            <p>
              Tem coisa que dá medo de tão boa. A luz baixa, o cheiro de chapa e aquele molho que escorre pela mão fazem
              parte do encanto.
            </p>
            <a href="#cardapio" className="botao">
              Encarar o cardápio
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
