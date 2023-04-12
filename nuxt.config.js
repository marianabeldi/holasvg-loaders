export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Hola SVG Loaders - Free SVG Loader Generator',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: "#ffffff" },
      { name: 'msapplication-TileImage', content: "/ms-icon-144x144.png" },
      { name: 'theme-color', content: "#ffffff" },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { name: "description", content: "Free SVG Loader Generator" },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: "57x57", href: "/apple-icon-57x57.png" },
      { rel: 'apple-touch-icon', sizes: "60x60", href: "/apple-icon-60x60.png" },
      { rel: 'apple-touch-icon', sizes: "72x72", href: "/apple-icon-72x72.png" },
      { rel: 'apple-touch-icon', sizes: "76x76", href: "/apple-icon-76x76.png" },
      { rel: 'apple-touch-icon', sizes: "114x114", href: "/apple-icon-114x114.png" },
      { rel: 'apple-touch-icon', sizes: "120x120", href: "/apple-icon-120x120.png" },
      { rel: 'apple-touch-icon', sizes: "144x144", href: "/apple-icon-144x144.png" },
      { rel: 'apple-touch-icon', sizes: "152x152", href: "/apple-icon-152x152.png" },
      { rel: 'apple-touch-icon', sizes: "180x180", href: "/apple-icon-180x180.png" },
      { rel: 'icon', type:"image/png", sizes: "192x192", href: "/android-icon-192x192.png" },
      { rel: 'icon', type:"image/png", sizes: "96x96", href: "/favicon-96x96.png" },
      { rel: 'icon', type:"image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: 'icon', type:"image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      // { rel: 'manifest', href: "/manifest.json" }
    ],
    bodyAttrs: {
    },
    script: [
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        'data-ad-client': 'ca-pub-6891714364460101',
        async: true
      },
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6891714364460101',
        async: true,
        crossorigin: 'anonymous'
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/globalObject.js',
    { src: '~/plugins/prism', mode: 'client'}
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxtjs/eslint-module",
    ['@nuxtjs/google-fonts', {   
      families: {
        'Montserrat': [400, 500, 900],
      },   
    }],
    ['@nuxtjs/google-analytics', {
      id: 'UA-174225123-1',
    /*  debug: {
        enabled: true,
        sendHitTask: true
      }, */
      autoTracking: {
        pageviewTemplate: route => {
            return {
                page: route.path,
                title: window.document.title,
                location: window.location.href,
            };
        }
      }      
    }]
  ],
  router: { 
    scrollBehavior: function (to, from, savedPosition) { return { x: 0, y: 0 } }
  },
  vueMeta: { refreshOnceOnNavigation: true },
  features: { transitions: false },
  
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    // ['nuxt-highlightjs', {
    //   style: 'night-owl'
    // }]
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    },
    nestedProperties: ['author.name']
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
}
