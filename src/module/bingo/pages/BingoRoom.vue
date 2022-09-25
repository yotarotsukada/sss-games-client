<script setup lang="ts">
import Button from '@/components/Button.vue';
import TextInput from '@/components/TextInput.vue';
import { CreateCardArgs } from '@/types';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useCreateCard, useFetchOneRoom } from '../api';
import BingoCard from '../components/BingoCard.vue';

const route = useRoute();
const roomId = route.params.id as string;
const { isLoading, data: room, refetch } = useFetchOneRoom(roomId);
const { isError, data: res, mutate } = useCreateCard();

const password = ref('');

const join = () => {
  const needsPassword = !!room.value?.password;
  if (needsPassword && password.value === '') {
    return alert('Need to enter password');
  }

  const args: CreateCardArgs = {
    password: needsPassword ? password.value : undefined,
  };
  mutate(args);
};
</script>

<template>
  <h2 class="text-lg underline">Bingo Room</h2>
  <p>room info</p>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="room">
    <ul>
      <li>ID: {{ room.id }}</li>
      <li>Room Name: {{ room.name }}</li>
      <li>Owner: {{ room.ownerId }}</li>
    </ul>
  </div>
  <div v-if="res">
    <BingoCard :card="res.data" />
  </div>
  <div v-else>
    <Button display="Join" @click="join" />
    <TextInput v-if="room?.password" v-model="password" />
    <p v-if="isError">Wrong password. Try again.</p>
  </div>
</template>
