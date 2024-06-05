/* eslint-disable @next/next/no-img-element */
import SbeeLogo from '@/assets/images/png/sbee-token.png'
import Link from 'next/link'
import Image from 'next/image'
import { routes } from '@/routes'
import { SocialIconList } from './social-icon-list'
import { PROJECT } from '@/types'
import { SocialPlatform } from '@/constants'

interface ProjectCardProps {
  id: number
  image: string
  logo: string
  amount: string
  title: string
  description: string
  status: PROJECT.ProjectStatus
  socialLinks: { platform: SocialPlatform; link: string }[]
}

export const ProjectCard = ({
  id,
  image,
  title,
  logo,
  status,
  description,
  socialLinks,
  amount,
}: ProjectCardProps) => {
  return (
    <Link href={routes.project(id.toString())}>
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
              style={{ backgroundColor: PROJECT.STATUS_COLOR[status] }}
              className="flex items-center justify-center rounded-[20px] px-3 py-2"
            >
              <p className="text-xs font-bold">{PROJECT.STATUS_TEXT[status]}</p>
            </div>
          </div>
          <h5 className="mb-2 text-lg font-bold">{title}</h5>
          <p className="mb-4 text-sm">{description}</p>
          <div className="flex items-center justify-between">
            <SocialIconList socialLinks={socialLinks} />
            <div className="flex items-center gap-[6px]">
              <p className="font-bold">{amount} SBEE</p>
              <Image src={SbeeLogo} alt="sbee logo" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
