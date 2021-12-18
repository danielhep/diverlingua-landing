export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'diverlingua-landing',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'd3', /d3-.*/, 'internmap', 'delaunator', 'robust-predicates'
    ]
  },
  googleFonts: {
    families: {
      'Source Sans 3': true,
      'Readex Pro': true
    }
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            'diverlingua-aqua': '#0099CC',
            'diverlingua-pink': '#F531A3',
            'diverlingua-pink-hover': '#bf2880',
            'diverlingua-light-blue': '#23CDF7',
            'diverlingua-blue': '#0f7f9b'
          },
          fontFamily: {
            header: ['Source Sans 3'],
            small: ['Readex Pro']
          }
        }
      }
    }
  }
}
