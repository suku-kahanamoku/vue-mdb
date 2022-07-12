<script setup lang="ts">
import { ref } from 'vue';
import {
  MDBIcon, MDBCollapse, MDBBtn
} from 'mdb-vue-ui-kit';

import TreeMenu from '@/components/menu/TreeMenu.vue';

defineProps<{
  data?: any[]
}>();
const opend = ref(false);
</script>

<template>
  <ul class="navbar-nav">
    <li v-for="route in data">
      <template v-if="route.name">
        <!-- s potomkami -->
        <template v-if="route.children?.length">
          <MDBBtn class="nav-item d-flex align-items-center justify-content-between w-100" color="link"
            @click="opend = !opend">
            <RouterLink :to="route.path" class="nav-link w-100 text-start ">{{ route.name }}</RouterLink>
            <MDBIcon :icon="opend ? 'angle-up' : 'angle-right'"></MDBIcon>
          </MDBBtn>
          <MDBCollapse v-model="opend" class="ms-3">
            <TreeMenu :data="route.children"></TreeMenu>
          </MDBCollapse>
        </template>

        <!-- bez potomku -->
        <MDBBtn v-else class="nav-item d-flex align-items-center justify-content-between w-100" color="link">
          <RouterLink :to="route.path" class="nav-link w-100 text-start">{{ route.name }}</RouterLink>
        </MDBBtn>
      </template>
    </li>
  </ul>
</template>

<style scoped>
</style>
