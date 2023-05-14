<template>
    <div class="popup-clickable-backdrop" @click="closePopup()" :style="{ zIndex: index }">
        <div class="popup" @click.stop>
            <button class="popup-close-button" @click="closePopup()">
                <v-close-icon />
            </button>
            <div class="popup-header">
                <h4 class="popup-title">
                    {{ props.title }}
                </h4>
            </div>
            <div class="popup-content-container">
                <div class="popup-content">
                    <p>{{ props.message }}</p>
                </div>
            </div>
            <div class="popup-footer-container">
                <div class="popup-footer">
                    <button class="popup-action popup-action-positive" v-if="props.actions?.ok?.use" @click="props.actions.ok.action">
                        <div class="action-content" style="color: #6464ff;">
                            {{ props.actions?.ok?.label }}
                        </div>
                    </button>
                    <button class="popup-action popup-action-neutral" v-if="props.actions?.cancel?.use" @click="closePopup()">
                        <div class="action-content" style="color: rgb(96 96 96)">
                            {{ props.actions?.cancel?.label }}
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'
import { IPopupOptions } from '../interfaces/popup.interface'
import { usePopupEmitter } from '../popup-emitter'
import { Ref, ref } from 'vue'

const props = withDefaults(defineProps<IPopupOptions>(), {
    actions() {
        return {
            ok: {
                label: "Ok",
                use: true
            },
            cancel: {
                label: "Cancel",
                use: true
            }
        }
    }
})

const popupEmitter = usePopupEmitter()

async function closePopup() {
    popupEmitter.closePopup(props.index!)
}

async function keydownHandler(event: KeyboardEvent) {
    if (event.code == "Escape") closePopup()
}

onMounted(async () => document.addEventListener("keydown", keydownHandler))
onUnmounted(async () => document.removeEventListener("keydown", keydownHandler))

</script>

<style scoped>
.popup-clickable-backdrop {
    background-color: transparent;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup {
    font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    position: relative;
    background-color: white;
    padding: 20px;
    border-radius: 20px;
    color: rgb(44, 62, 80);
    box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: min-content;
    min-width: 400px;
    max-width: 800px;
}

.popup-header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.popup-header h4 {
    margin: 0px;
    font-weight: 400;
    padding: 10px 16px;
    font-size: x-large;
    align-self: flex-start;
    width: 100%;
}

.popup-content-container {
    padding-block: 16px;
    width: 100%;
    position: relative;
    border-radius: inherit;
}

.popup-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.popup-content p {
    padding: 0 10px;
    margin: 0px;
}

.popup-footer-container {
    width: 100%;
}

.popup-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.popup-action {
    border: 0;
    margin: 5px;
    border-radius: 12px;
    transition: all 0.25s ease;
    background-color: transparent;
    position: relative;
    user-select: none;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    outline: none;
    font-size: .8rem;
    box-sizing: border-box;
    z-index: 1;
    cursor: pointer;
}

.popup-action:hover::before {
    opacity: 1;
    transform: scale(1);
}

.popup-action-neutral::before {
    background: rgba(109, 109, 109, 0.1);
}
.popup-action-positive::before {
    background: rgba(26, 92, 255, 0.1);
}

.popup-action::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    pointer-events: none;
    transition: 0.25s ease;
    z-index: -1;
    transform: scale(0.5);
    opacity: 0;
    box-sizing: border-box;
}

.action-content {
    font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 500;
    font-size: 14px;
    padding: 10px 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.popup-close-button svg {
    fill: #2c3e50a1;
    transition: 0.3s ease;
}

.popup-close-button {
    position: absolute;
    top: -6px;
    right: -6px;
    background-color: #fff;
    cursor: pointer;
    border: 0px;
    border-radius: 12px;
    margin: 0px;
    height: 34px;
    width: 34px;
    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    transition: 0.25s ease;
    align-items: center;
}

.popup-close-button:hover {
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.05);
    transform: translate(-2px, 2px);
}

.popup-close-button:hover svg {
    fill: #2c3e50;
}
</style>