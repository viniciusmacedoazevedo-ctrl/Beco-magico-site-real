import { useEffect } from 'react'
import { prefereMenosMovimento } from './useRolagem'

/**
 * Revela elementos com `data-revelar` quando entram na tela.
 * Só ativa a animação (classe `anima` no <html>) se o navegador suportar e
 * o usuário não preferir movimento reduzido — senão tudo aparece direto.
 */
export function useRevelar(dependencia?: unknown) {
  useEffect(() => {
    if (prefereMenosMovimento() || !('IntersectionObserver' in window)) return

    document.documentElement.classList.add('anima')
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('visivel')
            observador.unobserve(entrada.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    document.querySelectorAll('[data-revelar]:not(.visivel)').forEach((el) => observador.observe(el))
    return () => observador.disconnect()
  }, [dependencia])
}
