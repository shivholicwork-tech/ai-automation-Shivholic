# AI Automation Shivholic

Enterprise-grade AI automation SaaS monorepo starter with a Next.js web app, Express API, Prisma/PostgreSQL schema, Socket.IO realtime, and deployment manifests for Vercel + Render/Railway.

## Included
- Monorepo workspaces: `apps/*`, `packages/*`.
- Frontend app: `apps/web` (Next.js App Router + Tailwind).
- Backend app: `apps/api` (Express + Socket.IO).
- Database schema: `prisma/schema.prisma`.
- Infra: `docker/`, `vercel.json`, `render.yaml`, `railway.json`.

## Run locally
```bash
npm install
cp .env.example .env
npm run dev
```

## Build
```bash
npm run build
```

## Deploy
Follow `scripts/deploy.md` for production rollout to:
- Vercel for `apps/web`
- Render/Railway for `apps/api` + worker
- Supabase PostgreSQL + Redis provider
