import { Button } from '@/components/ui'
import DocumentLineIcon from '@/assets/images/svg/document-line.svg'
import Image from 'next/image'
import { ArrowRightUpIcon } from '@/components/shared'
import MilestoneApprovedStatus from '@/assets/images/png/milestone-approved-status.png'
import MilestoneInReviewStatus from '@/assets/images/png/milestone-review-status.png'
import MilestoneLockedStatus from '@/assets/images/png/milestone-locked-status.png'
import MilestoneLine from '@/assets/images/svg/milestone-line.svg'
import { cn } from '@/utils'

enum MilestoneStatus {
  Approved = 'approved',
  Locked = 'locked',
  InReview = 'in review',
  Rejected = 'rejected',
}

export const statusText = {
  [MilestoneStatus.Approved]: 'Approved',
  [MilestoneStatus.Locked]: 'Locked',
  [MilestoneStatus.InReview]: 'In Review',
  [MilestoneStatus.Rejected]: 'Rejected',
}

export const statusColor = {
  [MilestoneStatus.Approved]: {
    backgroundColor: '#97C236',
    textColor: '#fff',
  },
  [MilestoneStatus.Locked]: {
    backgroundColor: '#8A8A8A',
    textColor: '#fff',
  },
  [MilestoneStatus.InReview]: {
    backgroundColor: '#FFC70F',
    textColor: '#000',
  },
  [MilestoneStatus.Rejected]: {
    backgroundColor: '#C24736',
    textColor: '#fff',
  },
}

const statusImage = {
  [MilestoneStatus.Approved]: MilestoneApprovedStatus,
  [MilestoneStatus.Locked]: MilestoneLockedStatus,
  [MilestoneStatus.InReview]: MilestoneInReviewStatus,
  [MilestoneStatus.Rejected]: MilestoneLockedStatus,
}

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
  status: MilestoneStatus
  reward: string
  reviewDate: string
  hideProgress?: boolean
}) => {
  const grayOutProgress =
    status === MilestoneStatus.Locked || status === MilestoneStatus.Rejected
  return (
    <div className="flex gap-5 overflow-hidden">
      <div className="relative h-full">
        <Image
          src={statusImage[status]}
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
            <div
              style={{
                backgroundColor: statusColor[status].backgroundColor,
                color: statusColor[status].textColor,
              }}
              className="flex items-center justify-center rounded-[20px] px-3 py-1"
            >
              <p className="text-xs font-bold">{statusText[status]}</p>
            </div>
            <p className="text-sm">
              {reward} SBEE ● {reviewDate}
            </p>
          </div>
          {status === MilestoneStatus.InReview && (
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
          )}
          {status === MilestoneStatus.Rejected && (
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
          {status === MilestoneStatus.Approved && (
            <Button
              variant="light"
              startContent={
                <Image src={DocumentLineIcon} alt="document lined icon" />
              }
              endContent={
                <ArrowRightUpIcon className="text-base text-black/10" />
              }
            >
              View submission
            </Button>
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
        status={MilestoneStatus.Approved}
        reward="100k"
        reviewDate="Due 21st Oct 2021"
      />
      <MilestoneItem
        order={2}
        title="Milestone 1"
        description="Lorem ipsum dolor sit amet consectetur. Diam dapibus fermentum in sit ullamcorper tempor. Mauris id odio amet augue at cras placerat. Orci id sagittis a amet enim. Sollicitudin elit ullamcorper viverra quis eleifend urna porta eu egestas. Consectetur quis ultricies congue non nunc urna diam fermentum amet. Velit urna nec cursus id. Malesuada ac senectus blandit orci. Learn more"
        status={MilestoneStatus.InReview}
        reward="100k"
        reviewDate="Due 21st Oct 2021"
      />
      <MilestoneItem
        order={3}
        title="Milestone 3"
        description="Lorem ipsum dolor sit amet consectetur. Diam dapibus fermentum in sit ullamcorper tempor. Mauris id odio amet augue at cras placerat. Orci id sagittis a amet enim. Sollicitudin elit ullamcorper viverra quis eleifend urna porta eu egestas. Consectetur quis ultricies congue non nunc urna diam fermentum amet. Velit urna nec cursus id. Malesuada ac senectus blandit orci. Learn more"
        status={MilestoneStatus.Rejected}
        reward="100k"
        reviewDate="Due 21st Oct 2021"
      />
      <MilestoneItem
        order={4}
        hideProgress
        title="Milestone 4"
        description="Lorem ipsum dolor sit amet consectetur. Diam dapibus fermentum in sit ullamcorper tempor. Mauris id odio amet augue at cras placerat. Orci id sagittis a amet enim. Sollicitudin elit ullamcorper viverra quis eleifend urna porta eu egestas. Consectetur quis ultricies congue non nunc urna diam fermentum amet. Velit urna nec cursus id. Malesuada ac senectus blandit orci. Learn more"
        status={MilestoneStatus.Locked}
        reward="100k"
        reviewDate="Due 21st Oct 2021"
      />
    </div>
  )
}
