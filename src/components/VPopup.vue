<template>
    <div class="popup-clickable-backdrop" @click="closePopup()" :style="{ zIndex: index }">
        <div class="popup" @click.stop>
            <div class="popup-header">
                <h2 class="popup-title">
                    {{ props.title }}
                </h2>
            </div>
            <div class="popup-message">
                <span>
                    {{ props.message }}
                </span>
            </div>
            <div class="popup-footer">
                <button class="popup-action-ok" v-if="props.actions?.ok?.use" @click="props.actions.ok.action">
                    {{ props.actions?.ok?.label }}
                </button>
                <button class="popup-action-cancel" v-if="props.actions?.cancel?.use" @click="closePopup()">
                    {{ props.actions?.cancel?.label }}
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'
import { IPopupOptions } from '../interfaces/popup.interface'
import { usePopupEmitter } from '../popup-emitter'

interface IProps extends IPopupOptions {
    index: number
}

const props = withDefaults(defineProps<IProps>(), {
    actions() {
        return {
            ok: {
                label: "OK",
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
    popupEmitter.closePopup(props.index)
}

async function keydownHandler(event: KeyboardEvent) {
    if (event.code == "Escape") closePopup()
}

onMounted(async () => {
    document.addEventListener("keydown", keydownHandler)
})
onUnmounted(async () => {
    document.removeEventListener("keydown", keydownHandler)
})

</script>

<style scoped>
.popup-clickable-backdrop {
    background-color: transparent;
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.3);
    height: auto;
    display: flex;
    flex-direction: column;
}
</style>