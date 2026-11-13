import type { RecipeLike } from '../types';

export type RecipeLabelKind = 'category' | 'tag';

export interface RecipeLabel {
  key: string;
  kind: RecipeLabelKind;
  name: string;
}

function label(kind: RecipeLabelKind, slug: string, name: string): RecipeLabel {
  return { key: `${kind}:${slug}`, kind, name };
}

export function recipeLabels(recipe: RecipeLike): RecipeLabel[] {
  return [
    ...(recipe.categories ?? []).map((category) => label('category', category.slug, category.name)),
    ...(recipe.tags ?? []).map((tag) => label('tag', tag.slug, tag.name)),
  ];
}

export function labelKinds(showCategories: boolean | undefined, showTags: boolean | undefined): Set<RecipeLabelKind> {
  const kinds = new Set<RecipeLabelKind>();
  if (showCategories) kinds.add('category');
  if (showTags) kinds.add('tag');
  return kinds;
}

function compareLabels(a: RecipeLabel, b: RecipeLabel): number {
  if (a.kind !== b.kind) return a.kind === 'category' ? -1 : 1;
  return a.name.localeCompare(b.name);
}

export function collectRecipeLabels(recipes: readonly RecipeLike[], kinds: ReadonlySet<RecipeLabelKind>): RecipeLabel[] {
  const byKey = new Map<string, RecipeLabel>();
  if (!kinds.size) return [];
  for (const recipe of recipes) {
    for (const entry of recipeLabels(recipe)) {
      if (kinds.has(entry.kind) && !byKey.has(entry.key)) byKey.set(entry.key, entry);
    }
  }
  return [...byKey.values()].sort(compareLabels);
}

export function hasAllLabels(recipe: RecipeLike, keys: ReadonlySet<string>): boolean {
  if (!keys.size) return true;
  const own = new Set(recipeLabels(recipe).map((entry) => entry.key));
  return [...keys].every((key) => own.has(key));
}
