import { defineNuxtPlugin } from "nuxt/app"
import { createPinia } from "pinia"
import { usePopupEmitter } from "../popup-emitter"
import { IPopupOptions } from "../interfaces/popup.interface"

export default defineNuxtPlugin(async (nuxtApp) => {
    nuxtApp.vueApp.use(createPinia())
})