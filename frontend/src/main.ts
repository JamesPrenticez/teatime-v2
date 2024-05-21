import { createApp } from 'vue'
import App from './App.tsx'
import router from './router'
import store from './store'
import './styles/index.css'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
