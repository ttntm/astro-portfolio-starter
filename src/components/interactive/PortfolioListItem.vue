<script setup lang="ts">
  import '@/styles/components/imageLink.css'
  
  const props = defineProps<{
    data: PortfolioItemData
  }>()
</script>

<template>
  <article class="ilo-container max-w-sm">
    <img :src="data.cover" :alt="data.title" class="w-full block mx-auto" loading="lazy" width="300" />
    <div class="overlay">
      <a :href="`${data.slug}`" class="link-overlay">
        <span class="p-4">
          <span class="font-serif font-bold text-2xl block mb-2" role="heading" aria-level="2">
            {{ data.title }}
          </span>
          <span class="block text-sm">
            {{ data.tags.sort().join(', ') }}
          </span>
        </span>
      </a>
    </div>
  </article>
</template>
