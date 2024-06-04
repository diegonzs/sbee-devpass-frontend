/* eslint-disable @next/next/no-img-element */
import DiscordIcon from '@/assets/images/svg/discord.svg'
import TwitterIcon from '@/assets/images/svg/xtwitter.svg'
import TelegramIcon from '@/assets/images/svg/telegram.svg'
import GithubIcon from '@/assets/images/svg/github.svg'
import SbeeLogo from '@/assets/images/png/sbee-token.png'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

export enum ProjectStatus {
  InProgress = 'in progress',
  InReview = 'in review',
  Completed = 'completed',
  Cancelled = 'cancelled',
}

export enum SocialPlatform {
  Discord = 'discord',
  Twitter = 'twitter',
  Github = 'github',
  Telegram = 'telegram',
}

const statusColor = {
  [ProjectStatus.InProgress]: '#F59F00',
  [ProjectStatus.InReview]: '#FFC70F',
  [ProjectStatus.Completed]: '#97C236',
  [ProjectStatus.Cancelled]: '#9599A6',
}

const projectStatusText = {
  [ProjectStatus.InProgress]: 'In progress',
  [ProjectStatus.InReview]: 'In review',
  [ProjectStatus.Completed]: 'Completed',
  [ProjectStatus.Cancelled]: 'Cancelled',
}

const socialPlatformIcon: Record<SocialPlatform, StaticImageData> = {
  [SocialPlatform.Discord]: DiscordIcon,
  [SocialPlatform.Twitter]: TwitterIcon,
  [SocialPlatform.Github]: GithubIcon,
  [SocialPlatform.Telegram]: TelegramIcon,
}

interface ProjectCardProps {
  id: number
  image: string
  logo: string
  amount: string
  title: string
  description: string
  status: ProjectStatus
  socialLinks: { platform: SocialPlatform; link: string }[]
}

export const ProjectCard = ({
  image,
  title,
  logo,
  status,
  description,
  socialLinks,
  amount,
}: ProjectCardProps) => {
  return (
    <div className="flex w-full max-w-[373px] flex-col rounded-2xl border border-[#1D1C1D] border-opacity-10 bg-white pb-6 pt-4">
      <div className="relative mb-[10px] h-[171px] w-full px-4">
        <div className="relative h-full w-full overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute -bottom-10 left-6 h-20 w-20 overflow-hidden rounded-full">
          <img
            src={logo}
            alt={title}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="flex flex-col px-6">
        <div className="mb-3 self-end">
          <div
            style={{ backgroundColor: statusColor[status] }}
            className="flex items-center justify-center rounded-[20px] px-3 py-2"
          >
            <p className="text-xs font-bold">{projectStatusText[status]}</p>
          </div>
        </div>
        <h5 className="mb-2 text-lg font-bold">{title}</h5>
        <p className="mb-4 text-sm">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {socialLinks.map((socialLink) => (
              <Link
                key={socialLink.link}
                href={socialLink.link}
                target="_blank"
              >
                <Image
                  src={socialPlatformIcon[socialLink.platform]}
                  alt="discord"
                  width={24}
                  height={24}
                  style={{ width: '24px', height: '24px' }}
                />
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-[6px]">
            <p className="font-bold">{amount} SBEE</p>
            <Image src={SbeeLogo} alt="sbee logo" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  )
}
