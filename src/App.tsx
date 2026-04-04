import { useState } from 'react'
import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom'
import { projects } from './data/projects'
import ProjectCard from './components/ProjectCard'

const actionLinkClass =
  'block w-full rounded-xl border border-black/10 bg-white/75 px-4 py-3 text-center text-sm font-bold tracking-wide text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-brand-accent hover:bg-white'

const skills = ['Backend Development', 'Database', 'REST API Integration']
const techStacks = [
  'TypeScript',
  'JavaScript',
  'React',
  'TailwindCSS',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'Docker',
  'Vite',
  'C',
]

const resolveAssetPath = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

const languages = [
  { label: 'Thai' },
  {
    label: 'English',
    detail: 'TOEIC 725',
    imageUrl: resolveAssetPath('img/lang/toeic.png'),
  },
  {
    label: 'Japanese',
    detail: 'JLPT N4',
    imageUrl: resolveAssetPath('img/lang/jlpt.png'),
  },
]

function PortfolioListPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<{
    label: string
    detail: string
    imageUrl: string
  } | null>(null)
  const [expandedTechStack, setExpandedTechStack] = useState(false)
  const displayedTechCount = 6

  return (
    <main className="mx-auto w-[min(1480px,calc(100%-1.5rem))] py-14 max-md:w-[min(1480px,calc(100%-1rem))] max-md:pt-9">
      <section className="grid animate-[fade-up_0.55s_ease_both] gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
        <header className="text-left">
          <p className="mb-4 inline-block text-xs font-bold tracking-[0.35rem] text-brand-accent">
            ABOUT ME
          </p>
          <h1 className="font-heading text-[clamp(2rem,5.8vw,4rem)] leading-[1.04] tracking-[-0.02em] text-slate-100">
            Kolawat Inpan
          </h1>
          <p className="mt-4 max-w-2xl text-[clamp(1rem,2.2vw,1.2rem)] text-brand-muted">
            I'm interested in web development, especially backend systems and
            database-focused work.
          </p>
          <p className="mt-4 max-w-2xl text-[clamp(1rem,2.2vw,1.2rem)] text-brand-muted">
            I enjoy data analysis and data visualization, and I also have a
            strong interest in languages while continuing to improve through
            hands-on projects.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://github.com/KolawatInpan"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-black/10 bg-white/80 px-5 py-3 text-sm font-bold tracking-wide text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-brand-accent hover:bg-white"
            >
              GitHub Contact
            </a>
          </div>
        </header>

        <aside className="rounded-2xl border border-brand-panel-border bg-brand-panel p-6 lg:p-7">
          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <h2 className="font-heading text-base tracking-wide text-slate-100">Skills</h2>
              <ul className="mt-3 flex flex-wrap gap-2.5">
                {skills.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-brand-chip-border bg-white/5 px-3.5 py-2 text-sm font-medium text-brand-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <h2 className="font-heading text-base tracking-wide text-slate-100">Tech Stack</h2>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {techStacks
                  .slice(0, expandedTechStack ? techStacks.length : displayedTechCount)
                  .map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-brand-chip-border bg-white/5 px-3.5 py-2 text-sm font-medium text-brand-muted list-none"
                    >
                      {item}
                    </li>
                  ))}
                {!expandedTechStack && techStacks.length > displayedTechCount && (
                  <button
                    type="button"
                    onClick={() => setExpandedTechStack(true)}
                    className="rounded-full border border-brand-chip-border bg-white/5 px-3.5 py-2 text-sm font-medium text-brand-muted transition hover:border-brand-accent hover:text-slate-100"
                  >
                    +{techStacks.length - displayedTechCount}
                  </button>
                )}
                {expandedTechStack && techStacks.length > displayedTechCount && (
                  <button
                    type="button"
                    onClick={() => setExpandedTechStack(false)}
                    className="rounded-full border border-brand-chip-border bg-white/5 px-3.5 py-2 text-sm font-medium text-brand-muted transition hover:border-brand-accent hover:text-slate-100"
                  >
                    Show less
                  </button>
                )}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <h2 className="font-heading text-base tracking-wide text-slate-100">Language</h2>
              <ul className="mt-3 flex flex-wrap gap-2.5">
                {languages.map((item) =>
                  item.imageUrl ? (
                    <li key={item.label}>
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-full border border-brand-chip-border bg-white/5 px-3.5 py-2 text-sm font-medium text-brand-muted transition hover:border-brand-accent hover:text-slate-100"
                        onClick={() => setSelectedLanguage(item)}
                      >
                        <img
                          src={item.imageUrl}
                          alt=""
                          aria-hidden="true"
                          className="h-5 w-5 rounded-md border border-white/20 object-cover"
                        />
                        <span>{item.label}</span>
                        <span className="text-[11px] font-bold uppercase tracking-wide text-brand-accent">
                          {item.detail}
                        </span>
                      </button>
                    </li>
                  ) : (
                    <li
                      key={item.label}
                      className="rounded-full border border-brand-chip-border bg-white/5 px-3.5 py-2 text-sm font-medium text-brand-muted"
                    >
                      {item.label}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </aside>
      </section>

      <header className="mt-14 animate-[fade-up_0.55s_ease_both] text-center">
        <h2 className="font-heading text-[clamp(2rem,6vw,4.25rem)] leading-[1.04] tracking-[-0.02em] text-slate-100">
          Projects
        </h2>
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

      {selectedLanguage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setSelectedLanguage(null)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/20 bg-slate-950"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 rounded-lg border border-white/30 bg-black/60 px-3 py-1.5 text-xs font-bold tracking-wide text-white transition hover:bg-black"
              onClick={() => setSelectedLanguage(null)}
            >
              Close
            </button>
            <div className="border-b border-white/10 p-5">
              <p className="text-xs font-bold tracking-[0.35rem] text-brand-accent">LANGUAGE</p>
              <h3 className="mt-2 font-heading text-2xl text-slate-100">{selectedLanguage.label}</h3>
              <p className="mt-1 text-sm text-brand-muted">{selectedLanguage.detail}</p>
            </div>
            <img
              src={selectedLanguage.imageUrl}
              alt={`${selectedLanguage.label} proficiency preview`}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      ) : null}
    </main>
  )
}

