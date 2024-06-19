interface MilestoneInfoCardProps {
  title: string
  primaryValue: string
  secondaryValue: string
}
export const MilestoneInfoCard = ({
  title,
  primaryValue,
  secondaryValue,
}: MilestoneInfoCardProps) => {
  return (
    <div className="flex w-full items-center justify-between rounded-2xl border border-[#1D1C1D]/10 bg-white p-6">
      <p className="text-xl font-bold text-co-gray-7">{title}</p>
      <div className="flex flex-col">
        <p className="text-right text-lg font-bold">{primaryValue}</p>
        <p className="text-right text-xs text-co-gray-7">{secondaryValue}</p>
      </div>
    </div>
  )
}
