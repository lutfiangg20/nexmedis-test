<script setup lang="ts">
import MainLayout from "@/components/layouts/MainLayout.vue";
import Card from "@/components/Card.vue";
import { onMounted, ref } from "vue";
import { getAllUsers, type UsersResponse } from "@/api/user";
import { getAllResource, type ResponseResource } from "@/api/resource";
import UserTable from "@/components/home/UserTable.vue";
import ResourceTable from "@/components/home/ResourceTable.vue";
import { useUserStore } from "@/stores/user";
import { useResourceStore } from "@/stores/resource";

const user = useUserStore();
const resource = useResourceStore();
</script>

<template>
  <main>
    <MainLayout title="Home">
      <div class="space-y-2">
        <div class="flex gap-2">
          <div class="p-4 border border-gray-200 rounded-xl w-40">
            <h5>Total Users</h5>
            <h1 class="text-4xl font-bold">{{ user.total }}</h1>
          </div>
          <div class="p-4 border border-gray-200 rounded-xl w-40">
            <h5>Total Resource</h5>
            <h1 class="text-4xl font-bold">{{ resource.total }}</h1>
          </div>
        </div>
        <UserTable />
        <ResourceTable />
      </div>
    </MainLayout>
  </main>
</template>
