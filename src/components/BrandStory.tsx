import { imagens, marca } from '../data/marca'
import { Morcegos, type Morcego } from './Atmosfera'
import { IconeLocal, IconeRelogio, IconeSeta } from './Icones'
import './BrandStory.css'

const bando: Morcego[] = [
  { y: 4, t: 26, d: 26, a: -4, p: 2, x: 30 },
  { y: 12, t: 16, d: 34, a: -18, p: 3, x: 70, volta: true },
]

export function BrandStory() {
  const { fachada } = imagens
  const { endereco, horarios } = marca

  return (
    <section id="o-beco" className="beco" aria-labelledby="beco-titulo">
      <span className="beco-palavra" aria-hidden="true">
        Beco
      </span>

      <div className="beco-grade conteiner">
        <figure className="beco-janela" data-revelar>
          <div className="beco-foto">
            <picture>
              <source srcSet={fachada.webp} type="image/webp" />
              <img
                src={fachada.jpg}
                alt="Fachada do Beco Mágico: parede preta com a placa do logotipo, estandartes coloridos e porta de madeira entalhada"
                width={fachada.largura}
                height={fachada.altura}
                loading="lazy"
                decoding="async"
              />
            </picture>
            <span className="beco-porta-luz" aria-hidden="true" />
            <span className="beco-vinheta" aria-hidden="true" />
            <span className="beco-nevoa" aria-hidden="true" />
          </div>
          <Morcegos bando={bando} className="beco-morcegos" />
          <span className="beco-canto beco-canto--1" aria-hidden="true" />
          <span className="beco-canto beco-canto--2" aria-hidden="true" />
          <figcaption>A fachada do Beco Mágico, em Lagoa Nova</figcaption>
        </figure>

        <div className="beco-texto" data-revelar style={{ '--atraso': '120ms' } as React.CSSProperties}>
          <p className="sobretitulo">O Beco</p>
          <h2 id="beco-titulo" className="titulo-secao">
            Uma porta que <em>chama</em> para entrar.
          </h2>
          <p className="texto-apoio">
            Parede preta, placa com letras douradas, estandartes coloridos e uma porta de madeira entalhada: a fachada do
            Beco Mágico já avisa que ali dentro a experiência é diferente.
          </p>
          {marca.historia && <p className="texto-apoio">{marca.historia}</p>}

          {(endereco || horarios) && (
            <ul className="beco-info" role="list">
              {endereco && (
                <li>
                  <IconeLocal />
                  <span>
                    {endereco.logradouro} – {endereco.bairro}, {endereco.cidade}
                  </span>
                </li>
              )}
              {horarios?.map((h) => (
                <li key={h.dias}>
                  <IconeRelogio />
                  <span>
                    {h.dias}, {h.horas}
                  </span>
                </li>
              ))}
            </ul>
          )}

          <div className="beco-acoes">
            {endereco?.mapsUrl && (
              <a className="botao" href={endereco.mapsUrl} target="_blank" rel="noopener noreferrer">
                Como chegar
                <IconeSeta />
              </a>
            )}
            <a className="botao botao--fantasma" href="#localizacao">
              Ver no mapa
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
