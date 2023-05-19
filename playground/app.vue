<template>
  <div class="options">
    <div class="options-block">
      <input type="text" v-model="popup.title" placeholder="Title">
      <input type="text" v-model="popup.message" placeholder="Message">
    </div>

    <div class="options-block">
      <span class="label">Popup style</span>
      <div class="separator"></div>
      <div class="option">
        <span>Rounded</span>
        <input type="radio" :value="PopupStyles.rounded" v-model="popup.popupStyle" />
      </div>
      <div class="option">
        <span>Square</span>
        <input type="radio" :value="PopupStyles.square" v-model="popup.popupStyle" />
      </div>
    </div>

    <div class="options-block">
      <span class="label">Close button</span>
      <div class="separator"></div>
      <div class="option">
        <span>Use close button</span>
        <input type="checkbox" :true-value="true" :false-value="false" v-model="popup.closeButton.use" />
      </div>
    </div>

    <button @click="open()">Open popup</button>
  </div>
</template>

<script setup>
import { PopupStyles } from '../src/interfaces/popup-styles.enum'
import { usePopupEmitter } from '../src/runtime/composables/popup-emitter'
import { onUnmounted } from "vue"

const popupEmitter = usePopupEmitter()
const popup = await popupEmitter.createPopup({
  id: "popup-1",
  title: "Title",
  popupStyle: PopupStyles.rounded,
  message: "Message",
  closeButton: {
    use: true,
    offset: true
  }
})
async function open() {
  popup.value.open()
}
async function close() {
  popup.value.close()
}

onUnmounted(async () => popupEmitter.removePopup(popup.value.id))
</script>

<style>
body,
#__nuxt {
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<style scoped>
.options {
  font-family: Arial, Helvetica, sans-serif;
  width: 200px;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.separator {
  height: 2px;
  border-radius: 10px;
  background-color: rgb(244, 247, 248);
  width: 100%;
}

.options-block {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 4px 16px;
  align-items: center;
}

button {
  padding: 8px 12px;
  border-radius: 10px;
  border: 0px;
  font-size: 16px;
  cursor: pointer;
}

.options-block input {
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 10px;
  border: 0;
  background-color: rgb(244, 247, 248);
  color: #4c4c4c;
  outline: none;
}

.label {
  font-size: larger;
}

.option {
  align-self: flex-start;
  display: flex;
  width: 50%;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
</style>