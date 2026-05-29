import type { HTMLAttributes, ReactNode } from 'react'
import { Heading } from '@components/primitives'
import { cn } from '@lib/cn'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  title?: string
  eyebrow?: string
  kicker?: string
  trailing?: ReactNode
}

export function Section({
  title,
  eyebrow,
  kicker,
  trailing,
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      className={cn(
        'py-8 sm:py-12 border-t-3 border-ink first-of-type:border-t-0 first-of-type:pt-4 sm:first-of-type:pt-6',
        className,
      )}
      {...rest}
    >
      {(title || eyebrow || trailing) && (
        <div className="flex flex-col gap-3 mb-6 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-4 sm:mb-8">
          <div className="min-w-0">
            {kicker && (
              <span className="inline-block bg-ink text-paper px-2 py-[2px] font-mono text-xs uppercase tracking-widest">
                {kicker}
              </span>
            )}
            {eyebrow && (
              <div className="font-mono text-[13px] uppercase tracking-[0.12em] text-muted mb-2 mt-2">
                {eyebrow}
              </div>
            )}
            {title && <Heading level={2}>{title}</Heading>}
          </div>
          {trailing}
        </div>
      )}
      {children}
    </section>
  )
}
