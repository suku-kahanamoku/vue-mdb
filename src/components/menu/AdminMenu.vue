<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

import TreeMenu from '@/components/menu/TreeMenu.vue';

const props = defineProps<{
  data: RouteRecordRaw[],
}>();
</script>

<template>
  <div id="wrapper" class="d-flex">
    <!-- Sidebar -->
    <div id="sidebar-wrapper" class="my-5 mx-3">
      <TreeMenu :data="data" />
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
