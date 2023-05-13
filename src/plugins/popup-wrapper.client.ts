import { defineNuxtPlugin } from '#app'
import VPopupWrapper from "../components/VPopupWrapper.vue"
import { createVNode, render } from 'vue'


export default defineNuxtPlugin(async (nuxtApp) => {
    console.time("Popup wrapper has been created")

    const documentBody = document.getElementsByTagName("body")[0]
    const popupVNode = createVNode(VPopupWrapper)

    render(popupVNode, documentBody)

    console.timeEnd("Popup wrapper has been created")
})
