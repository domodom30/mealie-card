import { DEFAULT_MEALIE_GROUP_SLUG } from '../config.card.js';
import type { BaseMealieCardConfig } from '../types';

export function isHttpUrl(url: string | undefined | null): boolean {
  if (!url) return false;
  try {
    const { protocol } = new URL(url);
    return protocol === 'http:' || protocol === 'https:';
  } catch {
    return false;
  }
}

export function isLocalPath(url: string | undefined | null): boolean {
  return !!url && url.startsWith('/') && !url.startsWith('//');
}

export function isImageSource(url: string | undefined | null): boolean {
  return isHttpUrl(url) || isLocalPath(url);
}

type ImageSourceConfig = Pick<BaseMealieCardConfig, 'url' | 'image_url'>;

const imageBaseUrlsByConfig = new WeakMap<ImageSourceConfig, string[]>();

function computeImageBaseUrls(config: ImageSourceConfig): string[] {
  const candidates = [isImageSource(config.image_url) ? config.image_url : undefined, config.url];
  return [...new Set(candidates.filter((url): url is string => !!url))];
}

export function imageBaseUrls(config: ImageSourceConfig): string[] {
  let urls = imageBaseUrlsByConfig.get(config);
  if (!urls) {
    urls = computeImageBaseUrls(config);
    imageBaseUrlsByConfig.set(config, urls);
  }
  return urls;
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
