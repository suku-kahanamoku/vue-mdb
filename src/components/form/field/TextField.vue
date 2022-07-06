<script setup lang="ts">
import { ref } from 'vue';
import { MDBInput, MDBIcon } from 'mdb-vue-ui-kit';

import type { IFormField } from './field.interface';
import { IS_EMAIL } from '@/utils/check-profile.functions';

defineProps<{
    field: IFormField,
}>();

const model = ref('');
const visited = ref(false);
const valid = ref(false);
const errMsg = ref('');

function onChange(event: any, field: IFormField) {
    valid.value = event.target.checkValidity();
    errMsg.value = '';
    if (valid.value && field.validation?.pattern) {
        valid.value = field.validation.pattern.test(event.target.value);
        errMsg.value = field.validation.msg;
    }
}

</script>

<template>
    <MDBInput v-model="model" :type="field.type || 'text'" :id="field.name"
        :label="$t(field.label) + (field.required ? ' *' : '')"
        :placeholder="field.placeholder ? $t(field.placeholder) : ''" :autocomplete="field.autocomplete"
        :wrapperClass="field.class" :size="field.size" :maxlength="field.maxlength" :minlength="field.minlength"
        :value="field.value" :disabled="field.disabled" :readonly="field.readonly" :required="field.required"
        :isValidated="visited" :isValid="valid" :pattern="field.validation?.pattern"
        :invalidFeedback="errMsg ? $t(errMsg) : ''" @blur="visited = true" @input="onChange($event, field)">
        <MDBIcon v-if="field.icon?.value" :icon="field.icon?.value" class="trailing" />
    </MDBInput>
</template>

<style scoped>
</style>
