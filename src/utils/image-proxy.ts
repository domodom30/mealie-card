// === Mealie Image Proxy Fallback ===
// Peut être retiré quand toutes les installations utilisent l'intégration
// avec proxy image (HA 2025.x+).

interface RecipeForImage {
  slug: string;
  recipe_id?: string;
  image?: string | null;
}

/**
 * Retourne l'URL d'image pour une recette Mealie.
 * - Si recipe.image est déjà une URL (commence par "/" ou "http") → retourne telle quelle
 * - Si recipe.image est un hash court ET mealieUrl est fourni → construit l'URL media directe
 * - Sinon → null
 */
export function buildRecipeImageUrl(recipe: RecipeForImage, mealieUrl?: string | null): string | null {
  if (!recipe.image) return null;

  // URL proxy HA (chemin relatif) ou URL complète
  if (recipe.image.startsWith("/") || recipe.image.startsWith("http")) {
    return recipe.image;
  }

  // Hash court de l'ancienne intégration — nécessite l'URL Mealie configurée
  if (!mealieUrl) return null;

  const base = mealieUrl.replace(/\/$/, "");
  const id = recipe.recipe_id || recipe.slug;
  return `${base}/api/media/recipes/${id}/images/original.webp`;
}
