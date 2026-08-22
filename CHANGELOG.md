## [3.0.6] - 2026-08-22

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/A1V11ZZTPI)

### ✨ New Features

- **Open recipes in Mealie** ([#61](https://github.com/domodom30/mealie-card/issues/61)) — New `recipe_view` option on both cards: the built-in dialog (default, unchanged), an embedded Mealie page, or a new browser tab. Needs `url`; falls back to the dialog without it.
- **Delete a mealplan entry** — The mealplan card gains a delete dialog for an existing entry.
- **Day ranges** — `day_offset` now accepts an inclusive range such as `0-6` or `1-7`, setting both the first day and how many days are shown; a single number still means one day. This replaces `days_to_show`, which is still read and rewritten to the equivalent range when the editor opens. Capped at 31 days.
- **Fourth day/meal layout** — *Days and meals side by side* is selectable in the editor, with `days_columns` and `recipes_columns` setting how many columns each side-by-side layout uses instead of letting the available width decide.
- **Per-button control of the recipe actions** — The four tile buttons of the mealplan card (view recipe, shopping list, edit, delete) toggle individually, and `show_note_button` covers the add-note button. All stay on by default, so existing cards are untouched.
- **Editor footer** — Both editors end with the card name, the version read from `package.json` at build time, and a Ko-fi link drawn as an icon and a translated label, so opening the editor makes no external request.

### 🐛 Bug Fixes

- **`Action mealie.add_recipe_to_shopping_list not found`** ([#62](https://github.com/domodom30/mealie-card/issues/62)) — The Mealie integration bundled with Home Assistant only exposes a subset of the actions the cards use. Favourites, rating, shopping list and mealplan edit are now gated on `hass.services` and only appear when the action exists, instead of failing at click time. Errors are reported with a localized message rather than the raw backend error.
- **Search bar invisible on the recipe card** ([#49](https://github.com/domodom30/mealie-card/issues/49)) — The card uses the frontend's `ha-input-search` when available, and the field is drawn as an outline over a transparent background instead of a filled block that took on the card's own colour.
- **Mealplan freshness** — No more forced reload on every DOM reattach; instead, update signals carry a revision counter and are replayed when a card reattaches to the DOM or a tab regains focus. A plan changed from another dashboard view — or straight from Mealie — no longer stays stale until a browser reload, and a reload requested while one is running is queued rather than dropped.
- **Side-by-side layouts had no visible effect** — The grids asked for 280px-wide columns, which a card of usual width can never fit twice, so they always collapsed back to a single column. Columns now come from `recipes_columns` and `days_columns`, and the layout mode is no longer silently rewritten in the editor.
- **Density on tablets** — The recipe card now follows the card width through container queries: 2 columns from 420px, 5 from 570px, 6 from 1100px, and a 160px auto-fill below that for phones. On the mealplan card, *meals side by side* caps at 2 recipes per row when a day column is narrower than 570px.
- **Duplicate card registration** — When a HACS upgrade leaves two bundle versions loaded, the second registration threw `NotSupportedError` and took down every card on the dashboard. Registration is now guarded.
- **Smaller fixes** — `result_limit` is no longer capped at 10, which silently truncated the recipe list; the shopping list dialog skips the ingredient selection step when the chosen list has no todo entity to diff against; unfavouriting from the dialog removes the recipe from the list immediately while keeping the optimistic rollback.

### ⚙️ New Config Options

| Option | Card | Default | Description |
|--------|------|---------|-------------|
| `recipe_view` | Both | `dialog` | `dialog`, `webview` or `browser` |
| `mealie_group_slug` | Both | `home` | Group segment of the Mealie recipe URL |
| `show_note_button` | Mealplan | `true` | Show the *add note* button |
| `days_columns` | Mealplan | `2` | Day columns when *days side by side* is active |
| `days_to_show` | Mealplan | - | **Deprecated** — superseded by ranges in `day_offset`, still read |
| `recipes_columns` | Mealplan | `2` | Meal columns when *meals side by side* is active |
| `show_view_recipe_button` | Mealplan | `true` | Show the *view recipe* button |
| `show_shopping_list_button` | Mealplan | `true` | Show the *add to shopping list* button |
| `show_edit_mealplan_button` | Mealplan | `true` | Show the *edit mealplan entry* button |
| `show_delete_mealplan_button` | Mealplan | `true` | Show the *delete from mealplan* button |

> The embedded view uses your browser's Mealie session — the integration's API token is server-side and cannot be reused. Both Mealie and Home Assistant must be served over HTTPS for the session cookie to reach the frame. The dialog header keeps an *Open in Mealie* button as a fallback.

---

🇫🇷 *Français*

### ✨ Nouvelles fonctionnalités

- **Ouvrir les recettes dans Mealie** ([#61](https://github.com/domodom30/mealie-card/issues/61)) — Nouvelle option `recipe_view` sur les deux cartes : dialogue interne (défaut, inchangé), page Mealie intégrée, ou nouvel onglet du navigateur. Nécessite `url` ; retombe sur le dialogue sans elle.
- **Supprimer une entrée du planning** — La carte planning dispose d'un dialogue de suppression pour une entrée existante.
- **Plages de jours** — `day_offset` accepte désormais une plage bornes incluses comme `0-6` ou `1-7`, qui fixe à la fois le premier jour et le nombre de jours affichés ; un nombre simple vaut toujours un seul jour. Cela remplace `days_to_show`, qui reste lu et converti en plage équivalente à l'ouverture de l'éditeur. Plafonné à 31 jours.
- **Quatrième disposition jour/repas** — *Jours et repas côte à côte* est sélectionnable dans l'éditeur, avec `days_columns` et `recipes_columns` qui fixent le nombre de colonnes de chaque disposition côte à côte au lieu de laisser la largeur disponible décider.
- **Contrôle bouton par bouton des actions sur les recettes** — Les quatre boutons de la vignette du planning (voir la recette, liste de courses, modifier, supprimer) s'activent individuellement, et `show_note_button` couvre le bouton d'ajout de note. Tous restent actifs par défaut, les cartes existantes sont donc inchangées.
- **Pied de page des éditeurs** — Les deux éditeurs se terminent par le nom de la carte, la version lue dans `package.json` à la compilation, et un lien Ko-fi rendu sous forme d'icône et de libellé traduit : ouvrir l'éditeur ne déclenche aucune requête externe.

### 🐛 Corrections

- **`Action mealie.add_recipe_to_shopping_list introuvable`** ([#62](https://github.com/domodom30/mealie-card/issues/62)) — L'intégration Mealie livrée avec Home Assistant n'expose qu'une partie des actions utilisées par les cartes. Favoris, note, liste de courses et édition du planning sont maintenant conditionnés à `hass.services` et n'apparaissent que si l'action existe, au lieu d'échouer au clic. Les erreurs sont signalées par un message traduit plutôt que par l'erreur brute du backend.
- **Barre de recherche invisible sur la carte recettes** ([#49](https://github.com/domodom30/mealie-card/issues/49)) — La carte utilise le `ha-input-search` du frontend quand il est disponible, et le champ se dessine par son contour sur fond transparent au lieu d'un bloc plein qui prenait la couleur de la carte.
- **Fraîcheur du planning** — Plus de rechargement forcé à chaque réinsertion dans le DOM ; à la place, les signaux de mise à jour portent un compteur de révision et sont rejoués quand une carte réintègre le DOM ou quand un onglet redevient visible. Un planning modifié depuis une autre vue du tableau de bord — ou directement dans Mealie — ne reste plus obsolète jusqu'au rechargement du navigateur, et un rechargement demandé pendant qu'un autre tourne est mis en file plutôt qu'abandonné.
- **Dispositions côte à côte sans effet visible** — Les grilles réclamaient des colonnes de 280px, qu'une carte de largeur courante ne peut jamais loger deux fois : elles retombaient toujours sur une seule colonne. Le nombre de colonnes vient maintenant de `recipes_columns` et `days_columns`, et le mode de disposition n'est plus silencieusement réécrit dans l'éditeur.
- **Densité sur tablette** — La carte recettes suit désormais la largeur disponible via des container queries : 2 colonnes à partir de 420px, 5 à partir de 570px, 6 à partir de 1100px, et un remplissage automatique à 160px en dessous pour les téléphones. Sur la carte planning, *repas côte à côte* plafonne à 2 recettes par ligne quand une colonne jour fait moins de 570px de large.
- **Double enregistrement des cartes** — Quand une mise à jour HACS laisse deux versions du bundle chargées, le second enregistrement levait `NotSupportedError` et cassait toutes les cartes du tableau de bord. L'enregistrement est désormais protégé.
- **Corrections mineures** — Le `result_limit` n'est plus plafonné à 10, ce qui tronquait silencieusement la liste des recettes ; le dialogue liste de courses ignore l'étape de sélection des ingrédients quand la liste choisie n'a pas d'entité todo permettant de comparer les éléments ; le retrait d'un favori depuis le dialogue enlève immédiatement la recette de la liste, tout en conservant le rollback optimiste.

### ⚙️ Nouvelles options de configuration

| Option | Carte | Défaut | Description |
|--------|-------|--------|-------------|
| `recipe_view` | Les deux | `dialog` | `dialog`, `webview` ou `browser` |
| `mealie_group_slug` | Les deux | `home` | Segment de groupe de l'URL de recette Mealie |
| `show_note_button` | Planning | `true` | Afficher le bouton *Ajouter une note* |
| `days_columns` | Planning | `2` | Colonnes de jours quand *Jours côte à côte* est actif |
| `days_to_show` | Planning | - | **Déprécié** — remplacé par les plages de `day_offset`, toujours lu |
| `recipes_columns` | Planning | `2` | Colonnes de repas quand *Repas côte à côte* est actif |
| `show_view_recipe_button` | Planning | `true` | Afficher le bouton *Voir la recette* |
| `show_shopping_list_button` | Planning | `true` | Afficher le bouton *Ajouter à la liste de courses* |
| `show_edit_mealplan_button` | Planning | `true` | Afficher le bouton *Modifier l'entrée du planning* |
| `show_delete_mealplan_button` | Planning | `true` | Afficher le bouton *Supprimer du planning* |

> La vue intégrée s'appuie sur la session Mealie du navigateur — le token de l'intégration reste côté serveur et n'est pas réutilisable. Mealie et Home Assistant doivent être servis en HTTPS pour que le cookie de session atteigne la frame. L'en-tête du dialogue conserve un bouton *Ouvrir dans Mealie* comme recours.

---

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
