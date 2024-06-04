import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import FooterBackground from '@/assets/images/svg/footer-bg.svg'
import FooterBackgroundSmall from '@/assets/images/svg/footer-bg-small.svg'
import DiscordIcon from '@/assets/images/svg/discord.svg'
import TwitterIcon from '@/assets/images/svg/xtwitter.svg'
import TelegramIcon from '@/assets/images/svg/telegram.svg'

import { DSICORD_URL, TELEGRAM_URL, TWITTER_URL } from '@/constants'

export default function Footer() {
  return (
    <div className="relative mt-[110px] w-full sm:px-0">
      <Image
        src={FooterBackground}
        alt=""
        className="hidden w-full sm:block"
      ></Image>
      <Image
        src={FooterBackgroundSmall}
        alt=""
        width={600}
        className="block w-full max-w-full sm:hidden"
      ></Image>
      <div
        className="absolute bottom-[16px] left-[16px] right-[16px] z-10 flex
          flex-col items-center gap-[16px] sm:bottom-[40px] sm:left-[40px]
          sm:right-[40px] sm:flex-row-reverse sm:justify-between"
      >
        <div className="flex gap-[16px]">
          <Link href={DSICORD_URL} target="_blank">
            <Image
              src={DiscordIcon}
              alt="discord"
              width={24}
              height={24}
              style={{ width: '24px', height: '24px' }}
            />
          </Link>
          <Link href={TWITTER_URL} target="_blank">
            <Image
              src={TwitterIcon}
              alt="x"
              width={24}
              height={24}
              style={{ width: '24px', height: '24px' }}
            />
          </Link>
          <Link href={TELEGRAM_URL} target="_blank">
            <Image
              src={TelegramIcon}
              alt="telegram"
              width={24}
              height={24}
              style={{ width: '24px', height: '24px' }}
            />
          </Link>
        </div>
        <div className="text-center text-base font-bold text-black">
          © 2024 SharkBee Coin. All Rights Reserved.
        </div>
      </div>
    </div>
  )
}
