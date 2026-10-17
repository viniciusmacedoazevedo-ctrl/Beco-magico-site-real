import { buscarProduto, PRODUTO_ABERTURA } from '../data/cardapio'
import { imagens } from '../data/marca'
import { Logo } from './Logo'
import './HeroBurger.css'

const marcas = Array.from({ length: 72 }, (_, i) => i)

function GotaQueijo() {
  return (
    <svg viewBox="0 0 20 28" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="gota-queijo" cx="38%" cy="62%" r="72%">
          <stop offset="0" stopColor="#fffaf0" />
          <stop offset="0.5" stopColor="#f3e3bd" />
          <stop offset="1" stopColor="#c7a46a" />
        </radialGradient>
      </defs>
      <path d="M10 1C10 1 2 12 2 18a8 8 0 0 0 16 0C18 12 10 1 10 1Z" fill="url(#gota-queijo)" />
      <ellipse cx="7" cy="18" rx="2" ry="3.2" fill="#fff" opacity="0.6" transform="rotate(-14 7 18)" />
    </svg>
  )
}

export function HeroBurger() {
  const foto = imagens.heroHamburguer
  const produto = buscarProduto(PRODUTO_ABERTURA)

  return (
    <div className={`palco ${foto ? '' : 'palco--provisorio'}`}>
      <div className="palco-camada palco-camada--fundo" aria-hidden="true">
        <span className="palco-halo" />
        <svg className="palco-circulo" viewBox="0 0 600 600">
          <defs>
            <path id="circulo-texto" d="M300 300m-232 0a232 232 0 1 1 464 0a232 232 0 1 1 -464 0" />
          </defs>
          <circle cx="300" cy="300" r="270" className="circulo-linha" />
          <circle cx="300" cy="300" r="210" className="circulo-linha circulo-linha--fraca" />
          {marcas.map((i) => (
            <line
              key={i}
              x1="300"
              y1={i % 6 === 0 ? 22 : 30}
              x2="300"
              y2="40"
              className="circulo-marca"
              transform={`rotate(${i * 5} 300 300)`}
            />
          ))}
          <text className="circulo-texto">
            <textPath href="#circulo-texto" startOffset="0">
              Saborosamente assustador ✦ Beco Mágico ✦ Saborosamente assustador ✦ Beco Mágico ✦
            </textPath>
          </text>
        </svg>
      </div>

      <div className="palco-camada palco-camada--fumaca" aria-hidden="true">
        <span className="fumaca fumaca--1" />
        <span className="fumaca fumaca--2" />
        <span className="fumaca fumaca--3" />
      </div>

      <div className="palco-camada palco-camada--produto">
        {foto ? (
          <div className="palco-flutua">
            <span className="palco-sombra" aria-hidden="true" />
            <div className="palco-produto">
              <img
                className="palco-burger"
                src={foto.src}
                alt={produto ? `${produto.nome}: ${produto.descricao}` : 'Hambúrguer do Beco Mágico'}
                width={foto.largura}
                height={foto.altura}
                fetchPriority="high"
                decoding="async"
              />
              {foto.gotas.map((g, i) => (
                <span
                  key={i}
                  className="palco-gota"
                  aria-hidden="true"
                  style={{ left: `${g.x}%`, top: `${g.y}%`, '--a': `${1.2 + i * 2.1}s` } as React.CSSProperties}
                >
                  <GotaQueijo />
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="palco-selo">
            <Logo tamanho="lg" />
            <span className="palco-selo-aviso">Foto principal do hambúrguer em produção</span>
          </div>
        )}
      </div>

      <a href="#cardapio" className="selo-giratorio">
        <svg className="selo-giratorio-texto" viewBox="0 0 120 120" aria-hidden="true" focusable="false">
          <defs>
            <path id="selo-circulo" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1 -92 0" />
          </defs>
          <text>
            <textPath href="#selo-circulo">Descobrir o cardápio ✦ Entre no beco ✦</textPath>
          </text>
        </svg>
        <span className="selo-giratorio-centro">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </span>
        <span className="visualmente-oculto">Descobrir o cardápio</span>
      </a>
    </div>
  )
}
