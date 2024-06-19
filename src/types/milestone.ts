import MilestoneApprovedStatus from '@/assets/images/png/milestone-approved-status.png'
import MilestoneInReviewStatus from '@/assets/images/png/milestone-review-status.png'
import MilestoneLockedStatus from '@/assets/images/png/milestone-locked-status.png'

export enum MilestoneStatus {
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

export const statusImage = {
  [MilestoneStatus.Approved]: MilestoneApprovedStatus,
  [MilestoneStatus.Locked]: MilestoneLockedStatus,
  [MilestoneStatus.InReview]: MilestoneInReviewStatus,
  [MilestoneStatus.Rejected]: MilestoneLockedStatus,
}
