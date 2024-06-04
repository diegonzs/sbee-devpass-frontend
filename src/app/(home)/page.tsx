import React from 'react'
import { FAQsSection } from './_components/faqs'
import { ProjectFundingSection } from './_components/project-funding-section'
import { FeaturesSection } from './_components/features-section'
import { PromotionalBanner } from './_components/promotional-banner'

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <section className="relative mt-[72px] flex w-fit">
        <div className="z-10 flex flex-col items-center justify-center">
          <h1 className="mb-6 text-center text-6xl font-bold">
            $SBEE DevPass:
            <br className="m-0" />
            From Ideas to Impact
          </h1>
          <p className="mb-6 max-w-[618px] text-center text-lg">
            Combine your love for memes and creating to drive impactful change
            in the blockchain space. Join us and #Beethemovement towards a
            brighter, more accountable future!
          </p>
        </div>
        <div className="absolute -left-28 -top-4 z-0 h-[558px] w-[558px] rounded-full bg-[#FAE2CC] blur-[300px] filter" />
      </section>
      <ProjectFundingSection />
      <FeaturesSection />
      <PromotionalBanner />
      <FAQsSection />
    </div>
  )
}
