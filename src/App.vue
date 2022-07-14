<script setup lang="ts">
import { ref } from 'vue';

import data from '@/assets/data.json';
import MainMenu from '@/components/menu/MainMenu.vue';
import FooterMenu from '@/components/menu/FooterMenu.vue';
import RouterOutlet from '@/components/RouterOutlet.vue';
</script>

<template>
  <MainMenu :data="(data.routes as any)" />
  <RouterOutlet />
  <FooterMenu />
</template>

<style>
</style>
