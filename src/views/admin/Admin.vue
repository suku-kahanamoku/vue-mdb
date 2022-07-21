<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

import data from '@/assets/data.json';
import RouterOutlet from '@/components/system/RouterOutlet.vue';
import AdminMenu from '@/components/menu/AdminMenu.vue';
import { FILTER_ROUTES } from '@/plugins/utils/route.functions';

const adminData: RouteRecordRaw[] = <RouteRecordRaw[]>FILTER_ROUTES(data.routes as any, ['admin'])[0].children;
</script>
<template>
  <div class="container-fluid h-100">
    <AdminMenu :data="adminData">
      <RouterOutlet />
    </AdminMenu>
  </div>
</template>

<style scoped>
</style>