import { Link } from 'react-router-dom'
import type { PortfolioProject } from '../data/projects'

type ProjectCardProps = {
  project: PortfolioProject
  actionLinkClass: string
}

function ProjectCard({ project, actionLinkClass }: ProjectCardProps) {
  return (
    <article className="animate-[fade-up_0.6s_ease_both] overflow-hidden rounded-2xl border border-brand-panel-border bg-brand-panel shadow-[0_18px_45px_rgba(15,23,42,0.16)] backdrop-blur">
      <div className="min-h-48 overflow-hidden bg-slate-900/40">
        <img
          src={project.previewImageUrl}
          alt={project.previewImageAlt}
          className="h-56 w-full object-cover"
          loading="lazy"
          crossOrigin="anonymous"
          onError={(e) => {
            console.error('Failed to load card preview:', project.previewImageUrl)
            e.currentTarget.style.display = 'none'
          }}
        />
      </div>

      <div className="p-5">
        <h2 className="font-heading text-[1.4rem]">
          <Link
            to={`/projects/${project.slug}`}
            className="text-slate-100 transition-colors duration-200 hover:text-brand-accent"
          >
            {project.title}
          </Link>
        </h2>
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

      <div className="mt-auto p-5">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className={actionLinkClass}
        >
          Source
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
