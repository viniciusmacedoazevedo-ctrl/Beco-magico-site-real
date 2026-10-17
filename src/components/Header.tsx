import { useEffect, useRef, useState } from 'react'
import { useRolou } from '../hooks/useRolagem'
import { IconeFechar, IconeMenu, IconeSeta } from './Icones'
import { Logo } from './Logo'
import './Header.css'

const links = [
  { href: '#inicio', rotulo: 'Início' },
  { href: '#cardapio', rotulo: 'Cardápio' },
  { href: '#o-beco', rotulo: 'O Beco' },
  { href: '#localizacao', rotulo: 'Localização' },
]

export function Header() {
  const rolou = useRolou()
  const [aberto, setAberto] = useState(false)
  const botaoRef = useRef<HTMLButtonElement>(null)
  const painelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.classList.toggle('travado', aberto)
    if (!aberto) return

    painelRef.current?.querySelector<HTMLElement>('a')?.focus()

    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setAberto(false)
        botaoRef.current?.focus()
      }
      // Mantém o foco dentro do menu aberto
      if (e.key === 'Tab' && painelRef.current) {
        const focaveis = [botaoRef.current, ...painelRef.current.querySelectorAll<HTMLElement>('a')].filter(
          Boolean,
        ) as HTMLElement[]
        const primeiro = focaveis[0]
        const ultimo = focaveis[focaveis.length - 1]
        if (e.shiftKey && document.activeElement === primeiro) {
          e.preventDefault()
          ultimo.focus()
        } else if (!e.shiftKey && document.activeElement === ultimo) {
          e.preventDefault()
          primeiro.focus()
        }
      }
    }
    const aoRedimensionar = () => window.innerWidth > 900 && setAberto(false)

    document.addEventListener('keydown', aoTeclar)
    window.addEventListener('resize', aoRedimensionar)
    return () => {
      document.removeEventListener('keydown', aoTeclar)
      window.removeEventListener('resize', aoRedimensionar)
    }
  }, [aberto])

  return (
    <header className={`header ${rolou ? 'header--rolou' : ''} ${aberto ? 'header--aberto' : ''}`}>
      <div className="header-barra conteiner">
        <a href="#inicio" className="header-logo" aria-label="Beco Mágico — voltar ao início">
          <Logo />
        </a>

        <nav className="header-nav" aria-label="Principal">
          <ul role="list">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.rotulo}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#cardapio" className="botao header-cta">
          Ver cardápio
          <IconeSeta />
        </a>

        <button
          ref={botaoRef}
          type="button"
          className="header-alternar"
          aria-expanded={aberto}
          aria-controls="menu-movel"
          onClick={() => setAberto((a) => !a)}
        >
          <span className="visualmente-oculto">{aberto ? 'Fechar menu' : 'Abrir menu'}</span>
          {aberto ? <IconeFechar /> : <IconeMenu />}
        </button>
      </div>

      <div id="menu-movel" ref={painelRef} className="menu-movel" hidden={!aberto}>
        <nav aria-label="Principal (celular)">
          <ul role="list">
            {links.map((l, i) => (
              <li key={l.href} style={{ '--i': i } as React.CSSProperties}>
                <a href={l.href} onClick={() => setAberto(false)}>
                  <span className="menu-movel-num">0{i + 1}</span>
                  {l.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#cardapio" className="botao menu-movel-cta" onClick={() => setAberto(false)}>
          Ver cardápio
          <IconeSeta />
        </a>
      </div>
    </header>
  )
}
