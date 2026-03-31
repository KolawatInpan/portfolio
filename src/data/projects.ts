export type ProjectPart = {
  name: string
  description: string
}

export type PortfolioProject = {
  slug: string
  title: string
  shortTitle: string
  previewText: string
  summary: string
  detail: string
  highlights: string[]
  techStack: string[]
  repoUrl: string
  parts: ProjectPart[]
}

export const projects: PortfolioProject[] = [
  {
    slug: 'nida-energy',
    title: 'NIDA Energy Trading & Management System',
    shortTitle: 'NIDA Energy',
    previewText: 'Energy trading workflows, asset visibility, and management.',
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
      'TypeScript',
      'Frontend Architecture',
      'Data Visualization',
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
  },
  {
    slug: 'converter',
    title: 'Converter Toolkit Suite',
    shortTitle: 'Converter',
    previewText: 'PDF utilities and Japanese learning tools in one suite.',
    summary:
      'A dual-purpose application combining practical PDF utility tools with interactive Japanese learning features for everyday productivity.',
    detail:
      'The converter project is split into two focused domains: document tools and language learning support. It is designed to keep workflows fast and straightforward while still offering useful feature depth.',
    highlights: [
      'Combines utility and education use cases under one project.',
      'Prioritizes straightforward UX for frequent daily tasks.',
      'Structured as modular parts, making future expansion easier.',
    ],
    techStack: [
      'React',
      'TypeScript',
      'PDF Processing',
      'Learning Tools',
    ],
    repoUrl: 'https://github.com/KolawatInpan/converter',
    parts: [
      {
        name: 'PDF Utility Tools',
        description:
          'Supports practical file workflows such as conversion and document-related helper actions.',
      },
      {
        name: 'Japanese Learning Tools',
        description:
          'Includes study-focused features to support vocabulary and learning practice.',
      },
    ],
  },
]