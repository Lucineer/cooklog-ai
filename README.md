# cooklog.ai

> The captain that remembers every recipe you've made, every meal you've planned, every ingredient you have.

A repo-native AI cooking companion built on Cloudflare Workers. CookLog AI is your kitchen memory — save recipes, plan meals, track your pantry, and ask an AI chef what to cook tonight.

## What it does

- **Recipe Memory** — Save, tag, search, and organize every recipe you love. Full CRUD with ingredient parsing and nutrition estimation.
- **Meal Planning** — Generate balanced weekly meal plans from your recipe collection, considering what you already have.
- **Pantry Tracker** — Track ingredients with expiry dates. Get alerts when items are about to go bad.
- **Shopping Lists** — Auto-generated from your meal plan, minus what's already in your pantry.
- **Nutrition Estimates** — Rough macro calculations (calories, protein, carbs, fat, fiber) for any saved recipe.
- **AI Chef Chat** — Ask "what can I make with chicken and rice?" and get real answers via DeepSeek streaming.
- **Ingredient Substitutions** — Practical swap suggestions for common ingredients.
- **Seasonal Suggestions** — Recipes highlighted based on what's in season right now.

## Architecture

```
cooklog-ai/
├── src/
│   ├── worker.ts          # Cloudflare Worker — all API routes, SSE streaming, landing page
│   ├── recipes/
│   │   └── engine.ts      # RecipeStore, MealPlanner, NutritionEstimator,
│   │                      # SubstitutionEngine, RecipeSearch, SeasonalSuggest
│   └── pantry/
│       └── tracker.ts     # PantryStore, ExpiryTracker, ShoppingListGenerator, PantryStats
├── public/
│   └── app.html           # Single-page app — warm terracotta/cream UI
├── wrangler.toml
├── package.json
└── tsconfig.json
```

## API

| Method | Route | Description |
|--------|-------|-------------|
| `POST` | `/api/chat` | SSE streaming chat with DeepSeek |
| `GET` | `/api/recipes?q=&tag=` | List/search/filter recipes |
| `POST` | `/api/recipes` | Create recipe |
| `GET/PUT/DELETE` | `/api/recipes/{id}` | Read/update/delete recipe |
| `POST` | `/api/meal-plan` | Generate weekly meal plan |
| `GET` | `/api/pantry` | List pantry items with expiry alerts |
| `POST` | `/api/pantry` | Add/remove pantry items |
| `GET` | `/api/shopping-list` | Generated from meal plan minus pantry |
| `GET` | `/api/nutrition/{id}` | Estimated macros for a recipe |
| `POST` | `/api/what-can-i-make` | Search recipes by available ingredients |
| `GET` | `/api/substitutions?ingredient=` | Ingredient substitution suggestions |
| `GET` | `/api/seasonal` | Seasonal recipe suggestions |
| `GET` | `/api/pantry/stats` | Pantry usage statistics |
| `GET` | `/` | Landing page |

## Setup

```bash
# Install dependencies
npm install

# Set your DeepSeek API key
npx wrangler secret put DEEPSEEK_API_KEY

# Run locally
npm run dev

# Deploy
npm run deploy
```

## Design

Warm terracotta (#C75B39), cream (#FFF8F0), sage green accents. Food-first, no clutter. The UI feels like a well-loved kitchen — warm, inviting, practical.

Built with TypeScript, Cloudflare Workers, KV storage, and a single-page HTML app. No build step for the frontend.

---

Built with warmth. Powered by AI.
