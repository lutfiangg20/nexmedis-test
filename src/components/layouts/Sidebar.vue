<script setup lang="ts">
type Data = {
  name: string
  url: string
}
const datas: Data[] = [
  {
    name: 'Home',
    url: '/home',
  },
  {
    name: 'Profile',
    url: '/profile',
  },
]
</script>
<template>
  <aside class="w-60 border-r border-gray-200">
    <div class="px-5 py-4 h-16 border-b border-gray-200">
      <h1 class="text-2xl font-bold">Dashboard</h1>
    </div>
    <ul class="px-5">
      <li
        class="cursor-pointer hover:bg-gray-200 rounded-md p-2"
        v-for="(item, index) in datas"
        :key="index"
      >
        <router-link :to="item.url">{{ item.name }}</router-link>
      </li>
    </ul>
  </aside>
</template>
