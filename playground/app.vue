<template>
  <div>
    <button @click="open()">Open popup</button>
  </div>
</template>

<script setup>
import { usePopupEmitter } from '../src/popup-emitter'
import { useNuxtApp } from 'nuxt/app'

const nuxtApp = useNuxtApp()
const popupEmitter = usePopupEmitter()

async function open() {
  const popup = await popupEmitter.openPopup({
    message: "Test popup",
    title: "title",
    actions: {
      ok: {
        use: true,
        action: undefined,
        label: "Ok"
      }
    }
  })
  popup.value.actions.ok.action = async () => popupEmitter.closePopup(popup.value.index)
}
</script>

<style>
body,
#__nuxt {
  margin: 0;
}
</style>