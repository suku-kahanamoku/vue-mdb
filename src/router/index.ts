import { createRouter, createWebHistory } from 'vue-router';

import PageNotFound from '@/views/404.vue';
import Home from '@/views/Home.vue';
import data from '@/assets/data.json';

const CMPS: any = {
  '404': PageNotFound,
  'home': Home,
  'login': () => import('@/views/Login.vue'),
  'reset_pass': () => import('@/views/ResetPass.vue'),
  'signup': () => import('@/views/Signup.vue'),
  'admin': () => import('@/views/admin/Admin.vue'),
  'dashboard': () => import('@/views/admin/Dashboard.vue'),
  'profile': () => import('@/views/Profile.vue'),
};

const routes = JSON.parse(JSON.stringify(data.routes));
routes.unshift({ path: '/', name: 'home' });
routes.push({
  path: '/admin', name: 'admin', children: [
    { path: '', name: 'dashboard' },
    { path: 'profile', name: 'profile', alias: ['/profile'] }
  ]
});
routes.push({ path: '/:catchAll(.*)', name: '404' });
routes.forEach((route: any) => {
  route.component = CMPS[route.name];
  route.children?.forEach((childRoute: any) => {
    childRoute.component = CMPS[childRoute.name];
  });
});
console.log(routes)

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});
