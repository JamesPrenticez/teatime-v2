import { createRouter, createWebHistory } from "vue-router";

import { 
  HomePage,
  AboutPage,
  NotFoundPage
} from '../pages';

const routes = [
  { path: '/', component: HomePage},
  { path: '/about', component: AboutPage},
  { path: '/:pathMatch(.*)*', component: NotFoundPage},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;