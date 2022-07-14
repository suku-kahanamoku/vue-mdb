<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { RouterLink, type RouteRecordRaw } from 'vue-router';
import {
  MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBNavbarItem
} from 'mdb-vue-ui-kit';

import i18n from '@/plugins/i18n';
import Logo from '@/components/img/Logo.vue';
import FlagMenu from '@/components/menu/FlagMenu.vue';
import PzMenu from '@/components/menu/PzMenu.vue';
import SideMenu from '@/components/menu/SideMenu.vue';

const props = defineProps<{
  data: RouteRecordRaw[]
}>();

const sideSelector: string = 'sidenav';
const toolbarData: RouteRecordRaw[] = filter(props.data, ['radar']);

function filter(data: RouteRecordRaw[], values: string[]): RouteRecordRaw[] {
  return data?.filter(
    (route: RouteRecordRaw) => values.indexOf(route?.name as string) >= 0
  );
}
</script>

<template>
  <MDBNavbar light bg="light" container class="w-100">
    <!-- logo -->
    <MDBNavbarBrand role="button">
      <RouterLink to="/">
        <Logo />
      </RouterLink>
    </MDBNavbarBrand>

    <!-- toolbar menu -->
    <MDBNavbarNav class="d-flex flex-row" right>
      <!-- menu item -->
      <MDBNavbarItem v-for="route in toolbarData" class="d-none d-sm-block me-3"
        :to="{ name: route.name, params: { locale: i18n.global.locale } }">
        {{ $t(`route.${route.name as string}`) }}
      </MDBNavbarItem>

      <!-- login -->
      <div class="me-3 nav-link">
        <PzMenu :data="data" />
      </div>

      <!-- lang -->
      <div class="me-3">
        <FlagMenu />
      </div>

      <!-- hamburger btn -->
      <div to="#" class="nav-link d-sm-none me-2" data-bs-toggle="offcanvas" :data-bs-target="`#${sideSelector}`"
        role="button">
        <MDBIcon icon="bars" />
      </div>
    </MDBNavbarNav>

    <!-- sidebar menu -->
    <SideMenu :id="sideSelector" :data="data" />
  </MDBNavbar>
</template>

<style scoped>
</style>
