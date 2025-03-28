<script setup lang="ts">
import { useSidebarStore } from "@/stores/sidebar";
import { menuList } from "./menuList";

const store = useSidebarStore();
</script>
<template>
  <aside
    :class="[
      'md:hidden  z-20 bg-white fixed min-h-screen border-r border-gray-200 transition-all overflow-hidden',
      store.isOpen ? 'translate-x-0 w-full' : 'translate-x-[-100%] w-0',
    ]"
  >
    <div class="px-5 py-4 h-16 border-b border-gray-200">
      <h1 class="text-2xl font-bold">Dashboard</h1>
    </div>
    <ul class="px-5">
      <li class="" v-for="(item, index) in menuList" :key="index">
        <router-link
          class="flex items-center gap-2 cursor-pointer hover:bg-gray-200 rounded-md p-2"
          @click="store.toggle"
          :to="item.url"
        >
          <component :is="item.icon" :size="20"></component>
          {{ item.name }}</router-link
        >
      </li>
    </ul>
  </aside>
</template>
