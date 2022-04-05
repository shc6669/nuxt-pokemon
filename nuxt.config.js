export default {
  head: {
    title: 'Nuxt Pokemon App',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: 'This is Nuxt App with fetch Pokemon API' },
      { name: 'theme-style-mode', content: '1' }, // 0 = light, 1 = dark
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    bodyAttrs: {
      class: 'template-color-1'
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/vendor/bootstrap.min.css',
    '@/assets/css/vendor/nice-select.css',
    '@/assets/css/plugins/feature.css',
    '@/assets/scss/style.scss',
  ],

  axios: {
    baseURL: 'http://localhost:3000',
    proxy: true
  },

  proxy: {
    '/api': {
      target: 'https://pokeapi.co/api/v2/',
      pathRewrite: {
        '^/api/v2/': ''
      },
      changeOrigin: true
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/composition-api'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
