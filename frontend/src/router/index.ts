import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { Path } from './path.enum'
import store from '../store';

import { 
  AuthLayout,
  Layout
} from '../components';

import {
  // HomePage,
  LoginPage,
  RegisterPage,
  DashboardPage,
  SurveysPage,
  NotFound,
} from '../pages'


const routes: RouteRecordRaw[] = [
  { path: Path.HOME, name: 'home', redirect: Path.DASHBOARD },

  { 
    path: '',
    name: 'auth',
    component: AuthLayout,
    redirect: Path.LOGIN,
    meta: {
      isGuest: true,
    },
    children: [
      { path: Path.LOGIN, name: 'login', component: LoginPage },
      { path: Path.REGISTER, name: 'register', component: RegisterPage },
    ]
  },
  { 
    path: Path.DASHBOARD,
    name: 'dashboard-layout',
    component: Layout,
    meta: {
      requiresAuth: true,
    },
    children: [ 
      { path: '', name: 'dashboard', component: DashboardPage },
      { path: 'surveys', name: 'surveys', component: SurveysPage },
    ] 
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth && !store.state.user.token){
    next({name: 'login'});
  } else if(store.state.user.token && to.meta.isGuest ) {
    next({ name: 'dashboard' });
  } else {
    next();
  }
})

export default router;