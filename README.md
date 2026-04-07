# cooklog-ai 🍴

You find a recipe online, but it's buried in a blog post. You tweak it to your taste, but forget your changes next time. This tool fixes that.

**Live Demo:** [cooklog-ai.casey-digennaro.workers.dev](https://cooklog-ai.casey-digennaro.workers.dev)

cooklog-ai is a self-hosted cooking assistant. It stores recipes, your adjustments, and basic pantry notes directly in your own code repository.

## What It Does
*   **Stores Recipes:** Save recipes as plain text files in your repo.
*   **Tracks Adjustments:** Log your modifications (e.g., "less salt") alongside the original.
*   **Basic Pantry List:** Maintain a simple `pantry.txt` file to note ingredients you have.
*   **Searches Your Data:** Ask questions like "what did I change last time?" and get answers from your own notes.

## Quick Start
1.  **Fork** this repository.
2.  **Clone** your fork and navigate into it.
3.  **Set two secrets** using Wrangler:
    ```bash
    npx wrangler secret put GITHUB_TOKEN
    npx wrangler secret put DEEPSEEK_API_KEY
    ```
4.  **Deploy:**
    ```bash
    npx wrangler deploy
    ```
Your instance will be live at your Worker URL. Edit files in your fork to add recipes or change logic.

## Features
*   **Fork-First Ownership:** All data (recipes, notes) lives in your GitHub repository.
*   **Zero Dependencies:** Runs on a single Cloudflare Worker.
*   **Plain Text Storage:** Uses Markdown and TXT files you can edit anywhere.
*   **Recipe Search:** Query your personal collection via natural language.

## One Limitation
It only processes text. You must manually copy-paste or type recipe instructions and ingredient lists into your repository files; it cannot scrape or extract them from websites for you.

## How It Works
This is a dedicated Cocapn Fleet agent. It's a single-purpose Cloudflare Worker that reads from and writes to your GitHub repository. It uses the GitHub API for storage and an LLM (via Deepseek) to interpret your queries against your data. There is no database; your repo is the source of truth.

Open source. MIT licensed. No tracking.

<div style="text-align:center;padding:16px;color:#64748b;font-size:.8rem"><a href="https://the-fleet.casey-digennaro.workers.dev" style="color:#64748b">The Fleet</a> &middot; <a href="https://cocapn.ai" style="color:#64748b">Cocapn</a></div>