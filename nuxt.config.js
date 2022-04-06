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
    },
    script: [
      { src: '/js/jquery.js', body: true },
      { src: '/js/jquery.nice-select.min.js', body: true },
      { src: '/js/jquery-ui.js', body: true },
      { src: '/js/feather.min.js', body: true },
      { src: '/js/slick.min.js', body: true },
      { src: '/js/bootstrap.min.js', body: true },
      { src: '/js/sal.min.js', body: true },
      { src: '/js/jquery.style.swicher.js', body: true },
      { src: '/js/isotop.js', body: true },
      { src: '/js/imageloaded.js', body: true },
      { src: '/js/backtoTop.js', body: true },
      { src: '/js/jquery-appear.js', body: true },
      { src: '/js/scrolltrigger.js', body: true },
      { src: '/js/savePopup.js', body: true },
      { src: '/js/main.js', body: true },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/vendor/bootstrap.min.css',
    '~/assets/css/plugins/feature.css',
    '~/assets/scss/style.scss',
  ],

  axios: {
    baseURL: 'http://localhost:3000',
    proxy: true
  },

  proxy: {
    '/api/': {
      target: 'https://pokeapi.co/api/v2/',
      pathRewrite: {
        '^/api/': ''
      },
      changeOrigin: true
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  pages: [
    'pages/:route?'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      })
    },
  }
}
