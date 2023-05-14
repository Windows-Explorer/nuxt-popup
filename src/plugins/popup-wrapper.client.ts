import { defineNuxtPlugin } from '#app'
import VPopupWrapper from "../components/v-popup-wrapper.vue"
import { createVNode, render } from 'vue'


export default defineNuxtPlugin(async (nuxtApp) => {
    const documentBody = document.getElementsByTagName("body")[0]
    const popupVNode = createVNode(VPopupWrapper)

    render(popupVNode, documentBody)
})
