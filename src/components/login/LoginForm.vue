<script setup lang="ts">
import FormInput from '../FormInput.vue'
import CustomButton from '../CustomButton.vue'
import { reactive, ref, watch } from 'vue'
import { setToken } from '@/utils/token'
import { useRouter } from 'vue-router'
import { Reqres } from '@/utils/reqres'
import { Lock, Mail, Loader2 } from 'lucide-vue-next'

type Response = {
  token: string
  error?: string
}

const router = useRouter()
const reqres = new Reqres()

const formData = reactive({
  email: 'eve.holt@reqres.in',
  password: 'cityslicka',
})
const error = ref('')
const loading = ref(false)

const handleSubmit = async () => {
  loading.value = true
  const response = await reqres.post('/login', formData)
  const result = (await response.json()) as Response
  result.error && (error.value = result.error)
  loading.value = false
  if (!response.ok) return
  setToken(result.token)
  router.push('/home')
}

watch(formData, () => {
  error.value = ''
})
</script>
<template>
  <div class="flex flex-col justify-center px-5 py-5 items-center w-full">
    <div class="space-y-10 w-full px-10 xl:px-50">
      <div class="space-y-2">
        <h1 class="capitalize font-bold text-2xl">welcome back</h1>
        <h5 class="text-gray-500">Sign in to your account</h5>
      </div>
      <div class="space-y-5">
        <div>
          <p class="text-red-500">{{ error }}</p>
          <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
            <FormInput
              label="Username"
              v-model="formData.email"
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
            <CustomButton v-if="loading" class="flex justify-center"
              ><Loader2 class="animate-spin" />
            </CustomButton>
            <CustomButton v-if="!loading">login </CustomButton>
          </form>
        </div>
        <div class="flex gap-2 justify-center">
          <p>Don't have an account?</p>
          <router-link to="/register" class="text-blue-500"> Create an account </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
