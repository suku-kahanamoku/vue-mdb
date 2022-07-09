<script setup lang="ts">
import { ref } from 'vue';

import data from '@/assets/form.json';
import Login from '@/components/form/Login.vue';
import type { IForm } from '@/components/form/form.interface';

const config = data.login as IForm;
</script>

<template>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <Login :config="config" />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>