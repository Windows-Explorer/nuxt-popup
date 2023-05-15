<template>
  <div>
    <button @click="open()">Open popup</button>
  </div>
</template>

<script setup>
import { usePopupEmitter } from '../src/popup-emitter'

const popupEmitter = usePopupEmitter()
async function open(){
  popupEmitter.openPopup({
    message: "Test popup",
    title: "title",
    actions: {
      ok: {
        use: true,
        action: async () => popupEmitter.closeAll(),
        label: "Label"
      }
    }
  })
}
</script>

<style>

body, #__nuxt {
  margin: 0;
}

</style>