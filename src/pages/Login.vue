<script setup lang="ts">
import Fallback from '@/components/Fallback.vue';
import UserName from '@/module/user/UserName.vue';
</script>

<template>
  <h2 class="text-lg underline">Home</h2>
  <Suspense>
    <UserName />
    <template #fallback>
      <Fallback />
    </template>
  </Suspense>
</template>
