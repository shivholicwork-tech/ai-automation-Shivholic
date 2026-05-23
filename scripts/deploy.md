# Deployment Runbook

## 1) Prerequisites
- GitHub repository connected to Vercel and Render/Railway.
- Supabase PostgreSQL instance provisioned.
- Redis instance provisioned (Upstash/Render/Redis Cloud).
- Environment variables configured from `.env.example`.

## 2) Frontend (Vercel)
- Import repository in Vercel.
- Set **Root Directory** to `apps/web`.
- Set build command: `npm run build -w @shivholic/web`.
- Set install command: `npm install`.
- Set `NEXT_PUBLIC_API_BASE_URL` to your deployed API base URL (for `/api/*` rewrite through Next.js).

## 3) Backend (Render)
- `render.yaml` is included for Infrastructure as Code.
- Deploy both services:
  - `ai-automation-shivholic-api` web service.
  - `ai-automation-shivholic-worker` background worker.
- Configure secure environment values in Render dashboard.

## 4) Backend (Railway Alternative)
- `railway.json` is included.
- Create project from repo and set service start command from `railway.json`.
- Add PostgreSQL/Redis plugins or external connection URLs.

## 5) Database
- Set `DATABASE_URL` from Supabase in backend services.
- Run migrations in CI/CD release command:
  - `npx prisma migrate deploy`

## 6) Health Verification
- API health endpoint: `GET /health`
- API module health endpoint: `GET /api/health`
- Smoke test web → api rewrite with `/api/health` from frontend domain.
