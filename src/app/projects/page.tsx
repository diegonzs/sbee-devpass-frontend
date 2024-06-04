import {
  ProjectCard,
  ProjectStatus,
  SocialPlatform,
} from './_components/project-card'

const MOCK_PROJECTS = [
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

const Projects = () => {
  return (
    <section className="mx-auto mt-16 flex w-full max-w-[1200px] flex-col items-center gap-12 px-5 xl:px-0 ">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-40">Funded Projects</h2>
        <p className="text-right text-[32px] text-co-gray-7">
          {MOCK_PROJECTS.length} Projects
        </p>
      </div>
      <div className="mx-auto flex w-full flex-wrap gap-10">
        {MOCK_PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
