import { defineNuxtPlugin } from 'nuxt/app'
import { createVNode, render } from 'vue'
import VPopupWrapper from "../components/v-popup-wrapper.vue"


export default defineNuxtPlugin(async (nuxtApp) => {
    const documentBody = document.getElementsByTagName("body")[0]
    const popupVNode = createVNode(VPopupWrapper)

    render(popupVNode, documentBody)
})
