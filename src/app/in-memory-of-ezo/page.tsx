import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'In Memory of Ezo',
  description: 'This page is currently in the works. More photos and memories will be shared here soon. Please check back later.',
}

export default function InMemoryOfEzo() {
  return (
    <SimpleLayout
      title="In Memory of Ezo"
      intro="This page is currently in the works. More photos and memories will be shared here soon. Please check back later."
    />
  )
}
