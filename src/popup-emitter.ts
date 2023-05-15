import { defineStore } from 'pinia'
import { IPopupOptions } from './interfaces/popup.interface'
import { Ref, ref } from "vue"

export const usePopupEmitter = defineStore("popupEmitter", () => {
    const popups: Ref<IPopupOptions[]> = ref([])

    async function openPopup(popupOptions: IPopupOptions) {
        popupOptions.id = popupOptions.id || popups.value.length
        popups.value.push(popupOptions)
        return ref(popupOptions)
    }

    async function closePopup(id: number | string) {
        const removebleIndex = popups.value.findIndex(async (value) => value.id === id )
        console.log(removebleIndex)
        popups.value.splice(removebleIndex, 1)
    }

    async function closeAll() {
        popups.value = []
    }

    return { popups, openPopup, closePopup, closeAll }
})

