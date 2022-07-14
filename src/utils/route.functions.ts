import type { RouteRecordRaw } from "vue-router";

import i18n from "@/plugins/i18n";
import { REMOVE_DIACRITICS } from "@/utils/modify-string.functions";

export function GET_ALIAS(name: string): string | undefined {
  const translation = i18n.global.t(`route.${name}`);
  return translation === `route.${name}` || !translation.length ? undefined : REMOVE_DIACRITICS(translation);
};

export function MODIFY_ROUTES(routes: RouteRecordRaw[], CMPS: any): RouteRecordRaw[] {
  routes.forEach((route: RouteRecordRaw) => {
    if (route.name) {
      route.path = GET_ALIAS(<string>route.name) || route.path;
      route.component = CMPS[<string>route.name];
    }
    if (route.children?.length) {
      MODIFY_ROUTES(route.children, CMPS);
    }
  });
  return routes;
}

export function FLAT_ROUTES(routes: Array<RouteRecordRaw>): RouteRecordRaw[] {
  let flatRoutes = <any>{};
  for (let i in routes) {
    const route: any = routes[i];
    const name: string = route.name;

    flatRoutes[name] = route;
    if (typeof route.children !== 'undefined' && route.children.length > 0) {
      flatRoutes = { ...flatRoutes, ...FLAT_ROUTES(route.children) };
    }
  }

  return flatRoutes;
}

export function FILTER_ROUTES(data: RouteRecordRaw[], values: string[], reverse?: boolean): RouteRecordRaw[] {
  return data?.filter(
    (route: RouteRecordRaw) => reverse
      ? values.indexOf(route?.name as string) < 0
      : values.indexOf(route?.name as string) >= 0
  );
}