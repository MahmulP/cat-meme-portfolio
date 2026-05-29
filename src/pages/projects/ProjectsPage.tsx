import { useMemo, useState } from 'react'
import { getAllTags, getProjects } from '@application/selectors'
import { Page, Section, Stack, Grid } from '@components/layout'
import { Tag } from '@components/primitives'
import { ProjectCard } from '@features/project-card'
import { cn } from '@lib/cn'

export default function ProjectsPage() {
  const all = getProjects()
  const tags = getAllTags()
  const [active, setActive] = useState<string | null>(null)

  const filtered = useMemo(() => {
    if (!active) return all
    return all.filter((p) => p.tags.includes(active))
  }, [all, active])

  return (
    <Page>
      <Section
        kicker="work"
        title="Projects"
        eyebrow="Stuff I built, broke, and shipped"
      >
        <Stack gap={5}>
          {/* Filter pills — horizontal scroll on phones, wrap on tablet+ */}
          <div className="-mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex gap-2 overflow-x-auto sm:flex-wrap sm:overflow-visible pb-1 sm:pb-0">
              <button
                type="button"
                onClick={() => setActive(null)}
                className={cn(
                  'inline-flex items-center px-2 py-[2px] border-2 border-ink rounded-sm font-mono text-[13px] tracking-wide uppercase cursor-pointer shrink-0',
                  active === null ? 'bg-ink text-paper' : 'bg-surface text-ink',
                )}
              >
                All
              </button>
              {tags.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setActive(t === active ? null : t)}
                  className={cn(
                    'inline-flex items-center px-2 py-[2px] border-2 border-ink rounded-sm font-mono text-[13px] tracking-wide uppercase cursor-pointer transition-colors shrink-0',
                    active === t
                      ? 'bg-ink text-paper'
                      : 'bg-surface text-ink hover:bg-accent-soft',
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <Grid cols={3}>
            {filtered.map((p, i) => (
              <ProjectCard key={p.slug} project={p} tilt={i % 3 === 1} />
            ))}
          </Grid>

          {filtered.length === 0 && (
            <Tag variant="muted">No projects match this tag — yet.</Tag>
          )}
        </Stack>
      </Section>
    </Page>
  )
}
