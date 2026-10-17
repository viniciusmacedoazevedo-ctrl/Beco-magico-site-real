import type { Produto } from '../data/cardapio'
import { formatarPreco } from '../lib/formatar'
import { Foto } from './Foto'
import { IconeMais } from './Icones'
import './ProductCard.css'

interface Props {
  produto: Produto
  variante?: 'destaque' | 'lista'
  /** id do elemento (usado pelo cardápio para rolar até o produto) */
  id?: string
  onAbrir: (produto: Produto) => void
}

export function ProductCard({ produto, variante = 'lista', id, onAbrir }: Props) {
  const { nome, descricao, preco, selo, imagem, imagemAlt } = produto

  return (
    <article id={id} className={`produto produto--${variante}`}>
      <div className="produto-foto">
        <Foto src={imagem} alt={imagemAlt ?? nome} largura={900} altura={1000} />
        {selo && <span className="produto-selo">{selo}</span>}
      </div>
      <div className="produto-corpo">
        <h3 className="produto-nome">{nome}</h3>
        <p className="produto-descricao">{descricao}</p>
        <div className="produto-rodape">
          <span className={`produto-preco ${preco === null ? 'produto-preco--pendente' : ''}`}>
            {formatarPreco(preco)}
          </span>
          <button type="button" className="produto-abrir" onClick={() => onAbrir(produto)}>
            <span className="produto-abrir-texto">Ver detalhes</span>
            <span className="visualmente-oculto"> de {nome}</span>
            <IconeMais />
          </button>
        </div>
      </div>
    </article>
  )
}
