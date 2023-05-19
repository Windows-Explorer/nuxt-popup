import { defineNuxtModule, addPlugin, createResolver, addComponent } from '@nuxt/kit'

export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-popup',
    configKey: 'nuxtPopup'
  },
  defaults: {},

  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    addComponent({
      name: "v-popup",
      filePath: resolver.resolve("./runtime/components/v-popup.vue")
    })

    addComponent({
      name: "v-popup-wrapper",
      filePath: resolver.resolve("./runtime/components/v-popup-wrapper.vue")
    })

    addComponent({
      name: "v-close-icon",
      filePath: resolver.resolve("./runtime/components/icons/v-close-icon.vue")
    })

    addPlugin(resolver.resolve("./runtime/plugins/popup-wrapper.client"))
    addPlugin(resolver.resolve("./runtime/plugins/pinia.vue-plugin"))
  }
})
