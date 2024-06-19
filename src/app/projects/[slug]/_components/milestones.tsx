import { Button } from '@/components/ui'
import DocumentLineIcon from '@/assets/images/svg/document-line.svg'
import Image from 'next/image'
import { ArrowRightUpIcon } from '@/components/shared'
import MilestoneLine from '@/assets/images/svg/milestone-line.svg'
import { cn } from '@/utils'
import { MILESTONES } from '@/types'
import { MilestoneStatusChip } from '@/components/widgets'
import { routes } from '@/routes'
import Link from 'next/link'

const MilestoneItem = ({
  order,
  description,
  title,
  status,
  reward,
  reviewDate,
  hideProgress = false,
}: {
  order: number
  description: string
  title: string
  status: MILESTONES.MilestoneStatus
  reward: string
  reviewDate: string
  hideProgress?: boolean
}) => {
  const grayOutProgress =
    status === MILESTONES.MilestoneStatus.Locked ||
    status === MILESTONES.MilestoneStatus.Rejected
  return (
    <div className="flex gap-5 overflow-hidden">
      <div className="relative h-full">
        <Image
          src={MILESTONES.statusImage[status]}
          alt="milestone approved status"
          width={85}
          height={73}
          className="h-[73px] w-[85px]"
        />
        {!hideProgress && (
          <>
            <Image
              src={MilestoneLine}
              alt="line"
              className={cn(
                'absolute left-[calc(50%_-_3.5px)] top-[90px]',
                grayOutProgress && 'opacity-20',
              )}
            />
            <Image
              src={MilestoneLine}
              alt="line"
              className={cn(
                'absolute left-[calc(50%_-_3.5px)] top-[210px]',
                grayOutProgress && 'opacity-20',
              )}
            />
          </>
        )}
      </div>
      <div className="flex max-w-[680px] flex-col gap-3 pb-14">
        <div className="flex items-center gap-3">
          <span className="text-lg text-co-text-yellow-2">{`#${order}`}</span>
          <h6 className="font-bold">{title}</h6>
        </div>
        <p className="text-sm">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MilestoneStatusChip status={status} />
            <p className="text-sm">
              {reward} SBEE ● {reviewDate}
            </p>
          </div>
          {status === MILESTONES.MilestoneStatus.InReview && (
            <Link href={routes.review('slug')}>
              <Button
                variant="solid"
                color="white"
                startContent={
                  <Image src={DocumentLineIcon} alt="document lined icon" />
                }
                endContent={
                  <ArrowRightUpIcon className="text-base text-black/10" />
                }
              >
                Review & vote
              </Button>
            </Link>
          )}
          {status === MILESTONES.MilestoneStatus.Rejected && (
            <Button
              variant="solid"
              color="white"
              startContent={
                <Image src={DocumentLineIcon} alt="document lined icon" />
              }
            >
              Resubmit Review
            </Button>
          )}
          {status === MILESTONES.MilestoneStatus.Approved && (
            <Link href={routes.review('slug')}>
              <Button
                className="text-black"
                color="ghost"
                startContent={
                  <Image src={DocumentLineIcon} alt="document lined icon" />
                }
                endContent={
                  <ArrowRightUpIcon className="text-base text-black/10" />
                }
              >
                View submission
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export const Milestones = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <MilestoneItem
        order={1}
        title="Milestone 2"
        description="Lorem ipsum dolor sit amet consectetur. Diam dapibus fermentum in sit ullamcorper tempor. Mauris id odio amet augue at cras placerat. Orci id sagittis a amet enim. Sollicitudin elit ullamcorper viverra quis eleifend urna porta eu egestas. Consectetur quis ultricies congue non nunc urna diam fermentum amet. Velit urna nec cursus id. Malesuada ac senectus blandit orci. Learn more"
        status={MILESTONES.MilestoneStatus.Approved}
        reward="100k"
        reviewDate="Due 21st Oct 2021"
      />
      <MilestoneItem
        order={2}
        title="Milestone 1"
        description="Lorem ipsum dolor sit amet consectetur. Diam dapibus fermentum in sit ullamcorper tempor. Mauris id odio amet augue at cras placerat. Orci id sagittis a amet enim. Sollicitudin elit ullamcorper viverra quis eleifend urna porta eu egestas. Consectetur quis ultricies congue non nunc urna diam fermentum amet. Velit urna nec cursus id. Malesuada ac senectus blandit orci. Learn more"
        status={MILESTONES.MilestoneStatus.InReview}
        reward="100k"
        reviewDate="Due 21st Oct 2021"
      />
      <MilestoneItem
        order={3}
        title="Milestone 3"
        description="Lorem ipsum dolor sit amet consectetur. Diam dapibus fermentum in sit ullamcorper tempor. Mauris id odio amet augue at cras placerat. Orci id sagittis a amet enim. Sollicitudin elit ullamcorper viverra quis eleifend urna porta eu egestas. Consectetur quis ultricies congue non nunc urna diam fermentum amet. Velit urna nec cursus id. Malesuada ac senectus blandit orci. Learn more"
        status={MILESTONES.MilestoneStatus.Rejected}
        reward="100k"
        reviewDate="Due 21st Oct 2021"
      />
      <MilestoneItem
        order={4}
        hideProgress
        title="Milestone 4"
        description="Lorem ipsum dolor sit amet consectetur. Diam dapibus fermentum in sit ullamcorper tempor. Mauris id odio amet augue at cras placerat. Orci id sagittis a amet enim. Sollicitudin elit ullamcorper viverra quis eleifend urna porta eu egestas. Consectetur quis ultricies congue non nunc urna diam fermentum amet. Velit urna nec cursus id. Malesuada ac senectus blandit orci. Learn more"
        status={MILESTONES.MilestoneStatus.Locked}
        reward="100k"
        reviewDate="Due 21st Oct 2021"
      />
    </div>
  )
}
