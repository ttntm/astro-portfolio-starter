import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'

const build = {
  baseURL: '/',
  outDir: './dist',
  siteURL: 'http://localhost:4321/'
}

const env = process.env.NODE_ENV

switch (env) {
  case 'pages':
    build.baseURL = '/astro-portfolio-starter/'
    build.outDir = './docs'
    build.siteURL = 'https://ttntm.github.io/astro-portfolio-starter/'
    break

  case 'production':
    build.siteURL = 'https://example.com/'
    break

  default:
    break
}

// https://astro.build/config
export default defineConfig({
  site: build.siteURL,
  base: build.baseURL,
  outDir: build.outDir,
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
