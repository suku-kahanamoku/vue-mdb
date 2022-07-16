<script setup lang="ts">
import { ref } from 'vue';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-vue-ui-kit';

import type { IForm } from '@/components/form/form.interface';
import TextField from '@/components/form/field/TextField.vue';

const props = defineProps<{
    config: IForm
}>();

const checkForm = (e: any) => {
    e.target.classList.add('was-validated');
};

const fields = <any>{};
props.config.fields.forEach(field => fields[field.name] = field);
</script>

<template>
    <MDBCard>
        <MDBCardBody>
            <MDBCardTitle class="mb-4 h4" tag="h2">{{ $t('write_us') }}</MDBCardTitle>

            <form novalidate @submit.prevent="checkForm">
                <MDBCardText>
                    <TextField :field="fields.category" />
                    <div class="row">
                        <div class="col-6">
                            <TextField :field="fields.phone" />
                        </div>
                        <div class="col-6">
                            <TextField :field="fields.email" />
                        </div>
                    </div>
                    <TextField :field="fields.message" />
                </MDBCardText>

                <div class="d-flex justify-content-between">
                    <MDBBtn type="submit" color="primary">{{ $t('btn.send') }}</MDBBtn>
                </div>
            </form>

        </MDBCardBody>
    </MDBCard>
</template>

<style scoped>
</style>
