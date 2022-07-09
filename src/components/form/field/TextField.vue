<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue';
import { MDBInput, MDBIcon } from 'mdb-vue-ui-kit';

import type { IFormField } from '@/components/form/field/field.interface';
import { DETECT_AUTOFILL } from '@/utils/check.functions';

const props = defineProps<{
    field: IFormField,
}>();

const el: Ref<HTMLInputElement | undefined> = ref();
const inputEl: Ref<HTMLSelectElement | undefined> = ref();
const model: Ref<string | number | Date | undefined> = ref();
const visited: Ref<boolean> = ref(false);

function inputProcess(): void {
    setTimeout(() => {
        // automaticky zpracuje autofill
        if (inputEl.value && DETECT_AUTOFILL(inputEl.value)) {
            inputEl.value?.classList.add('active');
        }
        // spusti autofocus
        if (props.field.autofocus) {
            inputEl.value?.focus();
        }
    }, 400);
}

onMounted(() => {
    inputEl.value = (el.value as any).inputRef;
    inputProcess();
});
</script>

<template>
    <MDBInput ref="el" v-model="model" :type="field.type || 'text'" :id="field.name" :name="field.name"
        :label="$t(field.label) + (field.required ? ' *' : '')"
        :placeholder="field.placeholder ? $t(field.placeholder) : ''" :autocomplete="field.autocomplete"
        :wrapperClass="field.class" :size="field.size" :maxlength="field.maxlength" :minlength="field.minlength"
        :value="field.value" :disabled="field.disabled" :readonly="field.readonly" :required="field.required"
        :pattern="field.validation?.pattern"
        :invalidFeedback="field.validation?.msg && !inputEl?.checkValidity() ? $t(field.validation?.msg) : ''"
        :isValidated="!inputEl?.checkValidity() && visited" @blur="visited = true">
        <MDBIcon v-if="field.icon?.value" :icon="field.icon?.value" class="trailing" />
    </MDBInput>
</template>

<style scoped>
</style>
