<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';

import data from '@/assets/data.json';
import MainMenu from '@/components/menu/MainMenu.vue';
</script>

<template>
  <MainMenu :data="data.routes" />
  <RouterView />
</template>

<style>
body {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  background-color: #74a2f8 !important;
}
</style>
