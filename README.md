<p align="center">
  <img src="https://raw.githubusercontent.com/Lucineer/capitaine/master/docs/capitaine-logo.jpg" alt="Capitaine" width="120">
</p>

<h1 align="center">cooklog-ai</h1>

<p align="center">A private cooking assistant you host. No accounts. No third-party data.</p>

<p align="center">
  <a href="#quick-start">Quick Start</a> ·
  <a href="#features">Features</a> ·
  <a href="#limitation">Limitation</a> ·
  <a href="#the-fleet">The Fleet</a> ·
  <a href="https://cooklog-ai.casey-digennaro.workers.dev">Live Demo</a> ·
  <a href="https://github.com/Lucineer/cooklog-ai/issues">Issues</a>
</p>

---

You search for a recipe and get a long story and several pop-ups. This agent provides cooking assistance without the distraction.

cooklog-ai generates recipes, scales them, plans meals, and tracks your dietary preferences. You host it. Your data and preferences stay in your own repository.

---

### Why this exists
Many cooking tools are built as services. This one is structured as a single application you can fork and deploy yourself. You control it. Over time, it builds context specific to your kitchen and habits.

This is an open-source agent designed for long-term, private use.

---

**Powered by [Capitaine](https://github.com/Lucineer/capitaine) · [Cocapn](https://github.com/Lucineer/cocapn)**

This repository contains an autonomous Cocapn vessel that runs on Cloudflare Workers. It uses LLMs for reasoning, stores memory locally, and can optionally coordinate with other fleet agents.

## Quick Start

1.  Fork this repository.
2.  Clone your fork and navigate into it.
3.  Set up the required API keys as secrets with Wrangler:
    ```bash
    npx wrangler secret put GITHUB_TOKEN
    npx wrangler secret put DEEPSEEK_API_KEY # or your preferred LLM provider key
    ```
4.  Deploy:
    ```bash
    npx wrangler deploy
    ```

Your private instance will be live at your `.workers.dev` subdomain.

## Features

-   **Recipe Management:** Generate, scale, adjust, and convert units for recipes.
-   **Contextual Memory:** Stores your cooking history, preferences, and adjustments in your repository.
-   **Meal Planning:** Creates plans that adapt to your schedule and past meals.
-   **Dietary Rules:** Filters for allergies and suggests ingredient substitutions.
-   **Multi-Model Support:** Configure it to use various LLM APIs or local models via BYOK.
-   **Data Control:** All persistent state is stored in your own GitHub repository; no external accounts.

## Limitation

The assistant's long-term memory and context-building require your cooking data to be structured and committed to the repository. Initial setup involves configuring secrets and understanding the deployment process.

## Architecture

A single Cloudflare Worker (`src/worker.ts`) with a minimal cold start. Core logic is separated into modular libraries for key management, memory, and dietary rules.

```
src/worker.ts  # Main application and UI
lib/byok.ts    # Multi-LLM provider routing
lib/memory.ts  # Session and long-term context storage
lib/diet.ts    # Dietary rule and substitution engine
```

## The Fleet

cooklog-ai is part of the Cocapn Fleet, a network of specialized, interoperable agents. It can cooperate with other vessels, like a grocery lister or nutrition tracker, when you enable the connection.

---

<div align="center">
  <sub>Part of the <a href="https://the-fleet.casey-digennaro.workers.dev">Cocapn Fleet</a>. Built by <a href="https://superinstance.com">Superinstance</a> & <a href="https://lucineer.com">Lucineer (DiGennaro et al.)</a>.</sub>
</div>