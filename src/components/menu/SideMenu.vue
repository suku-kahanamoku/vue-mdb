<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(defineProps<{
  id: string,
  site?: 'start' | 'end',
  mode?: 'side' | 'push',
  backdrop?: boolean,
}>(), { site: 'start', backdrop: true });
</script>

<template>
  <!-- sidebar menu -->
  <div :class="'offcanvas offcanvas-' + site" :id="id" :data-bs-backdrop="backdrop" data-bs-scroll="true">
    <div class="offcanvas-header">
      <slot name="header"></slot>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <slot name="body"></slot>
    </div>
  </div>

  <!-- content -->
  <slot name="content"></slot>
</template>

<style scoped>
</style>
