import { defineNuxtPlugin } from "nuxt/app"
import { usePopupEmitter } from "../popup-emitter"
import { IPopupOptions } from "../interfaces/popup.interface"

export default defineNuxtPlugin(async (nuxtApp) => {
    // const popupEmitter = usePopupEmitter()

    // nuxtApp.provide("popup", {
    //     $on: {
    //         openPopup: async (options: IPopupOptions) => {
    //             popupEmitter.openPopup(options)
    //         },
    //         closePopup: async (index: number) => {
    //             popupEmitter.closePopup(index)
    //         }
    //     }
    // })
})