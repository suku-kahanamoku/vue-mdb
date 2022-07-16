<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

import TreeMenu from '@/components/menu/TreeMenu.vue';

const props = defineProps<{
  data: RouteRecordRaw[],
}>();
</script>

<template>
  <div class="d-flex h-100">
    <!-- Sidebar -->
    <div id="sidebar" class="my-5 h-100 overflow-hidden">
      <TreeMenu :data="data" size="2x" />
    </div>
    <!-- Page Content -->
    <div class="position-relative w-100">
      <slot></slot>
    </div>
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

#sidebar {
  width: 250px;
}

@media (max-width: 768px) {
  #sidebar {
    width: 50px;
  }

  #sidebar:hover {
    width: 250px;
  }
}

@media (max-width: 576px) {
  #sidebar {
    width: 0;
  }
}
</style>
