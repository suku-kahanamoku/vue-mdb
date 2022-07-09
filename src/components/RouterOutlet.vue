<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';

const hide = (e: any) => e.classList.add('hidden')
</script>

<template>
    <RouterView v-slot="{ Component }">
        <transition name="fade" @before-leave="hide">
            <component :is="Component" />
        </transition>
    </RouterView>
</template>

<style scoped>
.hidden {
    display: none;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-in;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
