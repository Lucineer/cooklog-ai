// src/recipes/engine.ts — The heart of CookLog AI
// RecipeStore, MealPlanner, NutritionEstimator, SubstitutionEngine, RecipeSearch, SeasonalSuggest

export interface Recipe {
  id: string;
  title: string;
  ingredients: Ingredient[];
  steps: string[];
  time: number; // minutes
  servings: number;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
  category?: string;
}

export interface NutritionProfile {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
}

export interface MealPlan {
  id: string;
  weekStart: string;
  days: DayPlan[];
  createdAt: string;
}

export interface DayPlan {
  date: string;
  meals: { breakfast?: Recipe; lunch?: Recipe; dinner?: Recipe; snack?: Recipe };
}

// ─── RecipeStore ─────────────────────────────────────────────────────────────

export class RecipeStore {
  constructor(private kv: KVNamespace, private prefix = "recipe:") {}

  async save(recipe: Recipe): Promise<Recipe> {
    const now = new Date().toISOString();
    const updated = { ...recipe, updatedAt: now, createdAt: recipe.createdAt || now };
    await this.kv.put(this.prefix + updated.id, JSON.stringify(updated));
    if (updated.tags.length) {
      await this.indexTags(updated.id, updated.tags);
    }
    return updated;
  }

  async get(id: string): Promise<Recipe | null> {
    const raw = await this.kv.get(this.prefix + id);
    return raw ? JSON.parse(raw) : null;
  }

  async list(): Promise<Recipe[]> {
    const list = await this.kv.list({ prefix: this.prefix });
    const recipes: Recipe[] = [];
    for (const key of list.keys) {
      const raw = await this.kv.get(key.name);
      if (raw) recipes.push(JSON.parse(raw));
    }
    return recipes.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  }

  async delete(id: string): Promise<void> {
    const recipe = await this.get(id);
    if (recipe) {
      for (const tag of recipe.tags) {
        await this.removeFromTagIndex(id, tag);
      }
    }
    await this.kv.delete(this.prefix + id);
  }

  async search(query: string): Promise<Recipe[]> {
    const all = await this.list();
    const q = query.toLowerCase();
    return all.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.tags.some((t) => t.toLowerCase().includes(q)) ||
        r.ingredients.some((i) => i.name.toLowerCase().includes(q))
    );
  }

  async searchByTag(tag: string): Promise<Recipe[]> {
    const ids = await this.getTagIndex(tag);
    if (!ids.length) return [];
    const recipes = await Promise.all(ids.map((id) => this.get(id)));
    return recipes.filter((r): r is Recipe => r !== null);
  }

  private async indexTags(id: string, tags: string[]): Promise<void> {
    for (const tag of tags) {
      const ids = await this.getTagIndex(tag);
      if (!ids.includes(id)) {
        ids.push(id);
        await this.kv.put(`tag:${tag.toLowerCase()}`, JSON.stringify(ids));
      }
    }
  }

  private async removeFromTagIndex(id: string, tag: string): Promise<void> {
    const ids = await this.getTagIndex(tag);
    const filtered = ids.filter((i) => i !== id);
    if (filtered.length) {
      await this.kv.put(`tag:${tag.toLowerCase()}`, JSON.stringify(filtered));
    } else {
      await this.kv.delete(`tag:${tag.toLowerCase()}`);
    }
  }

  private async getTagIndex(tag: string): Promise<string[]> {
    const raw = await this.kv.get(`tag:${tag.toLowerCase()}`);
    return raw ? JSON.parse(raw) : [];
  }
}

// ─── NutritionEstimator ──────────────────────────────────────────────────────

