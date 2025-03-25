<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  placeholder: string
}>()
const value = ref("")

</script>
<template>
  <input v-model="value" class="bg-pink-300 rounded-xl py-1 px-2 text-white " :placeholder="placeholder" />
</template>
