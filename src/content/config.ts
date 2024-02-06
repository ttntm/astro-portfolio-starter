// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content'

// 2. Define a `type` and `schema` for each collection
const portfolioCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    cover: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()),
    referenceUrl: z.string().optional()
  })
})

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'portfolio': portfolioCollection
}
