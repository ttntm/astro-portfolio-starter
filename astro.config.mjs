import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'

const baseURL = process.env.NODE_ENV === 'production' ? 'https://prod.site/' : 'http://localhost:4321/'

// https://astro.build/config
// sitemap: https://docs.astro.build/en/guides/integrations-guide/sitemap/#configuration
export default defineConfig({
  site: baseURL,
  image: {
    remotePatterns: [{
      protocol: 'https'
    }]
  },
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    vue()
  ],
  redirects: {}
})
