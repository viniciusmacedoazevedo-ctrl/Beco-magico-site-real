interface Gota {
  /** centro, em unidades do viewBox (0–1440) */
  x: number
  /** meia-largura da base da gota */
  w: number
  /** comprimento da gota abaixo da linha */
  h: number
}

/**
 * Gera o caminho SVG de uma borda “derretendo” (molho escorrendo) para
 * um viewBox de 1440 x (base + maior gota). A parte de cima é sólida.
 */
export function caminhoGotejamento(gotas: Gota[], base = 36, largura = 1440): string {
  const ordenadas = [...gotas].sort((a, b) => a.x - b.x)
  let d = `M0 0 L0 ${base}`
  for (const { x, w, h } of ordenadas) {
    const r = w * 0.42
    const fundo = base + h - r
    d += ` L${x - w} ${base}`
    d += ` C${x - w * 0.45} ${base} ${x - r} ${base + h * 0.3} ${x - r} ${fundo}`
    d += ` A${r} ${r} 0 0 0 ${x + r} ${fundo}`
    d += ` C${x + r} ${base + h * 0.3} ${x + w * 0.45} ${base} ${x + w} ${base}`
  }
  d += ` L${largura} ${base} L${largura} 0 Z`
  return d
}
