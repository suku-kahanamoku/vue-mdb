<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { RouterLink, type RouteRecordRaw } from 'vue-router';
import {
  MDBIcon, MDBCollapse, MDBBtn
} from 'mdb-vue-ui-kit';

import i18n from '@/plugins/i18n';
import TreeMenu from '@/components/menu/TreeMenu.vue';

const props = defineProps<{
  data: RouteRecordRaw[]
}>();

const open: Ref<boolean> = ref(false);
</script>

<template>
  <ul class="navbar-nav">
    <li v-for="route in data">
      <template v-if="route?.meta?.visible !== false">
        <!-- s potomkami -->
        <template v-if="route.children?.length">
          <MDBBtn class="nav-item d-flex align-items-center justify-content-between w-100" color="link"
            @click="open = !open">
            <MDBIcon v-if="route?.meta?.icon" :icon="route?.meta?.icon" size="lg" class="pe-3" />
            <RouterLink :to="{ name: route.name, params: { locale: i18n.global.locale } }"
              class="nav-link w-100 text-start ">
              {{ $t(`route.${route.name as string}`) }}
            </RouterLink>
            <MDBIcon :icon="open ? 'angle-up' : 'angle-right'" size="lg" />
          </MDBBtn>
          <MDBCollapse v-model="open" class="ms-3">
            <TreeMenu :data="route.children" />
          </MDBCollapse>
        </template>

        <!-- bez potomku -->
        <MDBBtn v-else class="nav-item d-flex align-items-center justify-content-between w-100" color="link">
          <MDBIcon v-if="route?.meta?.icon" :icon="route?.meta?.icon" size="lg" class="pe-3" />
          <RouterLink :to="{ name: route.name, params: { locale: i18n.global.locale } }"
            class="nav-link w-100 text-start">
            {{ $t(`route.${route.name as string}`) }}
          </RouterLink>
        </MDBBtn>
      </template>
    </li>
  </ul>
</template>

<style scoped>
</style>
