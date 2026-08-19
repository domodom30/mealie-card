import type { HomeAssistant } from '../types';

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
  return (image.startsWith('/') && !image.startsWith('//')) || image.startsWith('http');
}

export function buildRecipeImageUrl(recipe: RecipeForImage, mealieUrl?: string | null, variant: ImageVariant = 'min'): string | null {
  if (recipe.image && isDirectImageRef(recipe.image)) {
    return recipe.image;
  }

  if (!mealieUrl) return null;

  const base = mealieUrl.replace(/\/$/, '');
  const id = recipe.recipe_id || recipe.slug;
  if (!id) return null;
  return `${base}/api/media/recipes/${encodeURIComponent(id)}/images/${VARIANT_FILE[variant]}`;
}

export function resolveImageSrc(hass: HomeAssistant, imageUrl: string): string {
  return imageUrl.startsWith('/') ? `${hass.auth.data.hassUrl}${imageUrl}` : imageUrl;
}

export function isSafeImageUrl(url: string): boolean {
  // `//host/path` is protocol-relative, not a same-origin path.
  if (url.startsWith('//')) return false;
  if (url.startsWith('/')) return true;
  try {
    const { protocol } = new URL(url);
    return protocol === 'http:' || protocol === 'https:';
  } catch {
    return false;
  }
}
