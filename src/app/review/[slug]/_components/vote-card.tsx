import { Button, Radio } from '@/components/ui'
import { RadioGroup } from '@nextui-org/radio'

export const VoteCard = () => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-2xl border border-[#1D1C1D]/10 bg-white p-4 pt-6">
      <p className="font-bold">Your vote</p>
      <RadioGroup className="flex flex-col gap-2">
        <Radio value="approve">Approve</Radio>
        <Radio value="reject">Reject</Radio>
      </RadioGroup>
      <Button
        color="primary"
        type="button"
        className="w-full rounded-lg shadow-button"
      >
        Vote
      </Button>
    </div>
  )
}
