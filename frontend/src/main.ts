import { createApp } from 'vue'
import App from './App.tsx'
import store from './store/index.ts'
import './styles/index.css'

createApp(App)
  .use(store)
  .mount('#app')
