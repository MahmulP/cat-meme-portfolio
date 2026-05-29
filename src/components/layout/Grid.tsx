import type { HTMLAttributes } from 'react'
import { cn } from '@lib/cn'

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: 2 | 3 | 'auto'
}

const cols: Record<NonNullable<GridProps['cols']>, string> = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  auto: 'grid-cols-[repeat(auto-fill,minmax(280px,1fr))]',
}

export function Grid({ cols: c = 'auto', className, ...rest }: GridProps) {
  return (
    <div className={cn('grid gap-5', cols[c], className)} {...rest} />
  )
}
