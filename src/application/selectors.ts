import type {
  CertificationEntry,
  ContactLink,
  EducationEntry,
  ExperienceEntry,
  Profile,
  Project,
  Slug,
  TrainingEntry,
} from '@domain/index'
import { contactLinks } from '@data/contact'
import { education } from '@data/education'
import {
  certifications,
  experience,
  training,
} from '@data/experience'
import { profile } from '@data/profile'
import { projects } from '@data/projects'

export function getProfile(): Profile {
  return profile
}

export function getEducation(): EducationEntry[] {
  return education
}

export function getExperience(): ExperienceEntry[] {
  return experience
}

export function getTraining(): TrainingEntry[] {
  return training
}

export function getCertifications(): CertificationEntry[] {
  return certifications
}

export function getProjects(): Project[] {
  return projects
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getProjectBySlug(slug: Slug | undefined): Project | undefined {
  if (!slug) return undefined
  return projects.find((p) => p.slug === slug)
}

export function getContactLinks(): ContactLink[] {
  return contactLinks
}

export function getAllTags(): string[] {
  const set = new Set<string>()
  for (const p of projects) for (const t of p.tags) set.add(t)
  return [...set].sort()
}
