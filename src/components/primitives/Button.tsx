import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
} from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { cn } from '@lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'
type Size = 'sm' | 'md' | 'lg'

interface CommonProps {
  variant?: Variant
  size?: Size
  className?: string
}

type AsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' }

type AsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' }

type AsLink = CommonProps & LinkProps & { as: 'link' }

export type Props = AsButton | AsAnchor | AsLink

const base =
  'inline-flex items-center justify-center gap-2 border-3 border-ink rounded-sm shadow-brutal font-display uppercase tracking-wide text-ink no-underline cursor-pointer select-none whitespace-nowrap transition-[transform,box-shadow] duration-200 ease-out hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal-lg active:translate-x-[4px] active:translate-y-[4px] active:shadow-brutal-none disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-x-0 disabled:translate-y-0 disabled:shadow-brutal'

const variants: Record<Variant, string> = {
  primary: 'bg-accent',
  secondary: 'bg-surface',
  ghost: 'bg-transparent',
  danger: 'bg-accent-2',
}

const sizes: Record<Size, string> = {
  sm: 'px-3 py-2 text-[13px]',
  md: 'px-5 py-3 text-base',
  lg: 'px-6 py-4 text-lg',
}

const ownPropKeys = ['as', 'variant', 'size', 'className'] as const

function stripOwnProps<T extends object>(props: T): Omit<T, (typeof ownPropKeys)[number]> {
  const out: Record<string, unknown> = {}
  for (const k of Object.keys(props)) {
    if ((ownPropKeys as readonly string[]).includes(k)) continue
    out[k] = (props as Record<string, unknown>)[k]
  }
  return out as Omit<T, (typeof ownPropKeys)[number]>
}

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  Props
>(function Button(props, ref) {
  const classes = cn(
    base,
    variants[props.variant ?? 'secondary'],
    sizes[props.size ?? 'md'],
    props.className,
  )
  const rest = stripOwnProps(props)

  if (props.as === 'a') {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    )
  }

  if (props.as === 'link') {
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        {...(rest as Omit<LinkProps, 'className'>)}
      />
    )
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  )
})
