<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue'
import { onMounted } from 'vue'

onMounted(async () => {
  const response = await fetch('https://reqres.in/api/users')
  const result = await response.json()
  console.log('result', result)
})
</script>
<template>
  <MainLayout>profile</MainLayout>
</template>
