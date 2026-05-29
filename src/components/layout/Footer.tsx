import { getContactLinks, getProfile } from '@application/selectors'

export function Footer() {
  const profile = getProfile()
  const links = getContactLinks()
  const year = new Date().getFullYear()

  return (
    <footer className="mx-auto mt-12 flex max-w-[1200px] flex-col gap-3 border-t-3 border-ink px-4 py-6 sm:px-6 sm:py-8">
      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:flex-wrap">
        <div className="font-mono text-[12px] sm:text-[13px] text-muted">
          © {year} {profile.fullName}. Built with React, Vite, and bad cat memes.
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {links.map((l) => (
            <a
              key={l.value}
              href={l.href}
              target={l.kind === 'website' ? '_blank' : undefined}
              rel="noreferrer"
              className="font-display text-[13px] uppercase tracking-wider"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="font-mono text-[11px] text-muted">
        OIIAIOOOOIAI cat 3D model by{' '}
        <a
          href="https://sketchfab.com/3d-models/oiiaioooooiai-cat-30d27bf7fb224849b76e208a6eccdb36"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Sketchfab
        </a>{' '}
        — used under CC Attribution.
      </div>
    </footer>
  )
}
