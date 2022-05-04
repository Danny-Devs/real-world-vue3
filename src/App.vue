<script setup lang="ts">
import { useMyStore1 } from './stores/myStore1'

const store = useMyStore1()
// warning: do not destructure 'store' -- it will break reactivity
// example: const { name, doubleCount } = store <--BAD!!!
</script>

<template>
  <nav class="mt-6 text-3xl text-center">
    <RouterLink :to="{ name: 'EventList' }" active-class="text-green-700"
      >Events</RouterLink
    >
    &nbsp;|&nbsp;
    <RouterLink
      :to="{ name: 'About' }"
      active-class="text-green-700"
      >About</RouterLink
    >
  </nav>
  <div class="container mx-auto">
    <RouterView />
  </div>
</template>

<style>
.router-link-active {
  color: white;
}
</style>
