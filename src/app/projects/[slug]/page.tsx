/* eslint-disable @next/next/no-img-element */
import { MOCK_PROJECT } from '@/types/project'
import { SocialIconList } from '../_components/social-icon-list'
import { Milestones } from './_components/milestones'
import { Stats } from './_components/stats'

const ProjectDetailPage = () => {
  const project = MOCK_PROJECT
  return (
    <div className="mt-16 flex flex-col gap-10">
      <div className="mx-auto flex gap-10">
        <div className="relative mt-[77px] flex w-full max-w-[684px] flex-col">
          <img
            src={project.image}
            alt="project"
            className="absolute -top-[77px] z-0 overflow-hidden rounded-xl"
          />
          <div className="z-10 flex flex-col p-6">
            <img
              src={project.logo}
              alt=""
              className="mb-6 h-[120px] w-[120px] overflow-hidden rounded-full"
            />
            <h5 className="mb-2 text-4xl">{project.title}</h5>
            <p className="mb-4 text-sm">{project.description}</p>
            <SocialIconList socialLinks={MOCK_PROJECT.socialLinks} />
          </div>
        </div>
        <Stats />
      </div>
      <div className="flex flex-col gap-10">
        <h2 className="text-center text-[28px] font-bold">Milestones</h2>
        <Milestones />
      </div>
    </div>
  )
}

export default ProjectDetailPage
