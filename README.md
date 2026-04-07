<p align="center">
  <img src="https://raw.githubusercontent.com/Lucineer/capitaine/master/docs/capitaine-logo.jpg" alt="Capitaine" width="120">
</p>

<h1 align="center">cooklog-ai</h1>

<p align="center">A self-hosted cooking assistant. No accounts or third-party data required.</p>

<p align="center">
  <a href="#quick-start">Quick Start</a> ·
  <a href="#features">Features</a> ·
  <a href="#limitations">Limitations</a> ·
  <a href="#the-fleet">The Fleet</a> ·
  <a href="https://cooklog-ai.casey-digennaro.workers.dev">Demo</a> ·
  <a href="https://github.com/Lucineer/cooklog-ai/issues">Issues</a>
</p>

---

You are in your kitchen. You have ingredients and a question. You search online.

You find cookie banners, auto-play videos, and a blog post. The cooking instructions remain unclear.

This tool helps with that.

cooklog-ai provides direct answers for cooking. It learns from your adjustments and stores all data in your repository. You run it and control the information.

---

### Why this exists
Most cooking tools are built as services requiring accounts and tracking. They don't adapt to your specific kitchen, preferences, or schedule.

This is a tool, not a service. You fork it, deploy it, and it runs independently. It improves with use, and no one can alter its functionality or access your data without your consent.

It is open source, MIT licensed, and runs on Cloudflare Workers.

---

### How it works
This is a dedicated Cocapn Fleet agent, not a generic LLM wrapper:
- It avoids long preambles in recipe responses
- It remembers adjustments you make to recipes over time
- All memory and preferences are stored only in your repository
- It adapts to your units, dietary restrictions, and schedule
- It can optionally coordinate with other Fleet agents

There are no paywalls, feature gates, or changing terms of service.

---

**Powered by [Capitaine](https://github.com/Lucineer/capitaine) · [Cocapn](https://github.com/Lucineer/cocapn)**

This repository contains an autonomous Cocapn vessel. It uses LLMs for reasoning, stores memory locally, and can optionally coordinate with other fleet agents.

## Quick Start

1.  **Fork this repository** on GitHub.
2.  Clone your fork and navigate into the directory.
3.  Set required secrets:
    ```bash
    npx wrangler secret put GITHUB_TOKEN
    npx wrangler secret put DEEPSEEK_API_KEY
    ```
4.  Deploy:
    ```bash
    npx wrangler deploy
    ```

Your instance will be available at your `.workers.dev` subdomain.

## Features

-   **Recipe Management:** Generate, scale, and adjust recipes with unit conversion.
-   **Contextual Memory:** Stores cooking history and preferences in your repository.
-   **Meal Planning:** Creates plans adapted to your schedule and past meals.
-   **Dietary Rules:** Filters for allergies and suggests ingredient substitutions.
-   **Multi-Model Support:** Configure with various LLM APIs or local models.
-   **Full Data Control:** All persistent state resides in your GitHub repository.

## Limitations
This assistant builds long-term context from your cooking logs stored as files in your repository. It does not currently offer real-time synchronization across devices or a dedicated mobile interface. You interact with it via its web interface or API.

## The Fleet
This agent is part of the Cocapn Fleet—an open-source agent runtime and fleet protocol. It can operate independently or in coordination with other agents you run.

<div align="center">
  <a href="https://the-fleet.casey-digennaro.workers.dev">Explore the Fleet</a> ·
  <a href="https://cocapn.ai">Learn about Cocapn</a>
</div>

---

Attribution: Superinstance & Lucineer (DiGennaro et al.)