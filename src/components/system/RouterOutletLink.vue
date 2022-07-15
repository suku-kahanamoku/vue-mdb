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
    disableTooltip?: boolean
}>();

const tooltip = ref(false);
</script>

<template>
    <RouterLink v-if="disableTooltip" :to="{ name: route.name, params: { locale: i18n.global.locale } }"
        @click="sidenavCloseFnc && sidenavCloseFnc()" class="nav-link rounded w-100" :class="class"
        v-mdb-ripple="{ color: 'dark' }" v-slot="{ isActive }">
        <span :class="isActive ? '' : 'btn-link'">
            <MDBIcon :icon="route.meta?.icon" size="lg" />
        </span>
        <span v-if="!hideName" class="ps-2">{{ $t(`route.${route.name as string}`) }}</span>
    </RouterLink>

    <MDBTooltip v-else v-model="tooltip" direction="bottom" class="w-100">
        <template #reference>
            <RouterLink :to="{ name: route.name, params: { locale: i18n.global.locale } }"
                @click="sidenavCloseFnc && sidenavCloseFnc()" class="nav-link rounded w-100" :class="class"
                v-mdb-ripple="{ color: 'dark' }" v-slot="{ isActive }">
                <span :class="isActive ? '' : 'btn-link'">
                    <MDBIcon :icon="route.meta?.icon" size="lg" />
                </span>
                <span v-if="!hideName" class="ps-2">{{ $t(`route.${route.name as string}`) }}</span>
            </RouterLink>
        </template>
        <template #tip>
            {{ $t(`route.${route.name as string}`) }}
        </template>
    </MDBTooltip>
</template>

<style scoped>
</style>
