'use client'
import { Button } from '@/components/ui'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount } from 'wagmi'

const Web3Button = () => {
  const { open } = useWeb3Modal()
  const { address, chainId } = useAccount()

  const handleClick = () => {
    if (address) {
      open({
        view: 'Account',
      })
    } else {
      open({
        view: 'Connect',
      })
    }
  }
  const label = address ? address.slice(0, 6) : 'Connect wallet'

  return (
    <Button
      color="primary"
      type="button"
      className="shadow-button rounded-lg"
      onClick={handleClick}
    >
      {label}
    </Button>
  )
}

export default Web3Button
