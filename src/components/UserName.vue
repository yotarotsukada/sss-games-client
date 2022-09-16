<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
import { ref } from '@vue/reactivity';
import axios from 'axios';

type User = {
  name: string;
};

const user: User = (
  await axios
    .create({
      headers: {
        'Content-type': 'application/json',
      },
    })
    .get('http://localhost:8080/user')
).data;
const text = ref<string>(user.name);
</script>

<template>
  <p>Hello, {{ text }}</p>
</template>
