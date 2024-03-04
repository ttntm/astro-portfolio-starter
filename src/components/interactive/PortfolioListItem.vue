<script setup lang="ts">
  const props = defineProps<{
    data: PortfolioItemData
  }>()
</script>

<template>
  <article class="ilo-container max-w-sm">
    <img
      :src="`./img/${data.cover}`"
      :alt="data.title"
      class="w-full block object-cover mx-auto"
      loading="lazy"
      decoding="async"
      width="300"
      style="min-height: 300px;"
    />
    <div class="overlay">
      <a :href="`${data.slug}`" class="link-overlay">
        <span class="p-4">
          <span class="font-bold text-xl block mb-2" role="heading" aria-level="2">
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
