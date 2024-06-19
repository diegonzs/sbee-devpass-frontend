/* eslint-disable @next/next/no-img-element */
import { Button as Button_ } from '@nextui-org/button'
import Image from 'next/image'
import GithubIcon from '@/assets/images/svg/github.svg'
import { ArrowRightUpIcon, BackArrowIcon } from '@/components/shared'
import { Comments } from './_components/comments'
import { MilestoneHeader } from './_components/milestone-header'
import { MilestoneDescription } from './_components/milestone-description'
import { MilestoneInfoCard } from './_components/milestone-info-card'
import { VotingInfoCard } from './_components/voting-info-card'
import { VoteCard } from './_components/vote-card'
import { ReviewDescription } from './_components/review-description'

const ReviewPage = () => {
  return (
    <div className="mx-auto flex max-w-[786px] flex-col px-5 pt-7 xl:px-0">
      <div className="mb-4 flex">
        <Button_
          isIconOnly
          className="-ml-10 h-12 w-12 rounded-xl border border-co-border-primary bg-transparent p-3 shadow-button-dark"
        >
          <BackArrowIcon className="text-xl" />
        </Button_>
      </div>
      <MilestoneHeader />
      <div className="mb-14 flex flex-col gap-6">
        <MilestoneDescription />
        <div className="flex w-full gap-4">
          <MilestoneInfoCard
            title="Unlock"
            primaryValue="250k SBEE"
            secondaryValue="$17,025.00 USD"
          />
          <MilestoneInfoCard
            title="Ends"
            primaryValue="May 25, 2024"
            secondaryValue="01:00 PM GMT-4"
          />
        </div>
        <div className="flex gap-4">
          <VotingInfoCard
            totalVotes={100}
            percentage={70}
            voters={[
              '0xcdBACa54e39E1Cbc5dfF61929f77C3c1d0C2faA1',
              '0xe113cd156537bC0Af6BC3281Fb3C632a1cf3bEce',
            ]}
            variant="approve"
          />
          <VotingInfoCard
            totalVotes={50}
            percentage={30}
            voters={[
              '0xcdBACa54e39E1Cbc5dfF61929f77C3c1d0C2faA1',
              '0xe113cd156537bC0Af6BC3281Fb3C632a1cf3bEce',
            ]}
            variant="reject"
          />
          <VoteCard />
        </div>
        <div className="aspect-video w-full rounded-2xl bg-gray-300"></div>
        <div className="flex gap-2">
          <Image src={GithubIcon} alt="github icon" />
          <div className="flex items-center gap-1">
            <p>Review on Github</p>
            <ArrowRightUpIcon className="text-lg text-black/40" />
          </div>
        </div>
        <ReviewDescription />
      </div>
      <Comments />
    </div>
  )
}

export default ReviewPage
