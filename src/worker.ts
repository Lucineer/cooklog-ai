// src/worker.ts — CookLog AI Cloudflare Worker
// The vessel that remembers every recipe, every meal, every ingredient.

import {
  RecipeStore,
  MealPlanner,
  NutritionEstimator,
  SubstitutionEngine,
  RecipeSearch,
  SeasonalSuggest,
  type Recipe,
} from "./recipes/engine";

import {
  PantryStore,
  ExpiryTracker,
  ShoppingListGenerator,
  PantryStats,
  type PantryItem,
} from "./pantry/tracker";

interface Env {
  COOKLOG_KV: KVNamespace;
  DEEPSEEK_API_URL: string;
  DEEPSEEK_API_KEY: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

function errorResponse(message: string, status = 400): Response {
  return jsonResponse({ error: message }, status);
}

async function streamChat(messages: { role: string; content: string }[], apiKey: string, apiUrl: string): Promise<Response> {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages,
      stream: true,
      temperature: 0.7,
      max_tokens: 2048,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    return errorResponse(`DeepSeek API error: ${err}`, 502);
  }

  return new Response(response.body, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

// ─── Landing Page ────────────────────────────────────────────────────────────

function landingPage(): Response {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CookLog AI — Your Kitchen Memory</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Georgia', 'Times New Roman', serif;
      background: #FFF8F0;
      color: #3D2B1F;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .hero {
      text-align: center;
      padding: 4rem 2rem;
      max-width: 700px;
    }
    .logo {
      font-size: 3.5rem;
      font-weight: 700;
      color: #C75B39;
      margin-bottom: 0.5rem;
      letter-spacing: -1px;
    }
    .tagline {
      font-size: 1.3rem;
      color: #8B7355;
      margin-bottom: 2.5rem;
      font-style: italic;
    }
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-bottom: 3rem;
    }
    .feature {
      background: white;
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 2px 12px rgba(199, 91, 57, 0.08);
      border: 1px solid #F0E6DC;
    }
    .feature h3 {
      color: #C75B39;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }
    .feature p {
      color: #8B7355;
      font-size: 0.9rem;
      line-height: 1.5;
    }
    .cta {
      display: inline-block;
      background: #C75B39;
      color: white;
      padding: 1rem 2.5rem;
      border-radius: 50px;
      font-size: 1.1rem;
      text-decoration: none;
      font-family: sans-serif;
      font-weight: 600;
      transition: background 0.2s;
      box-shadow: 0 4px 15px rgba(199, 91, 57, 0.3);
    }
    .cta:hover { background: #A84B2E; }
    .footer {
      margin-top: 3rem;
      color: #B8A898;
      font-size: 0.85rem;
    }
  </style>
</head>
<body>
  <div class="hero">
    <div class="logo">cooklog.ai</div>
    <div class="tagline">The captain that remembers every recipe you've made, every meal you've planned, every ingredient you have.</div>
    <div class="features">
      <div class="feature">
        <h3>Recipe Memory</h3>
        <p>Save, tag, and search every recipe you've ever loved.</p>
      </div>
      <div class="feature">
        <h3>Meal Planning</h3>
        <p>Generate balanced weekly plans from your collection.</p>
      </div>
      <div class="feature">
        <h3>Pantry Tracker</h3>
        <p>Know what you have, what's expiring, what to buy.</p>
      </div>
      <div class="feature">
        <h3>Nutrition Insights</h3>
        <p>Estimate macros for any recipe in your collection.</p>
      </div>
    </div>
    <a href="/app.html" class="cta">Open CookLog</a>
    <div class="footer">Built with warmth. Powered by AI.</div>
  </div>
</body>
</html>`;
  return new Response(html, {
    headers: { "Content-Type": "text/html" },
  });
}

// ─── Router ──────────────────────────────────────────────────────────────────

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    // Handle CORS preflight
    if (method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    const recipeStore = new RecipeStore(env.COOKLOG_KV);
    const pantryStore = new PantryStore(env.COOKLOG_KV);
    const nutrition = new NutritionEstimator();
    const expiryTracker = new ExpiryTracker();
    const mealPlanner = new MealPlanner(recipeStore, nutrition);
    const recipeSearch = new RecipeSearch(recipeStore);
    const seasonal = new SeasonalSuggest(recipeStore);
    const substitutions = new SubstitutionEngine();
    const shoppingGen = new ShoppingListGenerator(pantryStore);
    const pantryStats = new PantryStats(pantryStore, expiryTracker);

    try {
      // ─── Landing ───────────────────────────────────
      if (path === "/" && method === "GET") {
        return landingPage();
      }

      // ─── Chat (SSE) ────────────────────────────────
      if (path === "/api/chat" && method === "POST") {
        const body = (await request.json()) as { messages: { role: string; content: string }[] };
        if (!body.messages?.length) return errorResponse("messages required");

        // Inject system prompt with kitchen context
        const pantryItems = await pantryStore.list();
        const recipes = await recipeStore.list();
        const systemPrompt = `You are CookLog AI, a warm and knowledgeable cooking companion. You help home cooks with recipes, meal planning, ingredient substitutions, and cooking advice.

Current pantry (${pantryItems.length} items): ${pantryItems.slice(0, 20).map((p) => `${p.quantity} ${p.unit} ${p.name}`).join(", ")}

Saved recipes (${recipes.length}): ${recipes.slice(0, 10).map((r) => r.title).join(", ")}

Be conversational, encouraging, and practical. When suggesting recipes, consider what ingredients the user has. Give specific measurements and cooking times. If asked about substitutions, suggest practical alternatives.`;

        const messages = [{ role: "system", content: systemPrompt }, ...body.messages];
        return streamChat(messages, env.DEEPSEEK_API_KEY, env.DEEPSEEK_API_URL);
      }

      // ─── Recipes CRUD ──────────────────────────────
      if (path === "/api/recipes" && method === "GET") {
        const query = url.searchParams.get("q");
        const tag = url.searchParams.get("tag");
        let recipes: Recipe[];
        if (query) recipes = await recipeStore.search(query);
        else if (tag) recipes = await recipeStore.searchByTag(tag);
        else recipes = await recipeStore.list();
        return jsonResponse(recipes);
      }

      if (path === "/api/recipes" && method === "POST") {
        const body = (await request.json()) as Partial<Recipe>;
        if (!body.title) return errorResponse("title is required");
        const recipe: Recipe = {
          id: body.id || crypto.randomUUID(),
          title: body.title,
          ingredients: body.ingredients || [],
          steps: body.steps || [],
          time: body.time || 30,
          servings: body.servings || 4,
          tags: body.tags || [],
          createdAt: "",
          updatedAt: "",
        };
        const saved = await recipeStore.save(recipe);
        return jsonResponse(saved, 201);
      }

      // Single recipe operations
      const recipeMatch = path.match(/^\/api\/recipes\/(.+)$/);
      if (recipeMatch) {
        const id = recipeMatch[1];

        if (method === "GET") {
          const recipe = await recipeStore.get(id);
          if (!recipe) return errorResponse("recipe not found", 404);
          return jsonResponse(recipe);
        }

        if (method === "PUT") {
          const body = (await request.json()) as Partial<Recipe>;
          const existing = await recipeStore.get(id);
          if (!existing) return errorResponse("recipe not found", 404);
          const updated = await recipeStore.save({ ...existing, ...body, id });
          return jsonResponse(updated);
        }

        if (method === "DELETE") {
          await recipeStore.delete(id);
          return jsonResponse({ deleted: true });
        }
      }

      // ─── Meal Plan ─────────────────────────────────
      if (path === "/api/meal-plan" && method === "POST") {
        const body = (await request.json()) as { startDate?: string; pantryItems?: string[] };
        const plan = await mealPlanner.generateWeek(body.startDate, body.pantryItems);
        return jsonResponse(plan);
      }

      // ─── Pantry ────────────────────────────────────
      if (path === "/api/pantry" && method === "GET") {
        const items = await pantryStore.list();
        const alerts = expiryTracker.check(items);
        return jsonResponse({ items, alerts });
      }

      if (path === "/api/pantry" && method === "POST") {
        const body = (await request.json()) as { action: "add" | "remove"; item?: PantryItem; id?: string };
        if (body.action === "add" && body.item) {
          const item: PantryItem = {
            id: body.item.id || crypto.randomUUID(),
            name: body.item.name,
            quantity: body.item.quantity,
            unit: body.item.unit,
            category: body.item.category || "Other",
            expiry: body.item.expiry,
            addedAt: "",
          };
          const saved = await pantryStore.add(item);
          return jsonResponse(saved, 201);
        }
        if (body.action === "remove" && body.id) {
          await pantryStore.remove(body.id);
          return jsonResponse({ removed: true });
        }
        return errorResponse("action (add/remove) with item or id required");
      }

      // ─── Shopping List ─────────────────────────────
      if (path === "/api/shopping-list" && method === "GET") {
        // Generate from latest meal plan stored in KV
        const raw = await env.COOKLOG_KV.get("mealplan:latest");
        if (!raw) return errorResponse("no meal plan found — generate one first via POST /api/meal-plan");
        const plan = JSON.parse(raw);
        const items = await shoppingGen.generate(plan);
        return jsonResponse(items);
      }

      // ─── Nutrition ─────────────────────────────────
      const nutritionMatch = path.match(/^\/api\/nutrition\/(.+)$/);
      if (nutritionMatch && method === "GET") {
        const id = decodeURIComponent(nutritionMatch[1]);
        const recipe = await recipeStore.get(id);
        if (!recipe) return errorResponse("recipe not found", 404);
        const profile = nutrition.estimate(recipe.ingredients);
        return jsonResponse({
          recipeId: recipe.id,
          recipeTitle: recipe.title,
          perServing: {
            calories: Math.round(profile.calories / recipe.servings),
            protein: Math.round((profile.protein / recipe.servings) * 10) / 10,
            carbs: Math.round((profile.carbs / recipe.servings) * 10) / 10,
            fat: Math.round((profile.fat / recipe.servings) * 10) / 10,
            fiber: Math.round((profile.fiber / recipe.servings) * 10) / 10,
          },
          total: profile,
        });
      }

      // ─── Search by ingredients ─────────────────────
      if (path === "/api/what-can-i-make" && method === "POST") {
        const body = (await request.json()) as { ingredients: string[] };
        if (!body.ingredients?.length) return errorResponse("ingredients array required");
        const results = await recipeSearch.findByIngredients(body.ingredients);
        return jsonResponse(results);
      }

      // ─── Substitutions ─────────────────────────────
      if (path === "/api/substitutions" && method === "GET") {
        const ingredient = url.searchParams.get("ingredient");
        if (ingredient) {
          return jsonResponse({ ingredient, substitutions: substitutions.suggest(ingredient) });
        }
        return jsonResponse({ available: substitutions.listAvailable() });
      }

      // ─── Seasonal ──────────────────────────────────
      if (path === "/api/seasonal" && method === "GET") {
        const suggestions = await seasonal.suggest();
        const info = seasonal.getSeasonalIngredients();
        return jsonResponse({ ...info, recipes: suggestions });
      }

      // ─── Pantry Stats ──────────────────────────────
      if (path === "/api/pantry/stats" && method === "GET") {
        const stats = await pantryStats.getStats();
        return jsonResponse(stats);
      }

      // ─── 404 ───────────────────────────────────────
      return errorResponse("not found", 404);

    } catch (err) {
      console.error("Worker error:", err);
      return errorResponse(`internal error: ${(err as Error).message}`, 500);
    }
  },
};
