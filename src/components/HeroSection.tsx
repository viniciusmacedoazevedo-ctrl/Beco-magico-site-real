import { useEffect, useRef } from 'react'
import { marca } from '../data/marca'
import { prefereMenosMovimento } from '../hooks/useRolagem'
import { HeroBurger } from './HeroBurger'
import { IconeSeta, IconeSetaBaixo } from './Icones'
import './HeroSection.css'

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

  return (
    <section id="inicio" className="hero" ref={secaoRef} aria-labelledby="hero-titulo">
      <div className="hero-fundo" aria-hidden="true">
        <span className="hero-luz hero-luz--laranja" />
        <span className="hero-luz hero-luz--roxa" />
        <span className="hero-grade-linhas" />
      </div>

      <div className="hero-grade conteiner">
        <div className="hero-topo">
          <p className="sobretitulo hero-entra" style={{ '--atraso': '60ms' } as React.CSSProperties}>
            Hamburgueria {marca.nome}
          </p>
          <h1 id="hero-titulo" className="hero-titulo">
            <span className="hero-linha hero-entra" style={{ '--atraso': '120ms' } as React.CSSProperties}>
              O hambúrguer
            </span>
            <span className="hero-linha hero-entra" style={{ '--atraso': '200ms' } as React.CSSProperties}>
              mais <em>mágico</em>
            </span>
            <span className="hero-linha hero-entra" style={{ '--atraso': '280ms' } as React.CSSProperties}>
              do Brasil.
            </span>
          </h1>
        </div>

        <HeroBurger />

        <div className="hero-base hero-entra" style={{ '--atraso': '380ms' } as React.CSSProperties}>
          <p className="hero-descricao">
            Entre no beco, siga o cheiro da chapa e descubra um hambúrguer feito para encantar do primeiro ao último
            pedaço.
          </p>
          <div className="hero-acoes">
            <a href="#cardapio" className="botao">
              Explorar cardápio
              <IconeSeta />
            </a>
            <a href="#o-beco" className="botao botao--fantasma">
              Conheça o Beco
            </a>
          </div>
        </div>
      </div>

      <a href="#universo" className="hero-rolar">
        <span>Role para entrar no beco</span>
        <IconeSetaBaixo />
      </a>
    </section>
  )
}
