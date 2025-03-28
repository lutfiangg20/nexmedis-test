<script setup lang="ts">
import FormInput from "@/components/FormInput.vue";
import MainLayout from "@/components/layouts/MainLayout.vue";
import Card from "@/components/Card.vue";
import { onMounted, ref } from "vue";
import CustomButton from "@/components/CustomButton.vue";
import { getUserbyId, type UserData } from "@/api/user";

const data = ref({
  id: 0,
  first_name: "",
  last_name: "",
  email: "",
  avatar: "",
} as UserData);

onMounted(async () => {
  const response = await getUserbyId(4);
  data.value = response.data;
});

const handleUpdate = async () => {};
</script>
<template>
  <MainLayout title="Profile" description="Manage your profile settings and account preferences.">
    <div class="md:flex gap-2 space-y-4 md:space-y-0">
      <div class="flex flex-col items-center justify-center md:w-1/4 space-y-2">
        <img :src="data.avatar" alt="" class="bg-gray-200 w-40 h-40 rounded-full" />
        <div class="">
          <h1 class="text-2xl font-bold">{{ data.first_name }} {{ data.last_name }}</h1>
          <p class="text-gray-500">{{ data.email }}</p>
        </div>
      </div>
      <Card class="" title="General Information" description="Update your personal information">
        <form @submit.prevent="handleUpdate" class="w-full md:w-fit space-y-2">
          <div class="md:flex gap-2">
            <FormInput
              label="First Name"
              placeholder="First Name"
              v-model="data.first_name"
              type="text"
            />
            <FormInput
              label="Last Name"
              placeholder="Last Name"
              v-model="data.last_name"
              type="text"
            />
          </div>
          <FormInput label="Email" placeholder="you@example.com" v-model="data.email" type="text" />
          <div class="flex justify-end">
            <CustomButton>Save Change</CustomButton>
          </div>
        </form>
      </Card>
    </div>
  </MainLayout>
</template>
