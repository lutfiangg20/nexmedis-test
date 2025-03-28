<script setup lang="ts">
import { getAllUsers, type UsersResponse } from "@/api/user";
import { useUserStore } from "@/stores/user";
import { Minus, Plus, Trash2 } from "lucide-vue-next";
import { onMounted, reactive, ref } from "vue";
import DeleteButton from "../DeleteButton.vue";
import UpdateButton from "../UpdateButton.vue";
import { Reqres } from "@/utils/reqres";
import FormInput from "../FormInput.vue";

const reqres = new Reqres();
const userStore = useUserStore();
const users = ref({} as UsersResponse);
const formIsOpen = ref(false);
const formData = reactive({
  name: "",
  job: "",
});

const getData = async (page: number) => {
  const response = await getAllUsers(page);
  users.value = {
    total: response.total,
    page: response.page,
    per_page: response.per_page,
    total_pages: response.total_pages,
    data: response.data,
    support: response.support,
  };
  userStore.getTotal(response.total);
};

onMounted(async () => {
  await getData(1);
});

const handleNext = async () => {
  if (users.value.page === users.value.total_pages) return;
  await getData(users.value.page + 1);
};

const handlePrev = async () => {
  if (users.value.page === 1) return;
  await getData(users.value.page - 1);
};

const handleDelete = async (id: number) => {
  const response = await reqres.delete(`/users/${id}`);
  console.log("response delte", response);
  if (!response.ok) return;
  await getData(users.value.page);
};

const handleSubmit = async () => {
  const response = await reqres.post("/users", formData);
  const result = await response.json();
  console.log("result", result);
  await getData(users.value.page);
  formIsOpen.value = false;
};
</script>
<template>
  <div class="border border-gray-200 rounded-md p-4 space-y-2 overflow-auto">
    <div class="flex justify-between">
      <h1 class="font-semibold">List Users</h1>
      <button
        @click="formIsOpen = !formIsOpen"
        class="bg-green-500 p-1 w-12 rounded-md flex justify-center text-white"
      >
        <Plus v-if="!formIsOpen" />
        <Minus v-if="formIsOpen" />
      </button>
    </div>
    <form
      @submit.prevent="handleSubmit"
      v-if="formIsOpen"
      class="mb-10 flex gap-5 items-end w-full"
    >
      <div class="flex gap-5 w-full">
        <FormInput
          v-model="formData.name"
          label="Name"
          placeholder="Input Name..."
          type="text"
          class="w-full"
        />
        <FormInput
          v-model="formData.job"
          label="Job"
          placeholder="Input Job..."
          type="text"
          class="w-full"
        />
      </div>
      <button class="bg-green-500 p-2 rounded-md text-white" type="submit">Submit</button>
    </form>
    <table class="w-full">
      <thead class="bg-gray-100">
        <tr class="text-left">
          <th class="p-2">No</th>
          <th class="p-2">Name</th>
          <th class="p-2">Email</th>
          <th class="p-2 text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users.data" :key="index">
          <td class="p-2">{{ (users.page - 1) * users.per_page + index + 1 }}</td>
          <td class="p-2">{{ user.first_name }} {{ user.last_name }}</td>
          <td class="p-2">{{ user.email }}</td>
          <td class="p-2">
            <div class="flex justify-center items-center gap-2">
              <UpdateButton />
              <DeleteButton @click="handleDelete(user.id)" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-end items-center gap-2 p-2">
      <button
        @click="handlePrev"
        class="rounded-md border border-gray-400 p-1 w-16 hover:bg-gray-200"
      >
        Prev
      </button>
      {{ users.page }}
      <button
        @click="handleNext"
        class="rounded-md border border-gray-400 p-1 w-16 hover:bg-gray-200"
      >
        Next
      </button>
    </div>
  </div>
</template>
