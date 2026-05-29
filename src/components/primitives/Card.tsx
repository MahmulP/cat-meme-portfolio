import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@lib/cn'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  tilt?: boolean
  interactive?: boolean
  /**
   * Soft tinted backgrounds. Designed for long-form content blocks: the tint
   * is barely there but reads as "category color". Use the saturated variants
   * (`bg-accent` etc.) directly via `className` only on small accents.
   */
  accent?: 'accent' | 'accent-2' | 'accent-3'
}

const accents: Record<NonNullable<CardProps['accent']>, string> = {
  accent: 'bg-accent-soft',
  'accent-2': 'bg-accent-2-soft',
  'accent-3': 'bg-accent-3-soft',
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, tilt, interactive, accent, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        'border-3 border-ink rounded-md shadow-brutal p-6 transition-[transform,box-shadow] duration-200 ease-out',
        accent ? accents[accent] : 'bg-surface',
        tilt && '-rotate-1',
        interactive && [
          'hover:shadow-brutal-lg',
          tilt
            ? 'hover:rotate-0 hover:-translate-x-[2px] hover:-translate-y-[2px]'
            : 'hover:-translate-x-[2px] hover:-translate-y-[2px]',
        ],
        className,
      )}
      {...rest}
    />
  )
})
