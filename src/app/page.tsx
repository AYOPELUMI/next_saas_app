import CompanionCard from '@/components/companionCard'
import CompanionList from '@/components/companionList'
import CTA from '@/components/cta'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>Popular Companion</h1>

      <section className='home-section'>
        <CompanionCard
          id="123"
          name="Countsy the number wizard"
          topic="Derivatives & Integrals"
          subject="science"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard
          id="456"
          name="Countsy the number wizard"
          topic="Derivatives & Integrals"
          subject="science"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard
          id="789"
          name="Countsy the number wizard"
          topic="Derivatives & Integrals"
          subject="science"
          duration={30}
          color="#e5d0ff"
        />

      </section>
      <section className='home-section'>
        <CompanionList
          title="Recent Completed sassion"
          companions={recentSessions}
          className="w-2/3 max-lg:w-full" />
        <CTA />
      </section>
    </main>
  )
}

export default Page