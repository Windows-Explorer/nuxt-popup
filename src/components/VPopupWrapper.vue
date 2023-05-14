<template>
    <div class="popup-wrapper">
        <div class="popup-backdrop" v-if="popups.length > 0" />
        <VPopup v-for="(popup, index) in popups" :key="index" :title="popup.title" :message="popup.message"
            :actions="popup.actions" :index="index" />
    </div>
</template>

<script lang="ts" setup>
import VPopup from './VPopup.vue'
import { usePopupEmitter } from '../popup-emitter'
import { storeToRefs } from 'pinia'

const popupEmitter = usePopupEmitter()
const { popups } = storeToRefs(popupEmitter)
</script>

<style scoped>
.popup-wrapper {
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100%;
}

.popup-backdrop {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
}
</style>