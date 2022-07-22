<script setup lang="ts">
import { ref } from 'vue';
</script>

<template>
  <footer v-if="$route.name !== 'radar'" class="container-fluid mt-auto py-2 bg-light text-center fw-light shadow">
    © 2022 Copyright:
    <a href="https://www.cs-soft.cz/" target="_blank" class="text-black-50 fw-normal">CS-SOFT</a>
  </footer>
</template>

<style scoped>
</style>
