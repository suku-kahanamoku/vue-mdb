<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { RouterLink, type RouteRecordRaw } from 'vue-router';
import {
  MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBNavbarItem
} from 'mdb-vue-ui-kit';

import Logo from '@/components/img/Logo.vue';
import FlagMenu from '@/components/menu/FlagMenu.vue';
import PzMenu from '@/components/menu/PzMenu.vue';
import SideMenu from './SideMenu.vue';

const props = defineProps<{
  data: RouteRecordRaw[]
}>();

const sideSelector: string = 'sidenav';
const toolbarData: RouteRecordRaw[] = filter(props.data, ['radar']);

const dropdown: Ref<boolean> = ref(false);

function filter(data: RouteRecordRaw[], values: string[]): RouteRecordRaw[] {
  return data?.filter(
    (route: RouteRecordRaw) => ['radar'].indexOf(route?.name as string) >= 0
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
      <!-- dropdown -->
      <MDBNavbarItem class="d-none d-sm-block me-3">
        <MDBDropdown v-model="dropdown">
          <MDBDropdownToggle tag="span" class="nav-link" @click="dropdown = !dropdown">Dropdown</MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem v-for="route in data">
              <RouterLink :to="{ name: route.name }" class="dropdown-item">
                {{ $t(`route.${route.name as string}`) }}
              </RouterLink>
            </MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBNavbarItem>

      <!-- login -->
      <div class="me-3 nav-link">
        <PzMenu :data="data" />
      </div>

      <div class="me-3">
        <FlagMenu />
      </div>

      <!-- hamburger tlacitko -->
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
