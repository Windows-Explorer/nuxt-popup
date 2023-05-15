import { defineStore } from 'pinia'
import { IPopupOptions } from './interfaces/popup.interface'
import { Ref, ref } from "vue"

export const usePopupEmitter = defineStore("popupEmitter", () => {
    const popups: Ref<IPopupOptions[]> = ref([])

    async function openPopup(popupOptions: IPopupOptions) {
        popupOptions.index = popups.value.length + 1
        popups.value.push(popupOptions)
    }

    async function closePopup(popupId: number) {
        popups.value.splice(popupId, 1)
    }

    async function closeAll() {
        popups.value = []
    }

    return { popups, openPopup, closePopup, closeAll }
})

