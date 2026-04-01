// src/pantry/tracker.ts — Pantry management for CookLog AI
// PantryItem, ExpiryTracker, ShoppingListGenerator, PantryStats

import type { MealPlan } from "../recipes/engine";

export interface PantryItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  category: string;
  expiry?: string; // ISO date
  addedAt: string;
}

export interface ShoppingItem {
  name: string;
  quantity: number;
  unit: string;
  category: string;
  fromRecipe?: string;
}

// ─── PantryStore ─────────────────────────────────────────────────────────────

export class PantryStore {
  constructor(private kv: KVNamespace, private prefix = "pantry:") {}

  async add(item: PantryItem): Promise<PantryItem> {
    const withDate = { ...item, addedAt: new Date().toISOString() };
    await this.kv.put(this.prefix + withDate.id, JSON.stringify(withDate));
    return withDate;
  }

  async get(id: string): Promise<PantryItem | null> {
    const raw = await this.kv.get(this.prefix + id);
    return raw ? JSON.parse(raw) : null;
  }

  async list(): Promise<PantryItem[]> {
    const list = await this.kv.list({ prefix: this.prefix });
    const items: PantryItem[] = [];
    for (const key of list.keys) {
      const raw = await this.kv.get(key.name);
      if (raw) items.push(JSON.parse(raw));
    }
    return items.sort((a, b) => a.name.localeCompare(b.name));
  }

  async update(item: PantryItem): Promise<PantryItem> {
    await this.kv.put(this.prefix + item.id, JSON.stringify(item));
    return item;
  }

  async remove(id: string): Promise<void> {
    await this.kv.delete(this.prefix + id);
  }

  async findByName(name: string): Promise<PantryItem | null> {
    const all = await this.list();
    const q = name.toLowerCase();
    return all.find((i) => i.name.toLowerCase().includes(q) || q.includes(i.name.toLowerCase())) || null;
  }
}

// ─── ExpiryTracker ───────────────────────────────────────────────────────────

export interface ExpiryAlert {
  item: PantryItem;
  status: "expired" | "expiring_soon" | "fresh";
  daysLeft: number;
}

export class ExpiryTracker {
  private WARNING_DAYS = 3;

  check(items: PantryItem[]): ExpiryAlert[] {
    const now = new Date();
    return items
      .filter((item) => item.expiry)
      .map((item) => {
        const expiryDate = new Date(item.expiry!);
        const daysLeft = Math.ceil((expiryDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
        let status: ExpiryAlert["status"] = "fresh";
        if (daysLeft < 0) status = "expired";
        else if (daysLeft <= this.WARNING_DAYS) status = "expiring_soon";
        return { item, status, daysLeft };
      })
      .sort((a, b) => a.daysLeft - b.daysLeft);
  }

  getExpiringSoon(items: PantryItem[]): PantryItem[] {
    return this.check(items)
      .filter((a) => a.status === "expiring_soon" || a.status === "expired")
      .map((a) => a.item);
  }
}

// ─── ShoppingListGenerator ───────────────────────────────────────────────────

export class ShoppingListGenerator {
  constructor(private pantry: PantryStore) {}

  async generate(mealPlan: MealPlan): Promise<ShoppingItem[]> {
    const pantryItems = await this.pantry.list();
    const needed: Map<string, ShoppingItem> = new Map();

    for (const day of mealPlan.days) {
      for (const meal of Object.values(day.meals)) {
        if (!meal || !("ingredients" in meal)) continue;
        const recipe = meal as { ingredients: { name: string; quantity: number; unit: string }[]; title?: string };
        for (const ing of recipe.ingredients) {
          const key = ing.name.toLowerCase();
          const pantryItem = pantryItems.find(
            (p) => p.name.toLowerCase() === key || p.name.toLowerCase().includes(key) || key.includes(p.name.toLowerCase())
          );

          const neededQty = pantryItem
            ? Math.max(0, ing.quantity - pantryItem.quantity)
            : ing.quantity;

          if (neededQty > 0) {
            const existing = needed.get(key);
            if (existing) {
              existing.quantity += neededQty;
            } else {
              needed.set(key, {
                name: ing.name,
                quantity: neededQty,
                unit: ing.unit,
                category: this.categorize(ing.name),
                fromRecipe: recipe.title,
              });
            }
          }
        }
      }
    }

    return Array.from(needed.values()).sort((a, b) => a.category.localeCompare(b.category));
  }

  private categorize(ingredient: string): string {
    const name = ingredient.toLowerCase();
    const categories: Record<string, string[]> = {
      Produce: ["tomato", "onion", "garlic", "potato", "carrot", "broccoli", "pepper", "spinach", "lettuce", "celery", "lemon", "lime", "avocado", "banana", "apple", "berry", "herb"],
      Protein: ["chicken", "beef", "pork", "salmon", "fish", "shrimp", "tofu", "egg", "turkey", "lamb"],
      Dairy: ["milk", "cheese", "butter", "cream", "yogurt", "sour cream"],
      Grains: ["rice", "pasta", "bread", "flour", "oat", "quinoa", "noodle"],
      Pantry: ["oil", "vinegar", "sugar", "salt", "pepper", "spice", "sauce", "broth", "stock", "canned"],
      Frozen: ["frozen"],
    };

    for (const [cat, keywords] of Object.entries(categories)) {
      if (keywords.some((kw) => name.includes(kw))) return cat;
    }
    return "Other";
  }
}

// ─── PantryStats ─────────────────────────────────────────────────────────────

export interface PantryStat {
  mostUsed: { name: string; count: number }[];
  expiringCount: number;
  totalCount: number;
  categoryBreakdown: { category: string; count: number }[];
  wasteRisk: { name: string; daysLeft: number }[];
}

export class PantryStats {
  constructor(private pantry: PantryStore, private expiry: ExpiryTracker) {}

  async getStats(): Promise<PantryStat> {
    const items = await this.pantry.list();
    const expiryAlerts = this.expiry.check(items);

    // Category breakdown
    const catMap = new Map<string, number>();
    for (const item of items) {
      catMap.set(item.category, (catMap.get(item.category) || 0) + 1);
    }
    const categoryBreakdown = Array.from(catMap.entries())
      .map(([category, count]) => ({ category, count }))
      .sort((a, b) => b.count - a.count);

    // Most used (by frequency of appearance)
    const nameCount = new Map<string, number>();
    for (const item of items) {
      nameCount.set(item.name, (nameCount.get(item.name) || 0) + item.quantity);
    }
    const mostUsed = Array.from(nameCount.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    // Waste risk
    const wasteRisk = expiryAlerts
      .filter((a) => a.status !== "fresh")
      .map((a) => ({ name: a.item.name, daysLeft: a.daysLeft }));

    return {
      mostUsed,
      expiringCount: expiryAlerts.filter((a) => a.status !== "fresh").length,
      totalCount: items.length,
      categoryBreakdown,
      wasteRisk,
    };
  }
}
