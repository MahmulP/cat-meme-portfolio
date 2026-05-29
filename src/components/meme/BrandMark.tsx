import type { SVGProps } from 'react'

/**
 * Brand mark — a tiny cat face. Reads cleanly at 24–48px. Uses currentColor
 * for the outline so it inherits text color. Background fill is left
 * transparent so the parent tile sets the brand color.
 */
export function BrandMark({
  className,
  ...rest
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      role="img"
      aria-label="Mahmul Pratama logo"
      className={className}
      {...rest}
    >
      {/* head + ears, single path, 2px stroke */}
      <path
        d="M5 14 L9 4 L13 12 L19 12 L23 4 L27 14 Q28 25 16 28 Q4 25 5 14 Z"
        fill="currentColor"
        opacity="0"
      />
      <path
        d="M5 14 L9 4 L13 12 L19 12 L23 4 L27 14 Q28 25 16 28 Q4 25 5 14 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* eyes — closed, smug little arcs */}
      <path
        d="M11 18 Q13 16 15 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M17 18 Q19 16 21 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* nose */}
      <path d="M15 21 L17 21 L16 22.5 Z" fill="currentColor" />
      {/* whiskers */}
      <path
        d="M3 21 L10 22 M3 24 L10 23 M29 21 L22 22 M29 24 L22 23"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
