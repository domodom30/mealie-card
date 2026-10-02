import type { HomeAssistant } from '../types';
import { isLocalPath } from './mealie-url.js';

interface RecipeForImage {
  slug?: string;
  recipe_id?: string;
  image?: string | null;
}

export type ImageVariant = 'tiny' | 'min' | 'original';

const VARIANT_FILE: Record<ImageVariant, string> = {
  tiny: 'tiny-original.webp',
  min: 'min-original.webp',
  original: 'original.webp',
};

function isDirectImageRef(image: string): boolean {
  return isLocalPath(image) || image.startsWith('http');
}

function buildLocalImageUrl(base: string, recipe: RecipeForImage, variant: ImageVariant): string | null {
  if (!recipe.recipe_id) return null;
  return `${base}/${encodeURIComponent(recipe.recipe_id)}/images/${VARIANT_FILE[variant]}`;
}

function buildMealieMediaUrl(base: string, recipe: RecipeForImage, variant: ImageVariant): string | null {
  const id = recipe.recipe_id || recipe.slug;
  if (!id) return null;
  return `${base}/api/media/recipes/${encodeURIComponent(id)}/images/${VARIANT_FILE[variant]}`;
}

function buildRecipeImageUrl(recipe: RecipeForImage, imageBase: string, variant: ImageVariant): string | null {
  const base = imageBase.replace(/\/$/, '');
  return isLocalPath(base) ? buildLocalImageUrl(base, recipe, variant) : buildMealieMediaUrl(base, recipe, variant);
}

export function buildRecipeImageUrls(recipe: RecipeForImage, imageBases: readonly string[], variant: ImageVariant = 'min'): string[] {
  if (recipe.image && isDirectImageRef(recipe.image)) {
    return [recipe.image];
  }

  return imageBases.map((base) => buildRecipeImageUrl(recipe, base, variant)).filter((url): url is string => !!url);
}

export function resolveImageSrc(hass: HomeAssistant, imageUrl: string): string {
  return imageUrl.startsWith('/') ? `${hass.auth.data.hassUrl}${imageUrl}` : imageUrl;
}

export function isSafeImageUrl(url: string): boolean {
  if (url.startsWith('//')) return false;
  if (url.startsWith('/')) return true;
  try {
    const { protocol } = new URL(url);
    return protocol === 'http:' || protocol === 'https:';
  } catch {
    return false;
  }
}
