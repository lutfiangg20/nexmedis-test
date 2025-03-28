<script setup lang="ts">
import FormInput from "@/components/FormInput.vue";
import MainLayout from "@/components/layouts/MainLayout.vue";
import Card from "@/components/Card.vue";
import { onMounted, reactive, ref } from "vue";
import CustomButton from "@/components/CustomButton.vue";
import { getUserbyId, type UserData } from "@/api/user";
import { Reqres } from "@/utils/reqres";

const reqres = new Reqres();
const data = ref({
  id: 0,
  first_name: "",
  last_name: "",
  email: "",
  avatar: "",
} as UserData);
const formData = reactive({
  first_name: "",
  last_name: "",
  email: "",
});

onMounted(async () => {
  const response = await getUserbyId(4);
  data.value = response.data;
  formData.first_name = response.data.first_name;
  formData.last_name = response.data.last_name;
  formData.email = response.data.email;
});

const handleUpdate = async () => {
  const response = await reqres.put(`/users/${data.value.id}`, formData);
  const result = (await response.json()) as UserData;
  console.log("result", result);
  data.value.first_name = result.first_name;
  data.value.last_name = result.last_name;
  data.value.email = result.email;
  formData.first_name = result.first_name;
  formData.last_name = result.last_name;
  formData.email = result.email;
};
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
              v-model="formData.first_name"
              type="text"
            />
            <FormInput
              label="Last Name"
              placeholder="Last Name"
              v-model="formData.last_name"
              type="text"
            />
          </div>
          <FormInput
            label="Email"
            placeholder="you@example.com"
            v-model="formData.email"
            type="text"
          />
          <div class="flex justify-end">
            <CustomButton>Save Change</CustomButton>
          </div>
        </form>
      </Card>
    </div>
  </MainLayout>
</template>
