import { imagens } from '../data/marca'
import { Logo } from './Logo'
import './HeroBurger.css'

const marcas = Array.from({ length: 72 }, (_, i) => i)

// Posições fixas (sem aleatoriedade a cada render) para as fagulhas
const fagulhas = [
  { x: 18, d: 0, t: 9 },
  { x: 32, d: 3.2, t: 11 },
  { x: 47, d: 6.1, t: 10 },
  { x: 61, d: 1.4, t: 12 },
  { x: 73, d: 4.8, t: 9.5 },
  { x: 84, d: 7.5, t: 11.5 },
  { x: 26, d: 8.8, t: 10.5 },
]

// Gotas de molho ao redor do produto (só aparecem com a foto real)
const gotas = [
  { x: 9, y: 58, s: 1, r: -18, d: 0 },
  { x: 16, y: 74, s: 0.55, r: 10, d: 0.6 },
  { x: 86, y: 54, s: 0.8, r: 22, d: 0.3 },
  { x: 79, y: 79, s: 0.45, r: -6, d: 1 },
  { x: 92, y: 68, s: 0.35, r: 30, d: 1.4 },
]

function Gota() {
  return (
    <svg viewBox="0 0 40 56" aria-hidden="true">
      <defs>
        <radialGradient id="gota-corpo" cx="38%" cy="62%" r="70%">
          <stop offset="0" stopColor="#ffb347" />
          <stop offset="0.45" stopColor="#e37b1d" />
          <stop offset="1" stopColor="#8a3a07" />
        </radialGradient>
      </defs>
      <path d="M20 2C20 2 4 24 4 36a16 16 0 0 0 32 0C36 24 20 2 20 2Z" fill="url(#gota-corpo)" />
      <ellipse cx="14" cy="36" rx="4" ry="6.5" fill="#fff" opacity="0.42" transform="rotate(-14 14 36)" />
    </svg>
  )
}

export function HeroBurger() {
  const temFoto = Boolean(imagens.heroHamburguer)

  return (
    <div className={`palco ${temFoto ? '' : 'palco--provisorio'}`}>
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
        {temFoto ? (
          <div className="palco-flutua">
            <img
              className="palco-burger"
              src={imagens.heroHamburguer!}
              alt="Hambúrguer do Beco Mágico com queijo derretido e molho escorrendo"
              width={1600}
              height={1600}
              fetchPriority="high"
              decoding="async"
            />
            <span className="palco-sombra" aria-hidden="true" />
            {gotas.map((g, i) => (
              <span
                key={i}
                className="palco-gota"
                aria-hidden="true"
                style={
                  {
                    left: `${g.x}%`,
                    top: `${g.y}%`,
                    '--s': g.s,
                    '--r': `${g.r}deg`,
                    '--d': `${g.d}s`,
                  } as React.CSSProperties
                }
              >
                <Gota />
              </span>
            ))}
          </div>
        ) : (
          <div className="palco-selo">
            <Logo tamanho="lg" />
            <span className="palco-selo-aviso">Foto principal do hambúrguer em produção</span>
          </div>
        )}
      </div>

      <div className="palco-fagulhas" aria-hidden="true">
        {fagulhas.map((f, i) => (
          <span
            key={i}
            style={{ left: `${f.x}%`, animationDelay: `${f.d}s`, animationDuration: `${f.t}s` } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  )
}
