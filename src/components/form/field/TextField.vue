<script setup lang="ts">
import { ref } from 'vue';
import { MDBInput, MDBIcon } from 'mdb-vue-ui-kit';

import type { IFormField } from './field.interface';

defineProps<{
    field: IFormField,
}>();

const el = ref('');
const model = ref('');
const visited = ref(false);

</script>

<template>
    <MDBInput ref="el" v-model="model" :type="field.type || 'text'" :id="field.name"
        :label="$t(field.label) + (field.required ? ' *' : '')"
        :placeholder="field.placeholder ? $t(field.placeholder) : ''" :autocomplete="field.autocomplete"
        :wrapperClass="field.class" :size="field.size" :maxlength="field.maxlength" :minlength="field.minlength"
        :value="field.value" :disabled="field.disabled" :readonly="field.readonly" :required="field.required"
        :pattern="field.validation?.pattern"
        :invalidFeedback="field.validation?.msg && !(el as any).inputRef?.checkValidity() ? $t(field.validation?.msg) : ''"
        :isValidated="!(el as any).inputRef?.checkValidity() && visited" @blur="visited = true">
        <MDBIcon v-if="field.icon?.value" :icon="field.icon?.value" class="trailing" />
    </MDBInput>
</template>

<style scoped>
</style>
