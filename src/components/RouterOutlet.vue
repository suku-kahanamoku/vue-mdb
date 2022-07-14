<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';

const hide = (e: HTMLElement) => e.classList.add('d-none')
</script>

<template>
    <RouterView v-slot="{ Component }">
        <transition name="fade" appear @before-leave="hide">
            <component :is="Component" />
        </transition>
    </RouterView>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-in;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
