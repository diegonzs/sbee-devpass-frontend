import { type ReactNode } from 'react'
import Image from 'next/image'
import SbeeLogo from '@/assets/images/png/sbee-token.png'
import { AlertTwotoneIcon } from '@/components/shared'

const StatItem = ({
  title,
  value,
  tip,
  withTokenLogo = true,
}: {
  title: ReactNode
  value: ReactNode
  tip: ReactNode
  withTokenLogo?: boolean
}) => {
  return (
    <div className="flex flex-col gap-2">
      {typeof title === 'string' ? (
        <h6 className="text-co-text-1">{title}</h6>
      ) : (
        title
      )}
      <div className="flex items-center">
        {typeof value === 'string' ? (
          <p className="text-xl font-bold">{value}</p>
        ) : (
          value
        )}
        {withTokenLogo && (
          <Image src={SbeeLogo} alt="sbee logo" width={24} height={24} />
        )}
      </div>
      {typeof tip === 'string' ? (
        <p className="text-xs text-co-gray-7">{tip}</p>
      ) : (
        tip
      )}
    </div>
  )
}

export const Stats = () => {
  return (
    <div className="flex h-fit flex-col gap-6 rounded-2xl bg-[#FFC70F]/10 p-6">
      <StatItem title="Total Grant" value="750k SBEE" tip="(≈ $10,000 USD)" />
      <StatItem title="Unlocked" value="1.5M SBEE" tip="(50% of total grant)" />
      <StatItem
        title="Distribution"
        value="6 milestones"
        withTokenLogo={false}
        tip={
          <div className="flex items-center gap-3 text-[#C24736]">
            <AlertTwotoneIcon />
            <p>Milestone 4 under review</p>
          </div>
        }
      />
    </div>
  )
}
