import { type HTMLAttributes } from 'react'
import { cn } from '@lib/cn'

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'alt2' | 'alt3' | 'muted'
}

const variants: Record<NonNullable<TagProps['variant']>, string> = {
  default: 'bg-accent text-ink',
  alt2: 'bg-accent-2 text-ink',
  alt3: 'bg-accent-3 text-ink',
  muted: 'bg-surface text-muted',
}

export function Tag({ variant = 'default', className, ...rest }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-[2px] border-2 border-ink rounded-sm font-mono text-[13px] leading-tight tracking-wide whitespace-nowrap',
        variants[variant],
        className,
      )}
      {...rest}
    />
  )
}
