# CLAUDE.md — CookLog.ai Onboarding Guide

> **You are an AI coding assistant helping set up CookLog.ai.** Follow this guide step by step.

## What is CookLog.ai?

An AI cooking companion. Users search recipes, get technique explanations, ingredient substitutions, and meal planning help. Runs on Cloudflare Workers.

## Step 1: Deploy

```bash
npm install -g wrangler
npx wrangler login
npx wrangler deploy
```

Open the URL. You should see the CookLog landing page.

## Step 2: Add API Keys

```bash
# DeepInfra (recommended)
npx wrangler secret put DEEPINFRA_API_KEY
# Get key: https://deepinfra.com ($2 free credit)

# SiliconFlow (backup)
npx wrangler secret put SILICONFLOW_API_KEY
# Get key: https://cloud.siliconflow.cn
```

Verify: `curl YOUR_URL/api/models`

## Step 3: Customize

- **Recipe database**: Edit the seed data or add to KV
- **Dietary filters**: Modify the system prompt for allergies/preferences
- **Meal planning**: Add scheduling logic in the chat handler
- **Images**: Configure FLUX.1-schnell for food photos (needs SiliconFlow key)

## Architecture

```
src/
├── worker.ts       # Main entry — routes, HTML, chat
├── lib/            # Shared modules (model-router, knowledge-graph, etc.)
└── game/           # Recipe data, techniques, ingredients
```

## Troubleshooting

| Problem | Solution |
|---|---|
| No AI response | No API keys. Run Step 2. |
| Deployment 404 | Check `wrangler.toml` has `main = "src/worker.ts"` |
| Recipe not found | Add to seed data in `src/game/` |

## Costs

~$0.30/month for regular use. Cloudflare free tier covers hosting.

*Superinstance & Lucineer (DiGennaro et al.)*
