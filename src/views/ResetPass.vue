<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-vue-ui-kit';

import data from '@/assets/form.json';
import TextField from '@/components/form/field/TextField.vue';
</script>

<template>
  <section class="vh-100">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">

          <MDBCard class="p-4 text-center" shadow="5">
            <MDBCardBody>
              <MDBCardTitle class="mb-5">{{ $t('reset_pass') }}</MDBCardTitle>

              <MDBCardText>
                <TextField v-for="field in data.reset_pass.fields" :field="(field as any)" />
              </MDBCardText>

              <div class="d-flex justify-content-between">
                <span class="d-flex align-items-center text-black-50">
                  <i class="fa fa-chevron-left me-1"></i>
                  <RouterLink to="/login" class="text-black-50">{{ $t('btn.back_to_login') }}</RouterLink>
                </span>
                <MDBBtn color="primary">{{ $t('btn.send') }}</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>