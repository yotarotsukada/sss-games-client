<script setup lang="ts">
import { ref, Ref } from '@vue/reactivity';
import io from 'socket.io-client';
import Button from '../components/Button.vue';
import TextInput from '../components/TextInput.vue';
import { Constants } from '../constants';

const socket = io(Constants.SERVICE_URL, {
  withCredentials: true,
  transports: ['websocket'],
});

const send = () => {
  socket.emit('message', input.value);
  input.value = '';
};

const messages: Ref<string[]> = ref([]);
socket.on('message', (message: string) => messages.value.push(message));

const input = ref('');
</script>

<template>
  <TextInput v-model="input" />
  <Button display="Send" @onClick="send" />
  <h2 class="text-lg underline">Messages</h2>
  <ul class="flex flex-col-reverse">
    <li v-for="message in messages">{{ message }}</li>
  </ul>
</template>
