# Vue 
(tutorial)[https://youtu.be/WLQDpY7lOLg?t=1350]

```bash
npm init vite frontend
```

# Vue Router
```bash 
npm i vue-router
```

# Vue with typescript
```bash
npm install @types/vue --save-dev
npm install vue-tsc --save-dev
```

# Vue with JSX (not reccomended)
```bash
  npm install @vitejs/plugin-vue-jsx --save-dev
```

Then update vite.config.ts
```ts
  // vite.config.ts
  import { defineConfig } from 'vite';
  import vue from '@vitejs/plugin-vue';
  import vueJsx from '@vitejs/plugin-vue-jsx';

  export default defineConfig({
    plugins: [vue(), vueJsx()]
  });
```


Create this file in src vue-shim.d.ts
```ts
// vue-shim.d.ts
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
```

# Vuex (statemanagment)
[https://vuex.vuejs.org/]

Add the vuex.d.ts to src for typescript suppport 
```ts
// vuex.d.ts
declare module "vuex" {
  export * from "vuex/types/index.d.ts";
  export * from "vuex/types/helpers.d.ts";
  export * from "vuex/types/logger.d.ts";
  export * from "vuex/types/vue.d.ts";
}
```

# Vue Options API vs Composisiton API
[https://vueschool.io/articles/vuejs-tutorials/options-api-vs-composition-api/]