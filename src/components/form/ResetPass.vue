<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-vue-ui-kit';

import TextField from '@/components/form/field/TextField.vue';

defineProps<{
    config: any
}>();

const checkForm = (e: any) => {
    e.target.classList.add("was-validated");
};
</script>

<template>
    <MDBCard class="p-4 text-center" shadow="5">
        <MDBCardBody>
            <MDBCardTitle class="mb-5">{{ $t('reset_pass') }}</MDBCardTitle>

            <form novalidate @submit.prevent="checkForm">
                <MDBCardText>
                    <TextField v-for="field in config.fields" :field="(field as any)" />
                </MDBCardText>

                <div class="d-flex justify-content-between">
                    <span class="d-flex align-items-center text-black-50">
                        <i class="fa fa-chevron-left me-1"></i>
                        <RouterLink to="/login" class="text-black-50">{{ $t('btn.back_to_login') }}</RouterLink>
                    </span>
                    <MDBBtn type="submit" color="primary">{{ $t('btn.send') }}</MDBBtn>
                </div>
            </form>

        </MDBCardBody>
    </MDBCard>
</template>

<style scoped>
</style>
