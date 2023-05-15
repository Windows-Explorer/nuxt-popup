<template>
  <div>
    <button @click="openFirst()">Open first popup</button>
    <button @click="openSecond()">Open second popup</button>
  </div>
</template>

<script setup>
import { usePopupEmitter } from '../src/popup-emitter'
import { useNuxtApp } from 'nuxt/app'

const nuxtApp = useNuxtApp()
const popupEmitter = usePopupEmitter()

async function openFirst() {
  const popup = await popupEmitter.openPopup({
    id: "dick",
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
  popup.value.actions.ok.action = async () => popupEmitter.closePopup("dick")
}
</script>

<style>
body,
#__nuxt {
  margin: 0;
}
</style>