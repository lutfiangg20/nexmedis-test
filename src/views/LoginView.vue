<script setup lang="ts">
import { ShieldCheck } from 'lucide-vue-next'
import LoginForm from '@/components/login/LoginForm.vue'
</script>
<template>
  <div class="flex flex-col lg:flex-row justify-around md:h-screen w-full">
    <div class="flex flex-col bg-linear-to-br from-blue-500 to-cyan-400 p-5 w-full h-full text-white">
      <h1 class="text-3xl">Nexmedis</h1>
      <div class="flex flex-col justify-center h-full space-y-5 lg:mx-auto">
        <h1 class="text-4xl font-bold">Healthcare reimagined for the digital age</h1>
        <p class="opacity-90">
          Secure access to your medical portal with advanced technology and patient-centered care.
        </p>
        <div class="flex gap-2 items-center">
          <div class="bg-sky-400 shadow-2xl opacity-80 rounded-full w-12 h-12 p-3">
            <ShieldCheck />
          </div>
          <div>
            <h3 class="font-bold">Secure & Compliant</h3>
            <p class="opacity-90">Secure access to your medical portal with advanced technology.</p>
          </div>
        </div>
        <div class="flex gap-2 items-center">
          <div class="bg-sky-400 shadow-2xl opacity-80 rounded-full w-12 h-12 p-3">
            <ShieldCheck />
          </div>
          <div>
            <h3 class="font-bold">Integrated Care</h3>
            <p class="opacity-90">All your medical needs in one place</p>
          </div>
        </div>
      </div>
    </div>
    <LoginForm />
  </div>
</template>
