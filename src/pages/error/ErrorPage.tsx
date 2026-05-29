import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom'
import { Page, Section, Stack } from '@components/layout'
import { Button, Card, Heading } from '@components/primitives'
import { CatSurprised, MemeSticker } from '@components/meme'
import NotFoundPage from '@pages/not-found/NotFoundPage'

const QUIPS = [
  'The cat unplugged the server again.',
  'Stack trace, but make it fashion.',
  'Schrödinger`s page: both there and not there.',
  'Knocked the data off the table.',
  'Broke prod. Took a nap. Will not apologize.',
]

function pickQuip() {
  return QUIPS[Math.floor(Math.random() * QUIPS.length)]
}

export default function ErrorPage() {
  const error = useRouteError()
  const navigate = useNavigate()

  // Treat 404 specially — render the dedicated NotFoundPage instead.
  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFoundPage />
  }

  // Pull a status code + headline based on the error shape.
  const status = isRouteErrorResponse(error) ? error.status : 500
  const headline = isRouteErrorResponse(error)
    ? error.statusText || 'Something broke.'
    : 'Something broke.'

  // Detail text: if it's a regular Error, surface its message. Otherwise, a
  // generic line. We never dump full stacks to users — that's noise (and risk).
  const detail =
    error instanceof Error
      ? error.message
      : isRouteErrorResponse(error) && typeof error.data === 'string'
        ? error.data
        : 'No extra context. The cat refuses to comment.'

  return (
    <Page>
      <Section className="!border-t-0">
        <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Stack gap={5}>
            <span className="inline-block self-start bg-accent-2-soft border-2 border-ink px-2 py-[2px] font-mono text-xs uppercase tracking-widest">
              error · {status}
            </span>
            <Heading level={1}>{headline}</Heading>
            <p className="text-base sm:text-lg max-w-xl">{pickQuip()}</p>

            <Card className="max-w-xl">
              <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-2">
                what we know
              </span>
              <p className="font-mono text-sm leading-relaxed text-ink/90 break-words">
                {detail}
              </p>
            </Card>

            <Stack direction="row" gap={3}>
              <Button
                onClick={() => window.location.reload()}
                variant="primary"
                className="grow sm:grow-0"
              >
                Try again
              </Button>
              <Button
                onClick={() => navigate(-1)}
                variant="secondary"
                className="grow sm:grow-0"
              >
                Go back
              </Button>
              <Button
                as="link"
                to="/"
                variant="secondary"
                className="grow sm:grow-0"
              >
                Home
              </Button>
            </Stack>
          </Stack>

          <div className="grid place-items-center">
            <MemeSticker caption={`HTTP ${status} cat`} rotate="left">
              <CatSurprised className="w-32 h-32 sm:w-40 sm:h-40" />
            </MemeSticker>
          </div>
        </div>
      </Section>
    </Page>
  )
}
