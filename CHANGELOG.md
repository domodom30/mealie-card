## [3.0.2] - 2026-03-31

### ✨ New Features
- **Servings display** — New `show_servings` option to display recipe servings and yield quantity alongside the star rating

### 🐛 Bug Fixes
- Fixed `RecipeIngredient.food` type: was incorrectly typed as `string`, now correctly mapped to a `RecipeFood` object matching the `aiomealie` Python model
- Fixed `RecipeIngredient.unit` and `RecipeFood` field names to match actual API response (`recipe_servings`, `recipe_yield_quantity`)
- Removed non-existent `RecipeInstruction.instruction` field — ingredient fallback now uses `ing.food?.name`
- Fixed `MealieRecipe.tags` type: was `string[]`, now `RecipeTag[]` with `tag_id`, `name`, `slug`

### 🏗️ Internal
- **Type alignment** — `types.ts` fully re-synchronized with `aiomealie` Python models (`BaseRecipe`, `Ingredient`, `Instruction`, `Tag`)
- **CSS cleanup** — Removed 19 unused CSS classes (dead code from abandoned dialog API and `.type-group` selector)
- **Build** — Version in `console.info` banner now read dynamically from `package.json` (no more manual constant)
- **TypeScript** — Added `resolveJsonModule: true` to `tsconfig.json`

### 🌐 Languages
- Added `show_rating` and `show_servings` keys to all 11 translation files (DA, DE, ES, IT, NL, PL, PT, PT-BR, RO were missing them)

---

## [3.0.1] - 2026-03-28

### ✨ New Features
- **Visual Editor** — Both cards now have a full graphical editor in the Home Assistant Lovelace interface (no YAML required for most options)
- **Recipe Dialog** — Clicking a recipe opens a detailed dialog with ingredients, instructions, and timings
- **Star Ratings** — New `show_rating` option to display recipe star ratings
- **Recipes Layout** — New `recipes_layout` option for the meal plan card (`vertical` / `horizontal`)
- **Image Proxy** — Automatic proxy for legacy Mealie installations where images are stored as hash codes; configure `url` to enable

### ⚠️ Breaking Changes
- `config_entry_id` is now the primary configuration parameter — select your Mealie integration directly in the editor
- `days_to_show` renamed to `day_offset` — behavior unchanged (0 = today, 1 = tomorrow, etc.)
- `clickable` option removed — recipes are always clickable when `config_entry_id` is configured
- `mealie_url` / `group` are deprecated; use `config_entry_id` for API connection and `url` only for image proxy fallback

### 🌐 Languages
- Added Dutch (NL), Portuguese (PT), Brazilian Portuguese (PT-BR) — now 11 languages total

### 🏗️ Architecture
- Migrated CSS stylesheets to TypeScript-native LitElement styles
- Dedicated dialog components (`MealieRecipeDialog`, `MealieMealplanDialog`)
- New `BaseMealieCardEditor` base class with shared editor logic
- Image proxy utility (`image-proxy.ts`) with automatic URL vs hash detection

---

## [2.2.1] - 2025-01-11

### 🐛 Bug Fixes
- Fixed display of the "Add to mealplan" button (Safari)
- Fixed the problem with image URLs

---

## [2.2.0] - 2025-12-15

### ✨ New Features
- **Dialog Integration** — Recipe links now open in a sleek dialog window instead of external tabs
- **Quick Meal Planning** — Added button to instantly add recipes to your meal plan
- **Horizontal Layout** — New layout option for meal card display

### 🐛 Bug Fixes
- Fixed theme compatibility with Frosted Glass Theme
- Corrected recipe count display in grid view
- Fixed meal display indexing (0: today / 1: tomorrow / etc...)
- Improved horizontal meal display layout

### ⚠️ Breaking Changes
- Recipe links now open in dialogs by default — update `clickable` configuration if needed
- `day_to_show` parameter behavior changed:
```yaml
  day_to_show: 0  # Shows today only (1 = tomorrow, 2 = day after tomorrow, etc.)
```

---

## [2.1.8] - 2025-11-11

### ✨ New Features
- Added Danish language support (DA)
- Added option to show/hide recipe descriptions

---

## [2.1.7] - 2025-11-09

### ✨ New Features
- Added `layout` configuration option for meal card
  - Choose between `vertical` or `horizontal` display modes
