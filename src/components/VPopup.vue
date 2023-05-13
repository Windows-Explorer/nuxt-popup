<template>
    <div class="popup-clickable-backdrop" @click="closePopup()">
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
                <slot></slot>
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
import { IPopupOptions } from '../interfaces/popup.interface'
import { usePopupStore } from '../store/popup-store'

interface IProps extends IPopupOptions {
    index: number
}

const props = withDefaults(defineProps<IProps>(), {})
const popupStore = usePopupStore()

async function closePopup() {
    popupStore.closePopup(props.index)
}

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