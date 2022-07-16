<script setup lang="ts">
import { ref } from 'vue';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-vue-ui-kit';

import type { IForm } from '@/components/form/form.interface';
import TextField from '@/components/form/field/TextField.vue';
import RouterOutletLink from '@/components/system/RouterOutletLink.vue';

const props = defineProps<{
    config: IForm
}>();

const checkForm = (e: any) => {
    e.target.classList.add('was-validated');
};

const backRoute = <any>{ name: 'login', meta: { icon: 'angle-left' } }
</script>

<template>
    <MDBCard class="m-4 text-center" shadow="5">
        <MDBCardBody>
            <MDBCardTitle class="mb-5 text-uppercase h4" tag="h1">{{ $t('route.reset_pass') }}</MDBCardTitle>

            <form novalidate @submit.prevent="checkForm">
                <MDBCardText>
                    <TextField v-for="field in config.fields" :field="field" />
                </MDBCardText>

                <div class="d-flex justify-content-between">
                    <RouterOutletLink :route="backRoute" label="btn.back_to_login" class="text-black-50" />
                    <MDBBtn type="submit" color="primary">{{ $t('btn.send') }}</MDBBtn>
                </div>
            </form>

        </MDBCardBody>
    </MDBCard>
</template>

<style scoped>
</style>
