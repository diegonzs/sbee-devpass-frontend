import Image from 'next/image'
import lightningIcon from '@/assets/images/svg/lightning.svg'

const PormotionalBannerElement = () => {
  return (
    <div className="flex items-center gap-8">
      <p>Got a project idea? Apply for a grant</p>
      <Image src={lightningIcon} alt="lightning icon" />
    </div>
  )
}

export const PromotionalBanner = () => {
  return (
    <section className="relative flex h-[72px] w-full overflow-hidden bg-black text-[28px] text-white">
      <div className="absolute -left-6 top-0 h-full w-[3000px]">
        <div className="flex h-full items-center gap-8">
          <PormotionalBannerElement />
          <PormotionalBannerElement />
          <PormotionalBannerElement />
        </div>
      </div>
    </section>
  )
}
