<script setup lang="ts">
import { ref, type Ref } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import {
  MDBIcon, MDBCollapse, MDBBtn, mdbRipple as vMdbRipple
} from 'mdb-vue-ui-kit';

import TreeMenu from '@/components/menu/TreeMenu.vue';
import RouterOutletLink from '@/components/system/RouterOutletLink.vue';

const props = defineProps<{
  data: RouteRecordRaw[],
  sidenavCloseFnc?: Function
}>();

const open: Ref<boolean> = ref(false);
</script>

<template>
  <ul class="navbar-nav">
    <li v-for="route in data">
      <template v-if="route?.meta?.visible !== false">
        <!-- with children -->
        <template v-if="route.children?.length">
          <!-- nav btn, collapse text -->
          <span class="d-flex align-items-center justify-content-between" @click="open = !open">
            <RouterOutletLink :route="route" class="w-100 text-start nav-link" />
            <MDBBtn color="link">
              <MDBIcon :icon="open ? 'angle-up' : 'angle-right'" size="lg" />
            </MDBBtn>
          </span>

          <!-- collapse body -->
          <MDBCollapse v-model="open" class="ms-3">
            <TreeMenu :data="route.children" :sidenavCloseFnc="sidenavCloseFnc" />
          </MDBCollapse>
        </template>

        <!-- without children -->
        <RouterOutletLink v-else :route="route" class="w-100 text-start nav-link" :sidenavCloseFnc="sidenavCloseFnc" />
      </template>
    </li>
  </ul>
</template>

<style scoped>
.navbar-nav .nav-link:hover {
  background-color: #f5f5f5;
}
</style>
