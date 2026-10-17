import { useState } from 'react'
import { BrandStory } from './components/BrandStory'
import { FeaturedProducts } from './components/FeaturedProducts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { LocationSection } from './components/LocationSection'
import { MenuSection } from './components/MenuSection'
import { ProductModal } from './components/ProductModal'
import { SectionAssustador } from './components/SectionAssustador'
import { Transicao } from './components/Transicao'
import type { Produto } from './data/cardapio'
import { useRevelar } from './hooks/useRevelar'

export default function App() {
  const [produtoAberto, setProdutoAberto] = useState<Produto | null>(null)
  useRevelar()

  return (
    <div className="ruido">
      <a className="pular-conteudo" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <HeroSection />
        <Transicao />
        <FeaturedProducts onAbrir={setProdutoAberto} />
        <SectionAssustador />
        <MenuSection onAbrir={setProdutoAberto} />
        <BrandStory />
        <LocationSection />
      </main>
      <Footer />
      <ProductModal produto={produtoAberto} onFechar={() => setProdutoAberto(null)} />
    </div>
  )
}
