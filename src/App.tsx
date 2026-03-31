import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom'
import { projects } from './data/projects'
import ProjectCard from './components/ProjectCard'

const actionLinkClass =
  'rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-center text-sm font-bold tracking-wide text-rose-50 transition duration-200 hover:-translate-y-0.5 hover:border-brand-accent'

function PortfolioListPage() {
  return (
    <main className="mx-auto w-[min(1200px,calc(100%-2.5rem))] py-14 max-md:w-[min(1200px,calc(100%-1.2rem))] max-md:pt-9">
      <header className="animate-[fade-up_0.55s_ease_both] text-center">
        <p className="mb-4 inline-block text-xs font-bold tracking-[0.35rem] text-brand-accent">
          PORTFOLIO
        </p>
        <h1 className="font-heading text-[clamp(2rem,6vw,4.25rem)] leading-[1.04] tracking-[-0.02em]">
          Featured <span className="text-brand-accent">Creations</span>
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-[clamp(1rem,2.2vw,1.25rem)] text-brand-muted">
          A selection of digital products focused on scale, reliability, and
          business outcomes.
        </p>
      </header>

      <section
        className="mt-13 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5"
        aria-label="Project list"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            actionLinkClass={actionLinkClass}
          />
        ))}
      </section>
    </main>
  )
}

function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <main className="mx-auto w-[min(920px,calc(100%-2.5rem))] py-14 max-md:w-[min(920px,calc(100%-1.2rem))] max-md:pt-9">
      <header className="flex animate-[fade-up_0.55s_ease_both] flex-col items-center gap-3 text-center">
        <Link
          to="/"
          className="self-start rounded-xl border border-white/15 bg-black/30 px-4 py-2.5 text-center text-sm font-bold tracking-wide text-rose-200 transition duration-200 hover:-translate-y-0.5 hover:border-brand-accent max-md:w-full"
        >
          Back to Projects
        </Link>
        <p className="inline-block text-xs font-bold tracking-[0.35rem] text-brand-accent">
          PROJECT DETAIL
        </p>
        <h1 className="font-heading text-[clamp(2rem,6vw,4.25rem)] leading-[1.04] tracking-[-0.02em]">
          {project.title}
        </h1>
        <p className="mx-auto max-w-3xl text-[clamp(1rem,2.2vw,1.25rem)] text-brand-muted">
          {project.summary}
        </p>
      </header>

      <section className="mt-8 grid gap-4 rounded-2xl border border-brand-panel-border bg-brand-panel p-5 animate-[fade-up_0.62s_ease_both]">
        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <h2 className="font-heading mb-2.5 text-lg">Overview</h2>
          <p className="text-brand-muted">{project.detail}</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <h2 className="font-heading mb-2.5 text-lg">Core Highlights</h2>
          <ul className="list-disc space-y-1 pl-5 text-brand-muted">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <h2 className="font-heading mb-2.5 text-lg">Project Parts</h2>
          <ul className="list-disc space-y-1 pl-5 text-brand-muted">
            {project.parts.map((part) => (
              <li key={part.name}>
                <strong>{part.name}:</strong> {part.description}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <h2 className="font-heading mb-2.5 text-lg">Tech Stack</h2>
          <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
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

        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block min-w-68 rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-center text-sm font-bold tracking-wide text-rose-50 transition duration-200 hover:-translate-y-0.5 hover:border-brand-accent"
          >
            Open GitHub Repository
          </a>
        </div>
      </section>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioListPage />} />
      <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
