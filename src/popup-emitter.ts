import { defineStore } from 'pinia'
import { IPopup, IPopupOptions } from './interfaces/popup.interface'
import { Ref, ref } from "vue"

export const usePopupEmitter = defineStore("popupEmitter", () => {
    const popups: Ref<IPopup[]> = ref([])

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
        const openbleIndex = popups.value.findIndex(async (value) => value.id === id)
        popups.value[openbleIndex].visibile = true
    }

    async function closePopup(id: number | string) {
        const closebleIndex = popups.value.findIndex(async (value) => value.id === id)
        popups.value[closebleIndex].visibile = false
    }

    async function closeAll() {
        popups.value = []
    }

    return { popups, openPopup, closePopup, closeAll, createPopup }
})

