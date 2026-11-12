# Infrastructure Next.js — PR1_TEST_3

Base Next.js (App Router, TypeScript) pour AG007.

## Structure

- `src/app/` — pages et layouts (App Router)
- `src/app/api/health/route.ts` — endpoint de santé
- `next.config.ts`, `tsconfig.json` — configuration

## Démarrage

```bash
npm install
npm run dev
```

Endpoint de santé : `GET /api/health` → `{ "status": "ok" }`
