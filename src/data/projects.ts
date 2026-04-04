export type ProjectPart = {
  name: string
  description: string
}

export type ProjectScreenshot = {
  src: string
  alt: string
}

export type PortfolioProject = {
  slug: string
  title: string
  shortTitle: string
  previewText: string
  previewImageUrl: string
  previewImageAlt: string
  summary: string
  detail: string
  highlights: string[]
  techStack: string[]
  repoUrl: string
  parts: ProjectPart[]
  screenshots: ProjectScreenshot[]
}

const rawProjects: PortfolioProject[] = [
  {
    slug: 'nida-energy',
    title: 'NIDA Energy Trading & Management System',
    shortTitle: 'NIDA Energy',
    previewText: 'Energy trading workflows, asset visibility, and management.',
    previewImageUrl: '/img/nida/dashboard.png',
    previewImageAlt: 'NIDA Energy overview preview',
    summary:
      'A platform focused on energy trading operations and management workflows with reliable data handling and clear operational dashboards.',
    detail:
      'This project centers on helping teams monitor and manage the lifecycle of energy trading activities, from tracking transactions to supporting decision-making with organized operational views.',
    highlights: [
      'Supports core energy trading and management process flows.',
      'Emphasizes operational transparency with dashboard-driven visibility.',
      'Built to improve maintainability and scalability for future features.',
    ],
    techStack: [
      'React',
      'Javascript',
      'TailwindCSS',
      'Python',
      'FastAPI',
      'PostgreSQL',
    ],
    repoUrl: 'https://github.com/KolawatInpan/nida-energy',
    parts: [
      {
        name: 'Trading Management',
        description:
          'Handles trading records, status tracking, and process-oriented actions.',
      },
      {
        name: 'Operational Monitoring',
        description:
          'Provides a clear view of activity and performance for management-level insight.',
      },
    ],
    screenshots: [
      {
        src: '/img/nida/dashboard.png',
        alt: 'NIDA Energy dashboard preview',
      },
      {
        src: '/img/nida/building.png',
        alt: 'NIDA Energy building preview',
      },
      {
        src: '/img/nida/metergraph.png',
        alt: 'NIDA Energy meter graph preview',
      },
      {
        src: '/img/nida/energysource.png',
        alt: 'NIDA Energy source preview',
      },
      {
        src: '/img/nida/energy_comparison.png',
        alt: 'NIDA Energy comparison preview',
      },
      {
        src: '/img/nida/invoice.png',
        alt: 'NIDA Energy invoice preview',
      },
      {
        src: '/img/nida/analytics.png',
        alt: 'NIDA Energy analytics preview',
      },
      {
        src: '/img/nida/receipt.png',
        alt: 'NIDA Energy receipt preview',
      },
    ],
  },
  {
    slug: 'pdf-utils',
    title: 'PDF Utils',
    shortTitle: 'PDF Utils',
    previewText: 'PDF utilities for conversion, page management, and extraction.',
    previewImageUrl: '/img/pdf/overview.png',
    previewImageAlt: 'PDF Utils overview preview',
    summary:
      'A focused PDF tools app with fast workflows for merging, splitting, converting, and restructuring documents.',
    detail:
      'This application keeps document operations simple and practical, with a compact interface for the tasks people repeat most often when working with PDFs.',
    highlights: [
      'Supports the most common document manipulation workflows.',
      'Keeps the UI focused on speed and clarity.',
      'Structured so new PDF operations can be added cleanly.',
    ],
    techStack: [
      'React',
      'TypeScript',
      'Vite',
      'Python',
      'FastAPI',
      'PDF Processing',
    ],
    repoUrl: 'https://github.com/KolawatInpan/pdf_utils',
    parts: [
      {
        name: 'Document Tools',
        description:
          'Handles merge, split, protect, unlock, and conversion tasks.',
      },
      {
        name: 'Page Operations',
        description:
          'Covers extract, rearrange, and image-based PDF workflows.',
      },
    ],
    screenshots: [
      {
        src: '/img/pdf/overview.png',
        alt: 'PDF Utils overview preview',
      },
      {
        src: '/img/pdf/mergepdf.png',
        alt: 'PDF Utils merge preview',
      },
      {
        src: '/img/pdf/pdfToimg.png',
        alt: 'PDF Utils PDF to image preview',
      },
      {
        src: '/img/pdf/imgTopdf.png',
        alt: 'PDF Utils image to PDF preview',
      },
      {
        src: '/img/pdf/rearrpdf.png',
        alt: 'PDF Utils rearrange pages preview',
      },
    ],
  },
  {
    slug: 'japanese-tools',
    title: 'Japanese Tools',
    shortTitle: 'Japanese Tools',
    previewText: 'Japanese learning, OCR, and vocabulary support tools.',
    previewImageUrl: '/img/jpn/dictionary.png',
    previewImageAlt: 'Japanese Tools overview preview',
    summary:
      'A Japanese study app that combines lookup, OCR, reading support, and practice tools in one focused workspace.',
    detail:
      'The project is designed for day-to-day Japanese study, with utilities that help move from text lookup to reading practice without leaving the app.',
    highlights: [
      'Combines lookup, OCR, and reading support in one place.',
      'Supports structured language practice with focused workflows.',
      'Designed to keep study tasks fast and easy to repeat.',
    ],
    techStack: [
      'React',
      'TypeScript',
      'Vite',
      'Python',
      'FastAPI',
      'OCR (Tesseract)',
    ],
    repoUrl: 'https://github.com/KolawatInpan/japanese_tools',
    parts: [
      {
        name: 'Language Utilities',
        description:
          'Covers dictionary lookup, kanji reading, kana, and radical charts.',
      },
      {
        name: 'Study Support',
        description:
          'Includes OCR, sentence breakdown, vocab extraction, and practice modes.',
      },
    ],
    screenshots: [
      {
        src: '/img/jpn/dictionary.png',
        alt: 'Japanese dictionary preview',
      },
      {
        src: '/img/jpn/kanjireading.png',
        alt: 'Japanese kanji reading preview',
      },
      {
        src: '/img/jpn/sentbreakdown.png',
        alt: 'Japanese sentence breakdown preview',
      },
      {
        src: '/img/jpn/templatecreate.png',
        alt: 'Japanese template create preview',
      },
      {
        src: '/img/jpn/vocab1.png',
        alt: 'Japanese vocab preview',
      },
      {
        src: '/img/jpn/vocab-extract.png',
        alt: 'Japanese vocab extract preview',
      },
      {
        src: '/img/jpn/article1.png',
        alt: 'Japanese article preview 1',
      },
      {
        src: '/img/jpn/article2.png',
        alt: 'Japanese article preview 2',
      },
      {
        src: '/img/jpn/article3.png',
        alt: 'Japanese article preview 3',
      },
      {
        src: '/img/jpn/article4.png',
        alt: 'Japanese article preview 4',
      },
      {
        src: '/img/jpn/article5.png',
        alt: 'Japanese article preview 5',
      },
    ],
  },
]

const resolveAssetPath = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

export const projects: PortfolioProject[] = rawProjects.map((project) => ({
  ...project,
  previewImageUrl: resolveAssetPath(project.previewImageUrl),
  screenshots: project.screenshots.map((screenshot) => ({
    ...screenshot,
    src: resolveAssetPath(screenshot.src),
  })),
}))