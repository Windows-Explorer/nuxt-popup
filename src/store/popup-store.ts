import { defineStore } from 'pinia'
import { IPopupOptions } from '../interfaces/popup.interface'
import { Ref, ref } from "vue"

export const usePopupStore = defineStore("popupStore", () => {
    const popups: Ref<IPopupOptions[]> = ref([])

    async function openPopup(popupOptions: IPopupOptions) {
        popups.value.push(popupOptions)
    }

    async function closePopup(popupId: number) {
        popups.value.splice(popupId, 1)
    }

    return { popups, openPopup, closePopup }
})

