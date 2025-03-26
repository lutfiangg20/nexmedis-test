<script setup lang="ts">
import { reactive } from 'vue'
import FormInput from '../components/FormInput.vue'
import { Lock, Mail } from 'lucide-vue-next'
import CustomButton from '@/components/CustomButton.vue'
import { Reqres, reqres } from '@/utils/reqres'
import { setToken } from '@/utils/token'
import { useRouter } from 'vue-router'
const reqres = new Reqres()

type Response = {
  id:number
  token:string
}

const router = useRouter()

const formData = reactive({
  email: 'eve.holt@reqres.in',
  password: 'pistol'
})

const handleSubmit =async () => {
  const response = await reqres.post("/register",formData)
  const result = await response.json() as Response
  if (!response.ok) return
  setToken(result.token)
  router.push("/home")
}

</script>
<template>
  <div class="flex flex-col justify-center min-h-screen  px-5 py-5 items-center w-full">
    <div class="space-y-10 w-72">
      <div class="space-y-2">
        <h1 class="capitalize font-bold text-2xl">Create Account</h1>
        <div class="flex gap-1">
          <p class="text-gray-500">Already have an account?</p>
          <router-link to="/" class="text-sky-500">Sign In</router-link>
        </div>
      </div>
      <div class="space-y-5">
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
          <FormInput label="Email" v-model="formData.email" placeholder="you@example.com" type="email"
            :icon="Mail" />
          <FormInput label="Password" v-model="formData.password" placeholder="********" type="password" :icon="Lock" />
          <CustomButton>Sign Up</CustomButton>
        </form>
      </div>
    </div>
  </div>
</template>
