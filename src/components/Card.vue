<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>
<template>
  <div class="border border-gray-200 p-5 rounded-md">
    <h1 class="text-2xl font-bold">{{ title }}</h1>
    <p class="text-gray-500">{{ description }}</p>
    <slot />
  </div>
</template>
