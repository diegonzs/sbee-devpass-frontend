import { MILESTONES } from '@/types'

interface MilestoneStatusChipProps {
  status: MILESTONES.MilestoneStatus
}

const MilestoneStatusChip = ({ status }: MilestoneStatusChipProps) => {
  return (
    <div
      style={{
        backgroundColor: MILESTONES.statusColor[status].backgroundColor,
        color: MILESTONES.statusColor[status].textColor,
      }}
      className="flex items-center justify-center rounded-[20px] px-3 py-1"
    >
      <p className="text-xs font-bold">{MILESTONES.statusText[status]}</p>
    </div>
  )
}

export default MilestoneStatusChip
