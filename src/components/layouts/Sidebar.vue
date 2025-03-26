<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'
import { Home, User, type LucideProps } from 'lucide-vue-next'
import type { FunctionalComponent } from 'vue'

type Data = {
  name: string
  url: string
  icon?: FunctionalComponent<LucideProps, {}, any, {}>
}
const store = useSidebarStore()
const datas: Data[] = [
  {
    name: 'Home',
    url: '/home',
    icon: Home,
  },
  {
    name: 'Profile',
    url: '/profile',
    icon: User,
  },
]
</script>
<template>
  <aside
    :class="[
      'hidden md:block border-r border-gray-200 transition-all overflow-hidden',
      store.isOpen ? 'translate-x-0 w-60' : 'translate-x-[-100%] w-0',
    ]"
  >
    <div class="px-5 py-4 h-16 border-b border-gray-200">
      <h1 class="text-2xl font-bold">Dashboard</h1>
    </div>
    <ul class="px-5">
      <li
        class="flex items-center gap-2 cursor-pointer hover:bg-gray-200 rounded-md p-2"
        v-for="(item, index) in datas"
        :key="index"
      >
        <component :is="item.icon" :size="20"></component>
        <router-link :to="item.url">{{ item.name }}</router-link>
      </li>
    </ul>
  </aside>
</template>
