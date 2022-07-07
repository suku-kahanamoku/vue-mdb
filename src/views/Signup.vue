<script setup lang="ts">
import { ref } from 'vue';

import data from '@/assets/form.json';
import Signup from '@/components/form/Signup.vue';
</script>

<template>
  <section class="vh-100">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <Signup :config="data.signup" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>