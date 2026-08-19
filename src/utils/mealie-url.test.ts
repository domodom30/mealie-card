import { describe, expect, it } from 'vitest';
import { buildRecipeWebUrl, isHttpUrl } from './mealie-url.js';

describe('isHttpUrl', () => {
  it('accepts http and https', () => {
    expect(isHttpUrl('https://mealie.example')).toBe(true);
    expect(isHttpUrl('http://mealie.example')).toBe(true);
  });

  it('rejects empty and missing values', () => {
    expect(isHttpUrl('')).toBe(false);
    expect(isHttpUrl(undefined)).toBe(false);
    expect(isHttpUrl(null)).toBe(false);
  });

  it('rejects non-http schemes', () => {
    expect(isHttpUrl('javascript:alert(1)')).toBe(false);
    expect(isHttpUrl('file:///etc/passwd')).toBe(false);
  });

  it('rejects unparseable values', () => {
    expect(isHttpUrl('mealie.example')).toBe(false);
    expect(isHttpUrl('not a url')).toBe(false);
  });
});

describe('buildRecipeWebUrl', () => {
  // Mealie serves recipes at /g/{groupSlug}/r/{slug}; /r/{slug} has 404'd since 2.x.
  it('builds the group-scoped recipe path', () => {
    expect(buildRecipeWebUrl('https://mealie.example', 'tarte-aux-pommes')).toBe('https://mealie.example/g/home/r/tarte-aux-pommes');
  });

  it('strips a trailing slash from the base URL', () => {
    expect(buildRecipeWebUrl('https://mealie.example/', 'tarte')).toBe('https://mealie.example/g/home/r/tarte');
  });

  it('honours a custom group slug', () => {
    expect(buildRecipeWebUrl('https://mealie.example', 'tarte', 'famille')).toBe('https://mealie.example/g/famille/r/tarte');
  });

  it('falls back to the default group for blank slugs', () => {
    expect(buildRecipeWebUrl('https://mealie.example', 'tarte', '')).toBe('https://mealie.example/g/home/r/tarte');
    expect(buildRecipeWebUrl('https://mealie.example', 'tarte', '   ')).toBe('https://mealie.example/g/home/r/tarte');
    expect(buildRecipeWebUrl('https://mealie.example', 'tarte', null)).toBe('https://mealie.example/g/home/r/tarte');
  });

  it('percent-encodes the group and the slug', () => {
    expect(buildRecipeWebUrl('https://mealie.example', 'a b/c', 'my group')).toBe('https://mealie.example/g/my%20group/r/a%20b%2Fc');
  });

  it('keeps a subpath in the base URL', () => {
    expect(buildRecipeWebUrl('https://example.com/mealie', 'tarte')).toBe('https://example.com/mealie/g/home/r/tarte');
  });

  it('returns null without a usable base URL', () => {
    expect(buildRecipeWebUrl('', 'tarte')).toBeNull();
    expect(buildRecipeWebUrl(undefined, 'tarte')).toBeNull();
    expect(buildRecipeWebUrl('javascript:alert(1)', 'tarte')).toBeNull();
    expect(buildRecipeWebUrl('mealie.example', 'tarte')).toBeNull();
  });

  it('returns null without a slug', () => {
    expect(buildRecipeWebUrl('https://mealie.example', '')).toBeNull();
    expect(buildRecipeWebUrl('https://mealie.example', undefined)).toBeNull();
    expect(buildRecipeWebUrl('https://mealie.example', null)).toBeNull();
  });
});
