<script setup lang="ts">
import { ref, type Ref } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import {
  MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, mdbRipple as vMdbRipple
} from 'mdb-vue-ui-kit';

import RouterOutletLink from '@/components/system/RouterOutletLink.vue';

const props = defineProps<{
  data: RouteRecordRaw[],
  sidenavCloseFnc?: Function
}>();

const open: Ref<boolean> = ref(false);
</script>

<template>
  <MDBDropdown v-if="data.length > 1" v-model="open" class="nav-link">
    <!-- toggle -->
    <MDBDropdownToggle tag="span" @click="open = !open" class="hidden-arrow rounded" :class="open ? '' : 'btn-link'"
      v-mdb-ripple="{ color: 'dark' }">
      <MDBIcon icon="user" size="lg" />
    </MDBDropdownToggle>

    <!-- body -->
    <MDBDropdownMenu>
      <MDBDropdownItem v-for="route in data">
        <!-- nav link -->
        <span class="dropdown-item">
          <RouterOutletLink :route="route" :sidenavCloseFnc="sidenavCloseFnc" />
        </span>
      </MDBDropdownItem>
    </MDBDropdownMenu>
  </MDBDropdown>

  <RouterOutletLink v-else-if="data.length" :route="data[0]" :hideName="true" :sidenavCloseFnc="sidenavCloseFnc" />
</template>

<style scoped>
</style>
