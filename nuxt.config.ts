export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  hooks: {
    'components:dirs': (dirs) => {
      dirs.unshift({
        path: '~/components/ui',
        // this is required else Nuxt will autoImport `.ts` file
        extensions: ['.vue'],
        // prefix for your components, eg: UiButton
        prefix: 'Ui',
        // prevent adding another prefix component by it's path.
        pathPrefix: false
      })
    }
  }
})