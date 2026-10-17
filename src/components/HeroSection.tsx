import { useEffect, useRef } from 'react'
import { marca } from '../data/marca'
import { prefereMenosMovimento } from '../hooks/useRolagem'
import { Morcegos, PoeiraMagica, type Grao, type Morcego } from './Atmosfera'
import { HeroBurger } from './HeroBurger'
import { IconeLocal, IconeRelogio, IconeSeta, IconeSetaBaixo } from './Icones'
import './HeroSection.css'

const bando: Morcego[] = [
  { y: 10, t: 58, d: 34, a: -6, p: 1, x: 62 },
  { y: 24, t: 34, d: 46, a: -30, p: 2, x: 80, volta: true },
  { y: 4, t: 26, d: 56, a: -12, p: 2, x: 40 },
  { y: 34, t: 20, d: 60, a: -40, p: 3, x: 88, volta: true },
]

const graos: Grao[] = [
  { x: 56, y: 78, c: 'o', d: 7, a: 0 },
  { x: 64, y: 70, c: 'l', d: 9, a: 2.5 },
  { x: 72, y: 82, c: 'r', d: 8, a: 1.2, t: 4 },
  { x: 81, y: 74, c: 'o', d: 10, a: 4 },
  { x: 90, y: 80, c: 'l', d: 7.5, a: 5.5, t: 2 },
  { x: 60, y: 60, c: 'r', d: 11, a: 6 },
  { x: 86, y: 58, c: 'o', d: 9.5, a: 3.2, t: 2 },
  { x: 48, y: 86, c: 'l', d: 8.5, a: 7 },
]

export function HeroSection() {
  const secaoRef = useRef<HTMLElement>(null)

  // Parallax leve: o ponteiro e a rolagem alimentam variáveis CSS (--mx, --my, --rolagem)
  useEffect(() => {
    const secao = secaoRef.current
    if (!secao || prefereMenosMovimento()) return

    const ponteiroFino = window.matchMedia('(pointer: fine)').matches
    let alvoX = 0
    let alvoY = 0
    let x = 0
    let y = 0
    let quadro = 0

    const animar = () => {
      x += (alvoX - x) * 0.07
      y += (alvoY - y) * 0.07
      const progresso = Math.min(window.scrollY / secao.offsetHeight, 1)
      secao.style.setProperty('--mx', x.toFixed(4))
      secao.style.setProperty('--my', y.toFixed(4))
      secao.style.setProperty('--rolagem', progresso.toFixed(4))
      quadro = Math.abs(alvoX - x) > 0.001 || Math.abs(alvoY - y) > 0.001 ? requestAnimationFrame(animar) : 0
    }
    const pedirQuadro = () => {
      if (!quadro) quadro = requestAnimationFrame(animar)
    }
    const aoMover = (e: PointerEvent) => {
      const r = secao.getBoundingClientRect()
      alvoX = ((e.clientX - r.left) / r.width) * 2 - 1
      alvoY = ((e.clientY - r.top) / r.height) * 2 - 1
      pedirQuadro()
    }
    const aoSair = () => {
      alvoX = 0
      alvoY = 0
      pedirQuadro()
    }

    if (ponteiroFino) {
      secao.addEventListener('pointermove', aoMover)
      secao.addEventListener('pointerleave', aoSair)
    }
    window.addEventListener('scroll', pedirQuadro, { passive: true })
    return () => {
      cancelAnimationFrame(quadro)
      secao.removeEventListener('pointermove', aoMover)
      secao.removeEventListener('pointerleave', aoSair)
      window.removeEventListener('scroll', pedirQuadro)
    }
  }, [])

  const atraso = (ms: number) => ({ '--atraso': `${ms}ms` }) as React.CSSProperties
  const horario = marca.horarios?.[0]

  return (
    <section id="inicio" className="hero" ref={secaoRef} aria-labelledby="hero-titulo">
      <div className="hero-fundo" aria-hidden="true">
        <span className="hero-luz hero-luz--laranja" />
        <span className="hero-luz hero-luz--roxa" />
        <span className="hero-nevoa" />
      </div>
      <Morcegos bando={bando} className="hero-morcegos" />
      <PoeiraMagica graos={graos} className="hero-poeira" />

      <div className="hero-grade conteiner">
        <div className="hero-topo">
          <p className="hero-marca hero-entra" style={atraso(40)}>
            <span className="hero-marca-nome">{marca.nome}</span>
            <span className="hero-marca-sep" aria-hidden="true" />
            <span className="hero-marca-tipo">Hamburgueria em Natal</span>
          </p>
          <h1 id="hero-titulo" className="hero-titulo">
            <span className="hero-linha hero-linha--1 hero-entra" style={atraso(120)}>
              O hambúrguer
            </span>
            <span className="hero-linha hero-linha--2 hero-entra" style={atraso(200)}>
              <span className="hero-mais">mais</span>
              <span className="hero-magico">mágico</span>
            </span>
            <span className="hero-linha hero-linha--3 hero-entra" style={atraso(280)}>
              do Brasil.
            </span>
          </h1>
        </div>

        <HeroBurger />

        <div className="hero-base hero-entra" style={atraso(380)}>
          <p className="hero-descricao">
            Pães coloridos, queijo que escorre e um toque de mistério em cada mordida. Entre no beco e encontre o seu
            feitiço favorito.
          </p>
          <div className="hero-acoes">
            <a href="#cardapio" className="botao botao--grande">
              Descobrir o cardápio
              <IconeSeta />
            </a>
            <a href="#universo" className="botao botao--fantasma botao--grande">
              Ver os favoritos
            </a>
          </div>
          {(horario || marca.endereco) && (
            <ul className="hero-info" role="list">
              {horario && (
                <li>
                  <IconeRelogio />
                  {horario.dias}, {horario.horas}
                </li>
              )}
              {marca.endereco && (
                <li>
                  <IconeLocal />
                  {marca.endereco.bairro}, {marca.endereco.cidade}
                </li>
              )}
            </ul>
          )}
        </div>
      </div>

      <a href="#universo" className="hero-rolar">
        <span>Role para entrar no beco</span>
        <IconeSetaBaixo />
      </a>
    </section>
  )
}
