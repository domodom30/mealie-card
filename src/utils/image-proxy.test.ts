import { describe, expect, it } from 'vitest';
import { buildRecipeImageUrl, isSafeImageUrl, resolveImageSrc } from './image-proxy.js';
import { createHassStub } from '../test-utils/hass-stub.js';

describe('buildRecipeImageUrl', () => {
  it('returns an absolute image reference untouched', () => {
    expect(buildRecipeImageUrl({ image: 'https://mealie.example/a.webp' })).toBe('https://mealie.example/a.webp');
  });

  it('returns a root-relative image reference untouched', () => {
    expect(buildRecipeImageUrl({ image: '/api/media/a.webp' })).toBe('/api/media/a.webp');
  });

  it('builds a media URL from the recipe id when the image is a bare hash', () => {
    expect(buildRecipeImageUrl({ image: 'deadbeef', recipe_id: 'abc' }, 'https://mealie.example')).toBe(
      'https://mealie.example/api/media/recipes/abc/images/min-original.webp'
    );
  });

  it('falls back to the slug when there is no recipe id', () => {
    expect(buildRecipeImageUrl({ slug: 'tarte-aux-pommes' }, 'https://mealie.example')).toBe(
      'https://mealie.example/api/media/recipes/tarte-aux-pommes/images/min-original.webp'
    );
  });

  it('honours the requested variant', () => {
    expect(buildRecipeImageUrl({ recipe_id: 'abc' }, 'https://mealie.example', 'tiny')).toContain('tiny-original.webp');
    expect(buildRecipeImageUrl({ recipe_id: 'abc' }, 'https://mealie.example', 'original')).toContain('/original.webp');
  });

  it('strips a trailing slash from the base URL', () => {
    expect(buildRecipeImageUrl({ recipe_id: 'abc' }, 'https://mealie.example/')).toBe('https://mealie.example/api/media/recipes/abc/images/min-original.webp');
  });

  it('percent-encodes the recipe id', () => {
    expect(buildRecipeImageUrl({ recipe_id: 'a b/c' }, 'https://mealie.example')).toContain('a%20b%2Fc');
  });

  it('returns null when it cannot build a URL', () => {
    expect(buildRecipeImageUrl({ image: 'deadbeef', recipe_id: 'abc' })).toBeNull();
    expect(buildRecipeImageUrl({}, 'https://mealie.example')).toBeNull();
  });

  it('treats a protocol-relative image as a hash rather than a direct reference', () => {
    expect(buildRecipeImageUrl({ image: '//evil.example/a.webp', recipe_id: 'abc' }, 'https://mealie.example')).toBe(
      'https://mealie.example/api/media/recipes/abc/images/min-original.webp'
    );
  });
});

describe('resolveImageSrc', () => {
  const hass = createHassStub({ hassUrl: 'https://ha.example' });

  it('prefixes root-relative paths with the Home Assistant URL', () => {
    expect(resolveImageSrc(hass, '/api/media/a.webp')).toBe('https://ha.example/api/media/a.webp');
  });

  it('leaves absolute URLs alone', () => {
    expect(resolveImageSrc(hass, 'https://mealie.example/a.webp')).toBe('https://mealie.example/a.webp');
  });
});

describe('isSafeImageUrl', () => {
  it('accepts same-origin paths and http(s) URLs', () => {
    expect(isSafeImageUrl('/api/media/a.webp')).toBe(true);
    expect(isSafeImageUrl('https://mealie.example/a.webp')).toBe(true);
    expect(isSafeImageUrl('http://mealie.example/a.webp')).toBe(true);
  });

  it('rejects protocol-relative URLs, which are not same-origin', () => {
    expect(isSafeImageUrl('//evil.example/a.webp')).toBe(false);
  });

  it('rejects non-http schemes', () => {
    expect(isSafeImageUrl('javascript:alert(1)')).toBe(false);
    expect(isSafeImageUrl('data:image/png;base64,AAAA')).toBe(false);
  });

  it('rejects unparseable URLs', () => {
    expect(isSafeImageUrl('not a url')).toBe(false);
  });
});
