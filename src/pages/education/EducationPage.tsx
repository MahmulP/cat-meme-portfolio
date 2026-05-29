import { getEducation } from '@application/selectors'
import { Page, Section, Stack } from '@components/layout'
import { Card, Heading, Tag } from '@components/primitives'

export default function EducationPage() {
  const education = getEducation()

  return (
    <Page>
      <Section
        kicker="learn"
        title="Education"
        eyebrow="Where I picked things up — formally"
      >
        <Stack gap={5}>
          {education.map((e, i) => (
            <Card
              key={`${e.school}-${i}`}
              accent={i === 0 ? 'accent' : undefined}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-3 mb-3">
                <div className="min-w-0">
                  <Heading level={3}>{e.school}</Heading>
                  <p className="font-mono text-sm mt-1 text-ink/80 break-words">
                    {e.location}
                  </p>
                </div>
                {e.status === 'current' && (
                  <Tag variant="alt2">Currently pursuing</Tag>
                )}
              </div>
              <p className="text-base sm:text-lg mb-1 break-words">{e.degree}</p>
              <p className="font-mono text-sm text-ink/80 mb-4">{e.field}</p>
              <ul className="list-disc list-outside pl-5 space-y-1 text-base leading-relaxed">
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </Card>
          ))}
        </Stack>
      </Section>
    </Page>
  )
}