const NUTRITION_DB: Record<string, NutritionProfile & { per: string }> = {
  chicken: { calories: 165, protein: 31, carbs: 0, fat: 3.6, fiber: 0, per: "100g" },
  beef: { calories: 250, protein: 26, carbs: 0, fat: 15, fiber: 0, per: "100g" },
  salmon: { calories: 208, protein: 20, carbs: 0, fat: 13, fiber: 0, per: "100g" },
  rice: { calories: 130, protein: 2.7, carbs: 28, fat: 0.3, fiber: 0.4, per: "100g" },
  pasta: { calories: 131, protein: 5, carbs: 25, fat: 1.1, fiber: 1.8, per: "100g" },
  bread: { calories: 265, protein: 9, carbs: 49, fat: 3.2, fiber: 2.7, per: "100g" },
  egg: { calories: 155, protein: 13, carbs: 1.1, fat: 11, fiber: 0, per: "100g" },
  butter: { calories: 717, protein: 0.9, carbs: 0.1, fat: 81, fiber: 0, per: "100g" },
  olive_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, fiber: 0, per: "100g" },
  tomato: { calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2, fiber: 1.2, per: "100g" },
  onion: { calories: 40, protein: 1.1, carbs: 9.3, fat: 0.1, fiber: 1.7, per: "100g" },
  garlic: { calories: 149, protein: 6.4, carbs: 33, fat: 0.5, fiber: 2.1, per: "100g" },
  potato: { calories: 77, protein: 2, carbs: 17, fat: 0.1, fiber: 2.2, per: "100g" },
  broccoli: { calories: 34, protein: 2.8, carbs: 7, fat: 0.4, fiber: 2.6, per: "100g" },
  carrot: { calories: 41, protein: 0.9, carbs: 10, fat: 0.2, fiber: 2.8, per: "100g" },
  milk: { calories: 42, protein: 3.4, carbs: 5, fat: 1, fiber: 0, per: "100g" },
  cheese: { calories: 402, protein: 25, carbs: 1.3, fat: 33, fiber: 0, per: "100g" },
  flour: { calories: 364, protein: 10, carbs: 76, fat: 1, fiber: 2.7, per: "100g" },
  sugar: { calories: 387, protein: 0, carbs: 100, fat: 0, fiber: 0, per: "100g" },
  bell_pepper: { calories: 31, protein: 1, carbs: 6, fat: 0.3, fiber: 2.1, per: "100g" },
  spinach: { calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, fiber: 2.2, per: "100g" },
  avocado: { calories: 160, protein: 2, carbs: 9, fat: 15, fiber: 7, per: "100g" },
  banana: { calories: 89, protein: 1.1, carbs: 23, fat: 0.3, fiber: 2.6, per: "100g" },
  apple: { calories: 52, protein: 0.3, carbs: 14, fat: 0.2, fiber: 2.4, per: "100g" },
  lemon: { calories: 29, protein: 1.1, carbs: 9, fat: 0.3, fiber: 2.8, per: "100g" },
  tofu: { calories: 76, protein: 8, carbs: 1.9, fat: 4.8, fiber: 0.3, per: "100g" },
  lentils: { calories: 116, protein: 9, carbs: 20, fat: 0.4, fiber: 8, per: "100g" },
  chickpeas: { calories: 164, protein: 8.9, carbs: 27, fat: 2.6, fiber: 7.6, per: "100g" },
};

export class NutritionEstimator {
  estimate(ingredients: Ingredient[]): NutritionProfile {
    let totals: NutritionProfile = { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 };

    for (const ing of ingredients) {
      const key = ing.name.toLowerCase().replace(/\s+/g, "_");
      const entry = NUTRITION_DB[key];
      if (entry) {
        const qtyGrams = this.toGrams(ing.quantity, ing.unit);
        const multiplier = qtyGrams / 100;
        totals.calories += entry.calories * multiplier;
        totals.protein += entry.protein * multiplier;
        totals.carbs += entry.carbs * multiplier;
        totals.fat += entry.fat * multiplier;
        totals.fiber += entry.fiber * multiplier;
      }
    }

    return {
      calories: Math.round(totals.calories),
      protein: Math.round(totals.protein * 10) / 10,
      carbs: Math.round(totals.carbs * 10) / 10,
      fat: Math.round(totals.fat * 10) / 10,
      fiber: Math.round(totals.fiber * 10) / 10,
    };
  }

