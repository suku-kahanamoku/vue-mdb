<script setup lang="ts">
import { ref, type Ref } from 'vue';
import {
  MDBIcon, MDBCollapse, MDBBtn
} from 'mdb-vue-ui-kit';

import i18n from '@/plugins/i18n';
import TreeMenu from '@/components/menu/TreeMenu.vue';
import FlagMenu from '@/components/menu/FlagMenu.vue';
import PzMenu from './PzMenu.vue';

defineProps<{
  data?: any[]
}>();

const open: Ref<boolean> = ref(false);
</script>

<template>
  <ul class="navbar-nav">
    <li v-for="route in data">
      <template v-if="route.visible !== false">
        <!-- s potomkami -->
        <template v-if="route.children?.length">
          <MDBBtn class="nav-item d-flex align-items-center justify-content-between w-100" color="link"
            @click="open = !open">
            <MDBIcon v-if="route.icon" :icon="route.icon" size="lg" class="pe-3" />
            <RouterLink :to="{ name: route.name, params: { locale: i18n.global.locale } }"
              class="nav-link w-100 text-start ">{{ $t(`route.${route.name}`) }}
            </RouterLink>
            <MDBIcon :icon="open ? 'angle-up' : 'angle-right'" size="lg" />
          </MDBBtn>
          <MDBCollapse v-model="open" class="ms-3">
            <TreeMenu :data="route.children"></TreeMenu>
          </MDBCollapse>
        </template>

        <!-- bez potomku -->
        <MDBBtn v-else class="nav-item d-flex align-items-center justify-content-between w-100" color="link">
          <MDBIcon v-if="route.icon" :icon="route.icon" size="lg" class="pe-3" />
          <RouterLink :to="{ name: route.name, params: { locale: i18n.global.locale } }"
            class="nav-link w-100 text-start">{{ $t(`route.${route.name}`) }}</RouterLink>
        </MDBBtn>
      </template>
    </li>
  </ul>
  <div class="d-flex align-items-center justify-content-between position-absolute bottom-0 w-100 start-0 px-4 py-2">
    <PzMenu :data="data" />
    <FlagMenu />
  </div>
</template>

<style scoped>
</style>
