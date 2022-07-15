<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue';
import {
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBBtn, mdbRipple as vMdbRipple
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
    <MDBDropdownToggle tag="span" @click="open = !open" class="hidden-arrow" v-mdb-ripple="{ color: 'dark' }">
      <CountryFlag :country="selected.flag" />
    </MDBDropdownToggle>
    <MDBDropdownMenu>
      <template v-for="item in languages">
        <MDBBtn v-if="selected.lang !== item.lang" color="link" class="m-0 p-0" @click="changeLocale(item.lang)">
          <CountryFlag :country="item.flag" />
        </MDBBtn>
      </template>
    </MDBDropdownMenu>
  </MDBDropdown>
</template>

<style scoped>
.dropdown-menu {
  min-width: auto;
}

.flag {
  border-radius: 10px;
}

.dropdown-menu,
.btn-link:hover {
  background-color: transparent;
}

.dropdown-menu .flag {
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%);
  margin-left: -12px;
  margin-right: -12px;
  margin-bottom: -14px;
}
</style>