function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((item) => item.slug === slug)
  const [selectedPreview, setSelectedPreview] = useState<{
    src: string
    alt: string
  } | null>(null)

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <main className="mx-auto w-[min(1580px,calc(100%-1.5rem))] py-14 max-md:w-[min(1580px,calc(100%-1rem))] max-md:pt-9">
      <header className="flex animate-[fade-up_0.55s_ease_both] flex-col items-center gap-3 text-center">
        <Link
          to="/"
          className="self-start rounded-xl border border-black/10 bg-white/75 px-4 py-2.5 text-center text-sm font-bold tracking-wide text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-brand-accent hover:bg-white max-md:w-full"
        >
          Back to Projects
        </Link>
        <p className="inline-block text-xs font-bold tracking-[0.35rem] text-brand-accent">
          PROJECT DETAIL
        </p>
        <h1 className="font-heading text-[clamp(2rem,6vw,4.25rem)] leading-[1.04] tracking-[-0.02em]">
          {project.title}
        </h1>
        <p className="mx-auto max-w-5xl text-[clamp(1rem,2.2vw,1.25rem)] text-brand-muted">
          {project.summary}
        </p>
      </header>

      <section className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1.55fr)_minmax(460px,1fr)] lg:items-start">
        <div className="grid gap-4 rounded-2xl border border-brand-panel-border bg-brand-panel p-6 animate-[fade-up_0.62s_ease_both] lg:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-black/20 p-4 lg:col-span-2">
            <h2 className="font-heading mb-2.5 text-lg">Preview</h2>
            <figure className="overflow-hidden rounded-xl border border-white/10 bg-slate-950/40">
              <img
                src={project.previewImageUrl}
                alt={project.previewImageAlt}
                className="h-auto w-full object-cover"
                loading="eager"
                onError={(e) => {
                  console.error('Failed to load preview image:', project.previewImageUrl)
                  e.currentTarget.style.display = 'none'
                }}
              />
            </figure>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4 lg:col-span-2">
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

          <div className="rounded-xl border border-white/10 bg-black/20 p-4 lg:col-span-2">
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

          <div className="rounded-xl border border-white/10 bg-black/20 p-4 lg:col-span-2">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block min-w-68 rounded-xl border border-black/10 bg-white/75 px-4 py-3 text-center text-sm font-bold tracking-wide text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-brand-accent hover:bg-white"
            >
              Open GitHub Repository
            </a>
          </div>
        </div>

        <aside className="rounded-2xl border border-brand-panel-border bg-brand-panel p-6 animate-[fade-up_0.66s_ease_both] lg:sticky lg:top-6">
          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <h2 className="font-heading mb-2.5 text-lg">Preview Gallery</h2>
            <p className="mb-3 text-sm text-brand-muted">Click image to zoom</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {project.screenshots.map((preview) => (
                <button
                  key={preview.src}
                  type="button"
                  className="overflow-hidden rounded-xl border border-white/10 bg-slate-950/40 text-left transition hover:border-brand-accent"
                  onClick={() => setSelectedPreview(preview)}
                >
                  <img
                    src={preview.src}
                    alt={preview.alt}
                    className="h-auto w-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      console.error('Failed to load preview image:', preview.src)
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </aside>
      </section>

      {selectedPreview ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setSelectedPreview(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-white/20 bg-slate-950"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 rounded-lg border border-white/30 bg-black/60 px-3 py-1.5 text-xs font-bold tracking-wide text-white transition hover:bg-black"
              onClick={() => setSelectedPreview(null)}
            >
              Close
            </button>
            <img
              src={selectedPreview.src}
              alt={selectedPreview.alt}
              className="max-h-[90vh] w-full object-contain"
            />
          </div>
        </div>
      ) : null}
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
