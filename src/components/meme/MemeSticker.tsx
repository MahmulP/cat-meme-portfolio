import type { ReactNode } from 'react'
import { cn } from '@lib/cn'

export interface MemeStickerProps {
  caption: string
  children: ReactNode
  rotate?: 'left' | 'right' | 'none'
  tape?: boolean
  className?: string
}

export function MemeSticker({
  caption,
  children,
  rotate = 'left',
  tape = true,
  className,
}: MemeStickerProps) {
  return (
    <div
      className={cn(
        'relative inline-flex flex-col gap-2 p-3 bg-surface border-3 border-ink rounded-sm shadow-brutal transition-[transform,box-shadow] duration-200 ease-out hover:shadow-brutal-lg hover:-translate-x-[2px] hover:-translate-y-[2px]',
        rotate === 'left' && '-rotate-2 hover:rotate-0',
        rotate === 'right' && 'rotate-2 hover:rotate-0',
        className,
      )}
    >
      {tape && (
        <span
          aria-hidden="true"
          className="absolute -top-3 left-1/2 -translate-x-1/2 -rotate-3 w-16 h-[18px] bg-accent-3 border-2 border-ink rounded-[2px] shadow-[2px_2px_0_0_var(--color-ink)]"
        />
      )}
      <div className="bg-paper border-2 border-ink p-3 grid place-items-center">
        {children}
      </div>
      <p className="text-center font-display uppercase text-sm tracking-wide leading-tight text-ink">
        {caption}
      </p>
    </div>
  )
}
