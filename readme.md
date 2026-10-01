# Mealie Cards

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/custom-components/hacs)
[![GitHub Release](https://img.shields.io/github/release/domodom30/mealie-card.svg)](https://github.com/domodom30/mealie-card/releases)

Collection of 2 custom Lovelace cards to display your Mealie recipes and meal plans in Home Assistant.

## Available Cards

This package includes **two distinct cards**:

### 🍽️ Mealie Meal Card
Displays your meal plan organized by date and meal type.

![Mealie Card Mealplan](./images/mealie_mealplan.png)

### 📚 Mealie Recipe Card
Displays a searchable list of your Mealie recipes.

![Mealie Card Recipes](./images/mealie_recipes.png)

## Features

- 📅 **Meal Plan** - View your planned meals
- 🗓️ **Multi-day View** - Display up to 31 consecutive days in a single card, stacked or side by side
- 🕒 **Meal Types** - Organization by breakfast, lunch, dinner, etc.
- 📖 **Recipe List** - Browse your Mealie recipes
- 🔍 **Search** - Optional search bar to filter the recipe list
- ➕ **Add to Meal** - Quickly plan a recipe from its ⋮ menu
- 🍴 **Add Recipe to a Day** - Search your recipes from the meal plan and add one to a given day, as a list or a grid with thumbnails
- ⋮ **Actions Menus** - Each day header (add recipe, random meal, add note) and each recipe (view, add to meal plan, shopping list, edit, delete) groups its actions in a compact ⋮ menu
- ✏️ **Edit Meal Plan** - Change the date, meal type, recipe or note of an existing entry
- 🎲 **Random Meal** - Fill a meal slot with a randomly picked recipe
- 📥 **Recipe Import** - Import a recipe into Mealie from a URL
- 🛒 **Shopping List** - Add a recipe's ingredients to a Mealie shopping list
- ❤️ **Favorites** - Toggle recipes as favorites and optionally show only favorited recipes
- 🖼️ **Images** - Optional recipe image display, loaded from Mealie or served by Home Assistant from a local folder
- ⭐ **Ratings** - Interactive star ratings, editable directly from the cards and the recipe dialog
- 🍽️ **Servings** - Display recipe servings and yield quantity
- ⏱️ **Preparation Time** - Display prep, cooking, and total time
- 🖱️ **Recipe Dialog** - Click a recipe to open a detailed dialog (ingredients, instructions)
- 🔗 **Open in Mealie** - Optionally open recipes in the Mealie web interface, either embedded in the card or in a new browser tab
- 🎨 **Visual Editor** - Full configuration via Home Assistant's graphical interface
- 🌐 **Multilingual** - Support for EN/FR/DE/ES/IT/NL/PL/PT/PT-BR/DA/RO/SV (12 languages)


## Installation

### HACS (Recommended)

1. Open HACS in Home Assistant
2. Go to "Frontend"
3. Click the "+" button in the bottom right
4. Search for "Mealie Card"
5. Click "Install"
6. Restart Home Assistant

### Manual Installation

1. Download the `mealie-card.js` file from the [latest release](https://github.com/domodom30/mealie-card/releases)
2. Copy this file to your `config/www/` folder
3. Add the resource in Home Assistant:
   - Go to **Settings** → **Dashboards** → **Resources**
   - Click **Add Resource**
   - URL: `/local/mealie-card.js`
   - Type: **JavaScript Module**
4. Restart Home Assistant

## Prerequisites

- **Home Assistant 2025.1.0** or higher
- **Mealie Integration** configured in Home Assistant
- A working **Mealie** instance

> **Important**: These cards require the Mealie integration to be installed and configured in Home Assistant. Use `config_entry_id` to link the card to your integration.

## Configuration

### Visual Editor

Both cards include a **full visual editor**. Click ✏️ (edit) in the Lovelace interface to access graphical configuration without writing YAML.

---

### 🍽️ Meal Card

Displays your meal plan for today and/or upcoming days.

#### Complete Configuration
```yaml
type: custom:mealie-mealplan-card
config_entry_id: <your_entry_id>
url: https://mealie.yourdomain.com
image_url: /local/mealie
recipe_view: dialog
mealie_group_slug: home
day_offset: 0-6
days_layout: horizontal
days_columns: 2
entry_types:
  - breakfast
  - lunch
  - dinner
show_image: true
show_rating: true
show_servings: true
show_description: true
show_prep_time: true
show_perform_time: true
show_total_time: true
show_add_recipe_button: true
show_random_button: true
show_note_button: true
show_view_recipe_button: true
show_shopping_list_button: true
show_edit_mealplan_button: true
show_delete_mealplan_button: true
default_shopping_list_id: <your_shopping_list_id>
recipes_layout: horizontal
recipes_columns: 2
```

#### Configuration Options

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `type` | string | Yes | - | `custom:mealie-mealplan-card` |
| `config_entry_id` | string | Yes | - | ID of the Mealie integration config entry |
| `url` | string | No | - | URL of your Mealie instance, used to load recipe images and to open recipes in Mealie. Must be reachable from the device displaying the dashboard — see [Recipe images](#recipe-images) |
| `image_url` | string | No | - | Where to load recipe images from, tried before `url`: another Mealie URL, or a local path served by Home Assistant such as `/local/mealie`. Images missing there fall back to `url` — see [Serving images through Home Assistant](#serving-images-through-home-assistant) |
| `recipe_view` | string | No | `dialog` | Where the *view recipe* button opens the recipe: `dialog` (inside the card), `webview` (embedded Mealie page), `browser` (new tab). Falls back to `dialog` when `url` is not set |
| `mealie_group_slug` | string | No | `home` | Group segment of the Mealie recipe URL (`/g/{group}/r/{slug}`). Only matters for unauthenticated access |
| `day_offset` | number \| string | No | `0` | Which days to display: a single offset (`0` = today, `1` = tomorrow, …) for one day, or an inclusive range such as `0-6` (today and the next 6 days) or `1-7` (tomorrow through 7 days ahead). Capped at 31 days |
| `days_to_show` | number | No | - | **Deprecated**, kept for backward compatibility. Number of days starting from `day_offset`; use a range in `day_offset` instead. Existing configs keep working, and opening the editor rewrites them to the equivalent range |
| `days_layout` | string | No | `vertical` | Layout of the day sections (`vertical` = stacked, `horizontal` = side by side) |
| `days_columns` | number | No | `2` | Number of day columns when `days_layout: horizontal`. Falls back to a single column when the card is narrower than 420px |
| `entry_types` | list | No | `[]` | Meal types to display (`breakfast`, `lunch`, `dinner`, `side`, `dessert`, `drink`, `snack`). Empty = all types |
| `show_image` | boolean | No | `false` | Display recipe images. Needs `url` or `image_url` — see [Recipe images](#recipe-images) |
| `show_rating` | boolean | No | `false` | Display recipe star ratings |
| `show_servings` | boolean | No | `false` | Display recipe servings and yield quantity |
| `show_description` | boolean | No | `false` | Display recipe descriptions |
| `show_prep_time` | boolean | No | `true` | Display preparation time |
| `show_perform_time` | boolean | No | `true` | Display cooking time |
| `show_total_time` | boolean | No | `true` | Display total time |
| `show_add_recipe_button` | boolean | No | `true` | Show *add recipe* in each day's ⋮ menu. It opens a recipe search to add a recipe to that day |
| `show_random_button` | boolean | No | `true` | Show *random meal* in each day's ⋮ menu. Only shown if the Mealie integration exposes the `set_random_mealplan` service |
| `show_note_button` | boolean | No | `true` | Show *add note* in each day's ⋮ menu |
| `show_view_recipe_button` | boolean | No | `true` | Show *view recipe* in each recipe's ⋮ menu |
| `show_shopping_list_button` | boolean | No | `true` | Show *add to shopping list* in each recipe's ⋮ menu. Also requires the `add_recipe_to_shopping_list` service |
| `show_edit_mealplan_button` | boolean | No | `true` | Show *edit mealplan entry* in each recipe's ⋮ menu. Also requires the `update_mealplan` service |
| `show_delete_mealplan_button` | boolean | No | `true` | Show *delete from mealplan* in each recipe's ⋮ menu. Also requires the `delete_mealplan` service |
| `default_shopping_list_id` | string | No | `""` | Shopping list pre-selected when adding a recipe to a shopping list |
| `recipes_layout` | string | No | `vertical` | Recipe layout within each day (`vertical` or `horizontal`) |
| `recipes_columns` | number | No | `2` | Number of recipe columns when `recipes_layout: horizontal`. Falls back to a single column when the day section is narrower than 380px |

---

### 📚 Recipe Card

Displays a searchable list of your Mealie recipes.

#### Complete Configuration
```yaml
type: custom:mealie-recipe-card
config_entry_id: <your_entry_id>
url: https://mealie.yourdomain.com
image_url: /local/mealie
recipe_view: dialog
mealie_group_slug: home
result_limit: 10
show_search: true
show_favorites_only: false
show_favorite: true
show_import_button: true
default_shopping_list_id: <your_shopping_list_id>
show_image: true
show_rating: true
show_servings: true
show_description: true
show_prep_time: true
show_perform_time: true
show_total_time: true
```

#### Configuration Options

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `type` | string | Yes | - | `custom:mealie-recipe-card` |
| `config_entry_id` | string | Yes | - | ID of the Mealie integration config entry |
| `url` | string | No | - | URL of your Mealie instance, used to load recipe images and to open recipes in Mealie. Must be reachable from the device displaying the dashboard — see [Recipe images](#recipe-images) |
| `image_url` | string | No | - | Where to load recipe images from, tried before `url`: another Mealie URL, or a local path served by Home Assistant such as `/local/mealie`. Images missing there fall back to `url` — see [Serving images through Home Assistant](#serving-images-through-home-assistant) |
| `recipe_view` | string | No | `dialog` | Where the *view recipe* button opens the recipe: `dialog` (inside the card), `webview` (embedded Mealie page), `browser` (new tab). Falls back to `dialog` when `url` is not set |
| `mealie_group_slug` | string | No | `home` | Group segment of the Mealie recipe URL (`/g/{group}/r/{slug}`). Only matters for unauthenticated access |
| `result_limit` | number | No | `9999` | Maximum number of recipes to display. The default shows all recipes; the visual editor accepts 1–100 |
| `show_search` | boolean | No | `false` | Display the search bar to filter recipes |
| `show_favorites_only` | boolean | No | `false` | Display only recipes marked as favorites in Mealie |
| `show_favorite` | boolean | No | `false` | Display the favorite (heart) button on recipe cards |
| `show_import_button` | boolean | No | `false` | Display the button to import a recipe from a URL |
| `default_shopping_list_id` | string | No | `""` | Shopping list pre-selected when adding a recipe to a shopping list |
| `show_image` | boolean | No | `false` | Display recipe images. Needs `url` or `image_url` — see [Recipe images](#recipe-images) |
| `show_rating` | boolean | No | `false` | Display recipe star ratings |
| `show_servings` | boolean | No | `false` | Display recipe servings and yield quantity |
| `show_description` | boolean | No | `false` | Display recipe descriptions |
| `show_prep_time` | boolean | No | `true` | Display preparation time |
| `show_perform_time` | boolean | No | `true` | Display cooking time |
| `show_total_time` | boolean | No | `true` | Display total time |

---

### Opening recipes in Mealie

Set `recipe_view` to `webview` to show the Mealie page inside the card dialog, or to `browser`
to open it in a new tab. Both need `url` to point at your Mealie instance; without it the button
keeps opening the built-in dialog.

The card cannot reuse the integration's API token — it lives server-side and is never exposed to
the frontend. The embedded view relies on your browser's own Mealie session instead: if you are
already signed in, the recipe shows up; otherwise Mealie's login page appears inside the frame
and you sign in once.

For that session cookie to reach an embedded frame, **both Mealie and Home Assistant must be
served over HTTPS** — Mealie sets `SameSite=None`, which browsers only honour on secure origins,
and Home Assistant refuses to embed an `http://` page in an `https://` dashboard. When the
embedded view stays blank, use the *Open in Mealie* button in the dialog header, or switch the
card to `browser`.

`mealie_group_slug` fills the `/g/{group}/r/{slug}` path. Mealie ignores it when you are signed
in and the recipe belongs to your own group, so the `home` default fits most installations.

---

### Recipe images

The Mealie integration returns only an image version hash (e.g. `image: euV9`), not the image itself. The card builds the image address from `image_url` and `url`, and **your browser or the Companion app loads it directly** from that address.

```yaml
url: https://mealie.yourdomain.com
```

This means:

- `url` or `image_url` is required to display images. The visual editor turns `show_image` on as soon as you enter a valid one.
- With `url` alone, images are loaded from Mealie, so Mealie must be reachable from every device that shows the dashboard. A local address such as `http://mynas.local:9925` only works on your home network: away from home, recipes load but images do not.
- If Home Assistant is served over `https`, use an `https` Mealie URL too — browsers block `http` images on `https` pages.

To see images remotely, you can expose Mealie through a reverse proxy with a public `https` address, reach your home network through a VPN (WireGuard, Tailscale…), or let Home Assistant serve the images as described below.

When the integration returns an empty `image` field for a recipe that does have an image in Mealie, the card rebuilds the image address from the recipe identifier. Recipes that genuinely have no image simply display no image.

#### Serving images through Home Assistant

If Mealie must stay on your home network while Home Assistant is reachable remotely, let Home Assistant serve the images through its `/local/` path:

1. Make Mealie's `data/recipes` folder available read-only inside Home Assistant's `/config/www` folder, for example as `/config/www/mealie` (bind mount, network share or sync).
2. Set `image_url` to the matching `/local/` path. Keep `url` to open recipes in Mealie and as a fallback:

   ```yaml
   url: http://mynas.local:9925
   image_url: /local/mealie
   ```

3. If `/config/www` did not exist when Home Assistant started, restart Home Assistant so that `/local/` is served.

The card expects Mealie's own file layout, one folder per recipe identifier:

```text
/config/www/mealie/
└── 99d427a7-8388-43b5-a8a6-f740d0c09f02/
    └── images/
        ├── original.webp
        ├── min-original.webp
        └── tiny-original.webp
```

Mealie creates these three files for every recipe image; files with other names or formats (such as `original.png`) are ignored. When an image is missing from the local folder, the card falls back to `url`.

> **Note**: files under `/local/` are served by Home Assistant without authentication, like Mealie's own image endpoint.

### Get Help

If you encounter issues:

- 🐛 [Report a bug](https://github.com/domodom30/mealie-card/issues/new?template=bug_report.md)
- 💡 [Request a feature](https://github.com/domodom30/mealie-card/issues/new?template=feature_request.md)

## ☕ Support

Mealie Cards is free and developed in my spare time. If it makes your meal planning easier and you would like to support my work, a donation is always appreciated — it helps me keep the cards maintained and add new features.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/A1V11ZZTPI)

Starring the repository or reporting bugs also helps a lot. Thank you! 🙏
