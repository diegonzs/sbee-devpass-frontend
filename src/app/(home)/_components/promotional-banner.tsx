'use client'
import { motion } from 'framer-motion'
import { LightningIcon } from '@/components/shared'
import useMeasure from 'react-use-measure'
import { useMemo } from 'react'

const PromotionalBannerElement = () => {
  return (
    <motion.div
      className="flex flex-nowrap items-center"
      initial={{ x: '0' }}
      animate={{ x: '-100%' }}
      transition={{
        x: { repeat: Infinity, duration: 10, ease: 'linear' },
      }}
    >
      <p className="flex w-full flex-nowrap items-center gap-8 text-nowrap">
        Got a project idea? Apply for a grant
        <LightningIcon />
      </p>
    </motion.div>
  )
}

export const PromotionalBanner = () => {
  const [ref, bounds] = useMeasure()
  const bannerElementWidth = 545.73
  const numberOfElements = useMemo(() => {
    return Math.ceil(bounds.width / bannerElementWidth) + 1
  }, [bounds.width])
  return (
    <section
      ref={ref}
      className="relative flex h-[72px] w-full overflow-hidden bg-black text-[28px] text-white"
    >
      <div className="flex h-full w-max max-w-none flex-nowrap items-center gap-8">
        {Array(numberOfElements)
          .fill(null)
          .map((_, index) => (
            <PromotionalBannerElement key={index} />
          ))}
      </div>
    </section>
  )
}
