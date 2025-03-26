<script setup lang="ts">
import Sidebar from './Sidebar.vue'
import { Columns2, Menu } from 'lucide-vue-next'
</script>
<template>
  <div class="flex">
    <Sidebar />
    <div class="w-full">
      <header class="py-4 px-2 h-16 flex justify-between border-b border-gray-200">
        <button><Columns2 /></button>
        <div>
          <button><Menu /></button>
        </div>
      </header>
      <div class="p-5 w-full min-h-screen">
        <slot />
      </div>
    </div>
  </div>
</template>
