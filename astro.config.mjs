import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'

const baseURL = process.env.NODE_ENV === 'production'
  ? '/astro-portfolio-starter/'
  : '/'

const siteURL = process.env.NODE_ENV === 'production'
  ? 'https://ttntm.github.io/astro-portfolio-starter/'
  : 'http://localhost:4321/'

// https://astro.build/config
// sitemap: https://docs.astro.build/en/guides/integrations-guide/sitemap/#configuration
export default defineConfig({
  site: siteURL,
  base: baseURL,
  outDir: './docs',
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
