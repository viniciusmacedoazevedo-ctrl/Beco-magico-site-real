import type { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
} as const

export const IconeSeta = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const IconeSetaBaixo = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
)

export const IconeMenu = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M4 8h16M4 16h10" />
  </svg>
)

export const IconeFechar = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

export const IconeLocal = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 1 1 14 0C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
)

export const IconeRelogio = (p: Props) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
)

export const IconeTelefone = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M5 4h3l1.5 4.5-2 1.3a11 11 0 0 0 6.7 6.7l1.3-2L20 16v3a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4Z" />
  </svg>
)

export const IconeInstagram = (p: Props) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="3.8" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
  </svg>
)

export const IconeMais = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
)

export const IconeEstrela = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M12 3l1.8 6.2L20 12l-6.2 1.8L12 21l-1.8-7.2L4 12l6.2-2.8Z" />
  </svg>
)
