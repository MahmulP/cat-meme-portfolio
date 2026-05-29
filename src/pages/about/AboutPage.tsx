import {
  getCertifications,
  getExperience,
  getProfile,
  getTraining,
} from '@application/selectors'
import { Page, Section, Stack, Grid } from '@components/layout'
import { Card, Heading, Tag } from '@components/primitives'
import { formatRange } from '@lib/formatDate'

export default function AboutPage() {
  const profile = getProfile()
  const experience = getExperience()
  const training = getTraining()
  const certifications = getCertifications()

  return (
    <Page>
      <Section
        kicker="about"
        title="The longer version"
        eyebrow={`${profile.fullName} — ${profile.location}`}
      >
        <Stack gap={5} className="max-w-3xl">
          {profile.longBio.map((paragraph, i) => (
            <p key={i} className="text-base sm:text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </Stack>
      </Section>

      <Section kicker="how" title="How I work">
        <Grid cols={2}>
          {profile.values.map((v, i) => (
            <Card
              key={v}
              accent={
                i % 3 === 0 ? 'accent' : i % 3 === 1 ? 'accent-2' : 'accent-3'
              }
              className="text-base sm:text-lg"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-ink/70 block mb-2">
                rule {String(i + 1).padStart(2, '0')}
              </span>
              {v}
            </Card>
          ))}
        </Grid>
      </Section>

      <Section kicker="stack" title="What I work with">
        <Grid cols={3}>
          {profile.skills.map((g) => (
            <Card key={g.label}>
              <Heading level={4} className="mb-3">
                {g.label}
              </Heading>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section kicker="work" title="Experience">
        <Stack gap={5}>
          {experience.map((e, i) => (
            <Card key={`${e.company}-${e.role}-${i}`}>
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-3 mb-3">
                <div className="min-w-0">
                  <Heading level={3}>{e.role}</Heading>
                  <p className="font-mono text-sm text-ink/80 mt-1 break-words">
                    {e.company} · {e.location}
                  </p>
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  {formatRange(e.start, e.end)}
                </span>
              </div>
              <p className="text-base leading-relaxed">{e.summary}</p>
              {e.note && (
                <p className="mt-3 font-mono text-xs text-muted border-t-2 border-ink/20 pt-2">
                  {e.note}
                </p>
              )}
            </Card>
          ))}
        </Stack>
      </Section>

      <Section kicker="training" title="Training">
        <Grid cols={2}>
          {training.map((t) => (
            <Card key={`${t.org}-${t.program}`}>
              <Heading level={4}>{t.program}</Heading>
              <p className="font-mono text-sm text-ink/80 mt-1 mb-3 break-words">
                {t.org} · {t.location}
              </p>
              <p className="text-base leading-relaxed">{t.summary}</p>
              <span className="block mt-3 font-mono text-xs uppercase tracking-widest text-muted">
                {formatRange(t.start, t.end)}
              </span>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section kicker="cert" title="Certifications">
        <Grid cols={3}>
          {certifications.map((c) => (
            <Card key={`${c.title}-${c.year}`} className="text-base">
              <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-1">
                {c.year}
              </span>
              <p className="font-display uppercase leading-tight mb-1 text-base break-words">
                {c.title}
              </p>
              <p className="text-sm text-ink/80">{c.issuer}</p>
            </Card>
          ))}
        </Grid>
      </Section>
    </Page>
  )
}
