<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';

import RouterOutlet from '@/components/system/RouterOutlet.vue';
import AdminMenu from '@/components/menu/AdminMenu.vue';
</script>
<template>
  <div>
    <AdminMenu>
      <RouterOutlet />
    </AdminMenu>
  </div>
</template>

<style scoped>
</style>