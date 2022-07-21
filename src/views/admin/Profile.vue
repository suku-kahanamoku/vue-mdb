<script setup lang="ts">
import { ref } from 'vue';
import { MDBRow, MDBCol, MDBCard, MDBCardImg, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-vue-ui-kit';

import data from '@/assets/form.json';
import type { IForm } from '@/plugins/form/form.interface';
import ProfileForm from '@/components/form/ProfileForm.vue';
import List from '../../components/system/List.vue';

const config = data.signup as IForm;
const results = [
  { title: 'prvni', description: 'aaaaaaaaaaaaaa aaaaaaaaaaaaaa', img: { url: 'https://mdbootstrap.com/img/new/standard/city/041.webp' } },
  { title: 'druhy', description: 'aaaaaaaaaaaaaa', img: { url: 'https://mdbootstrap.com/img/new/standard/city/042.webp' } },
  { title: 'treti', description: 'aaaaaaaaaaaaaa aaaaaaaaaaaaaa', img: { url: 'https://mdbootstrap.com/img/new/standard/city/043.webp' } },
  { title: 'treti', description: 'aaaaaaaaaaaaaa aaaaaaaaaaaaaa', img: { url: 'https://mdbootstrap.com/img/new/standard/city/043.webp' } }
]
</script>

<template>
  <div class="container h-100">
    <ProfileForm :config="config" />
    <List :data="results" />
  </div>
</template>
