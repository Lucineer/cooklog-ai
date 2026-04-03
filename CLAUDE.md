# CLAUDE.md — CookLog

## Project Overview
CookLog is an AI-powered AI-powered recipe manager and cooking assistant — track recipes, meal plans, and cooking experiments, built as a Cloudflare Worker with BYOK architecture. Part of the Cocapn ecosystem at cocapn.ai.

GitHub Organization: **Lucineer**

## Architecture
Single Cloudflare Worker: inline HTML UI + API routes + BYOK LLM routing + KV persistence.

### Key Routes
- `/health` — Health check
- `/setup` — BYOK provider setup
- `/api/chat` — LLM chat with recipes context
- `/api/seed` — Seed sample data
- `/api/recipes` — CRUD for recipes

## Code Style
- TypeScript throughout, no build step
- Zero runtime dependencies
- Inline HTML pattern (no ASSETS binding)
- Brand accent color: #e8762d
- All commits: `Author: Superinstance`

## Key Commands
```bash
wrangler dev      # Local dev
wrangler deploy   # Deploy to Cloudflare
```

## What NOT to Change
- BYOK module structure (config discovery cascade)
- Inline HTML pattern
- Zero-dependency constraint
- KV binding name `MEMORY`
