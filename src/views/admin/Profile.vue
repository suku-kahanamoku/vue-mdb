<script setup lang="ts">
import { ref } from 'vue';

import data from '@/assets/form.json';
import ResetPass from '@/components/form/ResetPassForm.vue';
import type { IForm } from '@/components/form/form.interface';

const config = data.reset_pass as IForm;
</script>

<template>
  <div class="container">
    <h1 class="text-uppercase h3 text-center m-5">{{ $t('route.profile') }}</h1>
    <ResetPass :config="config" />
  </div>
</template>
