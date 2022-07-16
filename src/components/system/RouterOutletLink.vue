<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, type RouteRecordRaw } from 'vue-router';
import { MDBIcon, MDBTooltip, mdbRipple as vMdbRipple } from 'mdb-vue-ui-kit';

import i18n from '@/plugins/i18n';

const props = defineProps<{
    route: RouteRecordRaw,
    class?: string,
    sidenavCloseFnc?: Function,
    hideName?: boolean,
    label?: string,
    tooltip?: string | boolean,
}>();

const tooltipRef = ref(false);
</script>

<template>
    <MDBTooltip v-if="tooltip" v-model="tooltipRef" direction="bottom">
        <template #reference>
            <RouterLink :to="{ name: route.name, params: { locale: i18n.global.locale } }"
                @click="sidenavCloseFnc && sidenavCloseFnc()" class="rounded w-100" :class="class"
                v-mdb-ripple="{ color: 'dark' }" v-slot="{ isActive }">
                <span v-if="route.meta?.icon" :class="isActive ? '' : 'btn-link'">
                    <MDBIcon :icon="route.meta?.icon" size="lg" />
                </span>
                <span v-if="!hideName" class="ps-2">
                    {{ label ? $t(label) : $t(`route.${route.name as string}`) }}
                </span>
            </RouterLink>
        </template>
        <template #tip>
            {{ $t(tooltip === true ? `route.${route.name as string}` : tooltip) }}
        </template>
    </MDBTooltip>

    <RouterLink v-else :to="{ name: route.name, params: { locale: i18n.global.locale } }"
        @click="sidenavCloseFnc && sidenavCloseFnc()" class="rounded" :class="class" v-mdb-ripple="{ color: 'dark' }"
        v-slot="{ isActive }">
        <span v-if="route.meta?.icon" :class="isActive ? '' : 'btn-link'">
            <MDBIcon :icon="route.meta?.icon" size="lg" />
        </span>
        <span v-if="!hideName" class="ps-2">
            {{ label ? $t(label) : $t(`route.${route.name as string}`) }}
        </span>
    </RouterLink>
</template>

<style scoped>
</style>
