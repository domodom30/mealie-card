import { DEFAULT_MEALIE_GROUP_SLUG } from '../config.card.js';

export function isHttpUrl(url: string | undefined | null): boolean {
  if (!url) return false;
  try {
    const { protocol } = new URL(url);
    return protocol === 'http:' || protocol === 'https:';
  } catch {
    return false;
  }
}

// Mealie serves recipes at /g/{groupSlug}/r/{slug}; the pre-2.x /r/{slug} route now 404s.
export function buildRecipeWebUrl(baseUrl: string | undefined | null, slug: string | undefined | null, groupSlug?: string | null): string | null {
  if (!isHttpUrl(baseUrl) || !slug) return null;

  const base = baseUrl!.replace(/\/$/, '');
  const group = groupSlug?.trim() || DEFAULT_MEALIE_GROUP_SLUG;
  return `${base}/g/${encodeURIComponent(group)}/r/${encodeURIComponent(slug)}`;
}

export function openRecipeInBrowser(url: string): void {
  window.open(url, '_blank', 'noopener,noreferrer');
}
