# Mealie Cards for Home Assistant

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/custom-components/hacs)
[![GitHub Release](https://img.shields.io/github/release/domodom30/mealie-card.svg)](https://github.com/domodom30/mealie-card/releases)
[![License](https://img.shields.io/github/license/domodom30/mealie-card.svg)](LICENSE)

Collection of 2 custom Lovelace cards to display your Mealie recipes and meal plans directly in Home Assistant.

## Available Cards

This package includes **two distinct cards**:

### 🍽️ Mealie Today Card
Displays your meal plan for today (or upcoming days) organized by date and meal type.

<p>
  <img src="./images/mealplan.png" width="23%" />
  <img src="./images/mealplan_2.png" width="45%" />
</p>

### 📚 Mealie Recipe Card
Displays a list of your Mealie recipes.

<img src="./images/recipes.png" width="70%" />

## Features

- 📅 **Meal Plan** - View your planned meals
- 🕒 **Meal Types** - Organization by breakfast, lunch, dinner, etc.
- 📖 **Recipe List** - Browse your Mealie recipes
- 🖼️ **Images** - Optional display of recipe images
- ⏱️ **Preparation Time** - Display prep time, cook time, and total time
- 🔗 **Clickable Links** - Direct access to your Mealie recipes
- 🌐 **Multilingual** - EN/FR support

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

> **Important**: These cards require the Mealie integration to be installed and configured in Home Assistant. They use the integration's services to retrieve data.

## Configuration

### 🍽️ Mealie Today Card

Displays your meal plan for today or upcoming days.

<img src="./images/mealplan_config.png" width="50%" />

#### Complete Configuration

```yaml
type: custom:mealie-today-card
mealie_url: https://mealie.local
title: "My Meals"
days_to_show: 3
show_image: true
show_prep_time: true
show_perform_time: true
show_total_time: true
clickable: true
```

#### Configuration Options

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `type` | string | Yes | - | `custom:mealie-today-card` |
| `mealie_url` | string | No | - | URL of your Mealie instance (required if `clickable` or `show_image` is enabled) |
| `title` | string | No | "Today" | Card title |
| `days_to_show` | number | No | `1` | Number of days to display (1-7) |
| `show_image` | boolean | No | `true` | Display recipe images |
| `show_prep_time` | boolean | No | `true` | Display preparation time |
| `show_perform_time` | boolean | No | `true` | Display cook time |
| `show_total_time` | boolean | No | `true` | Display total time |
| `clickable` | boolean | No | `true` | Make recipes clickable |

---

### 📚 Mealie Recipe Card

Displays a list of your Mealie recipes.

<img src="./images/recipes_config.png" width="50%" />

#### Complete Configuration

```yaml
type: custom:mealie-recipe-card
mealie_url: https://mealie.local
title: "My Recipes"
result_limit: 50
show_image: true
show_prep_time: true
show_perform_time: true
show_total_time: true
clickable: true
```

#### Configuration Options

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `type` | string | Yes | - | `custom:mealie-recipe-card` |
| `mealie_config_entry_id` | string | Yes | - | Configuration entry ID of the Mealie integration |
| `mealie_url` | string | No | - | URL of your Mealie instance (required if `clickable` or `show_image` is enabled) |
| `title` | string | No | "Recipes" | Card title |
| `result_limit` | number | No | `10` | Maximum number of recipes to display |
| `show_image` | boolean | No | `true` | Display recipe images |
| `show_prep_time` | boolean | No | `true` | Display preparation time |
| `show_perform_time` | boolean | No | `true` | Display cook time |
| `show_total_time` | boolean | No | `true` | Display total time |
| `clickable` | boolean | No | `true` | Make recipes clickable |

## Support and Contributions

### Getting Help

If you encounter issues:

- 🐛 [Report a bug](https://github.com/domodom30/mealie-card/issues/new?template=bug_report.md)
- 💡 [Request a feature](https://github.com/domodom30/mealie-card/issues/new?template=feature_request.md)
- 💬 [Ask a question](https://github.com/domodom30/mealie-card/discussions)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Useful Resources

- [Mealie Documentation](https://nightly.mealie.io/)
- [Home Assistant Documentation](https://www.home-assistant.io/docs/)
- [Home Assistant Forum](https://community.home-assistant.io/)
- [HACS](https://hacs.xyz/)
