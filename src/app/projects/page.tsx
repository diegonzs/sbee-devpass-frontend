import { MOCK_PROJECTS } from '@/types/project'
import { ProjectCard } from './_components/project-card'

const Projects = () => {
  const projects = MOCK_PROJECTS
  return (
    <section className="mx-auto mt-16 flex w-full max-w-[1200px] flex-col items-center gap-12 px-5 xl:px-0 ">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-40">Funded Projects</h2>
        <p className="text-right text-[32px] text-co-gray-7">
          {projects.length} Projects
        </p>
      </div>
      <div className="mx-auto flex w-full flex-wrap gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
