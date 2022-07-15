<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { RouterLink, type RouteRecordRaw } from 'vue-router';
import {
  MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarItem
} from 'mdb-vue-ui-kit';

import Logo from '@/components/img/Logo.vue';
import FlagMenu from '@/components/menu/FlagMenu.vue';
import PzMenu from '@/components/menu/PzMenu.vue';
import SideMenu from '@/components/menu/SideMenu.vue';
import { FLAT_ROUTES, FILTER_ROUTES } from '@/utils/route.functions';
import RouterOutletLink from '@/components/system/RouterOutletLink.vue';

const props = defineProps<{
  data: RouteRecordRaw[]
}>();

const sideSelector: string = 'sidenav';
const isLogged: Ref<boolean> = ref(true);
const toolbarData: RouteRecordRaw[] = FILTER_ROUTES(props.data, ['radar', 'contact']);
const sidenavData: RouteRecordRaw[] = FILTER_ROUTES(props.data, ['home', 'login', 'logout', 'signup', 'reset_pass'], true);
const pzData: RouteRecordRaw[] | RouteRecordRaw = FILTER_ROUTES(
  Object.values(FLAT_ROUTES(props.data)), isLogged.value ? ['profile', 'logout'] : ['login']
);
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
      <MDBNavbarItem v-for="route in toolbarData" class="d-none d-sm-block px-2 nav-link">
        <RouterOutletLink :route="route" :hideName="true" :tooltip="true" />
      </MDBNavbarItem>

      <!-- login -->
      <MDBNavbarItem class="px-2">
        <PzMenu :data="pzData" />
      </MDBNavbarItem>

      <!-- lang -->
      <MDBNavbarItem class="px-2">
        <FlagMenu />
      </MDBNavbarItem>

      <!-- hamburger btn -->
      <MDBNavbarItem class="nav-link d-sm-none mx-2" role="button" data-bs-toggle="offcanvas"
        :data-bs-target="`#${sideSelector}`">
        <MDBIcon icon="bars" size="lg" />
      </MDBNavbarItem>
    </MDBNavbarNav>

    <!-- sidebar menu -->
    <SideMenu :id="sideSelector" :data="sidenavData" :pz-data="pzData" />
  </MDBNavbar>
</template>

<style scoped>
</style>
