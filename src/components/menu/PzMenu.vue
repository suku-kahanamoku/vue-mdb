<script setup lang="ts">
import { ref, type Ref } from 'vue';
import {
  MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBNavbarItem
} from 'mdb-vue-ui-kit';

const props = defineProps<{
  data: any[] | any
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
        <RouterLink :to="{ name: route.name }" class="dropdown-item">{{ route.name }}</RouterLink>
      </MDBDropdownItem>
    </MDBDropdownMenu>
  </MDBDropdown>

  <RouterLink v-else :to="data.path">
    <MDBIcon icon="user" />
  </RouterLink>
</template>

<style scoped>
</style>
