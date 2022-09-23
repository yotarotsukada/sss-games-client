<script setup lang="ts">
import { ref } from '@vue/reactivity';
import { httpClient } from '@/lib/axios';

type User = {
  name: string;
};

const user: User = (await httpClient.get('/user')).data;
const text = ref<string>(user.name);
</script>

<template>
  <p>Hello, {{ text }}</p>
</template>
