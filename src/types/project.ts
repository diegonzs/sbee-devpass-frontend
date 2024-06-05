import { SocialPlatform } from '@/constants'

export enum ProjectStatus {
  InProgress = 'inProgress',
  InReview = 'inReview',
  Completed = 'completed',
  Cancelled = 'cancelled',
}

export const STATUS_COLOR = {
  [ProjectStatus.InProgress]: '#F59F00',
  [ProjectStatus.InReview]: '#FFC70F',
  [ProjectStatus.Completed]: '#97C236',
  [ProjectStatus.Cancelled]: '#9599A6',
}

export const STATUS_TEXT = {
  [ProjectStatus.InProgress]: 'In progress',
  [ProjectStatus.InReview]: 'In review',
  [ProjectStatus.Completed]: 'Completed',
  [ProjectStatus.Cancelled]: 'Cancelled',
}

export const MOCK_PROJECT = {
  id: 1,
  image: 'https://placehold.jp/684x171.png',
  logo: 'https://placehold.jp/3d4070/ffffff/120x120.png',
  amount: '1.5 M',
  title: 'Project 1',
  description:
    'Flexart is an NFT competition platform designed to determine the most beautiful NFT in a contest. It allows NFT collections to raise attention and create special events for their communities, showcasing unique use cases for their NFTs with a primary focus on the beauty of these digital assets. Learn more',
  status: ProjectStatus.InProgress,
  socialLinks: [
    { platform: SocialPlatform.Discord, link: 'https://discord.gg' },
    { platform: SocialPlatform.Twitter, link: 'https://twitter.com' },
    { platform: SocialPlatform.Github, link: 'https://github.com' },
    { platform: SocialPlatform.Telegram, link: 'https://t.me' },
  ],
}

export const MOCK_PROJECTS = [
  {
    id: 1,
    image: 'https://placehold.jp/400x400.png',
    logo: 'https://placehold.jp/3d4070/ffffff/80x80.png',
    amount: '1.5 M',
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.',
    status: ProjectStatus.InProgress,
    socialLinks: [
      { platform: SocialPlatform.Discord, link: 'https://discord.gg' },
      { platform: SocialPlatform.Twitter, link: 'https://twitter.com' },
      { platform: SocialPlatform.Github, link: 'https://github.com' },
      { platform: SocialPlatform.Telegram, link: 'https://t.me' },
    ],
  },
  {
    id: 2,
    image: 'https://placehold.jp/400x400.png',
    logo: 'https://placehold.jp/3d4070/ffffff/80x80.png',
    amount: '2.5 M',
    title: 'Project 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.',
    status: ProjectStatus.InReview,
    socialLinks: [
      { platform: SocialPlatform.Discord, link: 'https://discord.gg' },
      { platform: SocialPlatform.Twitter, link: 'https://twitter.com' },
      { platform: SocialPlatform.Github, link: 'https://github.com' },
      { platform: SocialPlatform.Telegram, link: 'https://t.me' },
    ],
  },
  {
    id: 3,
    image: 'https://placehold.jp/400x400.png',
    logo: 'https://placehold.jp/3d4070/ffffff/80x80.png',
    amount: '3.5 M',
    title: 'Project 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.',
    status: ProjectStatus.Completed,
    socialLinks: [
      { platform: SocialPlatform.Discord, link: 'https://discord.gg' },
      { platform: SocialPlatform.Twitter, link: 'https://twitter.com' },
      { platform: SocialPlatform.Github, link: 'https://github.com' },
      { platform: SocialPlatform.Telegram, link: 'https://t.me' },
    ],
  },
  {
    id: 4,
    image: 'https://placehold.jp/400x400.png',
    logo: 'https://placehold.jp/3d4070/ffffff/80x80.png',
    amount: '4.5 M',
    title: 'Project 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.',
    status: ProjectStatus.Cancelled,
    socialLinks: [
      { platform: SocialPlatform.Discord, link: 'https://discord.gg' },
      { platform: SocialPlatform.Twitter, link: 'https://twitter.com' },
      { platform: SocialPlatform.Github, link: 'https://github.com' },
      { platform: SocialPlatform.Telegram, link: 'https://t.me' },
    ],
  },
]
