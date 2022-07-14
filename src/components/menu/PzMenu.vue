<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { RouterLink, type RouteRecordRaw } from 'vue-router';
import {
  MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBNavbarItem
} from 'mdb-vue-ui-kit';

const props = defineProps<{
  data: RouteRecordRaw[] | RouteRecordRaw
}>();

const dropdown: Ref<boolean> = ref(false);
</script>

<template>
  <MDBDropdown v-if="Array.isArray(data)" v-model="dropdown">
    <MDBDropdownToggle tag="span" @click="dropdown = !dropdown" class="hidden-arrow">
      <MDBIcon icon="user" />
    </MDBDropdownToggle>
    <MDBDropdownMenu>
      <MDBDropdownItem v-for="route in data">
        <RouterLink :to="{ name: route.name }" class="dropdown-item">
          {{ $t(`route.${route.name as string}`) }}
        </RouterLink>
      </MDBDropdownItem>
    </MDBDropdownMenu>
  </MDBDropdown>

  <RouterLink v-else :to="data.path">
    <MDBIcon icon="user" />
  </RouterLink>
</template>

<style scoped>
</style>
