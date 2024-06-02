'use client'

import React, { ReactNode } from 'react'
import { wagmiConfig, projectId } from './wagmi-config'

import { createWeb3Modal } from '@web3modal/wagmi/react'

import { State, WagmiProvider } from 'wagmi'
import { QueryClientProvider } from '..'

// Setup queryClient
if (!projectId) throw new Error('Project ID is not defined')

// Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
})

export default function Web3ModalProvider({
  children,
  initialState,
}: {
  children: ReactNode
  initialState?: State
}) {
  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryClientProvider>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
