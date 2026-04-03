// src/worker.ts — CookLog AI Cloudflare Worker

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
// The vessel that remembers every recipe, every meal, every ingredient.

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
import {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  RecipeStore,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  MealPlanner,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  NutritionEstimator,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  SubstitutionEngine,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  RecipeSearch,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  SeasonalSuggest,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  type Recipe,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
} from "./recipes/engine";

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
import {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  PantryStore,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  ExpiryTracker,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  ShoppingListGenerator,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  PantryStats,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  type PantryItem,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
} from "./pantry/tracker";

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
interface Env {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  COOKLOG_KV: KVNamespace;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  DEEPSEEK_API_URL: string;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  DEEPSEEK_API_KEY: string;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
}

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
// ─── Helpers ─────────────────────────────────────────────────────────────────

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
function jsonResponse(data: unknown, status = 200): Response {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  return new Response(JSON.stringify(data), {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    status,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    headers: {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      "Content-Type": "application/json",

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      "Access-Control-Allow-Origin": "*",

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      "Access-Control-Allow-Headers": "Content-Type",

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    },

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  });

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
}

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
function errorResponse(message: string, status = 400): Response {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  return jsonResponse({ error: message }, status);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
}

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
async function streamChat(messages: { role: string; content: string }[], apiKey: string, apiUrl: string): Promise<Response> {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  const response = await fetch(apiUrl, {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    method: "POST",

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    headers: {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      "Content-Type": "application/json",

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      Authorization: `Bearer ${apiKey}`,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    },

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    body: JSON.stringify({

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      model: "deepseek-chat",

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      messages,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      stream: true,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      temperature: 0.7,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      max_tokens: 2048,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    }),

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  });

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  if (!response.ok) {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    const err = await response.text();

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    return errorResponse(`DeepSeek API error: ${err}`, 502);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  return new Response(response.body, {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    headers: {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      "Content-Type": "text/event-stream",

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      "Cache-Control": "no-cache",

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      Connection: "keep-alive",

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      "Access-Control-Allow-Origin": "*",

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    },

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  });

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
}

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
// ─── Landing Page ────────────────────────────────────────────────────────────

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
function landingPage(): Response {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  const html = `<!DOCTYPE html>

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
<html lang="en">

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
<head>

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  <meta charset="UTF-8">

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  <title>CookLog AI — Your Kitchen Memory</title>

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  <style>

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    * { margin: 0; padding: 0; box-sizing: border-box; }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    body {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      font-family: 'Georgia', 'Times New Roman', serif;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      background: #FFF8F0;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      color: #3D2B1F;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      min-height: 100vh;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      display: flex;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      flex-direction: column;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      align-items: center;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      justify-content: center;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    .hero {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      text-align: center;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      padding: 4rem 2rem;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      max-width: 700px;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    .logo {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      font-size: 3.5rem;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      font-weight: 700;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      color: #C75B39;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      margin-bottom: 0.5rem;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      letter-spacing: -1px;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    .tagline {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      font-size: 1.3rem;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      color: #8B7355;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      margin-bottom: 2.5rem;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      font-style: italic;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    .features {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      display: grid;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      gap: 1.5rem;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      margin-bottom: 3rem;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    .feature {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      background: white;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      border-radius: 12px;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      padding: 1.5rem;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      box-shadow: 0 2px 12px rgba(199, 91, 57, 0.08);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      border: 1px solid #F0E6DC;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    .feature h3 {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      color: #C75B39;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      font-size: 1.1rem;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      margin-bottom: 0.5rem;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    .feature p {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      color: #8B7355;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      font-size: 0.9rem;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      line-height: 1.5;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    .cta {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      display: inline-block;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      background: #C75B39;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      color: white;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      padding: 1rem 2.5rem;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      border-radius: 50px;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      font-size: 1.1rem;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      text-decoration: none;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      font-family: sans-serif;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      font-weight: 600;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      transition: background 0.2s;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      box-shadow: 0 4px 15px rgba(199, 91, 57, 0.3);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    .cta:hover { background: #A84B2E; }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    .footer {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      margin-top: 3rem;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      color: #B8A898;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      font-size: 0.85rem;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  </style>

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
</head>

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
<body>

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  <div class="hero">

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    <div class="logo">cooklog.ai</div>

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    <div class="tagline">The captain that remembers every recipe you've made, every meal you've planned, every ingredient you have.</div>

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    <div class="features">

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      <div class="feature">

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        <h3>Recipe Memory</h3>

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        <p>Save, tag, and search every recipe you've ever loved.</p>

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      </div>

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      <div class="feature">

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        <h3>Meal Planning</h3>

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        <p>Generate balanced weekly plans from your collection.</p>

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      </div>

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      <div class="feature">

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        <h3>Pantry Tracker</h3>

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        <p>Know what you have, what's expiring, what to buy.</p>

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      </div>

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      <div class="feature">

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        <h3>Nutrition Insights</h3>

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        <p>Estimate macros for any recipe in your collection.</p>

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      </div>

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    </div>

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    <a href="/app.html" class="cta">Open CookLog</a>

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    <div class="footer">Built with warmth. Powered by AI.</div>

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  </div>

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
</body>

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
</html>`;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  return new Response(html, {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    headers: { "Content-Type": "text/html" },

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  });

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
}

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
// ─── Router ──────────────────────────────────────────────────────────────────

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
export default {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  async fetch(request: Request, env: Env): Promise<Response> {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    const url = new URL(request.url);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    const path = url.pathname;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    const method = request.method;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    // Handle CORS preflight

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    if (method === "OPTIONS") {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      return new Response(null, {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        headers: {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          "Access-Control-Allow-Origin": "*",

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          "Access-Control-Allow-Headers": "Content-Type",

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        },

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      });

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    const recipeStore = new RecipeStore(env.COOKLOG_KV);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    const pantryStore = new PantryStore(env.COOKLOG_KV);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    const nutrition = new NutritionEstimator();

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    const expiryTracker = new ExpiryTracker();

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    const mealPlanner = new MealPlanner(recipeStore, nutrition);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    const recipeSearch = new RecipeSearch(recipeStore);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    const seasonal = new SeasonalSuggest(recipeStore);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    const substitutions = new SubstitutionEngine();

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    const shoppingGen = new ShoppingListGenerator(pantryStore);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    const pantryStats = new PantryStats(pantryStore, expiryTracker);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    try {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      // ─── Landing ───────────────────────────────────

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      if (path === "/" && method === "GET") {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        return landingPage();

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      // ─── Chat (SSE) ────────────────────────────────

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      if (path === "/api/chat" && method === "POST") {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const body = (await request.json()) as { messages: { role: string; content: string }[] };

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        if (!body.messages?.length) return errorResponse("messages required");

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        // Inject system prompt with kitchen context

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const pantryItems = await pantryStore.list();

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const recipes = await recipeStore.list();

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const systemPrompt = `You are CookLog AI, a warm and knowledgeable cooking companion. You help home cooks with recipes, meal planning, ingredient substitutions, and cooking advice.

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
Current pantry (${pantryItems.length} items): ${pantryItems.slice(0, 20).map((p) => `${p.quantity} ${p.unit} ${p.name}`).join(", ")}

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
Saved recipes (${recipes.length}): ${recipes.slice(0, 10).map((r) => r.title).join(", ")}

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
Be conversational, encouraging, and practical. When suggesting recipes, consider what ingredients the user has. Give specific measurements and cooking times. If asked about substitutions, suggest practical alternatives.`;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const messages = [{ role: "system", content: systemPrompt }, ...body.messages];

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        return streamChat(messages, env.DEEPSEEK_API_KEY, env.DEEPSEEK_API_URL);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      // ─── Recipes CRUD ──────────────────────────────

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      if (path === "/api/recipes" && method === "GET") {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const query = url.searchParams.get("q");

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const tag = url.searchParams.get("tag");

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        let recipes: Recipe[];

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        if (query) recipes = await recipeStore.search(query);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        else if (tag) recipes = await recipeStore.searchByTag(tag);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        else recipes = await recipeStore.list();

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        return jsonResponse(recipes);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      if (path === "/api/recipes" && method === "POST") {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const body = (await request.json()) as Partial<Recipe>;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        if (!body.title) return errorResponse("title is required");

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const recipe: Recipe = {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          id: body.id || crypto.randomUUID(),

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          title: body.title,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          ingredients: body.ingredients || [],

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          steps: body.steps || [],

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          time: body.time || 30,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          servings: body.servings || 4,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          tags: body.tags || [],

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          createdAt: "",

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          updatedAt: "",

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        };

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const saved = await recipeStore.save(recipe);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        return jsonResponse(saved, 201);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      // Single recipe operations

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      const recipeMatch = path.match(/^\/api\/recipes\/(.+)$/);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      if (recipeMatch) {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const id = recipeMatch[1];

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        if (method === "GET") {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          const recipe = await recipeStore.get(id);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          if (!recipe) return errorResponse("recipe not found", 404);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          return jsonResponse(recipe);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        if (method === "PUT") {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          const body = (await request.json()) as Partial<Recipe>;

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          const existing = await recipeStore.get(id);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          if (!existing) return errorResponse("recipe not found", 404);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          const updated = await recipeStore.save({ ...existing, ...body, id });

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          return jsonResponse(updated);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        if (method === "DELETE") {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          await recipeStore.delete(id);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          return jsonResponse({ deleted: true });

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      // ─── Meal Plan ─────────────────────────────────

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      if (path === "/api/meal-plan" && method === "POST") {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const body = (await request.json()) as { startDate?: string; pantryItems?: string[] };

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const plan = await mealPlanner.generateWeek(body.startDate, body.pantryItems);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        return jsonResponse(plan);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      // ─── Pantry ────────────────────────────────────

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      if (path === "/api/pantry" && method === "GET") {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const items = await pantryStore.list();

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const alerts = expiryTracker.check(items);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        return jsonResponse({ items, alerts });

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      if (path === "/api/pantry" && method === "POST") {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const body = (await request.json()) as { action: "add" | "remove"; item?: PantryItem; id?: string };

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        if (body.action === "add" && body.item) {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          const item: PantryItem = {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
            id: body.item.id || crypto.randomUUID(),

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
            name: body.item.name,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
            quantity: body.item.quantity,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
            unit: body.item.unit,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
            category: body.item.category || "Other",

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
            expiry: body.item.expiry,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
            addedAt: "",

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          };

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          const saved = await pantryStore.add(item);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          return jsonResponse(saved, 201);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        if (body.action === "remove" && body.id) {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          await pantryStore.remove(body.id);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          return jsonResponse({ removed: true });

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        return errorResponse("action (add/remove) with item or id required");

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      // ─── Shopping List ─────────────────────────────

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      if (path === "/api/shopping-list" && method === "GET") {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        // Generate from latest meal plan stored in KV

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const raw = await env.COOKLOG_KV.get("mealplan:latest");

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        if (!raw) return errorResponse("no meal plan found — generate one first via POST /api/meal-plan");

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const plan = JSON.parse(raw);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const items = await shoppingGen.generate(plan);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        return jsonResponse(items);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      // ─── Nutrition ─────────────────────────────────

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      const nutritionMatch = path.match(/^\/api\/nutrition\/(.+)$/);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      if (nutritionMatch && method === "GET") {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const id = decodeURIComponent(nutritionMatch[1]);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const recipe = await recipeStore.get(id);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        if (!recipe) return errorResponse("recipe not found", 404);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const profile = nutrition.estimate(recipe.ingredients);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        return jsonResponse({

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          recipeId: recipe.id,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          recipeTitle: recipe.title,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          perServing: {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
            calories: Math.round(profile.calories / recipe.servings),

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
            protein: Math.round((profile.protein / recipe.servings) * 10) / 10,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
            carbs: Math.round((profile.carbs / recipe.servings) * 10) / 10,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
            fat: Math.round((profile.fat / recipe.servings) * 10) / 10,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
            fiber: Math.round((profile.fiber / recipe.servings) * 10) / 10,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          },

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          total: profile,

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        });

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      // ─── Search by ingredients ─────────────────────

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      if (path === "/api/what-can-i-make" && method === "POST") {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const body = (await request.json()) as { ingredients: string[] };

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        if (!body.ingredients?.length) return errorResponse("ingredients array required");

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const results = await recipeSearch.findByIngredients(body.ingredients);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        return jsonResponse(results);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      // ─── Substitutions ─────────────────────────────

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      if (path === "/api/substitutions" && method === "GET") {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const ingredient = url.searchParams.get("ingredient");

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        if (ingredient) {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
          return jsonResponse({ ingredient, substitutions: substitutions.suggest(ingredient) });

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        return jsonResponse({ available: substitutions.listAvailable() });

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      // ─── Seasonal ──────────────────────────────────

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      if (path === "/api/seasonal" && method === "GET") {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const suggestions = await seasonal.suggest();

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const info = seasonal.getSeasonalIngredients();

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        return jsonResponse({ ...info, recipes: suggestions });

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      // ─── Pantry Stats ──────────────────────────────

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      if (path === "/api/pantry/stats" && method === "GET") {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        const stats = await pantryStats.getStats();

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
        return jsonResponse(stats);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      // ─── 404 ───────────────────────────────────────

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      return errorResponse("not found", 404);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }


      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    } catch (err) {

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      console.error("Worker error:", err);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
      return errorResponse(`internal error: ${(err as Error).message}`, 500);

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
    }

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
  },

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
};

      if (path === '/api/efficiency' && method === 'GET') {        return jsonResponse({ totalCached: 0, totalHits: 0, cacheHitRate: 0, tokensSaved: 0, repo: 'cooklog-ai', timestamp: Date.now() });      }
