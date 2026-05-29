import type { HTMLAttributes } from 'react'
import { cn } from '@lib/cn'

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'col' | 'row'
  gap?: 2 | 3 | 4 | 5 | 6 | 7 | 8
}

const gaps: Record<NonNullable<StackProps['gap']>, string> = {
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  7: 'gap-7',
  8: 'gap-8',
}

export function Stack({
  direction = 'col',
  gap = 4,
  className,
  ...rest
}: StackProps) {
  return (
    <div
      className={cn(
        'flex',
        direction === 'col' ? 'flex-col' : 'flex-row flex-wrap',
        gaps[gap],
        className,
      )}
      {...rest}
    />
  )
}
