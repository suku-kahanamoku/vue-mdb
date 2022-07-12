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
const xs = window.matchMedia("only screen and (max-width: 575.98px)");

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
      <div class="container p-4">
        <div class="row">
          <div class="col-lg-12">
            <h1>Simple Admin Sidebar With Bootstrap by <a href="http://http://codepen.io/hughbalboa/">@hughbalboa</a>
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident laudantium nobis cum dignissimos ex
              inventore, velit blanditiis. Quod laborum soluta quidem culpa officia eligendi, quam, recusandae iste
              aliquid amet odit! </p>
          </div>
        </div>
      </div>
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
