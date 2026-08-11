// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Durubond | Premium Real Estate Consultant & Influencer',
      meta: [
        { name: 'description', content: 'Discover premium real estate insights, advisory services, and property deals with Durubond, your trusted real estate consultant and influencer in Johannesburg, South Africa.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'Durubond | Premium Real Estate Consultant' },
        { property: 'og:description', content: 'Premium real estate advisory, insights, and property deals in South Africa.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'stylesheet', href: 'https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&f[]=satoshi@300,400,500,700,900&display=swap' },
      ]
    },
  },
})
