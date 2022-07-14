<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { RouterLink, type RouteRecordRaw } from 'vue-router';

import Logo from '@/components/img/Logo.vue';
import FlagMenu from '@/components/menu/FlagMenu.vue';
import TreeMenu from '@/components/menu/TreeMenu.vue';
import PzMenu from '@/components/menu/PzMenu.vue';

const props = defineProps<{
  id: string,
  data: RouteRecordRaw[],
  pzData: RouteRecordRaw[],
}>();

function closeSidenav() {
  document.getElementById('btn-close')?.click();
}
</script>

<template>
  <div class="offcanvas offcanvas-end" data-bs-scroll="true" :id="id">
    <!-- header -->
    <div class="offcanvas-header">
      <RouterLink to="/">
        <Logo />
      </RouterLink>
      <button type="button" id="btn-close" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>

    <!-- body, menu items -->
    <div class="offcanvas-body">
      <TreeMenu :data="data" :closeFnc="closeSidenav" />
    </div>

    <!-- footer -->
    <div class="d-flex align-items-center justify-content-between position-absolute bottom-0 w-100 start-0 px-4 py-2">
      <PzMenu :data="pzData" :closeFnc="closeSidenav" />
      <FlagMenu />
    </div>
  </div>
</template>

<style scoped>
</style>
