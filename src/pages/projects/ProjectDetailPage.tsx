import { Link, useParams } from 'react-router-dom'
import { getProjectBySlug } from '@application/selectors'
import { Page, Section, Stack } from '@components/layout'
import { Button, Card, Heading, Tag } from '@components/primitives'
import NotFoundPage from '@pages/not-found/NotFoundPage'

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = getProjectBySlug(slug)

  if (!project) return <NotFoundPage />

  return (
    <Page>
      <Section className="!border-t-0 !pt-2 sm:!pt-4">
        <Stack gap={5}>
          <Link
            to="/projects"
            className="font-display text-sm uppercase tracking-wider self-start"
          >
            ← Back to projects
          </Link>
          <span className="inline-block self-start bg-accent-2-soft text-ink border-2 border-ink px-2 py-[2px] font-mono text-xs uppercase tracking-widest shadow-brutal max-w-full break-words">
            {project.role} · {project.year}
          </span>
          <Heading level={1}>{project.title}</Heading>
          <p className="text-lg sm:text-xl leading-relaxed max-w-3xl">
            {project.summary}
          </p>
        </Stack>
      </Section>

      <Section kicker="overview" title="What it is">
        <Card className="max-w-3xl text-base sm:text-lg leading-relaxed">
          {project.description}
        </Card>
      </Section>

      <Section kicker="stack" title="Stack">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </Section>

      {project.tags.length > 0 && (
        <Section kicker="tags" title="Tags">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Tag key={t} variant="alt3">
                {t}
              </Tag>
            ))}
          </div>
        </Section>
      )}

      {(project.links.live ||
        project.links.repo ||
        project.links.caseStudy) && (
        <Section kicker="links" title="Take a look">
          <Stack direction="row" gap={3}>
            {project.links.live && (
              <Button
                as="a"
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                variant="primary"
                className="grow sm:grow-0"
              >
                Live
              </Button>
            )}
            {project.links.repo && (
              <Button
                as="a"
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                className="grow sm:grow-0"
              >
                Repo
              </Button>
            )}
            {project.links.caseStudy && (
              <Button
                as="a"
                href={project.links.caseStudy}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                className="grow sm:grow-0"
              >
                Case study
              </Button>
            )}
          </Stack>
        </Section>
      )}
    </Page>
  )
}
