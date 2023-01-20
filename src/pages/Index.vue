<script setup lang="ts"></script>

<template>
  <h2 class="text-lg underline">Home</h2>
  <Suspense>
    <UserName />
    <template #fallback>
      <Fallback />
    </template>
  </Suspense>
</template>
