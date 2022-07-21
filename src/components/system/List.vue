<script setup lang="ts">
import { ref } from 'vue';
import { MDBRow, MDBCol, MDBCard, MDBCardImg, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-vue-ui-kit';

const props = defineProps<{
    data: any[]
}>();
</script>

<template>
    <MDBRow :cols="['1', 'sm-2', 'md-3', 'lg-4']" class="g-4">
        <MDBCol v-for="item in data">
            <MDBCard class="h-100">
                <MDBCardImg :src="item.img?.url" top alt="..." />
                <MDBCardBody>
                    <MDBCardTitle>{{ item.title }}</MDBCardTitle>
                    <MDBCardText>{{ item.description }}</MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    </MDBRow>
</template>

<style scoped>
</style>
