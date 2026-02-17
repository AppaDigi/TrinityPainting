# Next.js Client Boilerplate

Reusable starter for client websites built with:

- Next.js `16.1.6`
- React `19.2.4`
- TypeScript
- Tailwind CSS v4
- ESLint

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev`: Start local dev server.
- `npm run build`: Production build.
- `npm run start`: Run production build.
- `npm run lint`: Lint codebase.
- `npm run typecheck`: TypeScript check without emit.
- `npm run check`: Lint + typecheck + build (recommended before merge/deploy).
- `npm run deps:check`: Show outdated packages.
- `npm run deps:update`: Update packages within allowed semver ranges.
- `npm run deps:update:latest`: Upgrade to latest versions (including majors) and reinstall.

## Automatic Dependency Updates

This repo includes:

- `.github/dependabot.yml`: Weekly dependency update PRs for npm and GitHub Actions.
- `.github/workflows/dependabot-auto-merge.yml`: Auto-merges Dependabot patch/minor PRs (major updates stay manual).
- `.github/workflows/ci.yml`: Runs `npm run check` on PRs and pushes to `main`.

To use auto-updates, push this repo to GitHub with Actions enabled.

## Using This For New Clients

1. Create a new repo from this boilerplate.
2. Update `src/app/page.tsx` and `src/app/layout.tsx` metadata/content for the client.
3. Add environment variables in `.env.local`.
4. Run `npm run check`.
5. Deploy (Vercel, Netlify, or your preferred platform).
