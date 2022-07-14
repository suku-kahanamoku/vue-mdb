<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { RouterLink, type RouteRecordRaw } from 'vue-router';
import {
  MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBNavbarItem
} from 'mdb-vue-ui-kit';

import i18n from '@/plugins/i18n';

const props = defineProps<{
  data: RouteRecordRaw[],
  closeFnc?: Function
}>();

const open: Ref<boolean> = ref(false);
</script>

<template>
  <MDBDropdown v-if="data.length > 1" v-model="open">
    <!-- toggle -->
    <MDBDropdownToggle tag="span" @click="open = !open" class="hidden-arrow">
      <MDBIcon icon="user" />
    </MDBDropdownToggle>

    <!-- body -->
    <MDBDropdownMenu>
      <MDBDropdownItem v-for="route in data">
        <!-- nav link -->
        <RouterLink :to="{ name: route.name, params: { locale: i18n.global.locale } }" class="dropdown-item"
          @click="closeFnc && closeFnc()">
          {{ $t(`route.${route.name as string}`) }}
        </RouterLink>
      </MDBDropdownItem>
    </MDBDropdownMenu>
  </MDBDropdown>

  <RouterLink v-else-if="data.length" :to="{ name: data[0].name, params: { locale: i18n.global.locale } }"
    @click="closeFnc && closeFnc()">
    <MDBIcon :icon="data[0]?.meta?.icon" />
  </RouterLink>
</template>

<style scoped>
</style>
