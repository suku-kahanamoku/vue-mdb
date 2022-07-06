<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from 'mdb-vue-ui-kit';
import CountryFlag from 'vue-country-flag-next';

import i18n from '@/plugins/i18n';

const dropdown = ref(false);
const languages = [
  { flag: 'gb', lang: 'en', title: 'English' },
  { flag: 'cz', lang: 'cs', title: 'Español' }
];
const selected = ref();

onMounted(() => {
  selectLang(i18n.global.locale);
});

function changeLocale(locale: string): void {
  selectLang(i18n.global.locale = locale);
}

function selectLang(value: string): void {
  selected.value = languages.find(item => item.lang === value);
}
</script>

<template>
  <MDBDropdown v-model="dropdown">
    <MDBDropdownToggle tag="span" @click="dropdown = !dropdown">
      <CountryFlag :country="selected?.flag" />
    </MDBDropdownToggle>
    <MDBDropdownMenu>
      <template v-for="item in languages">
        <MDBDropdownItem v-if="selected?.lang !== item.lang" tag="button" @click="changeLocale(item.lang)">
          <CountryFlag :country="item.flag" />
        </MDBDropdownItem>
      </template>
    </MDBDropdownMenu>
  </MDBDropdown>
</template>

<style scoped>
.dropdown-menu {
  min-width: auto;
}

.dropdown-toggle::after {
  display: none;
}
</style>
