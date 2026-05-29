import type { ContactLink } from '@domain/index'

export const contactLinks: ContactLink[] = [
  {
    kind: 'email',
    label: 'Work email',
    value: 'contact@mahmulp.dev',
    href: 'mailto:contact@mahmulp.dev',
  },
  {
    kind: 'email',
    label: 'Personal email',
    value: 'mahmulpratama16@gmail.com',
    href: 'mailto:mahmulpratama16@gmail.com',
  },
  {
    kind: 'website',
    label: 'Website',
    value: 'mahmulp.dev',
    href: 'https://mahmulp.dev',
  },
]
