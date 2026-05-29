import { Page, Section, Stack } from '@components/layout'
import { Button, Heading } from '@components/primitives'
import { CatSurprised, MemeSticker } from '@components/meme'

export default function NotFoundPage() {
  return (
    <Page>
      <Section className="!border-t-0">
        <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Stack gap={5}>
            <span className="inline-block self-start bg-accent-2-soft border-2 border-ink px-2 py-[2px] font-mono text-xs uppercase tracking-widest">
              404
            </span>
            <Heading level={1}>Nothing here.</Heading>
            <p className="text-base sm:text-lg max-w-xl">
              The page you wanted didn't exist, or it left without telling
              anyone. Pick one of these instead:
            </p>
            <Stack direction="row" gap={3}>
              <Button as="link" to="/" variant="primary" className="grow sm:grow-0">
                Home
              </Button>
              <Button as="link" to="/projects" variant="secondary" className="grow sm:grow-0">
                Projects
              </Button>
              <Button as="link" to="/contact" variant="secondary" className="grow sm:grow-0">
                Contact
              </Button>
            </Stack>
          </Stack>
          <div className="grid place-items-center">
            <MemeSticker caption="Cat saw the URL too" rotate="left">
              <CatSurprised className="w-32 h-32 sm:w-40 sm:h-40" />
            </MemeSticker>
          </div>
        </div>
      </Section>
    </Page>
  )
}
