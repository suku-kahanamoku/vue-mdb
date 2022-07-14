<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { RouterLink, type RouteRecordRaw } from 'vue-router';
import {
  MDBIcon, MDBCollapse, MDBBtn
} from 'mdb-vue-ui-kit';

import i18n from '@/plugins/i18n';
import TreeMenu from '@/components/menu/TreeMenu.vue';

const props = defineProps<{
  data: RouteRecordRaw[],
  closeFnc?: Function
}>();

const open: Ref<boolean> = ref(false);

function closeSidenav() {
  document.getElementById('btn-close')?.click();
}
</script>

<template>
  <ul class="navbar-nav">
    <li v-for="route in data">
      <template v-if="route?.meta?.visible !== false">
        <!-- with children -->
        <template v-if="route.children?.length">
          <!-- nav btn, collapse text -->
          <MDBBtn class="nav-item d-flex align-items-center justify-content-between w-100" color="link"
            @click="open = !open">
            <!-- before icon -->
            <MDBIcon v-if="route?.meta?.icon" :icon="route?.meta?.icon" size="lg" class="pe-3" />

            <!-- nav link -->
            <RouterLink :to="{ name: route.name, params: { locale: i18n.global.locale } }"
              class="nav-link w-100 text-start ">
              {{ $t(`route.${route.name as string}`) }}
            </RouterLink>

            <!-- after icon -->
            <MDBIcon :icon="open ? 'angle-up' : 'angle-right'" size="lg" />
          </MDBBtn>

          <!-- collapse body -->
          <MDBCollapse v-model="open" class="ms-3">
            <TreeMenu :data="route.children" :closeFnc="closeFnc" />
          </MDBCollapse>
        </template>

        <!-- without children -->
        <MDBBtn v-else class="nav-item d-flex align-items-center justify-content-between w-100" color="link">
          <!-- before icon -->
          <MDBIcon v-if="route?.meta?.icon" :icon="route?.meta?.icon" size="lg" class="pe-3" />

          <!-- nav link -->
          <RouterLink :to="{ name: route.name, params: { locale: i18n.global.locale } }"
            class="nav-link w-100 text-start" @click="closeFnc && closeFnc()">
            {{ $t(`route.${route.name as string}`) }}
          </RouterLink>
        </MDBBtn>
      </template>
    </li>
  </ul>
</template>

<style scoped>
</style>
