<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { MDBInput, MDBIcon } from 'mdb-vue-ui-kit';

import type { IFormField } from './field.interface';
import { DETECT_AUTOFILL } from '@/utils/check.functions';

const props = defineProps<{
    field: IFormField,
}>();

const el = ref('');
const model = ref('');
const visited = ref(false);

async function checkAutofill() {
    if (await DETECT_AUTOFILL((<any>el.value).inputRef)) {
        (<any>el.value).inputRef.classList.add('active');
    }
}

onMounted(() => {
    if (props.field.checkAutofill) {
        checkAutofill();
    }
});

</script>

<template>
    <MDBInput ref="el" v-model="model" :type="field.type || 'text'" :id="field.name" :name="field.name"
        :label="$t(field.label) + (field.required ? ' *' : '')"
        :placeholder="field.placeholder ? $t(field.placeholder) : ''" :autocomplete="field.autocomplete"
        :wrapperClass="field.class" :size="field.size" :maxlength="field.maxlength" :minlength="field.minlength"
        :value="field.value" :disabled="field.disabled" :readonly="field.readonly" :autofocus="field.autofocus"
        :required="field.required" :pattern="field.validation?.pattern"
        :invalidFeedback="field.validation?.msg && !(el as any).inputRef?.checkValidity() ? $t(field.validation?.msg) : ''"
        :isValidated="!(el as any).inputRef?.checkValidity() && visited" @blur="visited = true">
        <MDBIcon v-if="field.icon?.value" :icon="field.icon?.value" class="trailing" />
    </MDBInput>
</template>

<style scoped>
</style>
