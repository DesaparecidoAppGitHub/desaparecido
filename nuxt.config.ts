import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: { head: { link: [{ rel: 'icon', type: 'image/svg', href: '/favicon.png' }] } },
    css: ["@/assets/css/styles.css"],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    }
});