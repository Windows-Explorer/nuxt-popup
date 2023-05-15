<template>
  <div>
    <button @click="open()">Open popup</button>
    <input type="text" v-model="popup.title">
  </div>
</template>

<script setup>
import { PopupStyles } from '../src/interfaces/popup-styles.enum';
import { usePopupEmitter } from '../src/popup-emitter'

const popupEmitter = usePopupEmitter()
const popup = await popupEmitter.createPopup({
  id: "popup-1",
  title: "Title",
  popupStyle: PopupStyles.rounded,
  message: "Message",
  actions: {
    ok: {
      use: true,
      action: undefined,
      label: "Ok"
    }
  }
})
async function open() {
  popup.value.open()
}
</script>

<style>
body,
#__nuxt {
  margin: 0;
}
</style>