# AB Customs Storefront

Vercel-ready React + Vite storefront for AB Customs.

## Deploy to Vercel

Import the repository or upload this project ZIP to Vercel with the repository root as the project root. The included `vercel.json` already configures:

- pnpm dependency installation
- the storefront production build
- the static output directory
- SPA rewrites for client-side routes

No environment variables are required for the current storefront.

## Local verification

```bash
pnpm install --frozen-lockfile
pnpm --filter @workspace/ab-customs-storefront run typecheck
pnpm --filter @workspace/ab-customs-storefront run build
```

The Vercel output is generated at `artifacts/ab-customs-storefront/dist/public`.