  private toGrams(quantity: number, unit: string): number {
    const unitMap: Record<string, number> = {
      g: 1, gram: 1, grams: 1,
      kg: 1000, kilogram: 1000,
      oz: 28.35, ounce: 28.35, ounces: 28.35,
      lb: 453.6, pound: 453.6, pounds: 453.6,
      cup: 240, cups: 240,
      tbsp: 15, tablespoon: 15, tablespoons: 15,
      tsp: 5, teaspoon: 5, teaspoons: 5,
      ml: 1, milliliter: 1,
      l: 1000, liter: 1000,
      piece: 120, pieces: 120,
      whole: 120,
      clove: 5, cloves: 5,
      slice: 30, slices: 30,
      can: 400, cans: 400,
    };
    return quantity * (unitMap[unit.toLowerCase()] || 100);
  }
}

// ─── SubstitutionEngine ──────────────────────────────────────────────────────

const SUBSTITUTIONS: Record<string, { sub: string; note: string }[]> = {
  butter: [
    { sub: "coconut oil", note: "Use 3/4 the amount, works well in baking" },
    { sub: "applesauce", note: "Great for baking, reduces fat content" },
    { sub: "olive oil", note: "Best for savory dishes, use 3/4 the amount" },
  ],
  egg: [
    { sub: "flax egg (1 tbsp flax + 3 tbsp water)", note: "Works in most baking" },
    { sub: "mashed banana (1/4 cup per egg)", note: "Adds sweetness, best for sweet recipes" },
    { sub: "chia egg (1 tbsp chia + 3 tbsp water)", note: "Similar to flax egg, slightly more binding" },
  ],
  milk: [
    { sub: "oat milk", note: "Closest to dairy milk in texture" },
    { sub: "almond milk", note: "Lighter, works in most recipes" },
    { sub: "coconut milk", note: "Richer, adds coconut flavor" },
  ],
  flour: [
    { sub: "almond flour", note: "Gluten-free, higher protein, use more eggs for binding" },
    { sub: "oat flour", note: "Make by blending oats, slightly heavier" },
    { sub: "coconut flour", note: "Very absorbent — use only 1/4 the amount" },
  ],
  sugar: [
    { sub: "honey", note: "Use 3/4 the amount, reduce other liquids by a bit" },
    { sub: "maple syrup", note: "Use 3/4 the amount, adds lovely flavor" },
    { sub: "coconut sugar", note: "1:1 substitute with deeper caramel flavor" },
  ],
  rice: [
    { sub: "quinoa", note: "Higher protein, similar texture" },
    { sub: "cauliflower rice", note: "Low carb alternative, lighter" },
    { sub: "farro", note: "Chewier, nuttier, great in bowls" },
  ],
  pasta: [
    { sub: "zucchini noodles", note: "Low carb, fresh and light" },
    { sub: "spaghetti squash", note: "Natural 'noodles', mild flavor" },
    { sub: "lentil pasta", note: "Higher protein, similar texture" },
  ],
  soy_sauce: [
    { sub: "tamari", note: "Gluten-free alternative, very similar flavor" },
    { sub: "coconut aminos", note: "Soy-free, slightly sweeter" },
  ],
  heavy_cream: [
    { sub: "coconut cream", note: "Dairy-free, works in most recipes" },
    { sub: "cashew cream", note: "Blend soaked cashews with water" },
  ],
};

export class SubstitutionEngine {
  suggest(ingredientName: string): { sub: string; note: string }[] {
    const key = ingredientName.toLowerCase().replace(/\s+/g, "_");
    return SUBSTITUTIONS[key] || [];
  }

  listAvailable(): string[] {
    return Object.keys(SUBSTITUTIONS);
  }
}

// ─── RecipeSearch (what can I make?) ─────────────────────────────────────────

export class RecipeSearch {
  constructor(private store: RecipeStore) {}

