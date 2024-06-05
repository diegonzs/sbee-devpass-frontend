import DiscordIcon from '@/assets/images/svg/discord.svg'
import TwitterIcon from '@/assets/images/svg/xtwitter.svg'
import TelegramIcon from '@/assets/images/svg/telegram.svg'
import GithubIcon from '@/assets/images/svg/github.svg'
import { StaticImageData } from 'next/image'

export enum SocialPlatform {
  Discord = 'discord',
  Twitter = 'twitter',
  Github = 'github',
  Telegram = 'telegram',
}

export const socialPlatformIcon: Record<SocialPlatform, StaticImageData> = {
  [SocialPlatform.Discord]: DiscordIcon,
  [SocialPlatform.Twitter]: TwitterIcon,
  [SocialPlatform.Github]: GithubIcon,
  [SocialPlatform.Telegram]: TelegramIcon,
}

export const TWITTER_URL = 'https://twitter.com/sbeecoineth'
export const TELEGRAM_URL = 'https://t.me/sbeecoineth'
export const DSICORD_URL = 'https://discord.gg/sbee'
export const GITBOOK_URL = 'https://sharkbee-coin.gitbook.io/'
