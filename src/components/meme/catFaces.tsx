/**
 * A small set of inline cat-meme SVGs. Hand-drawn vector look, brutal palette.
 * Each face accepts an optional className for sizing / color tweaks.
 */
import type { SVGProps } from 'react'

interface FaceProps extends SVGProps<SVGSVGElement> {
  fill?: string
}

/** Smug "I-pushed-to-prod-on-Friday" cat. */
export function CatSmug({ fill = '#ffd23f', ...rest }: FaceProps) {
  return (
    <svg viewBox="0 0 200 200" role="img" aria-label="Smug cat" {...rest}>
      <rect width="200" height="200" fill="transparent" />
      {/* head */}
      <path
        d="M30 90 L60 30 L90 70 L110 70 L140 30 L170 90 Q180 160 100 175 Q20 160 30 90 Z"
        fill={fill}
        stroke="#0a0a0a"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* inner ears */}
      <path d="M58 50 L72 70 L78 50 Z" fill="#0a0a0a" />
      <path d="M142 50 L128 70 L122 50 Z" fill="#0a0a0a" />
      {/* eyes — narrow, smug */}
      <path
        d="M65 110 Q80 100 95 110"
        fill="none"
        stroke="#0a0a0a"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M105 110 Q120 100 135 110"
        fill="none"
        stroke="#0a0a0a"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* nose */}
      <path d="M95 130 L105 130 L100 138 Z" fill="#0a0a0a" />
      {/* smug grin */}
      <path
        d="M82 145 Q100 158 118 145"
        fill="none"
        stroke="#0a0a0a"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* whiskers */}
      <path
        d="M40 140 L75 142 M40 152 L75 148 M160 140 L125 142 M160 152 L125 148"
        stroke="#0a0a0a"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Wide-eyed surprised cat — "TS error appeared". */
export function CatSurprised({ fill = '#ff5d8f', ...rest }: FaceProps) {
  return (
    <svg viewBox="0 0 200 200" role="img" aria-label="Surprised cat" {...rest}>
      <path
        d="M30 90 L60 30 L90 70 L110 70 L140 30 L170 90 Q180 160 100 175 Q20 160 30 90 Z"
        fill={fill}
        stroke="#0a0a0a"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path d="M58 50 L72 70 L78 50 Z" fill="#0a0a0a" />
      <path d="M142 50 L128 70 L122 50 Z" fill="#0a0a0a" />
      {/* eyes — big circles */}
      <circle cx="78" cy="115" r="14" fill="#fff" stroke="#0a0a0a" strokeWidth="5" />
      <circle cx="122" cy="115" r="14" fill="#fff" stroke="#0a0a0a" strokeWidth="5" />
      <circle cx="78" cy="115" r="5" fill="#0a0a0a" />
      <circle cx="122" cy="115" r="5" fill="#0a0a0a" />
      {/* nose */}
      <path d="M95 138 L105 138 L100 146 Z" fill="#0a0a0a" />
      {/* O mouth */}
      <ellipse cx="100" cy="158" rx="6" ry="8" fill="#0a0a0a" />
    </svg>
  )
}

/** Sleepy cat — "merge conflict at 2am". */
export function CatSleepy({ fill = '#5cd1ff', ...rest }: FaceProps) {
  return (
    <svg viewBox="0 0 200 200" role="img" aria-label="Sleepy cat" {...rest}>
      <path
        d="M30 90 L60 30 L90 70 L110 70 L140 30 L170 90 Q180 160 100 175 Q20 160 30 90 Z"
        fill={fill}
        stroke="#0a0a0a"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path d="M58 50 L72 70 L78 50 Z" fill="#0a0a0a" />
      <path d="M142 50 L128 70 L122 50 Z" fill="#0a0a0a" />
      {/* eyes — closed lines */}
      <path
        d="M65 115 Q80 122 95 115 M105 115 Q120 122 135 115"
        fill="none"
        stroke="#0a0a0a"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path d="M95 138 L105 138 L100 146 Z" fill="#0a0a0a" />
      <path
        d="M82 155 Q100 162 118 155"
        fill="none"
        stroke="#0a0a0a"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  )
}
