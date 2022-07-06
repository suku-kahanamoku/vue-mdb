<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import {
  MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBNavbarItem
} from 'mdb-vue-ui-kit';

import Logo from '@/components/img/Logo.vue';
import SideMenu from '@/components/menu/SideMenu.vue';
import FlagMenu from '@/components/menu/FlagMenu.vue';

defineProps<{
  data?: any[]
}>();

const sideSelector = 'sidenav';
const dropdown = ref(false);
</script>

<template>
  <MDBNavbar light bg="light" container class="w-100">
    <!-- logo -->
    <MDBNavbarBrand href="#">
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

      <!-- hamburger tlacitko -->
      <MDBNavbarItem to="#" class="d-sm-none me-3" data-bs-toggle="offcanvas" :data-bs-target="'#' + sideSelector">
        <MDBIcon icon="bars"></MDBIcon>
      </MDBNavbarItem>

      <!-- login -->
      <MDBNavbarItem to="/login" class="me-3">
        <MDBIcon icon="user"></MDBIcon>
      </MDBNavbarItem>

      <MDBNavbarItem class="me-2">
        <FlagMenu />
      </MDBNavbarItem>
    </MDBNavbarNav>

    <!-- sidebar menu -->
    <SideMenu :id="sideSelector" :data="data" />
  </MDBNavbar>
</template>

<style scoped>
</style>
