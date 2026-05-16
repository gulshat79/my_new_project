import { Preset } from './presets/preset'
import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      link: [
        {
          rel: 'preload',
          as: 'font',
          type: 'font/ttf',
          href: '/fonts/Inter-VariableFont_opsz,wght.ttf',
          crossorigin: 'anonymous'
        }
      ]
    }
  },
  css: ['primeicons/primeicons.css', '~/assets/css/index.scss', '~/assets/css/main.css'],
  devServer: {
    host: '0.0.0.0',
    port: 3340
  },
  runtimeConfig: {
    public: {
      extendApi: process.env.NUXT_PUBLIC_EXTEND_API
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  imports: {
    dirs: ['composables/**']
  },
  modules: [
    '@pinia/nuxt',
    '@primevue/nuxt-module',
    '@element-plus/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt'
  ],
  primevue: {
    components: {
      prefix: 'P'
    },
    options: {
      theme: {
        preset: Preset,
        options: {
          darkModeSelector: '.p-dark'
        }
      }
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    defaultLocale: 'ru',
    strategy: 'no_prefix',
    locales: ['ru', 'kg'],
    vueI18n: './i18n.config.ts',
    plugins: [tailwindcss()]
  }
})
