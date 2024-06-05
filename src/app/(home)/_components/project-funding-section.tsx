import Image, { type StaticImageData } from 'next/image'
import homeSectionImage from '@/assets/images/svg/home-section.svg'
import Link from 'next/link'
import { Button } from '@/components/ui'
import applyForGrant from '@/assets/images/png/apply-for-grant.png'
import exploreProjects from '@/assets/images/png/explore-project.png'
import { routes } from '@/routes'

interface HomeFeatureCardProps {
  title: string
  description: string
  image: StaticImageData
  href: string
  buttonLabel: string
}
const HomeFeatureCard = ({
  title,
  description,
  image,
  href,
  buttonLabel,
}: HomeFeatureCardProps) => {
  return (
    <div className="flex max-w-[395px] flex-col items-center rounded-2xl border border-[#1D1C1D] border-opacity-10 bg-[#F7F4F3] p-8">
      <Image src={image} alt={title} width={100} className="mb-8" />
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-center text-xl font-bold">{title}</h3>
        <p className="text-center text-sm">{description}</p>
        <Link href={href}>
          <Button color="primary" className="rounded-lg shadow-button">
            {buttonLabel}
          </Button>
        </Link>
      </div>
    </div>
  )
}

export const ProjectFundingSection = () => {
  return (
    <section className="z-10 mt-[72px] w-full max-w-[1440px] overflow-hidden pb-10">
      <div className="relative mx-auto w-full">
        <div className="absolute top-0 -z-10 w-full">
          <Image src={homeSectionImage} alt="home section" />
        </div>
      </div>
      <div className="z-20 pt-[900px]">
        <div className="mb-20 flex flex-col items-center">
          <h2 className="mb-8 text-center text-5xl font-bold">
            Get projects funded with
            <br className="m-0" />
            Devpass.
          </h2>
          <p className="mb-6 max-w-[810px] text-center text-lg">
            Explore DevPass, a groundbreaking funding tool that redefines
            project support and validation using the power of blockchain.
            DevPass innovatively integrates NFTs with ERC-20 tokens to create a
            dynamic funding mechanism.
          </p>
        </div>
        <div className="flex w-full flex-row justify-center gap-6">
          <HomeFeatureCard
            title="Unlock Funding with DevPass Grants"
            description="Have an idea? Apply for the resources to bring your vision to life."
            image={applyForGrant}
            href={routes.home}
            buttonLabel="Apply for a grant"
          />
          <HomeFeatureCard
            title="Discover How DevPass is Powering Innovation"
            description="Looking for inspiration? Explore how DevPass is pioneering blockchain innovation."
            image={exploreProjects}
            href={routes.home}
            buttonLabel="Explore projects"
          />
        </div>
      </div>
    </section>
  )
}
