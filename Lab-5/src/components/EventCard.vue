<script setup lang="ts">
import { type Event } from '@/types'
defineProps<{
  event: Event
}>()
// const event = ref({
//   id: 5928101,
//   category: 'animal welfare',
//   title: 'Cat Adaption Day',
//   description: 'Find your new feline friend at this event.',
//   location: 'Meow Town',
//   date: 'January 8, 2022',
//   time: '12:00',
//   petAllowed: true,
//   organizer: 'Kat laydee'
// })
</script>

<template>
  <RouterLink class="text-gray-700" :to="{ name: 'event-detail-view', params: { id: event.id } }">
    <div
      class="cursor-pointer border border-gray-600 p-4 w-64 mb-6 hover:scale-101 hover:shadow-sp"
    >
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
  </RouterLink>
</template>
