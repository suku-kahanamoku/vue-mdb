<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue';
import {
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from 'mdb-vue-ui-kit';
import CountryFlag from 'vue-country-flag-next';

import i18n from '@/plugins/i18n';

const open: Ref<boolean> = ref(false);
const selected: Ref<{ flag: string, lang: string, title: string } | undefined> = ref();
const languages = [
  { flag: 'gb', lang: 'en', title: 'English' },
  { flag: 'cz', lang: 'cs', title: 'Español' }
];

function changeLocale(locale: string): void {
  selectLang(i18n.global.locale = locale);
}

function selectLang(value: string): void {
  selected.value = languages.find(item => item.lang === value);
}

onMounted(() => {
  selectLang(i18n.global.locale);
});
</script>

<template>
  <MDBDropdown v-if="selected" v-model="open">
    <MDBDropdownToggle tag="span" @click="open = !open" class="hidden-arrow">
      <CountryFlag :country="selected.flag" />
    </MDBDropdownToggle>
    <MDBDropdownMenu>
      <template v-for="item in languages">
        <MDBDropdownItem v-if="selected.lang !== item.lang" tag="button" @click="changeLocale(item.lang)">
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
</style>
