<script setup lang="ts">
type Response = {
  data: Data
  support: Support
}
type Data = {
  avatar: string
  email: string
  first_name: string
  id: number
  last_name: string
}
type Support = {
  url: string
  text: string
}
import FormInput from '@/components/FormInput.vue'
import MainLayout from '@/components/layouts/MainLayout.vue'
import { onMounted, ref } from 'vue'

const data = ref({
  id: 0,
  first_name: '',
  last_name: '',
  email: '',
  avatar: '',
} as Data)

onMounted(async () => {
  const response = await fetch('https://reqres.in/api/users/4')
  const result = (await response.json()) as Response
  data.value = result.data
})
</script>
<template>
  <MainLayout title="Profile" description="Manage your profile settings and account preferences.">
    <div class="space-y-5">
      <div class="flex gap-5 items-center">
        <img :src="data.avatar" alt="" class="bg-gray-200 w-24 h-24 rounded-full" />
        <div class="">
          <h1 class="text-2xl font-bold">{{ data.first_name }} {{ data.last_name }}</h1>
          <p class="text-gray-500">{{ data.email }}</p>
        </div>
      </div>
      <div>
        <h1 class="text-2xl font-bold">General Information</h1>
        <p class="text-gray-500">Update your personal information</p>
        <div class="flex gap-2">
          <FormInput
            label="First Name"
            placeholder="First Name"
            v-model="data.first_name"
            type="text"
          />
          <FormInput
            label="Last Name"
            placeholder="Last Name"
            v-model="data.last_name"
            type="text"
          />
        </div>
        <FormInput label="Email" placeholder="you@example.com" v-model="data.email" type="text" />
      </div>
    </div>
  </MainLayout>
</template>
