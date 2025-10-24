# Mealie Cards fpour Home Assistant

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/custom-components/hacs)
[![GitHub Release](https://img.shields.io/github/release/domodom30/mealie-card.svg)](https://github.com/domodom30/mealie-card/releases)

Collection de 2 cartes Lovelace personnalisées pour afficher vos recettes et plans de repas Mealie directement dans Home Assistant.

![Mealie Card Screenshot](screenshot.png)

## Cartes Disponibles

Ce package comprend **deux cartes distinctes** :

### 🍽️ Mealie Today Card
Affiche votre plan de repas du jour (ou des prochains jours) organisé par date et type de repas.

![Mealie Card Today](./images/mealplan.png)

### 📚 Mealie Recipe Card
Affiche une liste de vos recettes Mealie.

![Mealie Card Today](./images/recipes.png)

## Fonctionnalités

- 📅 **Plan de repas** - Visualisez vos repas planifiés
- 🕒 **Types de repas** - Organisation par petit-déjeuner, déjeuner, dîner, etc.
- 📖 **Liste de recettes** - Parcourez vos recettes Mealie
- 🖼️ **Images** - Affichage optionnel des images de recettes
- ⏱️ **Temps de préparation** - Affichage des temps de préparation, cuisson et total
- 🔗 **Liens cliquables** - Accès direct à vos recettes Mealie
- 🌐 **Multilingue** - Support EN/ES/FR/DE/IT/PL/RO

## Installation

### HACS (Recommandé)

1. Ouvrez HACS dans Home Assistant
2. Allez dans "Frontend"
3. Cliquez sur le bouton "+" en bas à droite
4. Recherchez "Mealie Card"
5. Cliquez sur "Installer"
6. Redémarrez Home Assistant

### Installation Manuelle

1. Téléchargez le fichier `mealie-card.js` depuis la [dernière release](https://github.com/domodom30/mealie-card/releases)
2. Copiez ce fichier dans votre dossier `config/www/`
3. Ajoutez la ressource dans Home Assistant :
   - Allez dans **Paramètres** → **Tableaux de bord** → **Ressources**
   - Cliquez sur **Ajouter une ressource**
   - URL : `/local/mealie-card.js`
   - Type : **Module JavaScript**
4. Redémarrez Home Assistant

## Prérequis

- **Home Assistant 2025.1.0** ou supérieur
- **Intégration Mealie** configurée dans Home Assistant
- Une instance **Mealie** fonctionnelle

> **Important** : Ces cartes nécessitent que l'intégration Mealie soit installée et configurée dans Home Assistant. Elles utilisent les services de l'intégration pour récupérer les données.

## Configuration

### 🍽️ Mealie Today Card

Affiche votre plan de repas pour aujourd'hui ou les prochains jours.

![Mealie Card Today](./images/mealplan_config.png)

#### Configuration Complète

```yaml
type: custom:mealie-today-card
mealie_url: https://mealie.local
title: "Mes Repas"
days_to_show: 3
show_image: true
show_prep_time: true
show_perform_time: true
show_total_time: true
clickable: true
```

#### Options de Configuration

| Option | Type | Requis | Défaut | Description |
|--------|------|--------|--------|-------------|
| `type` | string | Oui | - | `custom:mealie-today-card` |
| `mealie_url` | string | Non | - | URL de votre instance Mealie (requis si `clickable` ou `show_image` est activé) |
| `title` | string | Non | "Aujourd'hui" | Titre de la carte |
| `days_to_show` | number | Non | `1` | Nombre de jours à afficher (1-7) |
| `show_image` | boolean | Non | `true` | Afficher les images des recettes |
| `show_prep_time` | boolean | Non | `true` | Afficher le temps de préparation |
| `show_perform_time` | boolean | Non | `true` | Afficher le temps de cuisson |
| `show_total_time` | boolean | Non | `true` | Afficher le temps total |
| `clickable` | boolean | Non | `true` | Rendre les recettes cliquables |

---

### 📚 Mealie Recipe Card

Affiche une liste de vos recettes Mealie.

![Mealie Card Today](./images/recipes_config.png)

#### Configuration Complète

```yaml
type: custom:mealie-recipe-card
mealie_url: https://mealie.local
title: "Mes Recettes"
result_limit: 50
show_image: true
show_prep_time: true
show_perform_time: true
show_total_time: true
clickable: true
```

#### Options de Configuration

| Option | Type | Requis | Défaut | Description |
|--------|------|--------|--------|-------------|
| `type` | string | Oui | - | `custom:mealie-recipe-card` |
| `mealie_config_entry_id` | string | Oui | - | ID de configuration de l'intégration Mealie |
| `mealie_url` | string | Non | - | URL de votre instance Mealie (requis si `clickable` ou `show_image` est activé) |
| `title` | string | Non | "Recettes" | Titre de la carte |
| `result_limit` | number | Non | `10` | Nombre maximum de recettes à afficher |
| `show_image` | boolean | Non | `true` | Afficher les images des recettes |
| `show_prep_time` | boolean | Non | `true` | Afficher le temps de préparation |
| `show_perform_time` | boolean | Non | `true` | Afficher le temps de cuisson |
| `show_total_time` | boolean | Non | `true` | Afficher le temps total |
| `clickable` | boolean | Non | `true` | Rendre les recettes cliquables |

### Obtenir de l'Aide

Si vous rencontrez des problèmes :

- 🐛 [Signaler un bug](https://github.com/domodom30/mealie-card/issues/new?template=bug_report.md)
- 💡 [Demander une fonctionnalité](https://github.com/domodom30/mealie-card/issues/new?template=feature_request.md)

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Ressources Utiles

- [Documentation Mealie](https://nightly.mealie.io/)
- [Documentation Home Assistant](https://www.home-assistant.io/docs/)
- [Forum Home Assistant](https://community.home-assistant.io/)
- [HACS](https://hacs.xyz/)
