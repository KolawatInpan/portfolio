# Portfolio Frontend
https://kolawatinpan.github.io/portfolio/
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

## Local Development with Docker Compose (Realtime)

Use this when you want hot reload without committing or pushing code.

```bash
docker compose up --build
```

Then open:

```text
http://localhost:5173
```

Notes:

- Code changes are reflected in realtime via Vite HMR.
- You do not need to commit to see local changes.
- Commit and push are only needed to redeploy on GitHub Pages.

Stop container:

```bash
docker compose down
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

If workflow fails at `actions/configure-pages` with `Get Pages site failed`:

1. Check repository visibility and plan support for GitHub Pages.
2. Make sure you have admin permission on the repository.
3. Open `Settings > Pages` once and confirm Pages is enabled (source can stay on GitHub Actions).
4. Re-run the failed workflow.

The workflow builds with:

```bash
npm run build -- --base=/<repo-name>/
```

so the app works correctly under GitHub Pages project paths.
