<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

import Logo from '@/components/img/Logo.vue';

const props = defineProps<{
  id: string,
  site?: 'start' | 'end',
  data?: any[],
}>();
</script>

<template>
  <!-- sidebar menu -->
  <div :class="'offcanvas offcanvas-' + (site || 'start')" :id="id">
    <div class="offcanvas-header">
      <RouterLink :to="{ name: 'home' }">
        <Logo />
      </RouterLink>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav">
        <li v-for="route in data" class="nav-item">
          <RouterLink :to="{ name: route.name }" class="nav-link">{{ route.name }}</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
</style>
