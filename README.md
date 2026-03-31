# Portfolio Frontend

Portfolio website built with React + TypeScript + Vite.

## Features

- Project list page with card-based layout.
- Project detail page per project.
- Data-driven project metadata in one place.
- Ready for GitHub Pages deployment via GitHub Actions.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Ensure your default branch is `main`.
3. In GitHub repository settings:
   - Open `Settings > Pages`
   - Set `Build and deployment` source to `GitHub Actions`
4. Push to `main` and wait for the `Deploy Portfolio` workflow to complete.

The workflow builds with:

```bash
npm run build -- --base=/<repo-name>/
```

so the app works correctly under GitHub Pages project paths.
