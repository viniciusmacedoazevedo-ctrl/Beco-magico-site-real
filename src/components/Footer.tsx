import { marca } from '../data/marca'
import { Logo } from './Logo'
import './Footer.css'

const links = [
  { href: '#inicio', rotulo: 'Início' },
  { href: '#cardapio', rotulo: 'Cardápio' },
  { href: '#o-beco', rotulo: 'O Beco' },
  { href: '#localizacao', rotulo: 'Localização' },
]

const ano = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="rodape">
      <div className="rodape-grade conteiner">
        <div className="rodape-marca">
          <Logo tamanho="lg" />
          <p>{marca.slogan}</p>
        </div>

        <nav aria-label="Rodapé">
          <ul role="list" className="rodape-links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.rotulo}</a>
              </li>
            ))}
          </ul>
        </nav>

        {(marca.instagram || marca.telefone || marca.email) && (
          <ul role="list" className="rodape-links">
            {marca.instagram && (
              <li>
                <a href={marca.instagram.url} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            )}
            {marca.telefone && (
              <li>
                <a href={`tel:${marca.telefone.replace(/\D/g, '')}`}>{marca.telefone}</a>
              </li>
            )}
            {marca.email && (
              <li>
                <a href={`mailto:${marca.email}`}>{marca.email}</a>
              </li>
            )}
          </ul>
        )}
      </div>

      <div className="rodape-base conteiner">
        <p>
          © {ano} {marca.nome}. Todos os direitos reservados.
        </p>
        <p className="rodape-frase">{marca.fraseTematica}</p>
      </div>
    </footer>
  )
}
