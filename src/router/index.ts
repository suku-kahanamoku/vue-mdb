import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import data from '@/assets/data.json';

const CMPS: any = {
  'home': Home,
  'login': () => import('@/views/Login.vue'),
  'reset_pass': () => import('@/views/ResetPass.vue'),
};

const routes = JSON.parse(JSON.stringify(data.routes));
routes.unshift({ path: '/', name: 'home', component: 'home' });
routes.forEach((route: any) => route.component = CMPS[route.component]);

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});
