import { defineNuxtPlugin } from "nuxt/app"
import { createPinia } from "pinia"

export default defineNuxtPlugin(async (nuxtApp) => {
    nuxtApp.vueApp.use(createPinia())
})