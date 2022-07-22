<script setup lang="ts">
import { ref } from 'vue';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-vue-ui-kit';
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
import VueDraggableResizable from 'vue-draggable-resizable/src/components/vue-draggable-resizable.vue';

import MapContainerVue from '@/components/ol/MapContainer.vue';
const zindex = ref(5)
</script>

<template>
  <div class="d-flex flex-column w-100 h-100">
    <div id="top-menu" class="container-fluid bg-light shadow-sm">
      <MDBBtn outline="primary" class="my-1">light</MDBBtn>
      <MDBBtn outline="primary" class="my-1">light</MDBBtn>
    </div>
    <div id="map-wrapper" class="w-100 h-100">
      <VueDraggableResizable :parent="true" :z="zindex" :x="100" :y="50">fdsafdsa</VueDraggableResizable>
      <MapContainerVue />
    </div>
    <div id="bottom-menu" class="container-fluid bg-light shadow bottom-0">
      <MDBBtn outline="primary" class="my-1">CWP setup</MDBBtn>
      <MDBBtn outline="primary" class="my-1">Maps</MDBBtn>
      <MDBBtn outline="primary" class="my-1">Areas</MDBBtn>
      <MDBBtn outline="primary" class="my-1">Brigthness</MDBBtn>
      <MDBBtn outline="primary" class="my-1">Schemes</MDBBtn>
      <MDBBtn outline="primary" class="my-1">Secondary window</MDBBtn>
      <MDBBtn outline="primary" class="my-1">FPL window</MDBBtn>
      <MDBBtn outline="primary" class="my-1">Errors</MDBBtn>
      <MDBBtn outline="primary" class="my-1">Warn</MDBBtn>
      <MDBBtn outline="primary" class="my-1">Strip setup</MDBBtn>
      <MDBBtn outline="primary" class="my-1">Stats</MDBBtn>
      <MDBBtn outline="primary" class="my-1">All plans</MDBBtn>
      <MDBBtn outline="primary" class="my-1">Del plans</MDBBtn>
      <MDBBtn outline="primary" class="my-1">Lost</MDBBtn>
      <MDBBtn outline="primary" class="my-1">Primary track</MDBBtn>
    </div>
  </div>
</template>

<style>
.navbar {
  padding: 0;
}

#top-menu,
#bottom-menu {
  z-index: 10;
}

.draggable.active {
  z-index: 99 !important;
}
</style>
