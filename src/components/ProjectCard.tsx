import { Link } from 'react-router-dom'
import type { PortfolioProject } from '../data/projects'

type ProjectCardProps = {
  project: PortfolioProject
  actionLinkClass: string
}

function ProjectCard({ project, actionLinkClass }: ProjectCardProps) {
  return (
    <article className="animate-[fade-up_0.6s_ease_both] overflow-hidden rounded-2xl border border-brand-panel-border bg-brand-panel shadow-[0_18px_45px_rgba(15,2,2,0.45)] backdrop-blur">
      <div
        className="relative flex min-h-48 flex-col justify-end gap-1 bg-[linear-gradient(135deg,#2c0408_0%,#581319_46%,#27070b_100%)] p-5"
        aria-hidden="true"
      >
        <div className="absolute top-4 left-4 h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(255,90,90,0.5),transparent_66%)]" />
        <h3 className="font-heading m-0 text-xl text-rose-100">{project.shortTitle}</h3>
        <p className="m-0 text-sm text-rose-200/90">{project.previewText}</p>
      </div>

      <div className="p-5">
        <h2 className="font-heading text-[1.4rem]">{project.title}</h2>
        <p className="mt-3 text-brand-muted">{project.summary}</p>
        <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
          {project.techStack.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-brand-chip-border bg-white/5 px-3 py-1.5 text-xs font-medium"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-3 p-5 max-md:grid-cols-1">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className={actionLinkClass}
        >
          Source
        </a>
        <Link to={`/projects/${project.slug}`} className={actionLinkClass}>
          View Details
        </Link>
      </div>
    </article>
  )
}

export default ProjectCard
