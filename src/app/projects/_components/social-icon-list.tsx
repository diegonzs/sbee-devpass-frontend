'use client'
import Image from 'next/image'
import { SocialPlatform, socialPlatformIcon } from '@/constants'

interface SocialIconListProps {
  socialLinks: { platform: SocialPlatform; link: string }[]
}

export const SocialIconList = ({ socialLinks }: SocialIconListProps) => {
  const openLink = (url: string) => {
    window.open(url, '_blank')
  }
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((socialLink) => (
        <div
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            openLink(socialLink.link)
          }}
          key={socialLink.link}
          className="cursor-pointer"
        >
          <Image
            src={socialPlatformIcon[socialLink.platform]}
            alt={socialLink.platform}
            width={24}
            height={24}
            style={{ width: '24px', height: '24px' }}
          />
        </div>
      ))}
    </div>
  )
}
