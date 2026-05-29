import type { HTMLAttributes } from 'react'
import { cn } from '@lib/cn'

export function Page({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <main
      className={cn(
        'mx-auto w-full max-w-[1200px] px-4 py-6 sm:px-6 sm:py-8',
        className,
      )}
      {...rest}
    />
  )
}
