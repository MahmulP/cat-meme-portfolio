import { type HTMLAttributes } from 'react'
import { cn } from '@lib/cn'

export function Divider({
  className,
  ...rest
}: HTMLAttributes<HTMLHRElement>) {
  return (
    <hr
      className={cn('border-0 border-t-3 border-ink my-8', className)}
      {...rest}
    />
  )
}
