<script setup lang="ts">
import { socketManager } from '@/lib/socket';

const socket = socketManager.socket('/');
socket.open();
socket.on('connect_error', () => {
  socket.disconnect();
  console.error(
    'Socket connection failed. Check your network and reload the page.'
  );
});

const send = () => {
  socket.emit('message', input.value);
  input.value = '';
};

const messages = ref<string[]>([]);
socket.on('message', (message: string) => messages.value.push(message));

const input = ref('');
</script>

<template>
  <TextInput v-model="input" />
  <Button display="Send" @click="send" />
  <h2 class="text-lg underline">Messages</h2>
  <ul class="flex flex-col-reverse">
    <li v-for="(message, key) in messages" :key="key">
      {{ message }}
    </li>
  </ul>
</template>
