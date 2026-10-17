import { useEffect, useRef, useState } from 'react'
import { marca } from '../data/marca'
import { prefereMenosMovimento } from '../hooks/useRolagem'
import { Morcegos, type Morcego } from './Atmosfera'
import { Feiticeiro } from './Feiticeiro'
import { BotaoPedir } from './BotaoPedir'
import { IconeEstrela, IconeSeta } from './Icones'
import './SectionAssustador.css'

const repeticoes = [0, 1, 2, 3]

// Bando ambiente que cruza a lua
const bando: Morcego[] = [
  { y: 6, t: 40, d: 30, a: -3, p: 2, x: 70 },
  { y: 16, t: 22, d: 40, a: -14, p: 3, x: 82, volta: true },
  { y: 2, t: 16, d: 48, a: -30, p: 3, x: 90 },
]

// Partículas da explosão (ângulo em graus, distância em %)
const estilhacos = Array.from({ length: 18 }, (_, i) => ({
  ang: (360 / 18) * i + (i % 2 ? 8 : -6),
  dist: 38 + ((i * 37) % 22),
  cor: i % 3 === 0 ? 'o' : i % 3 === 1 ? 'r' : 'l',
}))

type Fase = 'repouso' | 'preparo' | 'raio' | 'anel' | 'nevoa' | 'explosao' | 'revelado'

// Linha do tempo do feitiço (ms desde o clique). Cada etapa tem o seu momento:
// conjurar → raio → crescer → fumaça atrás + morcegos → explosão → revelação.
const ROTEIRO: [Fase, number][] = [
  ['preparo', 0],
  ['raio', 1000],
  ['anel', 1900],
  ['nevoa', 2700],
  ['explosao', 3500],
  ['revelado', 4500],
]
const TROCA_IMAGEM = 3900

// Hambúrguer turbinado (mais alto que o comum: duas carnes)
const MAGICO = { largura: 998, altura: 1198 }

