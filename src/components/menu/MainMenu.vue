<script setup lang="ts">
import { ref, type Ref } from 'vue';
import {
  MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBNavbarItem
} from 'mdb-vue-ui-kit';

import Logo from '@/components/img/Logo.vue';
import FlagMenu from '@/components/menu/FlagMenu.vue';
import TreeMenu from './TreeMenu.vue';
import PzMenu from './PzMenu.vue';

const props = defineProps<{
  data?: any[]
}>();

const sideSelector: string = 'sidenav';
const dropdown: Ref<boolean> = ref(false);
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
              <RouterLink :to="route.path" class="dropdown-item">{{ route.name }}</RouterLink>
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
    <div class="offcanvas offcanvas-start" data-bs-scroll="true" :id="sideSelector">
      <div class="offcanvas-header">
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <TreeMenu :data="data"></TreeMenu>
      </div>
    </div>
  </MDBNavbar>
</template>

<style scoped>
</style>
