# AI Automation Shivholic

Production-ready monorepo SaaS platform with Next.js web app, Express API, Prisma/PostgreSQL, Clerk auth, OpenAI, Resend, WhatsApp Cloud API, BullMQ queues, Redis, and Socket.IO.

## Architecture Plan
1. Monorepo using npm workspaces (`apps/*`, `packages/*`).
2. `apps/web`: Next.js App Router dashboard + AI chat/CRM/workflows UI.
3. `apps/api`: Express modular backend with validation, webhooks, queue workers.
4. `packages/ui`, `packages/shared`, `packages/types`: reusable UI and domain primitives.
5. `prisma/schema.prisma`: complete multi-tenant CRM + automation schema.
6. Deployment: Vercel (web), Railway/Render (api + worker + redis), Supabase PostgreSQL.

## Monorepo Structure
- `apps/web` - frontend
- `apps/api` - backend
- `packages/ui` - reusable UI primitives
- `packages/shared` - utility functions and config
- `packages/types` - domain types
- `prisma` - schema and migrations
- `docker` - container orchestration
- `scripts` - dev/prod scripts

## Quickstart
```bash
npm install
cp .env.example .env
npm run dev
```

## Deployment
- Frontend: deploy `apps/web` to Vercel.
- Backend: deploy `apps/api` as web service and worker process on Railway/Render.
- DB: set `DATABASE_URL` from Supabase.

See `.env.example` and `docker/docker-compose.yml` for required integrations.
