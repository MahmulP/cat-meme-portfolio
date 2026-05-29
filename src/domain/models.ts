export type Slug = string

export interface Profile {
  fullName: string
  handle: string
  role: string
  location: string
  pronouns?: string
  tagline: string
  shortBio: string
  longBio: string[]
  values: string[]
  skills: SkillGroup[]
  memeMode: boolean
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface EducationEntry {
  school: string
  degree: string
  field: string
  location: string
  status?: 'current' | 'completed'
  highlights: string[]
}

export interface ExperienceEntry {
  company: string
  role: string
  start: string
  end: string | 'Present'
  location: string
  summary: string
  note?: string
}

export interface TrainingEntry {
  org: string
  program: string
  start: string
  end: string
  location: string
  summary: string
}

export interface CertificationEntry {
  title: string
  issuer: string
  year: number
}

export interface ProjectLinks {
  live?: string
  repo?: string
  caseStudy?: string
}

export interface Project {
  slug: Slug
  title: string
  summary: string
  description: string
  role: string
  year: number
  stack: string[]
  links: ProjectLinks
  cover?: string
  tags: string[]
  featured: boolean
}

export type ContactKind =
  | 'email'
  | 'phone'
  | 'website'
  | 'github'
  | 'linkedin'
  | 'cv'
  | 'other'

export interface ContactLink {
  kind: ContactKind
  label: string
  value: string
  href: string
}
