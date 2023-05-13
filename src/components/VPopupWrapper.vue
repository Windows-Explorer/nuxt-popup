<template>
    <div class="popup-wrapper">
        <VPopup v-for="(popup, index) in popups" :key="index" />
    </div>
</template>

<script lang="ts" setup>
import VPopup from './VPopup.vue'
import { onMounted } from 'vue'
import { usePopupStore } from '../store/popup-store'
import { storeToRefs } from 'pinia'

const popupStore = usePopupStore()
const { popups, popupZIndex } = storeToRefs(popupStore)

onMounted(async () => {
    
})


</script>

<style scoped>
.popup-wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: red;
}
</style>