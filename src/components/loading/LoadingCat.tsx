import { useEffect, useState } from 'react'
import { CatSleepy, CatSmug, CatSurprised } from '@components/meme'

const CATS = [CatSmug, CatSurprised, CatSleepy] as const

const QUIPS = [
  'Petting the bytes...',
  'Herding cats...',
  'Loading 9 lives...',
  'Refilling the kibble...',
  'Sharpening the claws...',
  'Knocking glass off the table...',
  'Negotiating with the cat...',
  'Yelling MEOW into the void...',
  'Rolling over for ear scratches...',
  'OIIA OIIA OIIA...',
]

/**
 * Brutalist cat-meme loader. Used as the Suspense fallback for lazy routes.
 * - Cat sprite cycles every ~700ms (gives the illusion of animation without
 *   any extra assets or canvas).
 * - A chunky speech bubble cycles through silly loading lines.
 * - The whole sticker bobs and the cat spins in CSS.
 */
export function LoadingCat() {
  const [catIdx, setCatIdx] = useState(0)
  const [quipIdx, setQuipIdx] = useState(() =>
    Math.floor(Math.random() * QUIPS.length),
  )

  useEffect(() => {
    const cat = window.setInterval(() => {
      setCatIdx((i) => (i + 1) % CATS.length)
    }, 700)
    const quip = window.setInterval(() => {
      setQuipIdx((i) => (i + 1) % QUIPS.length)
    }, 1600)
    return () => {
      window.clearInterval(cat)
      window.clearInterval(quip)
    }
  }, [])

  const Cat = CATS[catIdx]
  const quip = QUIPS[quipIdx]

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className="grid place-items-center min-h-[60vh] px-4"
    >
      <div className="flex flex-col items-center gap-6 animate-[cat-bob_2s_ease-in-out_infinite]">
        {/* Cat sticker */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 bg-surface border-3 border-ink rounded-md shadow-brutal grid place-items-center -rotate-2">
          {/* Tape */}
          <span
            aria-hidden="true"
            className="absolute -top-3 left-1/2 -translate-x-1/2 -rotate-3 w-20 h-[18px] bg-accent-3 border-2 border-ink rounded-[2px] shadow-[2px_2px_0_0_var(--color-ink)]"
          />
          {/* Spinning cat — keep it slow so the face still reads */}
          <Cat className="w-28 h-28 sm:w-32 sm:h-32 animate-[cat-spin_3s_linear_infinite]" />
        </div>

        {/* Speech bubble with cycling quip */}
        <div className="relative max-w-[280px] sm:max-w-sm bg-paper border-3 border-ink rounded-md shadow-brutal px-4 py-2">
          <p className="font-display uppercase text-base sm:text-lg tracking-wide text-ink text-center">
            {quip}
          </p>
          <span
            aria-hidden="true"
            className="absolute left-1/2 -translate-x-1/2 -top-3 w-0 h-0 border-x-[10px] border-x-transparent border-b-[14px] border-b-ink"
          />
          <span
            aria-hidden="true"
            className="absolute left-1/2 -translate-x-1/2 -top-[10px] w-0 h-0 border-x-[8px] border-x-transparent border-b-[12px] border-b-paper"
          />
        </div>

        {/* Three brutal dots — staggered so the eye has somewhere to land */}
        <div className="flex gap-2" aria-hidden="true">
          {[0, 0.2, 0.4].map((d, i) => (
            <span
              key={i}
              className="w-3 h-3 bg-ink rounded-full animate-[cat-dot_1.1s_ease-in-out_infinite]"
              style={{ animationDelay: `${d}s` }}
            />
          ))}
        </div>
      </div>

      {/* Component-scoped keyframes — local-only, doesn't pollute Tailwind config */}
      <style>{`
        @keyframes cat-bob {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }
        @keyframes cat-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes cat-dot {
          0%, 100% { transform: translateY(0);    opacity: 0.4; }
          50%      { transform: translateY(-6px); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          [class*="animate-[cat-"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  )
}
