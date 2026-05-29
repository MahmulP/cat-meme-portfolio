import { lazy, Suspense } from 'react'
import { useReducedMotion } from '@hooks/useReducedMotion'
import { MaxwellFallback } from './MaxwellFallback'

const HeroScene = lazy(() => import('./HeroScene'))

/**
 * Wraps the 3D hero in a lazy boundary and a reduced-motion guard so the rest
 * of the site stays light and accessible.
 */
export function HeroSceneLazy() {
  const reduced = useReducedMotion()
  if (reduced) return <MaxwellFallback />
  return (
    <Suspense fallback={<MaxwellFallback />}>
      <HeroScene />
    </Suspense>
  )
}
