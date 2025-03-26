<script setup lang="ts">
import { deleteToken } from '@/utils/token'
import { useRouter } from 'vue-router'

const router = useRouter()
const handleLogout = async () => {
  deleteToken()
  router.push('/')
}
</script>
<template>
  <div class="border border-gray-200 w-32 p-2">
    <ul class="w-full">
      <li>
        <button @click="handleLogout" class="block py-2 px-2 hover:bg-gray-100 w-full">
          Logout
        </button>
      </li>
    </ul>
  </div>
</template>
