import { imagens, marca } from '../data/marca'
import { Foto } from './Foto'
import { IconeEstrela } from './Icones'
import './SectionAssustador.css'

const repeticoes = [0, 1, 2, 3]

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
          <span className="assustador-nevoa" />
        </div>

        <div className="assustador-grade conteiner">
          <h2 id="assustador-titulo" className="assustador-titulo" data-revelar>
            <span className="assustador-p1">{primeira}</span>
            <span className="assustador-p2">{segunda}</span>
          </h2>

          <figure className="assustador-foto" data-revelar style={{ '--atraso': '150ms' } as React.CSSProperties}>
            <Foto
              src={imagens.tematica}
              alt="Hambúrguer de pão verde com queijo empanado e queijo derretido, com fumaça ao fundo"
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
