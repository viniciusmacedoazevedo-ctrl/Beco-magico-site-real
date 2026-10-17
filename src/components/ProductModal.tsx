import { useEffect, useRef } from 'react'
import { categorias, type Produto } from '../data/cardapio'
import { marca } from '../data/marca'
import { formatarPreco, linkWhatsApp } from '../lib/formatar'
import { AvisoDemonstrativo } from './AvisoDemonstrativo'
import { Foto } from './Foto'
import { IconeFechar, IconeSeta } from './Icones'
import './ProductModal.css'

interface Props {
  produto: Produto | null
  onFechar: () => void
}

export function ProductModal({ produto, onFechar }: Props) {
  const dialogoRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialogo = dialogoRef.current
    if (!dialogo) return
    if (produto && !dialogo.open) {
      dialogo.showModal()
      document.body.classList.add('travado')
    }
    if (!produto && dialogo.open) dialogo.close()
  }, [produto])

  const categoria = categorias.find((c) => c.id === produto?.categoria)

  return (
    <dialog
      ref={dialogoRef}
      className="modal"
      aria-labelledby="modal-titulo"
      onClose={() => {
        document.body.classList.remove('travado')
        onFechar()
      }}
      onClick={(e) => {
        // Clique no fundo escurecido fecha
        if (e.target === dialogoRef.current) dialogoRef.current.close()
      }}
    >
      {produto && (
        <div className="modal-conteudo">
          <div className="modal-foto">
            <Foto src={produto.imagem} alt={produto.imagemAlt ?? produto.nome} largura={1000} altura={1000} />
          </div>
          <div className="modal-corpo">
            <button type="button" className="modal-fechar" onClick={() => dialogoRef.current?.close()}>
              <span className="visualmente-oculto">Fechar detalhes</span>
              <IconeFechar />
            </button>

            {categoria && <p className="sobretitulo">{categoria.nome}</p>}
            <h2 id="modal-titulo" className="modal-titulo">
              {produto.nome}
            </h2>
            <p className="modal-descricao">{produto.descricao}</p>

            {produto.ingredientes && produto.ingredientes.length > 0 && (
              <div className="modal-ingredientes">
                <h3>Ingredientes</h3>
                <ul role="list">
                  {produto.ingredientes.map((ing) => (
                    <li key={ing}>{ing}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="modal-rodape">
              <span className="modal-preco">{formatarPreco(produto.preco)}</span>
              {marca.whatsapp && (
                <a
                  className="botao"
                  href={linkWhatsApp(marca.whatsapp, `Olá! Quero pedir: ${produto.nome}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pedir pelo WhatsApp
                  <IconeSeta />
                </a>
              )}
            </div>
            <AvisoDemonstrativo />
          </div>
        </div>
      )}
    </dialog>
  )
}
