<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBInput } from 'mdb-vue-ui-kit';
</script>

<template>
  <section class="vh-100">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">

          <MDBCard class="p-4 text-center" shadow="5">
            <MDBCardBody>
              <MDBCardTitle class="mb-5">{{ $t('signup') }}</MDBCardTitle>

              <MDBCardText>
                <MDBInput type="text" :label="$t('form.firstname')" autocomplete="given-name" wrapperClass="mb-4" />
                <MDBInput type="text" :label="$t('form.lastname')" autocomplete="family-name" wrapperClass="mb-4" />
                <MDBInput type="email" :label="$t('form.email')" autocomplete="email" wrapperClass="mb-4" />
                <MDBInput type="tel" :label="$t('form.phone')" autocomplete="tel" wrapperClass="mb-4" />
                <MDBInput type="password" :label="$t('form.password')" autocomplete="new-password" wrapperClass="mb-4" />
                <MDBInput type="password" :label="$t('form.repeat_pass')" wrapperClass="mb-4" />
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