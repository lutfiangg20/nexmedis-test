<script setup lang="ts">
import CustomButton from '@/components/CustomButton.vue';
import CustomInput from '@/components/CustomInput.vue';


</script>
<template>
  <div class="flex justify-center items-center  min-h-screen w-full">
    <div class="shadow-2xl">
      <div class="flex flex-col gap-4 px-10 py-5">
        <h1 class="capitalize font-bold text-xl">login</h1>
        <CustomInput placeholder="Username" />
        <CustomInput placeholder="Password" />
        <CustomButton>login</CustomButton>
      </div>
    </div>
  </div>
</template>
