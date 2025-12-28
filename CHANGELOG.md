## [2.2.0] - 2025-12-15

### ✨ New Features
- **Dialog Integration** - Recipe links now open in a sleek dialog window instead of external tabs
- **Quick Meal Planning** - Added button to instantly add recipes to your meal plan
- **Horizontal Layout** - New layout option for meal card display

### 🐛 Bug Fixes
- Fixed theme compatibility with Frosted Glass Theme
- Corrected recipe count display in grid view
- Fixed meal display indexing (0: today / 1: tomorrow / etc...)
- Improved horizontal meal display layout

### ⚠️ Breaking Changes
- Recipe links now open in dialogs by default - update `clickable` configuration if needed
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