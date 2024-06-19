import { MILESTONES } from '@/types'
import Image from 'next/image'

export const MilestoneDescription = () => {
  return (
    <div className="flex gap-5 rounded-2xl border border-[#1D1C1D]/10 bg-[#FFC70F]/10 px-5 py-6">
      <Image
        src={MILESTONES.statusImage[MILESTONES.MilestoneStatus.InReview]}
        alt="status image"
        className="h-[73px] w-[85px]"
      />
      <div className="flex flex-col gap-3">
        <p className="flex items-center gap-3 font-bold">
          <span className="text-lg font-normal text-co-text-yellow-2">#4</span>{' '}
          Lorem ipsum lopsum
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Diam dapibus fermentum in sit
          ullamcorper tempor. Mauris id odio amet augue at cras placerat. Orci
          id sagittis a amet enim. Sollicitudin elit ullamcorper viverra quis
          eleifend urna porta eu egestas. Consectetur quis ultricies congue non
          nunc urna diam fermentum amet. Velit urna nec cursus id. Malesuada ac
          senectus blandit orci. Learn more
        </p>
      </div>
    </div>
  )
}
