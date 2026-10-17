import { imagens, marca } from '../data/marca'
import './BrandStory.css'

export function BrandStory() {
  const { fachada } = imagens

  return (
    <section id="o-beco" className="beco" aria-labelledby="beco-titulo">
      <div className="beco-grade conteiner">
        <figure className="beco-foto" data-revelar>
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
          <figcaption>A fachada do Beco Mágico</figcaption>
        </figure>

        <div className="beco-texto" data-revelar style={{ '--atraso': '120ms' } as React.CSSProperties}>
          <p className="sobretitulo">O Beco</p>
          <h2 id="beco-titulo" className="titulo-secao">
            Uma porta que <em>chama</em> para entrar.
          </h2>
          <p className="texto-apoio">
            Parede preta, placa com letras douradas, estandartes coloridos e uma porta de madeira entalhada: a fachada do Beco
            Mágico já avisa que ali dentro a experiência é diferente.
          </p>
          {marca.historia ? (
            <p className="texto-apoio">{marca.historia}</p>
          ) : (
            <p className="beco-pendente" role="note">
              Espaço reservado para a história da casa — será preenchido com o texto oficial do Beco Mágico.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
