# Mealie Cards

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/custom-components/hacs)
[![GitHub Release](https://img.shields.io/github/release/domodom30/mealie-card.svg)](https://github.com/domodom30/mealie-card/releases)

Collection of 2 custom Lovelace cards to display your Mealie recipes and meal plans in Home Assistant.

## Available Cards

This package includes **two distinct cards**:

### 🍽️ Mealie Meal Card
Displays your meal plan organized by date and meal type.

![Mealie Card Mealplan](./images/mealplan_vertical.png) ![Mealie Card Mealplan](./images/mealplan_horizontal.png)

### 📚 Mealie Recipe Card
Displays a searchable list of your Mealie recipes.

![Mealie Card Recipes](./images/recipes.png)

## Features

- 📅 **Meal Plan** - View your planned meals
- 🕒 **Meal Types** - Organization by breakfast, lunch, dinner, etc.
- 📖 **Recipe List** - Browse your Mealie recipes
- ➕ **Add to Meal** - Button to quickly plan a recipe
- 🖼️ **Images** - Optional image display (automatic proxy for legacy installations)
- ⭐ **Ratings** - Display star ratings for recipes
- ⏱️ **Preparation Time** - Display prep, cooking, and total time
- 🖱️ **Recipe Dialog** - Click a recipe to open a detailed dialog (ingredients, instructions)
- 🎨 **Visual Editor** - Full configuration via Home Assistant's graphical interface
- 🌐 **Multilingual** - Support for EN/FR/DE/ES/IT/NL/PL/PT/PT-BR/DA/RO (11 languages)


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

![Mealie Card Mealplan](./images/mealplan_config.png)

#### Complete Configuration
```yaml
type: custom:mealie-mealplan-card
config_entry_id: <your_entry_id>
day_offset: 0
show_image: true
show_rating: true
show_description: true
show_prep_time: true
show_perform_time: true
show_total_time: true
layout: vertical
recipes_layout: horizontal
```

#### Configuration Options

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `type` | string | Yes | - | `custom:mealie-mealplan-card` |
| `config_entry_id` | string | Yes | - | ID of the Mealie integration config entry |
| `url` | string | No | - | URL of your Mealie instance — only needed if images are hashes (legacy) |
| `day_offset` | number | No | `0` | Day offset (0 = today, 1 = tomorrow, etc.) |
| `show_image` | boolean | No | `false` | Display recipe images |
| `show_rating` | boolean | No | `false` | Display recipe star ratings |
| `show_description` | boolean | No | `false` | Display recipe descriptions |
| `show_prep_time` | boolean | No | `true` | Display preparation time |
| `show_perform_time` | boolean | No | `true` | Display cooking time |
| `show_total_time` | boolean | No | `true` | Display total time |
| `layout` | string | No | `vertical` | Card layout (`vertical` or `horizontal`) |
| `recipes_layout` | string | No | `vertical` | Recipe layout within the card (`vertical` or `horizontal`) |

---

### 📚 Recipe Card

Displays a searchable list of your Mealie recipes.

![Mealie Recipe Card](./images/recipes_config.png)

#### Complete Configuration
```yaml
type: custom:mealie-recipe-card
config_entry_id: <your_entry_id>
result_limit: 100
show_image: true
show_rating: true
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
| `url` | string | No | - | URL of your Mealie instance — only needed if images are hashes (legacy) |
| `result_limit` | number | No | `10` | Maximum number of recipes to display |
| `show_image` | boolean | No | `false` | Display recipe images |
| `show_rating` | boolean | No | `false` | Display recipe star ratings |
| `show_description` | boolean | No | `false` | Display recipe descriptions |
| `show_prep_time` | boolean | No | `true` | Display preparation time |
| `show_perform_time` | boolean | No | `true` | Display cooking time |
| `show_total_time` | boolean | No | `true` | Display total time |

---

### Image Proxy (Legacy installations)

If your Mealie integration provides image identifiers as hash codes (older versions), set the `url` option to your Mealie instance URL. The card automatically detects this case and the visual editor shows the field only when needed.

```yaml
url: https://mealie.yourdomain.com
```

### Get Help

If you encounter issues:

- 🐛 [Report a bug](https://github.com/domodom30/mealie-card/issues/new?template=bug_report.md)
- 💡 [Request a feature](https://github.com/domodom30/mealie-card/issues/new?template=feature_request.md)
