import { defineStore } from 'pinia'
import { IPopupOptions } from './interfaces/popup.interface'
import { Ref, ref } from "vue"

export const usePopupEmitter = defineStore("popupEmitter", () => {
    const popups: Ref<IPopupOptions[]> = ref([])

    async function openPopup(popupOptions: IPopupOptions) {
        popupOptions.index = popups.value.length
        popups.value.push(popupOptions)
        return ref(popupOptions)
    }

    async function closePopup(index: number) {
        popups.value.splice(index, 1)
    }

    async function closeAll() {
        popups.value = []
    }

    return { popups, openPopup, closePopup, closeAll }
})

