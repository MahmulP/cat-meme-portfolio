/**
 * Maxwell — the spinning loaf cat meme. Stylized neobrutalist illustration,
 * encoded as an inline SVG so it ships with the bundle and stays crisp.
 *
 * Used by:
 *  - HeroScene (as a texture on a billboard plane that rotates)
 *  - MaxwellFallback (as inline SVG for reduced-motion / loading states)
 */

export const MAXWELL_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="800" height="800">
  <!-- Loaf body silhouette (with ears merged in) -->
  <path d="M 60 240
           Q 50 165 130 150
           Q 142 88 175 145
           L 200 150
           L 225 145
           Q 258 88 270 150
           Q 350 165 340 240
           Q 360 318 290 358
           Q 200 378 110 358
           Q 40 318 60 240 Z"
        fill="#0a0a0a"
        stroke="#000"
        stroke-width="4"
        stroke-linejoin="round" />

  <!-- Inner ear hint -->
  <path d="M 150 130 L 162 105 L 175 132 Z" fill="#3a1a25" opacity="0.7" />
  <path d="M 225 132 L 240 105 L 252 130 Z" fill="#3a1a25" opacity="0.7" />

  <!-- White chest V (tuxedo) -->
  <path d="M 168 280
           L 200 358
           L 232 280
           Q 215 295 200 290
           Q 185 295 168 280 Z"
        fill="#f5f0e6"
        stroke="#1a1a1a"
        stroke-width="3"
        stroke-linejoin="round" />

  <!-- Eyes — big yellow ovals -->
  <ellipse cx="162" cy="220" rx="24" ry="20" fill="#d9d92e" stroke="#1a1a1a" stroke-width="3" />
  <ellipse cx="238" cy="220" rx="24" ry="20" fill="#d9d92e" stroke="#1a1a1a" stroke-width="3" />

  <!-- Pupils — vertical slits -->
  <ellipse cx="162" cy="220" rx="5" ry="15" fill="#0a0a0a" />
  <ellipse cx="238" cy="220" rx="5" ry="15" fill="#0a0a0a" />

  <!-- Eye shine -->
  <circle cx="168" cy="213" r="4" fill="#fbf8f1" />
  <circle cx="244" cy="213" r="4" fill="#fbf8f1" />

  <!-- Nose -->
  <path d="M 191 252 L 209 252 L 200 263 Z"
        fill="#e96b8e"
        stroke="#1a1a1a"
        stroke-width="2.5"
        stroke-linejoin="round" />

  <!-- Mouth — small "w" -->
  <path d="M 200 263 L 200 273" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round" />
  <path d="M 200 273 Q 188 282 176 274" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round" />
  <path d="M 200 273 Q 212 282 224 274" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round" />

  <!-- Whiskers (white, three each side) -->
  <g stroke="#f5f0e6" stroke-width="3" stroke-linecap="round" fill="none">
    <path d="M 80 245 Q 130 250 168 254" />
    <path d="M 75 265 Q 125 268 168 268" />
    <path d="M 80 285 Q 130 282 168 280" />
    <path d="M 320 245 Q 270 250 232 254" />
    <path d="M 325 265 Q 275 268 232 268" />
    <path d="M 320 285 Q 270 282 232 280" />
  </g>
</svg>`

export const MAXWELL_URL = `data:image/svg+xml;utf8,${encodeURIComponent(
  MAXWELL_SVG,
)}`
