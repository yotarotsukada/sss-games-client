<script setup lang="ts"></script>

<template>
  <div class="flex items-center justify-between bg-blue-500 p-4 text-white">
    <h1 class="text-3xl font-bold">Hello world!</h1>
    <nav class="flex gap-3">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/messages">Messages</RouterLink>
    </nav>
  </div>
  <main class="p-8">
    <RouterView />
  </main>
</template>
