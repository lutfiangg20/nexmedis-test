<script setup lang="ts">
import { getAllResource, type ResponseResource } from "@/api/resource";
import { useResourceStore } from "@/stores/resource";
import { onMounted, ref } from "vue";
import UpdateButton from "../UpdateButton.vue";
import DeleteButton from "../DeleteButton.vue";
import { Reqres } from "@/utils/reqres";

const reqres = new Reqres();
const resourceStore = useResourceStore();
const resource = ref({} as ResponseResource);

const getData = async (page: number) => {
  const response = await getAllResource(page);
  resource.value = {
    total: response.total,
    page: response.page,
    per_page: response.per_page,
    total_pages: response.total_pages,
    data: response.data,
    support: response.support,
  };
  resourceStore.getTotal(response.total);
};

onMounted(async () => {
  await getData(1);
});

const handleNext = async () => {
  if (resource.value.page === resource.value.total_pages) return;
  await getData(resource.value.page + 1);
};

const handlePrev = async () => {
  if (resource.value.page === 1) return;
  await getData(resource.value.page - 1);
};
</script>
<template>
  <div class="border border-gray-200 rounded-md p-4 space-y-2 overflow-auto">
    <h1 class="font-semibold">List Resource</h1>
    <table class="w-full">
      <thead class="bg-gray-100">
        <tr class="text-left">
          <th class="p-2">No</th>
          <th class="p-2">Name</th>
          <th class="p-2">Pantone</th>
          <th class="p-2">Color</th>
          <th class="p-2">Year</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in resource.data" :key="index">
          <td class="p-2">{{ index + 1 }}</td>
          <td class="p-2">{{ item.name }}</td>
          <td class="p-2">{{ item.pantone_value }}</td>
          <td class="p-2">
            <button :style="{ backgroundColor: item.color }" class="w-full rounded-md">
              {{ item.color }}
            </button>
          </td>
          <td class="p-2">{{ item.year }}</td>
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
      {{ resource.page }}
      <button
        @click="handleNext"
        class="rounded-md border border-gray-400 p-1 w-16 hover:bg-gray-200"
      >
        Next
      </button>
    </div>
  </div>
</template>
