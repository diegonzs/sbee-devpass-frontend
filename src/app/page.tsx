import { Web3Button } from '@/components/widgets'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <h1 className="font-comic">Hello world</h1>
      <Web3Button />
    </div>
  )
}
