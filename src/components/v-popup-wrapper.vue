<template>
    <v-popup v-for="(popup, index) in popups" :key="index" :title="popup.title" :message="popup.message"
        :actions="popup.actions" :index="index" :close-button="popup.closeButton" :popupStyle="popup.popupStyle"
        :id="popup.id" :visibile="popup.visibile" />
</template>

<script lang="ts" setup>
import { usePopupEmitter } from '../popup-emitter'
import { storeToRefs } from 'pinia'

const popupEmitter = usePopupEmitter()
const { popups } = storeToRefs(popupEmitter)
</script>

<style scoped>

</style>