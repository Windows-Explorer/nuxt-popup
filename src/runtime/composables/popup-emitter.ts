import { defineStore } from 'pinia'
import { IPopup, IPopupOptions } from '../../interfaces/popup.interface'
import { Ref, ref } from "vue"

export const usePopupEmitter = defineStore("popupEmitter", () => {
    const popups: Ref<IPopup[]> = ref([])

    async function findPopupIndex(id: number | string): Promise<number> {
        return popups.value.findIndex(async (value) => value.id === id)
    }

    async function createPopup(popupOptions: IPopupOptions) {
        const popup: IPopup = {
            ...popupOptions,
            id: popupOptions.id || popups.value.length,
            visibile: false,
            close: async () => {
                closePopup(popupOptions.id!)
            },
            open: async () => {
                openPopup(popupOptions.id!)
            },
        }
        popups.value.push(popup)
        return ref(popup)
    }

    async function openPopup(id: number | string) {
        const openbleIndex = await findPopupIndex(id)
        popups.value[openbleIndex].visibile = true
    }

    async function closePopup(id: number | string) {
        const closebleIndex = await findPopupIndex(id)
        popups.value[closebleIndex].visibile = false
    }

    async function removePopup(id: number | string) {
        const removebleIndex = await findPopupIndex(id)
        popups.value.splice(removebleIndex, 1)
    }

    async function removeAllPopup() {
        popups.value = []
    }

    return { popups, openPopup, closePopup, removeAllPopup, createPopup, removePopup }
})

