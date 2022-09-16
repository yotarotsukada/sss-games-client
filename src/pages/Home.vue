<script setup lang="ts">
import Fallback from '../components/Fallback.vue';
import UserName from '../components/UserName.vue';
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