  async findByIngredients(available: string[]): Promise<{ recipe: Recipe; match: number; missing: string[] }[]> {
    const all = await this.store.list();
    const results: { recipe: Recipe; match: number; missing: string[] }[] = [];

    const normalize = (s: string) => s.toLowerCase().trim();

    for (const recipe of all) {
      const recipeIngs = recipe.ingredients.map((i) => normalize(i.name));
      const availableNorm = available.map(normalize);

      let matched = 0;
      const missing: string[] = [];

      for (const ri of recipeIngs) {
        if (availableNorm.some((a) => ri.includes(a) || a.includes(ri))) {
          matched++;
        } else {
          missing.push(ri);
        }
      }

      const score = recipeIngs.length > 0 ? matched / recipeIngs.length : 0;
      if (matched > 0) {
        results.push({ recipe, match: Math.round(score * 100), missing });
      }
    }

    return results.sort((a, b) => b.match - a.match);
  }
}

// ─── SeasonalSuggest ─────────────────────────────────────────────────────────

const SEASONAL: Record<string, string[]> = {
  spring: ["asparagus", "peas", "artichoke", "strawberry", "radish", "fava beans", "mint", "chive"],
  summer: ["tomato", "corn", "zucchini", "peach", "watermelon", "basil", "berry", "cucumber", "eggplant"],
  fall: ["pumpkin", "apple", "butternut squash", "brussels sprouts", "cranberry", "pear", "sweet potato"],
  winter: ["citrus", "kale", "leek", "pomegranate", "beet", "turnip", "cabbage", "root vegetable"],
};

function getSeason(month: number): string {
  if (month >= 3 && month <= 5) return "spring";
  if (month >= 6 && month <= 8) return "summer";
  if (month >= 9 && month <= 11) return "fall";
  return "winter";
}

export class SeasonalSuggest {
  constructor(private store: RecipeStore) {}

  async suggest(date?: Date): Promise<Recipe[]> {
    const d = date || new Date();
    const season = getSeason(d.getMonth() + 1);
    const seasonalItems = SEASONAL[season] || [];
    const all = await this.store.list();

    const scored = all.map((recipe) => {
      let score = 0;
      for (const ing of recipe.ingredients) {
        const name = ing.name.toLowerCase();
        for (const seasonal of seasonalItems) {
          if (name.includes(seasonal)) score++;
        }
      }
      return { recipe, score };
    });

    return scored
      .filter((s) => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((s) => s.recipe);
  }

  getSeasonalIngredients(date?: Date): { season: string; ingredients: string[] } {
    const d = date || new Date();
    const season = getSeason(d.getMonth() + 1);
    return { season, ingredients: SEASONAL[season] || [] };
  }
}

// ─── MealPlanner ─────────────────────────────────────────────────────────────

export class MealPlanner {
  constructor(
    private store: RecipeStore,
    private nutrition: NutritionEstimator
  ) {}

  async generateWeek(startDate?: string, pantryItems?: string[]): Promise<MealPlan> {
    const start = startDate ? new Date(startDate) : this.getMonday(new Date());
    const all = await this.store.list();

    if (all.length === 0) {
      return {
        id: crypto.randomUUID(),
        weekStart: start.toISOString().split("T")[0],
        days: [],
        createdAt: new Date().toISOString(),
      };
    }

    const days: DayPlan[] = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(start);
      date.setDate(date.getDate() + i);
      const dateStr = date.toISOString().split("T")[0];

      // Pick recipes, preferring variety
      const breakfast = this.pickRandom(all.filter((r) => r.tags.some((t) => t === "breakfast")), all);
      const lunch = this.pickRandom(all.filter((r) => r.tags.some((t) => t === "lunch")), all);
      const dinner = this.pickRandom(all.filter((r) => r.tags.some((t) => t === "dinner")), all);
      const snack = this.pickRandom(all.filter((r) => r.tags.some((t) => t === "snack")), all);

      days.push({ date: dateStr, meals: { breakfast, lunch, dinner, snack } });
    }

    const plan: MealPlan = {
      id: crypto.randomUUID(),
      weekStart: start.toISOString().split("T")[0],
      days,
      createdAt: new Date().toISOString(),
    };

    return plan;
  }

  private pickRandom(filtered: Recipe[], fallback: Recipe[]): Recipe | undefined {
    const pool = filtered.length > 0 ? filtered : fallback;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  private getMonday(date: Date): Date {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    d.setDate(diff);
    d.setHours(0, 0, 0, 0);
    return d;
  }
}
