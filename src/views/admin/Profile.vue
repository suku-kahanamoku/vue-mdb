<script setup lang="ts">
import { ref } from 'vue';
import { MDBCardGroup, MDBCard, MDBCardImg, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-vue-ui-kit';

import data from '@/assets/form.json';
import type { IForm } from '@/components/form/form.interface';
import ProfileForm from '@/components/form/ProfileForm.vue';

const config = data.signup as IForm;
</script>

<template>
  <div class="container h-100">
    <ProfileForm :config="config" />


    <MDBCardGroup>
      <MDBCard>
        <MDBCardImg src="https://mdbootstrap.com/img/new/standard/city/041.webp" top alt="..." />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </MDBCardText>
          <MDBCardText>
            <small class="text-muted">Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImg src="https://mdbootstrap.com/img/new/standard/city/042.webp" top alt="..." />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This card has supporting text below as a natural lead-in to
            additional content.
          </MDBCardText>
          <MDBCardText>
            <small class="text-muted">Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImg src="https://mdbootstrap.com/img/new/standard/city/043.webp" top alt="..." />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This card has even longer
            content than the first to show that equal height action.
          </MDBCardText>
          <MDBCardText>
            <small class="text-muted">Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>


  </div>
</template>
