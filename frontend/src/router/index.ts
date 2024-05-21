import { createRouter, createWebHistory } from 'vue-router'
import type { IRoute } from './routes.d';
import { Path } from './path.enum'

import {
  HomePage,
  LoginPage,
  RegisterPage
} from '../pages'

const routes: IRoute[] = [
  { path: Path.HOME, name: 'home', component: HomePage },
  { path: Path.LOGIN, name: 'login', component: LoginPage },
  { path: Path.REGISTER, name: 'register', component: RegisterPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;