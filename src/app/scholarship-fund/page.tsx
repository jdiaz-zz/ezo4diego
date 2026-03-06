import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'Scholarship Information Coming Soon',
  description: 'We’re working on providing details about our scholarship fund. Please check back soon for updates and more information.',
}

export default function ScholarshipFund() {
  return (
    <SimpleLayout
      title="Scholarship Information Coming Soon"
      intro="We’re working on providing details about our scholarship fund. Please check back soon for updates and more information."
    />
  )
}
