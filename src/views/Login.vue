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
              <MDBCardTitle class="mb-5">{{ $t('signin') }}</MDBCardTitle>

              <MDBCardText>
                <MDBInput type="Email" :label="$t('form.email')" class="mb-4" />
                <MDBInput type="Password" :label="$t('form.password')" class="mb-4" />
                <RouterLink to="/reset-password" class="text-black-50">{{ $t('reset_pass') }}</RouterLink>
              </MDBCardText>

              <MDBBtn class="d-none d-sm-block btn btn-block" size="lg" color="primary">{{ $t('btn.login') }}</MDBBtn>

              <MDBBtn class="d-sm-none btn" size="lg" color="primary">{{ $t('btn.login') }}</MDBBtn>

              <hr class="my-4">

              <!-- socialni site SM+ -->
              <div class="d-none d-sm-block">
                <MDBBtn id="btn-google" class="btn btn-block" color="primary">
                  <i class="fab fa-google me-2"></i>{{ $t('btn.google_login') }}
                </MDBBtn>

                <MDBBtn id="btn-facebook" class="btn btn-block" color="primary">
                  <i class="fab fa-facebook-f me-2"></i>{{ $t('btn.fb_login') }}
                </MDBBtn>
              </div>

              <!-- socialni site XS -->
              <div class="d-sm-none d-flex justify-content-center">
                <MDBBtn id="btn-google" color="primary">
                  <i class="fab fa-google"></i>
                </MDBBtn>

                <MDBBtn id="btn-facebook" color="primary">
                  <i class="fab fa-facebook-f"></i>
                </MDBBtn>
              </div>

              <!-- registrace -->
              <p class="mt-5 mb-0">{{ $t('not_account') }}
                <RouterLink to="/signup" class="text-black-50 fw-bold">{{ $t('signup') }}</RouterLink>
              </p>
            </MDBCardBody>
          </MDBCard>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#btn-google {
  background-color: #dd4b39;
}

#btn-facebook {
  background-color: #3b5998;
}
</style>