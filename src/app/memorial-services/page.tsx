import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function MemorialSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function MemorialDetail({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

function EmbeddedMap({
  title,
  src,
}: {
  title: string
  src: string
}) {
  return (
    <div className="mt-6 w-full max-w-3xl overflow-hidden rounded-2xl border border-zinc-100 dark:border-zinc-700/40">
      <iframe
        title={title}
        src={src}
        className="h-72 w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Memorial Services',
  description:
    'Service information, locations, and updates for the memorial gathering.',
}

export default function MemorialServices() {
  return (
    <SimpleLayout
      title="Memorial Service Details"
      intro="Thank you to everyone for your support, prayers, and kindness during this difficult time. We are deeply grateful for everyone who has reached out and for all those planning to attend."
    >
      <div className="space-y-20">
        <MemorialSection title="Service information">
          <MemorialDetail title="Funeral service">
            Services will be held on <strong>Friday, March 6 at 10:00 AM</strong>{' '}
            at <strong>St. Thomas More</strong>, 8501 Calumet Ave., Munster, IN.
            Guests may arrive as early as <strong>9:15 AM</strong>.
          </MemorialDetail>
          <MemorialDetail
            title="Church directions"
            href="https://maps.app.goo.gl/FhveGjHvC1CX1mQU6?g_st=ic"
          >
            If you are traveling from out of town or are unfamiliar with the
            area, use the map link for turn-by-turn directions to the church.
            <EmbeddedMap
              title="St. Thomas More map"
              src="https://www.google.com/maps?q=8501+Calumet+Ave,+Munster,+IN&output=embed"
            />
          </MemorialDetail>
        </MemorialSection>

        <MemorialSection title="After-service gathering">
          <MemorialDetail title="Memorial luncheon">
            A memorial luncheon will follow the church service at the Munster
            Community Park Social Center, 8751 Lions Club Dr, Munster, IN
            46321. Family and friends are warmly invited to share a meal,
            stories, and support.
          </MemorialDetail>
          <MemorialDetail
            title="Luncheon directions"
            href="https://maps.app.goo.gl/XD3Vq2STrjiKdFH19?g_st=ic"
          >
            Please use this map link to navigate directly to the social center
            after the service.
            <EmbeddedMap
              title="Munster Community Park Social Center map"
              src="https://www.google.com/maps?q=8751+Lions+Club+Dr,+Munster,+IN+46321&output=embed"
            />
          </MemorialDetail>
        </MemorialSection>

        <MemorialSection title="Updates and family notes">
            <MemorialDetail title="Additional arrangements">
            Additional details and arrangements are still being finalized.
            We will share updates as soon as plans are confirmed. Your patience
            and understanding mean a great deal to our family.
            </MemorialDetail>
          <MemorialDetail title="A note of gratitude">
            In a moment like this, every message, prayer, and act of kindness
            has helped carry us forward. Thank you for keeping our loved one in
            your thoughts and for standing with us in remembrance.
          </MemorialDetail>
        </MemorialSection>
      </div>
    </SimpleLayout>
  )
}
