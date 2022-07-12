<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import {
  MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBNavbarItem
} from 'mdb-vue-ui-kit';
import Vue3RouterTree from 'vue3-router-tree';

import Logo from '@/components/img/Logo.vue';
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
    <div class="offcanvas offcanvas-start" data-bs-scroll="true" :id="sideSelector">
      <div class="offcanvas-header">
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="demo">
          <vue3-router-tree :items="data">
            <template #item="{ item }">
              <div class="flex items-center w-100">
                <MDBIcon icon="home"></MDBIcon>
                <RouterLink :to="item?.path" class="nav-link w-100">{{ item?.name }}</RouterLink>
              </div>
            </template>
          </vue3-router-tree>
        </div>
      </div>
    </div>
  </MDBNavbar>
</template>

<style scoped>
.offcanvas-body {
  padding: 0;
}
</style>
