/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import {
  ArrowRightUpIcon,
  OptionDotsIcon,
  ShareIcon,
} from '@/components/shared'
import { MilestoneStatusChip } from '@/components/widgets'
import { MilestoneStatus } from '@/types/milestone'
import { shortAddress } from '@/utils'
import SbeeAvatar from '@/assets/images/png/sbee-avatar.png'

export const MilestoneHeader = () => {
  return (
    <div className="mb-5 flex justify-between">
      <div className="flex items-center gap-4">
        <MilestoneStatusChip status={MilestoneStatus.InReview} />
        <div className="flex items-center gap-2">
          <img
            className="rounded-full"
            src="https://placehold.jp/3d4070/ffffff/40x40.png"
            width={20}
            height={20}
            alt="logo"
          />
          <div className="flex items-center gap-1">
            <p className="text-xs">Flexart</p>
            <ArrowRightUpIcon className="text-base text-black/40" />
          </div>
        </div>
        <p className="flex items-center gap-2 text-xs">
          by
          <Image
            src={SbeeAvatar}
            alt="sbee logo"
            width={20}
            height={20}
            className="h-5 w-5"
          />
          {shortAddress('0xcdBACa54e39E1Cbc5dfF61929f77C3c1d0C2faA1', 6, 4)}
        </p>
        <p className="text-xs opacity-60">Created 4 days ago</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="flex items-center gap-2 px-4 py-2 text-co-text-1">
          <ShareIcon />
          Share
        </p>
        <OptionDotsIcon className="text-xl text-co-text-1" />
      </div>
    </div>
  )
}
