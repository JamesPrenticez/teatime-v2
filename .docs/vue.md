# Vue
(tutorial)[https://www.youtube.com/watch?v=-bJL00w5Mig]

```bash
  npm i vue vue-loader
  npm i -D @vitejs/plugin-vue
  npm i vue-router
```

Get the Vue extentions
- vue syntax highlighting
- vue 3 snippets
- vue VScode snippets

Update Emmet syntax settings in VScode preferences or settings.json
```settings.json
  "emmet.syntaxProfiles": {
    "vue-html": "html",
    "vue": "html"
  },
  "emmet.includeLanguages": {
    "vue-html": "html",
    "vue": "html"
  }
```

update vite js config to include the plugin
replace body inside the welcome.blade.php with 
```php
  @vite('resources/js/app.js') 
```
create components folder in resources/js
create app.js here too



