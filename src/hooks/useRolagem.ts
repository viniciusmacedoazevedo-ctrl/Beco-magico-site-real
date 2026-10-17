import { useEffect, useState } from 'react'

/** Retorna `true` quando a página passou de `limite` pixels de rolagem. */
export function useRolou(limite = 24) {
  const [rolou, setRolou] = useState(false)

  useEffect(() => {
    const atualizar = () => setRolou(window.scrollY > limite)
    atualizar()
    window.addEventListener('scroll', atualizar, { passive: true })
    return () => window.removeEventListener('scroll', atualizar)
  }, [limite])

  return rolou
}

export function prefereMenosMovimento() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
