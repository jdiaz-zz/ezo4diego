import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'The Ezo4Diego Scholarship Fund',
  description: 'Education opens doors, builds futures, and creates lasting impact—not just for one person, but for entire families and communities. The Ezo4Diego Scholarship Fund was created with that spirit in mind: to support a promising student&apos;s journey through school while laying the foundation for something even greater.',
}

export default function ScholarshipFund() {
  return (
    <SimpleLayout
      title="The Ezo4Diego Scholarship Fund"
      intro="Education opens doors, builds futures, and creates lasting impact—not just for one person, but for entire families and communities. The Ezo4Diego Scholarship Fund was created with that spirit in mind: to support a promising student's journey through school while laying the foundation for something even greater."
    >
      <div className="prose prose-sm max-w-2xl">

      <h3>About Diego</h3>
      <p>
        Diego is Manuel's youngest son and a hardworking sophomore at Ball State. Manuel made a promise to help Diego finish college, and together we're asking for a little help from friends, family, and the community to keep that promise.
      </p>

      <h3>What We Hope To Do</h3>
      <p>
        Our immediate goal is to make sure Diego can focus on his studies without financial worry. Beyond that, we want to create a small fund that can someday provide an annual scholarship to support other young Latino students pursuing higher education.
      </p>

      <h3>What We Need</h3>
      <p>
        To reach these goals, we estimate needing about $50,000–$60,000 in total. Roughly $22,000 is expected to cover Diego's remaining needs (not counting his federal aid) through graduation. Any remaining funds would be placed in an interest-bearing account so the interest can fund future scholarships.
      </p>

      <h3>Where We Are Now</h3>
      <p>
        Thanks to early generosity, we've raised $10,239.00 as of 03/28/2025. Every gift — big or small — brings us closer and means a lot to the family.
      </p>

      <h3>How You Can Help</h3>
      <p>
        If you'd like to support Diego and the scholarship fund, the easiest way is via Zelle. Your support helps keep a promise and opens doors for students who need a hand to get there.
      </p>
      <ul>
        <li>Zelle Tag: Ezo4Diego</li>
        <li>Zelle identifier: ezo4diego@gmail.com</li>
      </ul>

      <h3>Details</h3>
      <ul>
        <li>Ezo4Diego, LLC hosts the scholarship fund.</li>
        <li>The scholarship account is with Bank of America.</li>
        <li>Learn more: <a href="https://www.ezo4diego.org" className="text-blue-600">www.ezo4diego.org</a></li>
      </ul>

      <h3>A Personal Thank You</h3>
      <p>
        From the bottom of our hearts: thank you. Your generosity helps a student finish school and helps build a brighter future for others who follow.
      </p>
      </div>
    </SimpleLayout>

  )
}
