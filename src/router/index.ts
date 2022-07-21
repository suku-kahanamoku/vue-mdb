import { createRouter, createWebHistory } from 'vue-router';

import i18n from '@/plugins/i18n';
import RouterOutlet from '@/components/system/RouterOutlet.vue';
import PageNotFound from '@/views/system/404.vue';
import data from '@/assets/data.json';
import { MODIFY_ROUTES } from '@/plugins/utils/route.functions';

i18n.global.locale = location.pathname.split('/')[1] || 'en';

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: MODIFY_ROUTES(
    [
      {
        path: '/',
        redirect: `/${i18n.global.locale}`,
      },
      {
        path: '/:catchAll(.*)',
        component: PageNotFound,
      },
      {
        path: '/:locale',
        component: RouterOutlet,
        children: JSON.parse(JSON.stringify(data.routes)),
      }
    ],
    {
      'home': () => import('@/views/web/Home.vue'),
      'radar': () => import('@/views/web/Radar.vue'),
      'contact': () => import('@/views/web/Contact.vue'),
      'login': () => import('@/views/system/Login.vue'),
      'logout': () => import('@/views/system/Logout.vue'),
      'reset_pass': () => import('@/views/system/ResetPass.vue'),
      'signup': () => import('@/views/system/Signup.vue'),
      'admin': () => import('@/views/admin/Admin.vue'),
      'dashboard': () => import('@/views/admin/Dashboard.vue'),
      'profile': () => import('@/views/admin/Profile.vue'),
      'profile_detail': () => import('@/views/admin/Detail.vue'),
    })
});
