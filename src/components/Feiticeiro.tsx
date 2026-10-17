/**
 * Feiticeiro em silhueta contra a luz (SVG vetorial).
 * O braço (#braco) gira a partir do ombro (200, 250) para conjurar; a ponta
 * da varinha fica em (312, 128) no viewBox 320 × 520.
 */
export function Feiticeiro({ className = '' }: { className?: string }) {
  return (
    <svg className={`feiticeiro ${className}`} viewBox="0 0 320 520" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="fei-capa" x1="0" y1="0" x2="1" y2="0.3">
          <stop offset="0" stopColor="#07050a" />
          <stop offset="0.62" stopColor="#120b1a" />
          <stop offset="1" stopColor="#2d1a44" />
        </linearGradient>
        <linearGradient id="fei-luz" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffc07a" stopOpacity="0.95" />
          <stop offset="0.6" stopColor="#f2883a" stopOpacity="0.7" />
          <stop offset="1" stopColor="#7c3fbe" stopOpacity="0.2" />
        </linearGradient>
        <radialGradient id="fei-olho">
          <stop offset="0" stopColor="#ffe9bd" />
          <stop offset="0.45" stopColor="#f2883a" />
          <stop offset="1" stopColor="#f2883a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fei-ponta">
          <stop offset="0" stopColor="#fff6e6" />
          <stop offset="0.35" stopColor="#d4b0ff" />
          <stop offset="1" stopColor="#7c3fbe" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* capa com barra irregular */}
      <path
        d="M150 200 C 128 250, 104 300, 88 360 C 72 420, 46 470, 18 516 C 56 504, 88 514, 120 505 C 152 516, 188 506, 220 514 C 248 508, 268 517, 294 511 C 264 468, 242 410, 228 350 C 216 300, 208 250, 204 214 C 190 200, 168 194, 150 200 Z"
        fill="url(#fei-capa)"
      />
      {/* dobras */}
      <path d="M146 262 C 128 330, 104 420, 84 508" stroke="#1d1229" strokeWidth="5" fill="none" />
      <path d="M184 272 C 186 350, 196 430, 206 510" stroke="#24163a" strokeWidth="4" fill="none" />
      {/* luz de contorno no lado direito */}
      <path
        d="M204 214 C 208 250, 216 300, 228 350 C 242 410, 264 468, 294 511"
        stroke="url(#fei-luz)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      {/* estrelas bordadas */}
      <g fill="#e1a93b" opacity="0.45">
        <path d="M118 410 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3 Z" />
        <path d="M206 456 l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2 Z" />
        <path d="M164 336 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 Z" />
      </g>

      {/* barba */}
      <path d="M152 222 C 156 270, 170 312, 190 338 C 196 302, 204 262, 208 226 Z" fill="#0c0811" />
      <path d="M208 226 C 204 262, 196 302, 190 338" stroke="url(#fei-luz)" strokeWidth="1.6" fill="none" opacity="0.7" />

      {/* rosto na sombra + olhos */}
      <ellipse cx="180" cy="214" rx="32" ry="22" fill="#030204" />
      <ellipse className="fei-olho" cx="176" cy="212" rx="5.5" ry="3" fill="url(#fei-olho)" />
      <ellipse className="fei-olho" cx="195" cy="212" rx="5.5" ry="3" fill="url(#fei-olho)" />

      {/* chapéu com ponta dobrada */}
      <path
        d="M100 194 C 124 150, 140 110, 160 70 C 172 44, 190 22, 214 18 C 236 14, 252 26, 258 40 C 240 32, 222 36, 212 52 C 202 72, 204 110, 214 150 C 218 166, 224 180, 230 192 Z"
        fill="url(#fei-capa)"
      />
      <path
        d="M258 40 C 240 32, 222 36, 212 52 C 202 72, 204 110, 214 150 C 218 166, 224 180, 230 192"
        stroke="url(#fei-luz)"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M118 172 C 150 162, 198 160, 220 170 L 224 184 C 194 176, 150 178, 112 188 Z" fill="#b7832c" opacity="0.55" />
      <path
        d="M58 200 C 90 186, 160 180, 252 184 C 270 186, 276 192, 262 198 C 210 210, 120 214, 66 210 C 52 208, 50 204, 58 200 Z"
        fill="#09060d"
      />
      <path d="M150 182 C 200 182, 250 182, 262 186" stroke="url(#fei-luz)" strokeWidth="2" fill="none" opacity="0.8" />

      {/* braço (manga em sino) com a varinha */}
      <g id="braco" className="fei-braco">
        <path
          d="M186 236 C 214 222, 246 200, 262 176 L 290 186 C 286 206, 270 222, 252 232 C 236 244, 214 262, 200 276 Z"
          fill="url(#fei-capa)"
        />
        <path d="M262 176 L 290 186 C 286 206, 270 222, 252 232" stroke="url(#fei-luz)" strokeWidth="2" fill="none" />
        <circle cx="277" cy="185" r="8" fill="#9a7a5c" />
        <line x1="276" y1="184" x2="312" y2="128" stroke="#2a190d" strokeWidth="5" strokeLinecap="round" />
        <line x1="278" y1="182" x2="312" y2="128" stroke="#e1a93b" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        <circle className="fei-ponta" cx="312" cy="128" r="18" fill="url(#fei-ponta)" />
      </g>
    </svg>
  )
}
