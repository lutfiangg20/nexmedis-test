<script setup lang="ts">
import { Mail } from 'lucide-vue-next';
import type {  InputTypeHTMLAttribute } from 'vue';

const props = defineProps<{
  label: string
  type?:InputTypeHTMLAttribute
  modelValue: string
  placeholder:string
  icon?: Object
  customClass?:string
}>()
const emit = defineEmits(['update:modelValue'])
const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>
<template>
  <div class="flex flex-col gap-2">
    <label>{{ label }}</label>
    <div class="relative">
      <component :is="icon" class="absolute top-3 left-3 text-gray-400" :size="18"/>
      <input
        :class="['border-1 border-gray-300 rounded-lg py-2 pr-3 w-full',icon ? 'pl-10' : 'pl-3',`${customClass}`]"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="updateValue" />
    </div>
  </div class="flex flex-col gap-2">
</template>
