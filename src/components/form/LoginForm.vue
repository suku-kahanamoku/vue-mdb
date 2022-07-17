<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-vue-ui-kit';

import type { IForm } from '@/components/form/form.interface';
import TextField from '@/components/form/field/TextField.vue';
import i18n from '@/plugins/i18n';

const props = defineProps<{
    config: IForm
}>();

const checkForm = (e: any) => {
    e.target.classList.add('was-validated');
};

const resetRoute = <any>{ name: 'reset_pass' };
const signupRoute = <any>{ name: 'signup' };
</script>

<template>
    <MDBCard class="m-4 text-center" shadow="5">
        <MDBCardBody>
            <MDBCardTitle class="mb-5 text-uppercase h3" tag="h1">{{ $t('route.login') }}</MDBCardTitle>

            <form novalidate @submit.prevent="checkForm">
                <MDBCardText>
                    <!-- fields -->
                    <TextField v-for="field in config.fields" :field="field" />

                    <!-- reset password -->
                    <RouterLink :to="{ name: resetRoute.name, params: { locale: i18n.global.locale } }"
                        class="text-black-50">
                        {{ $t(`route.${resetRoute.name as string}`) }}
                    </RouterLink>
                </MDBCardText>

                <MDBBtn type="submit" class="btn btn-block" size="lg" color="primary">
                    {{ $t('btn.login') }}
                </MDBBtn>
            </form>

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
            <p class="mt-5 mb-0">{{ $t('not_account') }}&nbsp;
                <!-- reset password -->
                <RouterLink :to="{ name: signupRoute.name, params: { locale: i18n.global.locale } }"
                    class="text-black-50  fw-bold">
                    {{ $t(`route.${signupRoute.name as string}`) }}
                </RouterLink>
            </p>
        </MDBCardBody>
    </MDBCard>
</template>

<style scoped>
#btn-google {
    background-color: #dd4b39;
}

#btn-facebook {
    background-color: #3b5998;
}
</style>
