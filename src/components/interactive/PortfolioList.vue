<script setup lang="ts">
  import { computed, onMounted, onBeforeUnmount, ref } from 'vue'
  import { getUniqueTags } from '@/utils'
  import PortfolioListItem from '@/components/interactive/PortfolioListItem.vue'
  import PortfolioListNav from '@/components/interactive/PortfolioListNav.vue'
  
  const props = defineProps<{
    workItems: PortfolioItemData[]
  }>()

  const currentFilter = ref('')

  const allTags = computed<string[]>(
    () => getUniqueTags<PortfolioItemData>(props.workItems)
  )
  const workItemsDisplay = computed<PortfolioItemData[]>(
    () => {
      if (currentFilter.value) {
        return props.workItems.filter((item) => {
          return item.tags.filter(el => el.toLowerCase() === currentFilter.value)?.length > 0
        })
      } else {
        return props.workItems
      }
    }
  )

  onMounted(() => {
    applyFilterFromURL()
    window.addEventListener('popstate', applyFilterFromURL)
    window.addEventListener('pushState', applyFilterFromURL)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('popstate', applyFilterFromURL)
    window.removeEventListener('pushState', applyFilterFromURL)
  })
  
  function applyFilterFromURL() {
    const paramName = 'filter'
    let urlParams = new URLSearchParams(window.location.search)
  
    if (urlParams.has(paramName)) {
      currentFilter.value = String(urlParams.get(paramName))
    } else {
      currentFilter.value = ''
    }
  }

  function updateFilter(newVal: string) {
    const url = new URL(window.location.href)
    
    if (newVal) {
      url.searchParams.set('filter', newVal)
    } else {
      url.searchParams.delete('filter')
    }
    
    window.history.pushState({}, '', url.toString())
    currentFilter.value = newVal
  }
</script>

<template>
  <PortfolioListNav
    :current-filter="currentFilter"
    :tags="allTags"
    @update:filter="updateFilter"
  />
  <transition-group name="list" tag="section" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <PortfolioListItem
      v-for="item in workItemsDisplay"
      :data="item"
      :key="item.slug"
    />
  </transition-group>
</template>

<style scoped>
  .list-move,
  .list-enter-active,
  .list-leave-active {
    transition: all .75s;
  }

  .list-enter-from, 
  .list-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }

  .list-leave-active {
    position: absolute;
  }
</style>
