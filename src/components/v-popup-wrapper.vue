<template>
    <div class="popup-wrapper">
        <button @click="open()">OPEN POPUP</button>
        <Transition name="backdrop">
            <div class="popup-backdrop" v-if="popups.length > 0" />
        </Transition>
        <TransitionGroup name="scale">
            <v-popup v-for="(popup, index) in popups" :key="index" :title="popup.title" :message="popup.message"
                :actions="popup.actions" :index="index" />
        </TransitionGroup>
    </div>
</template>

<script lang="ts" setup>
import { usePopupEmitter } from '../popup-emitter'
import { storeToRefs } from 'pinia'

const popupEmitter = usePopupEmitter()
const { popups } = storeToRefs(popupEmitter)

async function open() {
    popupEmitter.openPopup({
        message: "Vuesax is a relatively new framework with a refreshing design and in the latest trends, vuesax based on vuejs which means that we go hand in hand with one of the most popular javascript frameworks in the world and with a huge community with which you will have all the help and documentation to create and make your project",
        title: "Welcome to Vuesax"
    })
}
</script>

<style scoped>
.popup-wrapper {
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100%;
}

.popup-backdrop {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
}
</style>

<style scoped>
.backdrop-leave-active {
    animation: opacityUp 0.3s ease reverse;
}
.backdrop-enter-active {
    animation: opacityUp 0.4s ease;
}

.scale-leave-active {
    animation: scaleUp 0.2s reverse ease;
}

.scale-enter-active {
    animation: scaleUp 0.3s ease;
}

@keyframes scaleUp {
    0% {
        transform: scale(0.6);
        opacity: 0;
    }

    75% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes opacityUp {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes scaleDown {}
</style>