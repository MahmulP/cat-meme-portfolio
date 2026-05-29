import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { BrandMark } from '@components/meme'
import { cn } from '@lib/cn'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/education', label: 'Education' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const [lastPath, setLastPath] = useState(location.pathname)

  // Auto-close on route change. Compare-and-set inside render is the React
  // pattern for derived state (https://react.dev/reference/react/useState#storing-information-from-previous-renders).
  if (lastPath !== location.pathname) {
    setLastPath(location.pathname)
    if (open) setOpen(false)
  }

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 mx-auto w-full max-w-[1200px] border-b-3 border-ink bg-paper"
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link
          to="/"
          aria-label="Home"
          className="group inline-flex items-center gap-2 sm:gap-3 font-display uppercase tracking-wide no-underline text-ink text-sm sm:text-lg min-w-0"
        >
          <span
            aria-hidden="true"
            className="grid place-items-center w-9 h-9 border-2 border-ink bg-accent rounded-sm shadow-[2px_2px_0_0_var(--color-ink)] transition-transform duration-200 ease-out group-hover:-rotate-6 shrink-0"
          >
            <BrandMark className="w-6 h-6 text-ink" />
          </span>
          <span className="truncate">Machmul Pratama</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-2">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                cn(
                  'inline-flex items-center px-3 py-2 font-display text-sm uppercase tracking-wider rounded-sm border-2 border-transparent transition-colors duration-150 no-underline',
                  isActive
                    ? 'bg-ink text-paper border-ink'
                    : 'text-ink hover:bg-accent-3-soft hover:border-ink',
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="primary-mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="md:hidden grid place-items-center w-10 h-10 border-3 border-ink rounded-sm bg-surface shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-none transition-[transform,box-shadow]"
        >
          <span aria-hidden="true" className="relative block w-5 h-4">
            <span
              className={cn(
                'absolute left-0 right-0 h-[3px] bg-ink rounded-sm transition-all duration-200',
                open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0',
              )}
            />
            <span
              className={cn(
                'absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[3px] bg-ink rounded-sm transition-opacity duration-150',
                open && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'absolute left-0 right-0 h-[3px] bg-ink rounded-sm transition-all duration-200',
                open
                  ? 'top-1/2 -translate-y-1/2 -rotate-45'
                  : 'bottom-0',
              )}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="primary-mobile-menu"
        className={cn(
          'md:hidden overflow-hidden border-t-3 border-ink transition-[max-height] duration-200 ease-out',
          open ? 'max-h-[480px]' : 'max-h-0 border-t-0',
        )}
      >
        <ul className="flex flex-col p-4 gap-2 bg-paper">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'flex items-center px-4 py-3 font-display text-base uppercase tracking-wider rounded-sm border-2 no-underline transition-colors duration-150',
                    isActive
                      ? 'bg-ink text-paper border-ink'
                      : 'text-ink border-transparent hover:bg-accent-3-soft hover:border-ink',
                  )
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
