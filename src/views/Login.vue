<script setup lang="ts">
import { ref } from 'vue';

import data from '@/assets/form.json';
import Login from '@/components/form/Login.vue';
</script>

<template>
  <section class="vh-100">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <Login :config="data.login" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>