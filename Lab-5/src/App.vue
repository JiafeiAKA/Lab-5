<template>
  <SpeedInsights />
  <div class="text-center font-sans text-gray-700 antialias">
    <header>
      <div class="animate-fade" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <div class="wrapper">
        <nav class="py-6">
          <RouterLink
            class="font-bold text-gray-700"
            exact-active-class="text-green-500"
            :to="{ name: 'event-list-view' }"
            >Events</RouterLink
          >
          |
          <RouterLink
            class="font-bold text-gray-700"
            exact-active-class="text-green-500"
            :to="{ name: 'student-list-view' }"
            >Students</RouterLink
          >
          |
          <RouterLink
            class="font-bold text-gray-700"
            exact-active-class="text-green-500"
            :to="{ name: 'about' }"
            >About</RouterLink
          >
        </nav>
        <div>
          <label for="page-size">Events per page: </label>
          <select id="page-size" v-model="pageSize" @change="updatePageSize">
            <option v-for="size in pageSizes" :key="size" :value="size">{{ size }}</option>
          </select>
        </div>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue"
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'
import { useMessageStore } from './stores/message'
import { storeToRefs } from 'pinia'

const store = useMessageStore()
const { message } = storeToRefs(store)

const pageSizes = [2, 4, 6, 8, 10]
const pageSize = ref(pageSizes[1])

const router = useRouter()
const route = useRoute()

const updatePageSize = () => {
  router.push({
    name: 'event-list-view',
    query: { ...route.query, pageSize: pageSize.value, page: 1 }
  })
}

if (route.query.pageSize) {
  pageSize.value = parseInt(route.query.pageSize.toString())
}
</script>
