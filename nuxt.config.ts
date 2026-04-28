import { Preset } from './presets/preset'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['primeicons/primeicons.css', '~/assets/css/index.scss', '~/assets/css/main.css'],
    modules: [
        '@pinia/nuxt',
        '@primevue/nuxt-module',
        '@nuxt/test-utils/module',
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
        plugins: []
    },
    devServer: {
        host: '0.0.0.0',
        port: 3340
    },
    runtimeConfig: {
        public: {
            extendApi: process.env.NUXT_PUBLIC_EXTEND_API
        }
    },
    i18n: {
        defaultLocale: 'ru',
        strategy: 'no_prefix',
        locales: ['ru', 'kg']
    }
})
