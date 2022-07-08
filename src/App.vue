<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';

import data from '@/assets/data.json';
import MainMenu from '@/components/menu/MainMenu.vue';
import FooterMenu from '@/components/menu/FooterMenu.vue';
</script>

<template>
  <MainMenu :data="data.routes" />
  <RouterView />
  <FooterMenu />
</template>

<style>
</style>
