<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import EventService from '../services/EventService'
import type { Event } from '../utils/types'
import { ref } from 'vue'

const events = ref<Event[]>()

EventService.getEvents()
  .then(response => (events.value = response.data))
  .catch(error => {
    console.log('Error: ', error)
  })
</script>

<template>
  <main class="w-10/12 pt-6 mx-auto">
    <h1 class="mt-3 mb-8 text-5xl text-center">Events for Good</h1>
      <EventCard
        v-for="event in events"
        :key="event.id"
        :event="event"
        class="mx-auto"
      />
  </main>
</template>
