import { getContactLinks, getProfile } from '@application/selectors'
import { Page, Section, Grid, Stack } from '@components/layout'
import { Button, Card, Heading } from '@components/primitives'
import { CatSurprised, MemeSticker } from '@components/meme'

export default function ContactPage() {
  const links = getContactLinks()
  const profile = getProfile()
  const email =
    links.find(
      (l) => l.kind === 'email' && l.value.endsWith('mahmulp.dev'),
    ) ?? links.find((l) => l.kind === 'email')

  return (
    <Page>
      <Section
        kicker="reach out"
        title="Say hi. Or send memes."
        eyebrow={`Currently in ${profile.location}`}
      >
        <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Stack gap={5}>
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl">
              Best way to reach me is email. I read everything. Replies come
              fast on weekdays, slower on weekends — that's when the cat memes
              are queued.
            </p>

            {email && (
              <Button
                as="a"
                href={email.href}
                variant="primary"
                size="lg"
                className="self-start max-w-full"
              >
                Email me
              </Button>
            )}

            <Grid cols={2}>
              {links.map((l) => (
                <Card key={l.value} interactive>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-1">
                    {l.label}
                  </span>
                  <a
                    href={l.href}
                    target={l.kind === 'website' ? '_blank' : undefined}
                    rel="noreferrer"
                    className="font-display text-base sm:text-lg uppercase tracking-wide break-all"
                  >
                    {l.value}
                  </a>
                </Card>
              ))}
            </Grid>
          </Stack>

          <div className="grid place-items-center">
            <MemeSticker caption="Inbox: zero. For now." rotate="right">
              <CatSurprised className="w-32 h-32 sm:w-40 sm:h-40" />
            </MemeSticker>
          </div>
        </div>
      </Section>

      <Section kicker="legal" title="The fine print">
        <Card className="max-w-2xl">
          <Heading level={4} className="mb-3">
            Heads up
          </Heading>
          <p className="text-base leading-relaxed">
            This site doesn't track you. No analytics, no cookies, no tag
            managers. The only thing it sends is your email when you hit the
            email button — and even that goes through your own client.
          </p>
        </Card>
      </Section>
    </Page>
  )
}
