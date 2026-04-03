# COOKLOG-AI

> AI-powered recipe manager and cooking assistant — track recipes, meal plans, and cooking experiments — part of the [Cocapn](https://cocapn.ai) ecosystem

![Build](https://img.shields.io/badge/build-passing-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-blue)

## Description

AI-powered recipe manager and cooking assistant — track recipes, meal plans, and cooking experiments. Built as a Cloudflare Worker with BYOK (Bring Your Own Key) architecture.

## ✨ Features

Recipe logging and organization\n- Meal planning and weekly schedules\n- Ingredient inventory management\n- Cooking experiment tracking\n- Dietary preference filters\n- Nutrition estimates\n- Cooking timer integration

## 🚀 Getting Started

1. Clone the repo
2. `npm install`
3. `cp .dev.vars.example .dev.vars` and add your KV namespace ID
4. `npm run dev` to start locally
5. Visit `/setup` to configure your LLM provider

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/health` | GET | Health check |
| `/setup` | GET | BYOK setup wizard |
| `/api/chat` | POST | Chat with the AI agent |
| `/api/seed` | POST | Seed sample data |
| `/api/recipes` | GET | List all recipes |
| `/api/recipes` | POST | Create a recipe |
| `/api/recipes/:id` | GET | Get a recipe |
| `/api/recipes/:id` | PATCH | Update a recipe |
| `/api/recipes/:id` | DELETE | Delete a recipe |

## Architecture

Single Cloudflare Worker with inline HTML, BYOK LLM routing, and KV persistence. Zero runtime dependencies.

## License

MIT
