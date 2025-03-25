<script setup lang="ts">
import CustomButton from '@/components/CustomButton.vue'
import CustomInput from '@/components/CustomInput.vue'
import FormInput from '@/components/FormInput.vue'
import { Lock, Mail } from 'lucide-vue-next'
import { reactive } from 'vue'

const formData = reactive({
  username: '',
  password: '',
})

const handleSubmit = async () => {
  console.log(formData)
}
</script>
<template>
  <div class="flex flex-col md:flex-row justify-around h-screen w-full">
    <div class="flex flex-col bg-blue-500 px-5 w-full h-full text-white">
      <h1 class="text-3xl p-5">Nexmedis</h1>
      <div class="flex flex-col justify-center h-full space-y-5">
        <h1 class="text-4xl font-bold">Healthcare reimagined for the digital age</h1>
        <p class="opacity-90">
          Secure access to your medical portal with advanced technology and patient-centered care.
        </p>
      </div>
    </div>
    <div class="flex flex-col justify-center px-5 py-5 space-y-10 w-full">
      <div>
        <h1 class="capitalize font-bold text-xl">welcome back</h1>
        <h5 class="text-gray-500">Sign in to your account</h5>
      </div>
      <div class="space-y-2">
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
          <FormInput
            label="Username"
            v-model="formData.username"
            placeholder="you@example.com"
            type="email"
            :icon="Mail"
          />
          <FormInput
            label="Password"
            v-model="formData.password"
            placeholder="********"
            type="password"
            :icon="Lock"
          />
          <CustomButton>login</CustomButton>
        </form>
        <div class="flex gap-2">
          <p>Don't have an account?</p>
          <router-link to="/register" class="text-blue-500">Create an account</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
