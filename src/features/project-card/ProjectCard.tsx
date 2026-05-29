import { Link } from 'react-router-dom'
import type { Project } from '@domain/index'
import { Card, Heading, Tag } from '@components/primitives'

interface ProjectCardProps {
  project: Project
  tilt?: boolean
}

export function ProjectCard({ project, tilt }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="block no-underline"
      aria-label={`Open ${project.title}`}
    >
      <Card
        interactive
        tilt={tilt}
        className="flex h-full flex-col gap-4"
      >
        <div className="flex items-baseline justify-between gap-3">
          <Heading level={3}>{project.title}</Heading>
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            {project.year}
          </span>
        </div>
        <p className="text-base leading-relaxed text-ink/90">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.stack.slice(0, 4).map((s) => (
            <Tag key={s} variant="default">
              {s}
            </Tag>
          ))}
          {project.stack.length > 4 && (
            <Tag variant="muted">+{project.stack.length - 4}</Tag>
          )}
        </div>
      </Card>
    </Link>
  )
}
