<template>
    <div class="popup-wrapper">
        <div class="popup-backdrop" v-if="popups.length > 0" />
        <VPopup
            v-for="(popup, index) in popups" :key="index"
            :title="popup.title"
            :message="popup.message"
            :actions="popup.actions"
            :index="index"
        />
    </div>
</template>

<script lang="ts" setup>
import VPopup from './VPopup.vue'
import { onMounted } from 'vue'
import { usePopupStore } from '../store/popup-store'
import { storeToRefs } from 'pinia'

const popupStore = usePopupStore()
const { popups } = storeToRefs(popupStore)

async function openPopup() {
    popupStore.openPopup({
        title: "Title",
        message: "Message",
        actions: {
            ok: {
                label: "OK"
            },
            cancel: {
                label: "Cancel"
            }
        }
    })
}
async function closePopup(id: number) {
    popupStore.closePopup(id)
}
onMounted(async () => {
    openPopup()
})


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