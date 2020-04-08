
module.exports = {
  env: {
   // strapiBaseUri: process.env.API_URL || "http://localhost:1337"
   strapiBaseUri: process.env.API_URL || "https://strapin-back.herokuapp.com/"
  },

  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  generate: {
    fallback: true
  }
  /*
  ** Global CSS
  */
  css: [
    'uikit/dist/css/uikit.min.css',
    'uikit/dist/css/uikit.css',

  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/uikit.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],

  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Staatliches' }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit',
  ],

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },

  apollo: {
    clientConfigs: {
      default: {
        //httpEndpoint: process.env.BACKEND_URL || "http://localhost:1337/graphql"
        httpEndpoint: process.env.BACKEND_URL || "https://strapin-back.herokuapp.com/graphql"
      }
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
