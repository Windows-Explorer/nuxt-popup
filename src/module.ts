import { defineNuxtModule, addPlugin, createResolver, addComponent, addComponentsDir } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-popup',
    configKey: 'nuxtPopup'
  },
  // Default configuration options of the Nuxt module
  defaults: {},

  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    addComponent({
      name: "VPopup",
      filePath: resolver.resolve("./components/v-popup.vue")
    })

    addComponent({
      name: "VPopupWrapper",
      filePath: resolver.resolve("./components/v-popup-wrapper.vue")
    })

    addComponent({
      name: "v-close-icon",
      filePath: resolver.resolve("./components/icons/v-close-icon.vue")
    })

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve("./plugins/popup-wrapper.client"))
    addPlugin(resolver.resolve("./plugins/pinia.vue-plugin"))
  }
})
