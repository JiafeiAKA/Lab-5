<script setup lang="ts">
import { toRefs } from 'vue'
import { type Event } from '@/types'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'

const props = defineProps<{
  event: Event
  id: String
}>()

const { event } = toRefs(props)
const router = useRouter()
const store = useMessageStore()
const edit = () => {
  store.updateMessage('The ' + props.event.title + ' has been update.')
  setTimeout(() => {
    store.resetMessage()
  }, 3000)
  router.push({ name: 'event-detail-view', params: { id: props.event.id } })
}
</script>
<template>
  <p class="mt-8">Edit event here</p>
  <button
    class="m-8 rounded-md ring ring-green-500 ring-offset-2 hover:scale-101 hover:shadow-sp"
    @click="edit"
  >
    Edit here!
  </button>
</template>
