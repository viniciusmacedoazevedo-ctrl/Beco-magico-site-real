import type { ReactNode } from 'react'
import { marca } from '../data/marca'
import { IconeInstagram, IconeLocal, IconeRelogio, IconeSeta, IconeTelefone } from './Icones'
import './LocationSection.css'

function Pendente() {
  return <span className="info-pendente">A confirmar</span>
}

interface CartaoProps {
  icone: ReactNode
  titulo: string
  children: ReactNode
  acao?: ReactNode
}

function Cartao({ icone, titulo, children, acao }: CartaoProps) {
  return (
    <li className="info-cartao" data-revelar>
      <span className="info-icone">{icone}</span>
      <h3>{titulo}</h3>
      <div className="info-valor">{children}</div>
      {acao}
    </li>
  )
}

export function LocationSection() {
  const { endereco, horarios, telefone, whatsapp, instagram } = marca
  const algoPendente = !endereco || !horarios || !(telefone || whatsapp) || !instagram

  return (
    <section id="localizacao" className="local" aria-labelledby="local-titulo">
      <div className="conteiner">
        <header className="local-cabecalho" data-revelar>
          <p className="sobretitulo">Localização</p>
          <h2 id="local-titulo" className="titulo-secao">
            Encontre <em>o beco</em>
          </h2>
          {algoPendente && (
            <p className="texto-apoio">Endereço, horários e contatos oficiais serão publicados aqui em breve.</p>
          )}
        </header>

        <div className={`local-grade ${endereco?.mapaEmbedUrl ? 'local-grade--mapa' : ''}`}>
          <ul className="local-cartoes" role="list">
            <Cartao
              icone={<IconeLocal />}
              titulo="Endereço"
              acao={
                endereco?.mapsUrl && (
                  <a className="botao" href={endereco.mapsUrl} target="_blank" rel="noopener noreferrer">
                    Abrir rota
                    <IconeSeta />
                  </a>
                )
              }
            >
              {endereco ? (
                <address>
                  {endereco.logradouro}
                  {endereco.bairro && <br />}
                  {endereco.bairro}
                  <br />
                  {endereco.cidade}
                </address>
              ) : (
                <Pendente />
              )}
            </Cartao>

            <Cartao icone={<IconeRelogio />} titulo="Horários">
              {horarios ? (
                <dl className="info-horarios">
                  {horarios.map((h) => (
                    <div key={h.dias}>
                      <dt>{h.dias}</dt>
                      <dd>{h.horas}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <Pendente />
              )}
            </Cartao>

            <Cartao icone={<IconeTelefone />} titulo="Contato">
              {telefone || whatsapp ? (
                <div className="info-links">
                  {telefone && <a href={`tel:${telefone.replace(/\D/g, '')}`}>{telefone}</a>}
                  {whatsapp && (
                    <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  )}
                </div>
              ) : (
                <Pendente />
              )}
            </Cartao>

            <Cartao icone={<IconeInstagram />} titulo="Instagram">
              {instagram ? (
                <a href={instagram.url} target="_blank" rel="noopener noreferrer">
                  @{instagram.usuario}
                </a>
              ) : (
                <Pendente />
              )}
            </Cartao>
          </ul>

          {endereco?.mapaEmbedUrl && (
            <iframe
              className="local-mapa"
              title={`Mapa com a localização do ${marca.nome}`}
              src={endereco.mapaEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          )}
        </div>
      </div>
    </section>
  )
}
