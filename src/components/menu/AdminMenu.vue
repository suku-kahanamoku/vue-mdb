<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import {
  MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBNavbarItem
} from 'mdb-vue-ui-kit';

import Logo from '@/components/img/Logo.vue';

defineProps<{
  site?: 'start' | 'end',
  data?: any[],
}>();

const sidenav = ref();
const sidenavEl = ref();
const xs = window.matchMedia('only screen and (max-width: 575.98px)');

xs.onchange = (e: any) => toggle(e.matches)

onMounted(() => {
  toggle(xs.matches);
});

function toggle(state: boolean): void {
  /* if (state) {
    sidenav.value.hide();
  } else {
    sidenav.value.show();
  } */
}
</script>

<template>
  <div id="wrapper" class="d-flex">
    <!-- Sidebar -->
    <div id="sidebar-wrapper">
      <div>fsda</div>
    </div>
    <!-- /#sidebar-wrapper -->
    <!-- Page Content -->
    <div id="page-content-wrapper">
      <slot></slot>
    </div>
    <!-- /#page-content-wrapper -->
  </div>
</template>

<style scoped>
*,
div {
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper {
  overflow: hidden;
  height: 100%;
}

#sidebar-wrapper {
  z-index: 1000;
  width: 250px;
  height: 100%;
}

#wrapper #page-content-wrapper {
  position: relative;
}

@media (max-width: 768px) {

  #sidebar-wrapper {
    width: 50px;
  }

  #wrapper #sidebar-wrapper:hover {
    width: 250px;
  }
}

@media (max-width: 576px) {

  #sidebar-wrapper {
    width: 0;
  }
}
</style>
