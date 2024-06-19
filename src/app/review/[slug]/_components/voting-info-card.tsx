import { Progress } from '@nextui-org/progress'
import Image from 'next/image'
import SbeeAvatar from '@/assets/images/png/sbee-avatar.png'
import { shortAddress } from '@/utils'
import { ExternalIcon } from '@/components/shared'
import { Button } from '@/components/ui'

interface VotingInfoCardProps {
  totalVotes: number
  percentage: number
  voters: string[]
  variant: 'approve' | 'reject'
}

export const VotingInfoCard = ({
  totalVotes,
  percentage,
  voters,
  variant,
}: VotingInfoCardProps) => {
  const title = variant === 'approve' ? 'Approve' : 'Reject'
  const arialLabel =
    variant === 'approve' ? 'approve-progress' : 'reject-progress'
  const indicator = variant === 'approve' ? 'bg-co-bg-green' : 'bg-[#C24736]'
  const track = variant === 'approve' ? 'bg-co-bg-green/40' : 'bg-[#C24736]/40'
  return (
    <div className="flex w-full flex-col rounded-2xl border border-[#1D1C1D]/10 bg-white p-4 pt-6">
      <div className="mb-4 flex justify-between">
        <p className="font-bold text-co-bg-green">{title}</p>
        <p className="font-bold">{totalVotes}</p>
      </div>
      <Progress
        classNames={{
          indicator,
          track,
        }}
        aria-label={arialLabel}
        value={percentage}
        className="mb-6 w-full"
      />
      <ul className="mb-4 flex flex-col gap-2">
        {voters.map((address) => (
          <li key={address} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src={SbeeAvatar} alt="sbee logo" width={20} height={20} />
              <p className="text-xs">{shortAddress(address, 6, 4)}</p>
            </div>
            <ExternalIcon className="text-xs text-co-gray-7" />
          </li>
        ))}
      </ul>
      <div className="flex flex-1 items-end justify-center">
        <Button color="white" className="w-fit self-center">
          View all
        </Button>
      </div>
    </div>
  )
}
