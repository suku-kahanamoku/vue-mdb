<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import offcanvas from "bootstrap/js/src/offcanvas";

import RouterOutlet from '@/components/RouterOutlet.vue';
import AdminMenu from '@/components/menu/AdminMenu.vue';
</script>
<template>
  <AdminMenu />
  <RouterOutlet />
</template>

<style scoped>
</style>