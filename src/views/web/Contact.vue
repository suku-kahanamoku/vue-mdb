<script setup lang="ts">
import { ref, type Ref } from 'vue';
import {
  MDBListGroup, MDBListGroupItem, MDBIcon
} from 'mdb-vue-ui-kit';

import data from '@/assets/form.json';
import Contact from '@/components/form/ContactForm.vue';
import type { IForm } from '@/components/form/form.interface';

const config = data.contact as IForm;
</script>
<template>
  <div>
    <h1 class="text-uppercase h3 text-center m-5">{{ $t('route.contact') }}</h1>
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-md-6">
          <MDBListGroup light>
            <MDBListGroupItem class="mb-2 px-1" noBorder ripple>
              <div class="d-flex align-items-center">
                <a href="tel:+420727915560" class="btn btn-link">
                  <MDBIcon icon="phone" size="2x" />
                </a>
                <div class="ms-3">
                  <p class="fw-bold mb-1">+420 727 915 560</p>
                </div>
              </div>
            </MDBListGroupItem>

            <MDBListGroupItem class="mb-2 px-1" noBorder spacing>
              <div class="d-flex align-items-center">
                <a href="mailto:info@cs-soft.cz" class="btn btn-link">
                  <MDBIcon icon="envelope" size="2x" />
                </a>
                <div class="ms-3">
                  <p class="fw-bold mb-1">info@cs-soft.cz</p>
                </div>
              </div>
            </MDBListGroupItem>

            <MDBListGroupItem class="mb-2 px-1" noBorder spacing>
              <div class="d-flex">
                <span>
                  <a href="https://goo.gl/maps/n8iiCckq1spjwfP68" target="_blank" class="btn btn-link">
                    <MDBIcon icon="location-dot" size="2x" />
                  </a>
                </span>
                <div class="ms-3">
                  <p class="fw-bold mb-1">Centrala</p>
                  <p class="text-muted mb-0">Budova ABC (Airport Business Center)</p>
                  <p class="text-muted mb-0">Aviatická 1048/12</p>
                  <p class="text-muted mb-0">161 00 Praha 6</p>
                  <p class="text-muted mb-0">Česká republika</p>
                </div>
              </div>
            </MDBListGroupItem>
          </MDBListGroup>
        </div>
        <div class="col-md-6">
          <Contact :config="config" />
        </div>
      </div>
    </div>
    <iframe class="mt-5"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.687519675741!2d76.68949051510494!3d30.699066881648925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feef64000002f%3A0xb4e01033fa0737dd!2sC.S.%20Soft%20Solutions%20(India)%20Pvt%20Ltd!5e0!3m2!1scs!2sus!4v1657947446713!5m2!1scs!2sus"
      height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<style scoped>
iframe {
  width: 100%;
}
</style>
