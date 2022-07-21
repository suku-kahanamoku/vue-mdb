<script setup lang="ts">
import { ref } from 'vue';

import data from '@/assets/form.json';
import type { IForm } from '@/plugins/form/form.interface';
import ProfileForm from '@/components/form/ProfileForm.vue';

const config = data.signup as IForm;
</script>

<template>
  <div class="container h-100">
    <ProfileForm :config="config" />
  </div>
</template>
