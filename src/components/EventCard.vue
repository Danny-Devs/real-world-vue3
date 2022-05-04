<template>
  <RouterLink :to="{ name: 'EventDetailView', params: { id: event.id } }">
    <div class="py-6 mb-4 text-center bg-green-100 event-card">
      <!-- Display event data -->
      <div></div>
      <span>@ {{ event.time }} on {{ event.date }}</span>
      <h4 class="mt-2 text-2xl font-bold">{{ event.title }}</h4>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Event } from '../utils/types'

interface Props {
  event: Event
}

const props = defineProps<Props>()
</script>

<style scoped>
.event-card {
  cursor: pointer;
  border: 1px solid #39495c;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
