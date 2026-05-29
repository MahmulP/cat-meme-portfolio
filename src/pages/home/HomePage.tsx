import { Link } from 'react-router-dom'
import {
  getFeaturedProjects,
  getProfile,
} from '@application/selectors'
import { Page, Section, Stack, Grid } from '@components/layout'
import { Button, Heading, Tag, Card } from '@components/primitives'
import {
  CatSmug,
  CatSurprised,
  CatSleepy,
  MemeSticker,
} from '@components/meme'
import { HeroSceneLazy } from '@components/three'
import { ProjectCard } from '@features/project-card'

export default function HomePage() {
  const profile = getProfile()
  const featured = getFeaturedProjects()

  return (
    <Page>
      {/* HERO */}
      <Section className="!border-t-0 !pt-2 sm:!pt-4">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Stack gap={5} className="order-2 lg:order-1">
            <span className="inline-block self-start bg-accent-2-soft text-ink border-2 border-ink px-2 py-[2px] font-mono text-xs uppercase tracking-widest shadow-brutal">
              {profile.role}
            </span>
            <Heading level={1}>
              {profile.fullName.split(' ').map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </Heading>
            <p className="text-lg sm:text-xl leading-relaxed max-w-2xl">
              {profile.tagline}
            </p>
            <Stack direction="row" gap={3}>
              <Button
                as="link"
                to="/projects"
                variant="primary"
                size="lg"
                className="grow sm:grow-0"
              >
                See projects
              </Button>
              <Button
                as="link"
                to="/contact"
                variant="secondary"
                size="lg"
                className="grow sm:grow-0"
              >
                Say hi
              </Button>
            </Stack>
            <Stack direction="row" gap={2}>
              <Tag variant="alt3">{profile.location}</Tag>
              {profile.pronouns && <Tag variant="muted">{profile.pronouns}</Tag>}
            </Stack>
          </Stack>

          {/* 3D / static fallback panel */}
          <div className="relative order-1 lg:order-2 mx-auto w-full max-w-[480px]">
            <div className="aspect-square w-full border-3 border-ink rounded-md bg-surface shadow-brutal overflow-hidden">
              <HeroSceneLazy />
            </div>
            <span
              aria-hidden="true"
              className="absolute -top-3 -left-1 sm:-left-3 inline-block bg-ink text-paper px-2 py-1 font-mono text-[10px] sm:text-xs uppercase tracking-widest"
            >
              hover or click · oiia oiia
            </span>
          </div>
        </div>
      </Section>

      {/* MEME STRIP */}
      <Section
        kicker="vibes"
        title="Built with caffeine and cat memes"
        eyebrow="Pinned to the office wall"
      >
        <div className="flex flex-wrap items-start justify-center gap-6 sm:gap-8">
          <MemeSticker caption="Pushed to prod on Friday" rotate="left">
            <CatSmug className="w-24 h-24 sm:w-32 sm:h-32" />
          </MemeSticker>
          <MemeSticker caption="Saw the legacy schema" rotate="right">
            <CatSurprised className="w-24 h-24 sm:w-32 sm:h-32" />
          </MemeSticker>
          <MemeSticker caption="It's 2am, the build passed" rotate="left">
            <CatSleepy className="w-24 h-24 sm:w-32 sm:h-32" />
          </MemeSticker>
        </div>
      </Section>

      {/* FEATURED PROJECTS */}
      <Section
        kicker="work"
        title="Featured projects"
        trailing={
          <Link
            to="/projects"
            className="font-display text-sm uppercase tracking-wider self-start"
          >
            View all →
          </Link>
        }
      >
        <Grid cols={3}>
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} tilt={i % 2 === 1} />
          ))}
        </Grid>
      </Section>

      {/* SHORT BIO PREVIEW */}
      <Section kicker="who" title="Quick intro">
        <Card accent="accent" className="text-base sm:text-lg leading-relaxed">
          {profile.shortBio}
        </Card>
        <div className="mt-6">
          <Button as="link" to="/about" variant="secondary">
            Read the long version
          </Button>
        </div>
      </Section>
    </Page>
  )
}
