<template>
  <div v-if="event" class="mt-8 text-center">
    <h1 class="text-5xl">{{ event.title }}</h1>
    <p class="mt-4 text-2xl">{{ event.description }}</p>
    <p class="mt-4 text-xl font-bold">{{ event.location }}, {{ event.time }}</p>
    <p class="mt-2">Organized by: {{ event.organizer }}</p>
  </div>
</template>

<script setup lang="ts">
import EventService from '@/services/EventService'
import type { Event } from '@/utils/types'
import { ref } from 'vue'

const props = defineProps(['id'])

const event = ref<Event>()

EventService.getEvent(props.id)
  .then(response => {
    event.value = response.data
  })
  .catch(error => {
    console.log('Error: ', error)
  })
</script>

<style scoped></style>
