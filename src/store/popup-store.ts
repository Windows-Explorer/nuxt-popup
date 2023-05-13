import { defineStore } from 'pinia'
import { IPopupProps } from '../interfaces/props.interface'
import { IPopupOptions } from '../interfaces/popup.interface'
import { Ref, ref } from "vue"

export const usePopupStore = defineStore("popupStore", () => {
    const popupZIndex: Ref<number> = ref(0)
    const popups: Ref<IPopupOptions[]> = ref([])

    async function open(props: IPopupProps) {
        
    }

    return { popups, popupZIndex, open }
})

