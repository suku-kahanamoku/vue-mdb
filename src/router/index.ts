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
  'profile': () => import('@/views/admin/Profile.vue'),
  'profile_detail': () => import('@/views/admin/Detail.vue'),
};

function addComponents(routes: any[]) {
  routes.forEach((route: any) => {
    route.component = CMPS[route.name];
    if (route.children?.length) {
      addComponents(route.children);
    }
  });
}

const routes = JSON.parse(JSON.stringify(data.routes));
routes.push({ path: '/:catchAll(.*)', name: '404' });
addComponents(routes);

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});
