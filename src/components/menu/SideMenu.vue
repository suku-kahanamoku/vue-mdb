<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { RouterLink, type RouteRecordRaw } from 'vue-router';

import Logo from '@/components/img/Logo.vue';
import FlagMenu from '@/components/menu/FlagMenu.vue';
import TreeMenu from '@/components/menu/TreeMenu.vue';
import PzMenu from '@/components/menu/PzMenu.vue';

const props = defineProps<{
  id: string,
  data: RouteRecordRaw[]
}>();
</script>

<template>
  <div class="offcanvas offcanvas-start" data-bs-scroll="true" :id="id">
    <div class="offcanvas-header">
      <RouterLink to="/">
        <Logo />
      </RouterLink>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <TreeMenu :data="data" />
    </div>

    <!-- footer -->
    <div class="d-flex align-items-center justify-content-between position-absolute bottom-0 w-100 start-0 px-4 py-2">
      <PzMenu :data="data" />
      <FlagMenu />
    </div>
  </div>
</template>

<style scoped>
</style>
