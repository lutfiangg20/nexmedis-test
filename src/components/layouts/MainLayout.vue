<script setup lang="ts">
import { useAccountStore } from '@/stores/Account'
import Account from '../account/Account.vue'
import Sidebar from './Sidebar.vue'
import { Columns2, Menu } from 'lucide-vue-next'
import { useSidebarStore } from '@/stores/sidebar'

const account = useAccountStore()
const sidebar = useSidebarStore()
</script>
<template>
  <div class="flex">
    <Sidebar />
    <div class="w-full">
      <header class="py-4 px-2 h-16 flex justify-between border-b border-gray-200">
        <button @click="sidebar.toggle" class="cursor-pointer"><Columns2 /></button>
        <div class="relative">
          <button @click="account.toggle" class="cursor-pointer"><Menu /></button>
          <Account v-if="account.isOpen" class="absolute right-1 z-20 bg-white rounded-md" />
        </div>
      </header>
      <div class="p-5 w-full min-h-screen">
        <slot />
      </div>
    </div>
  </div>
</template>