export function SectionAssustador() {
  const [primeira, segunda] = marca.fraseTematica.split(' ')
  const [fase, setFase] = useState<Fase>('repouso')
  const [magico, setMagico] = useState(false)
  const timers = useRef<number[]>([])

  const limpar = () => {
    timers.current.forEach((t) => window.clearTimeout(t))
    timers.current = []
  }
  useEffect(() => limpar, [])

  const agendar = (fn: () => void, ms: number) => timers.current.push(window.setTimeout(fn, ms))

  const conjurar = () => {
    limpar()
    if (prefereMenosMovimento()) {
      setMagico(true)
      setFase('revelado')
      return
    }
    const inicio = magico ? 500 : 0
    if (magico) {
      setMagico(false)
      setFase('repouso')
    }
    for (const [f, t] of ROTEIRO) agendar(() => setFase(f), inicio + t)
    agendar(() => setMagico(true), inicio + TROCA_IMAGEM)
  }

  const emAndamento = fase !== 'repouso' && fase !== 'revelado'
  const revelado = fase === 'revelado'

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

      <div className="assustador-palco" data-fase={fase}>
        <div className="assustador-fundo" aria-hidden="true">
          <span className="assustador-lua" />
          <span className="assustador-brilho" />
          <span className="assustador-nevoa" />
        </div>
        <Morcegos bando={bando} className="assustador-morcegos" />

        <div className="conteiner assustador-grade">
          <header className="assustador-cabecalho">
            <p className="sobretitulo assustador-sobre" data-revelar>
              A hora do mágico
            </p>
            <h2 id="assustador-titulo" className="assustador-titulo" data-revelar>
              <span className="assustador-p1">{primeira}</span>
              <span className="assustador-p2">{segunda}</span>
            </h2>
            <div className="assustador-texto" data-revelar style={{ '--atraso': '150ms' } as React.CSSProperties}>
              <p>
                Um hambúrguer comum entra em cena. O feiticeiro ergue a varinha. O que sai da fumaça, você vê agora.
              </p>
              <div className="assustador-acoes">
                <button
                  type="button"
                  className={`botao botao--feitico ${fase === 'revelado' ? 'botao--repetir' : ''}`}
                  onClick={conjurar}
                  disabled={emAndamento}
                  aria-describedby="feitico-status"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M4 20 15 9M14 4v2M18 6l-1.4 1.4M20 10h-2M15 9l1.5 1.5" />
                  </svg>
                  {emAndamento ? 'Conjurando…' : fase === 'revelado' ? 'Repetir feitiço' : 'Lançar feitiço'}
                </button>
                {revelado ? (
                  <BotaoPedir compacto />
                ) : (
                  <a href="#cardapio" className="botao botao--fantasma">
                    Ver cardápio
                    <IconeSeta />
                  </a>
                )}
              </div>
              <p id="feitico-status" className="visualmente-oculto" aria-live="polite">
                {revelado ? 'Feitiço completo: o hambúrguer cresceu e ganhou pão roxo.' : ''}
              </p>
            </div>
          </header>

          <div className="cena">
            <span className="cena-contraluz" aria-hidden="true" />
            <Feiticeiro className="cena-feiticeiro" />

            {/* círculo arcano na ponta da varinha */}
            <svg className="cena-runa" viewBox="0 0 100 100" aria-hidden="true">
              <circle cx="50" cy="50" r="44" />
              <circle cx="50" cy="50" r="34" strokeDasharray="3 6" />
              <path d="M50 10 L84 70 L16 70 Z M50 90 L16 30 L84 30 Z" />
            </svg>

            {/* corrente de partículas até o hambúrguer */}
            <svg className="cena-raio" viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="raio-cor" x1="0" x2="1">
                  <stop offset="0" stopColor="#c89bff" />
                  <stop offset="1" stopColor="#ffb065" />
                </linearGradient>
              </defs>
              <g className="raio-movel">
                <path className="raio-base" d="M370 347 C 390 260, 540 270, 610 180" />
                <path className="raio raio--1" d="M370 347 C 390 260, 540 270, 610 180" pathLength={100} />
                <path className="raio raio--2" d="M370 347 C 420 290, 560 300, 610 180" pathLength={100} />
                <path className="raio raio--3" d="M370 347 C 360 230, 500 220, 610 180" pathLength={100} />
              </g>
              <g className="raio-desktop">
                <path className="raio-base" d="M348 238 C 450 130, 600 170, 700 330" />
                <path className="raio raio--1" d="M348 238 C 450 130, 600 170, 700 330" pathLength={100} />
                <path className="raio raio--2" d="M348 238 C 470 190, 620 220, 700 330" pathLength={100} />
                <path className="raio raio--3" d="M348 238 C 430 80, 640 120, 700 330" pathLength={100} />
              </g>
            </svg>

            <div className="cena-produto">
              <div className="cena-fumaca-atras" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="cena-halo cena-halo--quente" aria-hidden="true" />
              <span className="cena-halo cena-halo--magico" aria-hidden="true" />
              <svg className="cena-anel" viewBox="0 0 200 200" aria-hidden="true">
                <ellipse cx="100" cy="100" rx="92" ry="92" />
                <ellipse cx="100" cy="100" rx="80" ry="80" strokeDasharray="2 8" />
              </svg>
              <img
                className={`cena-burger cena-burger--comum ${magico ? 'oculto' : ''}`}
                src="/img/feitico/hamburguer-comum.webp"
                alt={magico ? '' : 'Hambúrguer comum de pão dourado com cheddar e alface'}
                width={1000}
                height={774}
                loading="lazy"
                decoding="async"
              />
              <img
                className={`cena-burger cena-burger--magico ${magico ? '' : 'oculto'}`}
                src="/img/feitico/hamburguer-magico.webp"
                alt={
                  magico
                    ? 'Hambúrguer turbinado: pão roxo, duas carnes, cheddar em dobro, bacon com cebola e molho escorrendo'
                    : ''
                }
                width={MAGICO.largura}
                height={MAGICO.altura}
                loading="lazy"
                decoding="async"
              />
              <span className="cena-gota-molho" aria-hidden="true" />
              <span className="cena-sombra" aria-hidden="true" />
              <div className="cena-explosao" aria-hidden="true">
                <span className="cena-fumaca cena-fumaca--1" />
                <span className="cena-fumaca cena-fumaca--2" />
                <span className="cena-fumaca cena-fumaca--3" />
                {estilhacos.map((e, i) => (
                  <span
                    key={i}
                    className={`cena-estilhaco grao--${e.cor}`}
                    style={{ '--ang': `${e.ang}deg`, '--dist': e.dist } as React.CSSProperties}
                  />
                ))}
              </div>
              <div className="cena-brilhos" aria-hidden="true">
                {[12, 30, 52, 70, 86].map((x, i) => (
                  <span key={x} style={{ left: `${x}%`, '--a': `${i * 0.35}s` } as React.CSSProperties} />
                ))}
              </div>
            </div>

            <div className="cena-morcegos-final" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <Morcegos
                  key={i}
                  bando={[{ y: 10 + i * 14, t: 34 - i * 8, d: 5 + i, a: 0.2 * i, p: i === 0 ? 1 : 2, x: 60 }]}
                />
              ))}
            </div>
          </div>
          <p className={`cena-final ${revelado ? 'visivel' : ''}`} aria-hidden={!revelado}>
            Do comum ao <em>mágico</em> em um feitiço.
          </p>
          <p className="cena-legenda">Cena ilustrativa</p>
        </div>
      </div>
    </section>
  )
}
