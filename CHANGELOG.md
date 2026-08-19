## [3.0.5] - 2026-07-18

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/A1V11ZZTPI)

### ✨ New Features

- **Multi-day mealplan in a single card** — The mealplan card can now show several days at once. New `days_to_show` option (Today up to 7 days); each day is its own section with a date header and its own random / add-note buttons. Works together with `day_offset`, which sets the first day to display.
- **Day layout** — New `days_layout` option to arrange days **stacked** (vertical) or **side by side** (horizontal, responsive columns that wrap on narrow screens), independent from the meal layout inside a day.

### ⚙️ New Config Options

| Option | Card | Default | Description |
|--------|------|---------|-------------|
| `days_to_show` | Mealplan | `1` | Number of days to display starting from the offset day (1–7) |
| `day_offset` | Mealplan | `0` | Offset of the first day to display (0 = today, 1 = tomorrow…, up to 30) |
| `days_layout` | Mealplan | `vertical` | Arrange days stacked (`vertical`) or side by side (`horizontal`) |

### 🔄 Changed

- **`day_offset` retained alongside `days_to_show`** ([#48](https://github.com/domodom30/mealie-card/issues/48)) — `day_offset` sets the first day shown (0 = today, 1 = tomorrow…) while `days_to_show` sets how many consecutive days follow. Set `days_to_show: 1` with a `day_offset` to show a single offset day (e.g. only tomorrow).
- Recipe detail dialog: section titles (Times / Ingredients / Instructions) now use the Home Assistant secondary text color.

---

🇫🇷 *Français*

### ✨ Nouvelles fonctionnalités

- **Planning multi-jours dans une seule carte** — La carte planning peut afficher plusieurs jours à la fois. Nouvelle option `days_to_show` (Aujourd'hui jusqu'à 7 jours) ; chaque jour est une section avec son en-tête de date et ses propres boutons repas aléatoire / note. Fonctionne conjointement avec `day_offset`, qui définit le premier jour affiché.
- **Disposition des jours** — Nouvelle option `days_layout` pour disposer les jours **empilés** (vertical) ou **côte à côte** (horizontal, colonnes responsives qui reviennent à la ligne sur petit écran), indépendamment de la disposition des repas d'un jour.

### ⚙️ Nouvelles options de configuration

| Option | Carte | Défaut | Description |
|--------|-------|--------|-------------|
| `days_to_show` | Planning | `1` | Nombre de jours à afficher à partir du jour de départ (1–7) |
| `day_offset` | Planning | `0` | Décalage du premier jour affiché (0 = aujourd'hui, 1 = demain…, jusqu'à 30) |
| `days_layout` | Planning | `vertical` | Jours empilés (`vertical`) ou côte à côte (`horizontal`) |

### 🔄 Modifications

- **`day_offset` conservé aux côtés de `days_to_show`** ([#48](https://github.com/domodom30/mealie-card/issues/48)) — `day_offset` définit le premier jour affiché (0 = aujourd'hui, 1 = demain…) tandis que `days_to_show` définit le nombre de jours consécutifs affichés ensuite. Associez `days_to_show: 1` à un `day_offset` pour n'afficher qu'un seul jour décalé (par ex. uniquement demain).
- Dialog de détail recette : les titres des sections (Temps / Ingrédients / Instructions) utilisent désormais la couleur de texte secondaire de Home Assistant.

---

## [3.0.4] - 2026-05-30

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/A1V11ZZTPI)

### ✨ New Features

- **Edit mealplan entries** — New pencil button on each mealplan entry; opens a pre-filled edit dialog to change the date, meal type, recipe or note content (`update_mealplan` service)
- **Recipe favorites** — Heart toggle button in the recipe detail dialog to add/remove recipes from Mealie favorites; new `show_favorites_only` mode in the recipe card to display only favorited recipes (`get_recipe_favorites`, `add_recipe_favorite`, `remove_recipe_favorite` services)
- **Interactive star ratings** — Star rating is now clickable directly on recipe cards (mealplan & recipe card) and in the recipe dialog; hover preview before confirming; optimistic UI with rollback on error (`rate_recipe` service)
- **Add recipe to shopping list** — New cart button on recipe cards and in the recipe detail dialog; opens a dialog to select the shopping list and adjust quantity; shopping lists are discovered automatically from Home Assistant entity registry (`add_recipe_to_shopping_list` service)
- **Random mealplan** — New dice button on note-type mealplan entries to randomly fill a meal slot (`set_random_mealplan` service); can be hidden via `show_random_button: false`
- **Import recipe from URL** — New import button in the recipe card toolbar; opens a dialog to paste a URL and optionally include tags; refreshes the recipe list on success (`import_recipe` service)

### ⚙️ New Config Options

| Option | Card | Default | Description |
|--------|------|---------|-------------|
| `show_random_button` | Mealplan | `true` | Show the random meal button on note entries |
| `show_favorites_only` | Recipe | `false` | Show only favorited recipes |
| `show_import_button` | Recipe | `false` | Show the import recipe button |
| `default_shopping_list_id` | Both | `""` | Pre-select a shopping list in the shopping dialog |

### 🏗️ Architecture

- `_renderInteractiveRating()` and `_setRating()` moved to `MealieBaseCard` — all cards share the same interactive rating logic with per-recipe state (Map-based)
- Three new dialog components: `mealplan-edit-dialog.ts`, `shopping-list-dialog.ts`, `recipe-import-dialog.ts`
- Shopping list IDs resolved via HA entity registry WebSocket (`todo.*` Mealie entities)

### 🐛 Bug Fixes

- **Images missing when the integration returns an empty `image` field** ([#37](https://github.com/domodom30/mealie-card/issues/37)) — The image URL is rebuilt from the recipe identifier, which never depended on `image`; the empty field no longer prevents it. Requires the `url` option. Recipes that genuinely have no image now display nothing instead of a broken-image icon. Same symptom as [#9](https://github.com/domodom30/mealie-card/issues/9) and [#32](https://github.com/domodom30/mealie-card/issues/32).

---

🇫🇷 *Français*

### ✨ Nouvelles fonctionnalités

- **Modification des entrées du planning** — Nouveau bouton crayon sur chaque entrée du planning ; ouvre un dialog pré-rempli pour modifier la date, le type de repas, la recette ou le texte d'une note (service `update_mealplan`)
- **Favoris de recettes** — Bouton cœur dans le dialog de détail pour ajouter/retirer une recette des favoris Mealie ; nouveau mode `show_favorites_only` sur la carte recettes pour n'afficher que les favoris (services `get_recipe_favorites`, `add_recipe_favorite`, `remove_recipe_favorite`)
- **Notation interactive** — Les étoiles sont désormais cliquables directement sur les vignettes (carte planning & carte recettes) et dans le dialog de détail ; aperçu au survol ; mise à jour optimiste avec retour arrière en cas d'erreur (service `rate_recipe`)
- **Ajout au panier** — Nouveau bouton panier sur les vignettes de recettes et dans le dialog de détail ; ouvre un dialog pour choisir la liste de courses et ajuster la quantité ; les listes sont découvertes automatiquement depuis le registre d'entités Home Assistant (service `add_recipe_to_shopping_list`)
- **Repas aléatoire** — Nouveau bouton dé sur les entrées de type note dans le planning pour remplir aléatoirement un créneau (service `set_random_mealplan`) ; masquable via `show_random_button: false`
- **Import de recette par URL** — Nouveau bouton d'import dans la barre d'outils de la carte recettes ; dialog avec champ URL et option d'inclusion des tags ; rafraîchit la liste après succès (service `import_recipe`)

### ⚙️ Nouvelles options de configuration

| Option | Carte | Défaut | Description |
|--------|-------|--------|-------------|
| `show_random_button` | Planning | `true` | Afficher le bouton repas aléatoire sur les notes |
| `show_favorites_only` | Recettes | `false` | N'afficher que les recettes favorites |
| `show_import_button` | Recettes | `false` | Afficher le bouton d'import de recette |
| `default_shopping_list_id` | Les deux | `""` | Pré-sélectionner une liste de courses dans le dialog |

### 🏗️ Architecture

- `_renderInteractiveRating()` et `_setRating()` déplacés dans `MealieBaseCard` — toutes les cartes partagent la même logique de notation interactive avec un état par recette (basé sur Map)
- Trois nouveaux composants dialog : `mealplan-edit-dialog.ts`, `shopping-list-dialog.ts`, `recipe-import-dialog.ts`
- UUID des listes de courses résolu via le WebSocket du registre d'entités HA (entités `todo.*` Mealie)

### 🐛 Corrections

- **Images absentes quand l'intégration renvoie un champ `image` vide** ([#37](https://github.com/domodom30/mealie-card/issues/37)) — L'URL de l'image est reconstruite à partir de l'identifiant de la recette, ce qui n'a jamais dépendu du champ `image` ; celui-ci, vide, ne bloque plus la reconstruction. Nécessite l'option `url`. Les recettes réellement sans image n'affichent plus une icône d'image cassée mais rien du tout. Même symptôme que [#9](https://github.com/domodom30/mealie-card/issues/9) et [#32](https://github.com/domodom30/mealie-card/issues/32).

---

## [3.0.3] - 2026-04-05

### ✨ New Features
- **Automatic card refresh** — Cards now stay up to date on always-on dashboards instead of freezing after the first load. They react to the Mealie integration's entities (`calendar.mealie_*` for the mealplan card, `sensor.mealie_*` for the recipe card), so changes made in Mealie appear on the integration's next coordinator update — no browser reload and no polling interval to configure (#34)
- **Midnight rollover** — The mealplan card automatically switches to the next day's meals at midnight (#34)

---

### 🐛 Bug Fixes
- **Mealplan auto-refresh** — The mealplan card now refreshes automatically after a recipe is added, without requiring a browser reload
- **Servings in recipe dialog** — `show_servings` now correctly displays in the recipe detail dialog

---

## [3.0.2] - 2026-03-31

### ✨ New Features
- **Servings display** — New `show_servings` option to display recipe servings and yield quantity alongside the star rating

### 🐛 Bug Fixes
- Fixed `RecipeIngredient.food` type: was incorrectly typed as `string`, now correctly mapped to a `RecipeFood` object matching the `aiomealie` Python model
- Fixed `RecipeIngredient.unit` and `RecipeFood` field names to match actual API response (`recipe_servings`, `recipe_yield_quantity`)
- Removed non-existent `RecipeInstruction.instruction` field — ingredient fallback now uses `ing.food?.name`
- Fixed `MealieRecipe.tags` type: was `string[]`, now `RecipeTag[]` with `tag_id`, `name`, `slug`


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
