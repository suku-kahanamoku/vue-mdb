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
    <MDBCard class="my-5 text-center" shadow="5">
        <MDBCardBody>
            <MDBCardTitle class="mb-5 text-uppercase h4" tag="h1">{{ $t('route.profile') }}</MDBCardTitle>

            <form novalidate @submit.prevent="checkForm">
                <div class="row">
                    <div v-for="field in config.fields" class="col-sm-6">
                        <MDBCardText>
                            <TextField :field="field" />
                        </MDBCardText>
                    </div>
                </div>

                <div class="d-flex justify-content-between">
                    <MDBBtn type="submit" color="danger">{{ $t('btn.send') }}</MDBBtn>
                    <MDBBtn type="submit" color="primary">{{ $t('btn.send') }}</MDBBtn>
                </div>
            </form>

        </MDBCardBody>
    </MDBCard>
</template>

<style scoped>
</style>
