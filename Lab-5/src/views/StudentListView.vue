<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { type Student } from '@/types'
import StudentService from '@/services/StudentService'
import { useRoute } from 'vue-router'

const students = ref<Student[] | null>(null)
const route = useRoute()

onMounted(() => {
  StudentService.getStudents()
    .then((response) => {
      students.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <div class="flex flex-col items-center">
    <h1>Student List</h1>
    <div
      v-for="student in students"
      :key="student.id"
      class="cursor-pointer border border-gray-600 p-4 w-64 mb-6 hover:scale-101 hover:shadow-sp"
    >
      <h2>{{ student.name }} {{ student.surname }}</h2>
      <p>GPA: {{ student.gpa }}</p>
    </div>
  </div>
</template>
