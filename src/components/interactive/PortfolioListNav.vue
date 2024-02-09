<script setup lang="ts">
  const props = defineProps<{
    currentFilter: string,
    tags: string[]
  }>()

  const emit = defineEmits<{
    (e: 'update:filter', val: string): void
  }>()
</script>

<template>
  <h2 class="text-xl text-gray-500 border-t border-gray-200 pt-4 mb-4">Filter by Tag:</h2>
  <nav class="mb-12">
    <ul class="tag-list flex-wrap">
      <li v-for="tag in tags" :key="tag">
        <button
          :class="{ 'active': currentFilter === tag}"
          :disabled="currentFilter === tag"
          class="tag"
          @click="$emit('update:filter', tag)"
        >
          {{ tag.replaceAll('-', ' ') }}
        </button>
      </li>
      <transition name="fade">
        <li v-if="currentFilter">
          <button
            class="text-sm bg-gray-200 rounded px-3 py-1"
            @click="$emit('update:filter', '')"
          >
            Clear Filter
          </button>
        </li>
      </transition>
    </ul>
  </nav>
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
