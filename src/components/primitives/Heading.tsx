import { type HTMLAttributes, createElement } from 'react'
import { cn } from '@lib/cn'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4
  as?: 'h1' | 'h2' | 'h3' | 'h4'
}

const sizes: Record<NonNullable<HeadingProps['level']>, string> = {
  1: 'text-[clamp(48px,9vw,112px)] tracking-tighter',
  2: 'text-[clamp(32px,5vw,56px)] tracking-tight',
  3: 'text-[clamp(24px,3vw,32px)] tracking-tight',
  4: 'text-xl tracking-wide',
}

export function Heading({
  level = 2,
  as,
  className,
  ...rest
}: HeadingProps) {
  const tag = as ?? (`h${level}` as 'h1' | 'h2' | 'h3' | 'h4')
  return createElement(tag, {
    className: cn(
      'font-display uppercase text-ink leading-[1.05] m-0',
      sizes[level],
      className,
    ),
    ...rest,
  })
}
