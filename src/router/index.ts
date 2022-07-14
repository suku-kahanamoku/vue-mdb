import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import RouterOutlet from '@/components/RouterOutlet.vue';
import PageNotFound from '@/views/system/404.vue';
import data from '@/assets/data.json';
import i18n from '@/plugins/i18n';
import { REMOVE_DIACRITICS } from '@/utils/modify-string.functions';

const CMPS: any = {
  'home': () => import('@/views/system/Home.vue'),
  'radar': () => import('@/views/system/Radar.vue'),
  'login': () => import('@/views/system/Login.vue'),
  'reset_pass': () => import('@/views/system/ResetPass.vue'),
  'signup': () => import('@/views/system/Signup.vue'),
  'admin': () => import('@/views/admin/Admin.vue'),
  'dashboard': () => import('@/views/admin/Dashboard.vue'),
  'profile': () => import('@/views/admin/Profile.vue'),
  'profile_detail': () => import('@/views/admin/Detail.vue'),
};

i18n.global.locale = location.pathname.split('/')[1] || 'en';

const getAlias = (name: string) => {
  const translation = i18n.global.t(`route.${name}`);
  return translation === `route.${name}` || !translation.length ? undefined : REMOVE_DIACRITICS(translation);
};

function modifyRoutes(routes: RouteRecordRaw[]): RouteRecordRaw[] {
  routes.forEach((route: RouteRecordRaw) => {
    if (route.name) {
      route.path = getAlias(<string>route.name) || route.path;
      route.component = CMPS[<string>route.name];
    }
    if (route.children?.length) {
      modifyRoutes(route.children);
    }
  });
  return routes;
}

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: modifyRoutes([
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
  ])
});
